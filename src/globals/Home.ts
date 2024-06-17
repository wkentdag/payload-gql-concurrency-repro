import { GlobalConfig } from "payload/types";

const Home: GlobalConfig = {
  slug: "home",
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: "top_right_featured",
      label: "Top Right Featured",
      type: "relationship",
      hasMany: true,
      relationTo: ["articles"],
      admin: {
        isSortable: true,
      },
    },
  ],
};

export default Home;
