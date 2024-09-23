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
      name: "overview",
      title: "Overview",
      type: "text",
      rows: 10,
    }),
    defineField({
      name: "video",
      title: "Video",
      type: "file",
      options: {
        accept: "video/*",
      },
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
    defineField({
      name: "movementGenres",
      title: "Movement Genres",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "movementGenre" },
        },
      ],
    }),
    defineField({
      name: "team",
      title: "Team",
      type: "array",
      of: [{ type: "teamMember" }],
    }),
    defineField({
      name: "workImages",
      type: "array",
      title: "Images",
      of: [{ type: "workImage" }],
    }),
    defineField({
      name: "award",
      title: "Award",
      type: "array",
      of: [{ type: "awards" }],
    }),
    defineField({
      name: "startTime",
      title: "Start Time",
      type: "number",
      description: "Start time of the video in seconds",
    }),
  ],
});
