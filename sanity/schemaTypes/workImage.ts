import { defineField, defineType } from "sanity";

export default defineType({
  name: "workImage",
  type: "image",
  title: "Work Image",
  fields: [
    defineField({
      name: "alt",
      type: "string",
      title: "Alternative Text",
      description: "Description of the image for accessibility and SEO",
    }),
  ],
  options: {
    hotspot: true, // Enable the hotspot feature for image cropping
  },
});
