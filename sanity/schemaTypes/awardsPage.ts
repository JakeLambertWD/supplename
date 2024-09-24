import { defineField, defineType } from "sanity";

export default defineType({
  name: "awardsPage",
  title: "Awards Page",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
    }),
    defineField({
      name: "work",
      title: "Work",
      type: "reference",
      to: {
        type: "work",
      },
    }),
  ],
});
