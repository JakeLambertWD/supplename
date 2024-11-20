import { useState, useEffect, useRef } from "react";

export const useVideoPlayback = (videoURL: string) => {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleCanPlayThrough = () => {
    setIsVideoReady(true);
  };

  return {
    videoRef,
    isVideoReady,
    handleCanPlayThrough,
  };
};
