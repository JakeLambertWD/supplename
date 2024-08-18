function VideoPlayer({ source }: { source: string }) {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    >
      <source src={source} type="video/mp4" />
    </video>
  );
}

export default VideoPlayer;
