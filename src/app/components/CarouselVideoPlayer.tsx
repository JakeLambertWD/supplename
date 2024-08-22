import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function CarouselVideoPlayer({ featuredWork, nextVideo, ref }: any) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    featuredWork?.videoURL && (
      <motion.video
        key={featuredWork?.videoURL}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          y: backgroundY,
          opacity: nextVideo ? 0 : 1,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <source src={featuredWork?.videoURL} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>
    )
  );
}

export default CarouselVideoPlayer;
