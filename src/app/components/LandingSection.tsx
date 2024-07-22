import { Button, Center, Group, Modal, Stack, Text } from "@mantine/core";
import { theme } from "../utils/theme";
import { client } from "../lib/sanity";
import { Anton } from "next/font/google";
import { useDisclosure } from "@mantine/hooks";
import classes from "../components/css/Project.module.css";
import YouTube from "react-youtube";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

// async function getData() {
//   const query = `*[_type == "pageInfo"]{
//    ...
//  }`;

//   const data = await client.fetch(query);

//   return data;
// }

// TODO: this function is suppose to have an async for Sanity purposes
export default function LandingSection() {
  const [opened, { open, close }] = useDisclosure(false);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
      controls: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      vq: "highres",
    },
  };

  const onReady = (event: any) => {
    event.target.playVideo();
  };

  // const data = await getData();
  // const { name, description, carouselImage } = data[0];

  return (
    <>
      <Center h="100vh" w="100%" pos="absolute" top={0}>
        <Stack
          c="white"
          p={{ base: 0, xl: 50 }}
          w={{ base: "85%" }}
          style={{ zIndex: 7 }}
        >
          <Text fz={14} mb={5}>
            CHOREOGRAPHER - DIRECTOR
          </Text>
          <Group>
            {/* TODO: when user clicks button show a thumbs up emoji */}
            <Button
              color={theme.colors?.primary?.[1]}
              size="md"
              onClick={() =>
                window.open(
                  "https://supplenam.com/contenido/uploads/2018/08/Supple-Nam-CV-Web-2018-1.pdf"
                )
              }
            >
              My CV
            </Button>
            <Button onClick={open} variant="outline" color="white" size="md">
              Show Reel
            </Button>
          </Group>
        </Stack>
      </Center>

      <Modal
        opened={opened}
        onClose={close}
        fullScreen
        radius={0}
        classNames={{
          content: classes.content,
          header: classes.header,
        }}
        transitionProps={{ transition: "fade", duration: 500 }}
      >
        <div className={classes.videoResponsive}>
          <YouTube videoId="8nssMbahow0" opts={opts} onReady={onReady} />
        </div>
      </Modal>
    </>
  );
}
