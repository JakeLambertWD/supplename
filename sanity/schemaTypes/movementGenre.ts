import { defineField, defineType } from "sanity";

export default defineType({
  name: "movementGenre",
  title: "Movement Genre",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
  ],
});
