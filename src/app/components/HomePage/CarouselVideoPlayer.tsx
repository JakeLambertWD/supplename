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
    if (preloadRef.current && nextVideo) {
      preloadRef.current.load();
      preloadRef.current.oncanplaythrough = () => {
        setIsNextVideoReady(true);
      };
    }
  }, [nextVideo]);

  return (
    <>
      {featuredWork?.videoPreview && (
        <motion.video
          key={featuredWork?.videoPreview}
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
            transition: "ease-in 0.5s",
            y: backgroundY,
          }}
        >
          <source src={featuredWork?.videoPreview} type="video/mp4" />
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
