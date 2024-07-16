import { Flex, Space, Text } from "@mantine/core";
import { IconArrowMoveDown } from "@tabler/icons-react";
import YouTube from "react-youtube";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

function ShowReel() {
  const opts = {
    height: "500",
    width: "889",
    playerVars: {
      autoplay: 1,
      controls: 0, // Hide controls
      modestbranding: 1, // Limit YouTube branding
      rel: 0, // Do not show related videos at the end
      showinfo: 0, // Deprecated, but intended to hide video info
    },
  };

  return (
    <Flex
      h="65vh"
      w="100%"
      justify="center"
      align="flex-end"
      // bg="#060e11"
      c="white"
    >
      {/* <Text
        ta="center"
        w="100%"
        h="fit-content"
        fz={35}
        mt={70}
        mb="sm"
        className={anton.className}
      >
        Showreel
      </Text>
      <IconArrowMoveDown
        strokeWidth={0.4}
        size={40}
        style={{ marginBottom: 60 }}
      /> */}

      <YouTube videoId="8nssMbahow0" opts={opts} />
    </Flex>
  );
}

export default ShowReel;
