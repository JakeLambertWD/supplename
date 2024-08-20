import { defineField, defineType } from "sanity";

export default defineType({
  name: "awards",
  title: "Awards",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
    }),
  ],
});
