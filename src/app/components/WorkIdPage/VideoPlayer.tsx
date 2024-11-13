import { useImperativeHandle, useRef, forwardRef } from "react";

const VideoPlayer = forwardRef(({ source }: { source: string }, ref) => {
  // this ref is used to pause the video
  const videoRef = useRef<HTMLVideoElement>(null);
  useImperativeHandle(ref, () => ({
    pause() {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    },
  }));

  return (
    <video
      key={source}
      ref={videoRef}
      autoPlay
      loop
      playsInline
      controls
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    >
      <source src={source} type="video/mp4" />
    </video>
  );
});

export default VideoPlayer;
