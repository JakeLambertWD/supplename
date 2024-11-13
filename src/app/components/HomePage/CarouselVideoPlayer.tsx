import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function CarouselVideoPlayer({ featuredWork, nextVideo, ref }: any) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const videoRef = useRef<HTMLVideoElement>(null);
  const preloadRef = useRef<HTMLVideoElement>(null);
  const [isNextVideoReady, setIsNextVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video && featuredWork?.videoURL) {
      video.currentTime = featuredWork.startTime || 0; // Set the start time in seconds
      const handleTimeUpdate = () => {
        if (video.currentTime >= (featuredWork.startTime || 0) + 15) {
          video.pause(); // Pause the video after 15 seconds
        }
      };
      video.addEventListener("timeupdate", handleTimeUpdate);
      return () => {
        video.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [featuredWork]);

  useEffect(() => {
    if (preloadRef.current && nextVideo) {
      preloadRef.current.load();
      preloadRef.current.oncanplaythrough = () => {
        setIsNextVideoReady(true);
      };
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
            y: backgroundY,
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
