import { defineField, defineType } from "sanity";

export default defineType({
  name: "work",
  title: "Work",
  type: "document",
  fields: [
    defineField({
      name: "client",
      title: "Client",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "youtubeID",
      title: "YouTube ID",
      type: "string",
    }),
    defineField({
      name: "tileImage",
      title: "Tile Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "projectGenre",
      title: "Project Genre",
      type: "reference",
      to: { type: "genre" },
    }),
  ],
});
