"use client";

import Image from "next/image";
import videoCamera from "/public/video-outside.jpg";
import videoRed from "/public/video-red.jpg";

export default function Home() {
  return (
    <Image
      src={videoCamera}
      alt="Picture of the author"
      sizes="100vw"
      style={{
        width: "100vw", // Adjust width to 100vw to ensure it scales with the viewport width
        height: "100vh", // Set height to 100vh to always take up full screen height
        objectFit: "cover", // Ensure the image covers the available space without distortion
        objectPosition: "center", // Keep the image centered
      }}
    />
  );
}
