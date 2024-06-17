import { CollectionConfig } from "payload/types";

const Contributors: CollectionConfig = {
  slug: "contributors",
  auth: false,
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name"],
  },
  defaultSort: "name",
  fields: [
    {
      name: "name",
      type: "text",
      unique: true,
      required: true,
    },
  ],
};

export default Contributors;
