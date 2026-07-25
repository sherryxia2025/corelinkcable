"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MessageSquareText, Phone } from "lucide-react";
import { useState } from "react";
import { type Control, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactConfig } from "./contact-config";

const formSchema = z.object({
  name: z.string().min(1, contactConfig.formFields.name.error),
  email: z.email(contactConfig.formFields.email.error),
  contactNumber: z
    .string()
    .min(1, contactConfig.formFields.contactNumber.error),
  subject: z.string().min(1, contactConfig.formFields.subject.error),
  message: z.string().min(1, contactConfig.formFields.message.error),
});

type FormData = z.infer<typeof formSchema>;

const fieldClassName =
  "h-12 rounded-none border-[#cfd7e1] bg-white px-4 text-sm text-[#0b1c2e] shadow-none placeholder:text-[#8a96a5] focus-visible:border-[#1268e8] focus-visible:ring-1 focus-visible:ring-[#1268e8]";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      contactNumber: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || contactConfig.messages.error);
      }

      toast.success(contactConfig.messages.success);
      form.reset();
    } catch (error) {
      console.error("Contact form submission error:", error);
      toast.error(
        error instanceof Error ? error.message : contactConfig.messages.error,
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto grid gap-0 px-4 md:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
        <aside className="bg-[#071524] p-7 text-white md:p-10">
          <p className="text-[10px] font-bold tracking-[0.2em] text-[#64a3ff]">
            DIRECT CONTACT
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.02em]">
            Talk to the project team.
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/58">
            Include the application, environment, expected quantities, and
            target date. Technical detail helps us respond with a clearer path.
          </p>

          <div className="mt-9 border-t border-white/16">
            <ContactMethod
              icon={<Mail className="h-5 w-5" />}
              label={contactConfig.contactMethods.email.title}
              value={contactConfig.contactMethods.email.value}
              href={`mailto:${contactConfig.contactMethods.email.value}`}
            />
            <ContactMethod
              icon={<Phone className="h-5 w-5" />}
              label={contactConfig.contactMethods.phone.title}
              value={contactConfig.contactMethods.phone.value}
              href={`tel:${contactConfig.contactMethods.phone.value.replace(/\s/g, "")}`}
            />
            <ContactMethod
              icon={<MessageSquareText className="h-5 w-5" />}
              label={contactConfig.contactMethods.whatsapp.title}
              value={contactConfig.contactMethods.whatsapp.value}
              href={`https://wa.me/${contactConfig.contactMethods.whatsapp.value.replace(/\D/g, "")}`}
              external
            />
          </div>

          <div className="mt-9 border-l-2 border-[#1268e8] bg-white/5 px-5 py-4">
            <p className="text-[10px] font-bold tracking-[0.14em] text-white/45">
              USEFUL PROJECT INPUT
            </p>
            <p className="mt-2 text-xs leading-5 text-white/65">
              Product family · environment · distance · fiber count · connector
              type · quantity · schedule
            </p>
          </div>
        </aside>

        <div className="border border-[#d8dee6] bg-[#f4f6f8] p-7 md:p-10 lg:p-12">
          <p className="text-[10px] font-bold tracking-[0.2em] text-[#1268e8]">
            SEND REQUIREMENTS
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.02em]">
            {contactConfig.formTitle}
          </h2>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-8 space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <ContactField
                  control={form.control}
                  name="name"
                  label={contactConfig.formFields.name.label}
                  placeholder={contactConfig.formFields.name.placeholder}
                />
                <ContactField
                  control={form.control}
                  name="email"
                  label={contactConfig.formFields.email.label}
                  placeholder={contactConfig.formFields.email.placeholder}
                  type="email"
                />
                <ContactField
                  control={form.control}
                  name="contactNumber"
                  label={contactConfig.formFields.contactNumber.label}
                  placeholder={
                    contactConfig.formFields.contactNumber.placeholder
                  }
                />
                <ContactField
                  control={form.control}
                  name="subject"
                  label={contactConfig.formFields.subject.label}
                  placeholder={contactConfig.formFields.subject.placeholder}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[11px] font-bold tracking-[0.08em] text-[#334155]">
                      {contactConfig.formFields.message.label}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        rows={7}
                        placeholder={
                          contactConfig.formFields.message.placeholder
                        }
                        className="resize-none rounded-none border-[#cfd7e1] bg-white px-4 py-3 text-sm text-[#0b1c2e] shadow-none placeholder:text-[#8a96a5] focus-visible:border-[#1268e8] focus-visible:ring-1 focus-visible:ring-[#1268e8]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-12 min-w-44 items-center justify-center bg-[#1268e8] px-6 text-[11px] font-bold tracking-[0.12em] text-white transition-colors hover:bg-[#0b4fae] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting
                  ? contactConfig.button.submitting
                  : contactConfig.button.submit}
              </button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}

function ContactMethod({
  icon,
  label,
  value,
  href,
  external = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="grid grid-cols-[32px_1fr] gap-3 border-b border-white/16 py-5 transition-colors hover:text-[#64a3ff]"
    >
      <span className="pt-0.5 text-[#64a3ff]">{icon}</span>
      <span>
        <span className="block text-[10px] font-bold tracking-[0.14em] text-white/40">
          {label.toUpperCase()}
        </span>
        <span className="mt-1 block break-all text-sm text-white/78">
          {value}
        </span>
      </span>
    </a>
  );
}

function ContactField({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: {
  control: Control<FormData>;
  name: "name" | "email" | "contactNumber" | "subject";
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-[11px] font-bold tracking-[0.08em] text-[#334155]">
            {label}
          </FormLabel>
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              className={fieldClassName}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
