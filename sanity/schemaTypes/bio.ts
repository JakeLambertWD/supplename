import { defineField, defineType } from "sanity";
import blockContent from "./blockContent";

export default defineType({
  name: "bio",
  title: "Bio",
  type: "document",
  fields: [
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
    }),
  ],
});
