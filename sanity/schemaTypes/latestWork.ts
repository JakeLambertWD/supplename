import { defineField, defineType } from "sanity";

export default defineType({
  name: "latestWork",
  title: "LatestWork",
  type: "document",
  fields: [
    defineField({
      name: "client",
      title: "Client",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
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
      name: "video",
      title: "Video",
      type: "file",
      options: {
        accept: "video/*",
      },
    }),
  ],
});
