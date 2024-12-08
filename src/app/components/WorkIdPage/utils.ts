import { opts } from "@/app/utils/constants";
import { useRef } from "react";

// split the overview into paragraphs
export const splitOverviewIntoParagraphs = (overview: string | undefined) =>
  overview
    ? overview
        .split("\n")
        .filter((paragraph: string) => paragraph.trim() !== "")
    : [];

// this ensure the YouTube video player is responsive
export const responsiveOpts = {
  ...opts,
  width: "100%",
  height: "100%",
};
