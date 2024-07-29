import { defineField, defineType } from "sanity";

export default defineType({
  name: "teamMember",
  type: "object",
  title: "Team Member",
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
