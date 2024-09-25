import { defineField, defineType } from "sanity";

export default defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    defineField({
      name: "role",
      type: "string",
      title: "Role",
    }),
    defineField({
      name: "name",
      type: "string",
      title: "Name",
    }),
  ],
});
