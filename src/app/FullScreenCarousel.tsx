import Image from "next/image";
import videoCamera from "/public/video-outside.jpg";
import { Overlay } from "@mantine/core";

function FullScreenCarousel() {
  return (
    <>
      <Image
        src={videoCamera}
        alt="Picture of the author"
        sizes="100vw"
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          objectPosition: "center",
          position: "absolute",
          zIndex: 1,
        }}
      />
      <Overlay
        color="#0b0f19"
        backgroundOpacity={0.7}
        pos="absolute"
        style={{ zIndex: 1 }}
      />
    </>
  );
}

export default FullScreenCarousel;
