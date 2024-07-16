import { Box } from "@mantine/core";

function VideoPlayer() {
  return (
    <Box c="white" h="100vh">
      <video
        src="/public/videos/7114934-hd_1920_1080_24fps.mp4"
        autoPlay
        controls
      />
    </Box>
  );
}

export default VideoPlayer;
