import FormSlot from "@/components/dashboard/slots/form";
import { getUuid } from "@/lib/hash";
import { buildProductDetailMetadata } from "@/lib/product-detail";
import {
  findProductByName,
  insertProduct,
  ProductStatus,
} from "@/models/product";
import { getProductCategories } from "@/models/product-category";
import type { Form as FormSlotType } from "@/types/slots/form";

export default async function AddProductPage() {
  const categories = await getProductCategories({
    page: 1,
    limit: 100,
  });

  const form: FormSlotType = {
    title: "Add Product",
    crumb: {
      items: [
        {
          title: "Products",
          url: "/admin/products",
        },
        {
          title: "Add Product",
          is_active: true,
        },
      ],
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
        value: "",
      },
      {
        name: "status",
        title: "Status",
        type: "select",
        options: Object.values(ProductStatus).map((status: string) => ({
          title: status,
          value: status,
        })),
        value: ProductStatus.Online,
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
        value: "Product Highlights",
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
        if (existProduct) {
          throw new Error("product with same name already exists");
        }

        const sort = sortStr ? Number.parseInt(sortStr, 10) : 0;
        const metadata = buildProductDetailMetadata({
          galleryUrls: data.get("galleryUrls") as string,
          characteristicsTitle: data.get("characteristicsTitle") as string,
          characteristics: data.get("characteristics") as string,
          specifications: data.get("specifications") as string,
          applications: data.get("applications") as string,
          datasheetUrl: data.get("datasheetUrl") as string,
          additionalMetadata: data.get("additionalMetadata") as string,
        });

        const product = {
          uuid: getUuid(),
          createdAt: new Date(),
          status: status as ProductStatus,
          name,
          title,
          description: description || undefined,
          categoryUuid: categoryUuid || undefined,
          coverUrl: coverUrl.trim(),
          sort: Number.isNaN(sort) ? 0 : sort,
          metadata,
        };

        try {
          await insertProduct(product);

          return {
            status: "success",
            message: "Product added",
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
