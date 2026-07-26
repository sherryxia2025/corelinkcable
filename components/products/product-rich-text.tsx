import Image from "next/image";
import { createElement, Fragment, type ReactNode } from "react";

interface TiptapMark {
  type?: string;
  attrs?: Record<string, unknown>;
}

interface TiptapNode {
  type?: string;
  text?: string;
  attrs?: Record<string, unknown>;
  marks?: TiptapMark[];
  content?: TiptapNode[];
}

interface ProductRichTextProps {
  content: string;
}

function renderMarks(text: ReactNode, marks: TiptapMark[] = []): ReactNode {
  return marks.reduce<ReactNode>((child, mark, index) => {
    const key = `${mark.type || "mark"}-${index}`;

    switch (mark.type) {
      case "bold":
        return <strong key={key}>{child}</strong>;
      case "italic":
        return <em key={key}>{child}</em>;
      case "strike":
        return <s key={key}>{child}</s>;
      case "underline":
        return <u key={key}>{child}</u>;
      case "code":
        return (
          <code
            key={key}
            className="rounded bg-black/5 px-1.5 py-0.5 font-mono text-[0.9em]"
          >
            {child}
          </code>
        );
      case "link": {
        const href =
          typeof mark.attrs?.href === "string" ? mark.attrs.href : "#";
        return (
          <a
            key={key}
            href={href}
            className="font-medium text-[#6654ef] underline underline-offset-4"
            rel="noreferrer"
          >
            {child}
          </a>
        );
      }
      default:
        return <Fragment key={key}>{child}</Fragment>;
    }
  }, text);
}

function renderNodes(nodes: TiptapNode[] = []): ReactNode[] {
  return nodes.map((node, index) => {
    const key = `${node.type || "node"}-${index}`;
    const children = renderNodes(node.content);

    switch (node.type) {
      case "text":
        return (
          <Fragment key={key}>
            {renderMarks(node.text || "", node.marks)}
          </Fragment>
        );
      case "paragraph":
        return (
          <p key={key} className="leading-8 text-[#555963]">
            {children.length > 0 ? children : <br />}
          </p>
        );
      case "heading": {
        const requestedLevel =
          typeof node.attrs?.level === "number" ? node.attrs.level : 2;
        const level = Math.min(Math.max(requestedLevel, 2), 4);
        const className =
          level === 2
            ? "mt-10 text-3xl font-extrabold tracking-[-0.03em] text-[#11131b]"
            : "mt-8 text-xl font-bold text-[#11131b]";
        return createElement(`h${level}`, { key, className }, children);
      }
      case "bulletList":
        return (
          <ul key={key} className="list-disc space-y-2 pl-6 text-[#555963]">
            {children}
          </ul>
        );
      case "orderedList":
        return (
          <ol key={key} className="list-decimal space-y-2 pl-6 text-[#555963]">
            {children}
          </ol>
        );
      case "listItem":
        return (
          <li key={key} className="pl-1 leading-7">
            {children}
          </li>
        );
      case "blockquote":
        return (
          <blockquote
            key={key}
            className="border-l-4 border-[#7765ff] bg-[#7765ff]/5 px-6 py-4 text-[#454850]"
          >
            {children}
          </blockquote>
        );
      case "hardBreak":
        return <br key={key} />;
      case "horizontalRule":
        return <hr key={key} className="my-10 border-black/10" />;
      case "image": {
        const src = typeof node.attrs?.src === "string" ? node.attrs.src : "";
        const alt = typeof node.attrs?.alt === "string" ? node.attrs.alt : "";
        if (!src) return <Fragment key={key} />;
        return (
          <div
            key={key}
            className="relative my-8 aspect-[16/9] overflow-hidden rounded-md bg-[#f4f5f8]"
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-contain"
            />
          </div>
        );
      }
      case "doc":
        return <Fragment key={key}>{children}</Fragment>;
      default:
        return <Fragment key={key}>{children}</Fragment>;
    }
  });
}

export function ProductRichText({ content }: ProductRichTextProps) {
  if (!content.trim()) return null;

  try {
    const document = JSON.parse(content) as TiptapNode;
    return <div className="space-y-5">{renderNodes([document])}</div>;
  } catch {
    return (
      <div className="space-y-5">
        {content
          .split(/\r?\n\r?\n/)
          .map((paragraph) => paragraph.trim())
          .filter(Boolean)
          .map((paragraph) => (
            <p key={paragraph} className="leading-8 text-[#555963]">
              {paragraph}
            </p>
          ))}
      </div>
    );
  }
}
