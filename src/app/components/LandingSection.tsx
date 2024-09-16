import { useState } from "react";
import { Button, Center, Group, Modal, Stack, Text } from "@mantine/core";
import { theme } from "../utils/theme";
import { useDisclosure } from "@mantine/hooks";
import classes from "../components/css/Project.module.css";
import YouTube from "react-youtube";
import { opts } from "../utils/constants";
import { useVideoReady } from "../../../hooks/useVideoReady";

export default function LandingSection({ jobTitle }: { jobTitle: string }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [buttonContent, setButtonContent] = useState("My CV");
  const { onReady } = useVideoReady();

  return (
    <>
      <Center
        h="100vh"
        w="100%"
        pos="absolute"
        top={0}
        style={{ zIndex: 3 }}
        bg={theme.colors?.primary?.[9]}
      >
        <Stack
          c="white"
          p={{ base: 0, xl: 50 }}
          w={{ base: "85%" }}
          style={{ zIndex: 7 }}
        >
          <Text fz={14} mb={5}>
            {jobTitle}
          </Text>
          <Group>
            <Button
              color={theme.colors?.primary?.[1]}
              size="md"
              w={120}
              onClick={() => {
                window.open(
                  "https://supplenam.com/contenido/uploads/2018/08/Supple-Nam-CV-Web-2018-1.pdf"
                );
                setButtonContent("👍");
              }}
            >
              {buttonContent}
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
          close: classes.close,
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
