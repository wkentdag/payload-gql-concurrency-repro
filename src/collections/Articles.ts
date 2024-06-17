import { CollectionConfig } from "payload/types";

export const getArticleUrl = ({ post_type, slug }: Record<string, unknown>) =>
  `/${(post_type as string).replace("_", "-")}/${slug}`;

const Articles: CollectionConfig = {
  slug: "articles",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "contributors", "_status"],
  },
  defaultSort: "-created_at",
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      unique: true,
      index: true,
    },
    {
      name: "contributors",
      type: "relationship",
      relationTo: "contributors",
      hasMany: true,
    },
  ],
};

export default Articles;
