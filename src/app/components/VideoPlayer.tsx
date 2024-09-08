function VideoPlayer({ source }: { source: string }) {
  return (
    <video
      key={source}
      autoPlay
      loop
      muted
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
}

export default VideoPlayer;
