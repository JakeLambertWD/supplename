import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function CarouselVideoPlayer({ featuredWork, nextVideo, ref }: any) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const videoRef = useRef<HTMLVideoElement>(null);
  const preloadRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && featuredWork?.videoURL) {
      videoRef.current.currentTime = featuredWork.startTime; // Set the start time in seconds
    }
  }, [featuredWork]);

  useEffect(() => {
    if (preloadRef.current && nextVideo) {
      preloadRef.current.load();
    }
  }, [nextVideo]);

  return (
    <>
      {featuredWork?.videoURL && (
        <motion.video
          key={featuredWork?.videoURL}
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
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
      )}

      {nextVideo && (
        <video ref={preloadRef} style={{ display: "none" }} preload="auto">
          <source src={nextVideo} type="video/mp4" />
        </video>
      )}
    </>
  );
}

export default CarouselVideoPlayer;
