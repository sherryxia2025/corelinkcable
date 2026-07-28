import Empty from "@/components/blocks/empty";
import FormSlot from "@/components/dashboard/slots/form";
import {
  buildProductDetailMetadata,
  productDetailToFormData,
} from "@/lib/product-detail";
import {
  findProductByName,
  findProductByUuid,
  ProductStatus,
  updateProduct,
} from "@/models/product";
import { getProductCategories } from "@/models/product-category";
import type { Form as FormSlotType } from "@/types/slots/form";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ uuid: string }>;
}) {
  const { uuid } = await params;

  const product = await findProductByUuid(uuid);
  if (!product) {
    return <Empty message="product not found" />;
  }

  const categories = await getProductCategories({
    page: 1,
    limit: 100,
  });
  const productDetail = productDetailToFormData(product.metadata);

  const form: FormSlotType = {
    title: "Edit Product",
    crumb: {
      items: [
        {
          title: "Products",
          url: "/admin/products",
        },
        {
          title: "Edit Product",
          is_active: true,
        },
      ],
    },
    data: {
      ...product,
      ...productDetail,
    },
    fields: [
      {
        name: "name",
        title: "URL Name",
        type: "text",
        placeholder: "g-657-a2-bending-insensitive-fiber",
        validation: {
          required: true,
        },
        tip: "Use a unique, URL-friendly identifier.",
      },
      {
        name: "title",
        title: "Product Name",
        type: "text",
        placeholder: "G.657.A2 Bending Insensitive Single-Mode Fiber",
        validation: {
          required: true,
        },
      },
      {
        name: "categoryUuid",
        title: "Category",
        type: "select",
        options: categories?.map((category) => ({
          title: category.title,
          value: category.uuid,
        })),
        value: product.categoryUuid || "",
      },
      {
        name: "status",
        title: "Status",
        type: "select",
        options: Object.values(ProductStatus).map((status: string) => ({
          title: status,
          value: status,
        })),
        value: product.status || ProductStatus.Created,
        validation: {
          required: true,
        },
      },
      {
        name: "description",
        title: "Short Description",
        type: "textarea",
        placeholder: "A concise product summary shown on product list cards.",
        attributes: {
          rows: 5,
        },
        tip: "This description is displayed on the product list page.",
      },
      {
        name: "coverUrl",
        title: "Cover Image",
        type: "image-url",
        placeholder: "Upload the required cover image...",
        validation: {
          required: true,
          message: "Cover image is required",
        },
        tip: "Required. The cover image is the first image shown in the product gallery.",
      },
      {
        name: "galleryUrls",
        title: "Candidate Images",
        type: "image-list",
        tip: "Upload optional candidate images. The cover image and these images form the thumbnail gallery.",
      },
      {
        name: "characteristicsTitle",
        title: "Highlights Section Title",
        type: "text",
        placeholder: "Product Highlights",
        tip: "Customize the heading shown above the product highlight list.",
      },
      {
        name: "characteristics",
        title: "Product Highlights",
        type: "textarea",
        placeholder: "One highlight per line",
        attributes: {
          rows: 8,
        },
      },
      {
        name: "detailContent",
        title: "Product Overview",
        type: "editor",
        placeholder: "",
        tip: "Use headings, paragraphs, lists, links, and images for the full product description.",
      },
      {
        name: "specifications",
        title: "Technical Specifications",
        type: "key-value",
        placeholder: "Add specification",
        tip: "Add each specification as a name and value pair.",
      },
      {
        name: "applications",
        title: "Applications",
        type: "textarea",
        placeholder: "One application per line",
        attributes: {
          rows: 6,
        },
      },
      {
        name: "datasheetUrl",
        title: "Datasheet URL",
        type: "url",
        placeholder: "https://...",
      },
      {
        name: "sort",
        title: "Sort",
        type: "number",
        placeholder: "0",
        tip: "Lower numbers appear first",
        value: (product.sort ?? 0).toString(),
      },
      {
        name: "additionalMetadata",
        title: "Additional Metadata",
        type: "key-value",
        placeholder: "Add optional key-value data",
      },
    ],
    submit: {
      button: {
        title: "Submit",
      },
      aiButtons: [
        {
          title: "Generate Cover Image",
          type: "generate-image",
          targetField: "coverUrl",
          variant: "outline",
        },
      ],
      handler: async (data: FormData) => {
        "use server";

        const name = data.get("name") as string;
        const title = data.get("title") as string;
        const categoryUuid = data.get("categoryUuid") as string;
        const status = data.get("status") as string;
        const description = data.get("description") as string;
        const coverUrl = data.get("coverUrl") as string;
        const sortStr = data.get("sort") as string;

        if (
          !name ||
          !name.trim() ||
          !title ||
          !title.trim() ||
          !status ||
          !status.trim() ||
          !coverUrl ||
          !coverUrl.trim()
        ) {
          throw new Error("invalid form data");
        }

        const existProduct = await findProductByName(name);
        if (existProduct && existProduct.uuid !== uuid) {
          throw new Error("product with same name already exists");
        }

        const sort = sortStr ? Number.parseInt(sortStr, 10) : 0;
        const metadata = buildProductDetailMetadata({
          galleryUrls: data.get("galleryUrls") as string,
          characteristicsTitle: data.get("characteristicsTitle") as string,
          characteristics: data.get("characteristics") as string,
          detailContent: data.get("detailContent") as string,
          specifications: data.get("specifications") as string,
          applications: data.get("applications") as string,
          datasheetUrl: data.get("datasheetUrl") as string,
          additionalMetadata: data.get("additionalMetadata") as string,
        });

        const product = {
          name,
          title,
          status: status as ProductStatus,
          description: description || undefined,
          categoryUuid: categoryUuid || undefined,
          coverUrl: coverUrl.trim(),
          sort: Number.isNaN(sort) ? 0 : sort,
          metadata,
        };

        try {
          await updateProduct(uuid, product);

          return {
            status: "success",
            message: "Product updated",
            redirect_url: "/admin/products",
          };
        } catch (err) {
          throw new Error(err instanceof Error ? err.message : "Unknown error");
        }
      },
    },
  };

  return <FormSlot {...form} />;
}
