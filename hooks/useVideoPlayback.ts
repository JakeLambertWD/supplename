import { useState, useEffect, useRef } from "react";

export const useVideoPlayback = (videoURL: string, startTime: number) => {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && videoURL) {
      videoRef.current.currentTime = startTime; // Set the start time in seconds
    }
  }, [videoURL, startTime]);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = startTime || 0; // Set the start time in seconds
    }
  };

  const handleCanPlayThrough = () => {
    setIsVideoReady(true);
  };

  return {
    videoRef,
    isVideoReady,
    handleLoadedMetadata,
    handleCanPlayThrough,
  };
};
