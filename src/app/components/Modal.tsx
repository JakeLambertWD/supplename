import {
  Badge,
  Divider,
  Flex,
  Group,
  Modal as MantineModal,
  ScrollArea,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import { theme } from "../utils/theme";
import classes from "../components/css/Project.module.css";
import { IconChevronLeft, IconChevronRight, IconX } from "@tabler/icons-react";
import Dropdown from "./Dropdown";
import VideoPlayer from "./VideoPlayer";
import { FooterSocial } from "./Footer";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

function Modal({
  modalOpened,
  modalClose,
  worksByGenre,
  activeWork,
  setActiveWork,
}: {
  modalOpened: boolean;
  modalClose: () => void;
  worksByGenre: any;
  activeWork: number;
  setActiveWork: (index: number) => void;
}) {
  const [activeWorkImage, setActiveWorkImage] = useState(0);
  const [opened, { open, close }] = useDisclosure(false);
  const work = worksByGenre[activeWork];

  // split the overview into paragraphs
  const paragraphs = work.overview
    .split("\n")
    .filter((paragraph: string) => paragraph.trim() !== "");

  const nextWork = () => {
    if (activeWork < worksByGenre.length - 1) {
      setActiveWork(activeWork + 1);
    } else {
      setActiveWork(0);
    }
  };

  const prevWork = () => {
    if (activeWork > 0) {
      setActiveWork(activeWork - 1);
    } else {
      setActiveWork(worksByGenre.length - 1);
    }
  };

  return (
    <MantineModal
      opened={modalOpened}
      onClose={modalClose}
      fullScreen
      size="100vw"
      radius={0}
      p={0}
      overlayProps={{
        backgroundOpacity: 0,
        blur: 0,
      }}
      classNames={{
        content: classes.content,
        header: classes.header,
        body: classes.body,
        inner: classes.inner,
        close: classes.close,
      }}
      transitionProps={{
        transition: "fade",
        duration: 600,
        timingFunction: "linear",
      }}
      closeButtonProps={{
        icon: <IconX size={40} stroke={1.5} />,
      }}
    >
      <div style={{ height: "92vh" }}>
        <Dropdown />
        <Flex h="60%" py={0} px={100} c="white">
          <IconChevronLeft
            size={40}
            color={"white"}
            onClick={() => prevWork()}
            strokeWidth={1.5}
            style={{ cursor: "pointer", marginRight: 20 }}
          />

          <Flex
            w="70%"
            mr="xl"
            pos="relative"
            style={{
              borderLeft: "2px solid black",
              borderColor: theme?.colors?.primary?.[1],
            }}
          >
            <VideoPlayer source={work.videoURL} />

            <Text fz="xl" pos="absolute" top={20} left={50}>
              {work.description}
            </Text>

            {work.movementGenres && (
              <Group fz="xs" pos="absolute" bottom={20} right={20}>
                {work.movementGenres.map((genre: any, index: number) => {
                  return (
                    <Badge
                      key={index}
                      color={theme?.colors?.primary?.[1]}
                      tt="capitalize"
                      size="md"
                    >
                      {genre.name}
                    </Badge>
                  );
                })}
              </Group>
            )}
          </Flex>

          <Stack w="30%">
            <Divider size="sm" mb={0} color={theme?.colors?.primary?.[1]} />
            <Text fz="xl">{work.client}</Text>

            {work.team && (
              <Group gap={10}>
                {work.team.map((member: any, index: number) => (
                  <Group key={index}>
                    <Text fz="11px" fw={600}>
                      <span style={{ opacity: 0.5, fontStyle: "italic" }}>
                        {member.role}: &nbsp;
                      </span>
                      {member.name}
                    </Text>
                  </Group>
                ))}
              </Group>
            )}

            <ScrollArea
              classNames={classes}
              h="100%"
              offsetScrollbars
              scrollbarSize={1}
              scrollHideDelay={0}
              fz="sm"
              pr="sm"
            >
              {paragraphs.map((paragraph: string, index: number) => (
                <p key={index} style={{ marginBottom: "1em" }}>
                  {paragraph}
                </p>
              ))}
            </ScrollArea>
          </Stack>
          <IconChevronRight
            size={40}
            color={"white"}
            onClick={() => nextWork()}
            strokeWidth={1.5}
            style={{ cursor: "pointer", marginLeft: 20 }}
          />
        </Flex>

        <Group
          mt={30}
          justify="center"
          // h="30%"
          pt={0}
          // wrap="nowrap"
          style={
            {
              // overflowX: "auto",
              // scrollbarWidth: "none",
              // msOverflowStyle: "none",
              // WebkitOverflowScrolling: "touch",
            }
          }
        >
          {work.workImages?.map((image: any, index: number) => (
            <>
              <img
                key={index}
                onClick={() => {
                  open();
                  setActiveWorkImage(index);
                }}
                src={image.asset.url}
                width={330}
                height={170}
                alt={image.alt}
              />

              <MantineModal
                opened={opened}
                onClose={close}
                fullScreen
                classNames={{
                  content: classes.customModal,
                  header: classes.customModal,
                }}
              >
                <Group w="100%" h="100%" align="center" justify="center">
                  <IconChevronLeft
                    size={40}
                    color="white"
                    onClick={close}
                    style={{ cursor: "pointer" }}
                  />
                  <img
                    key={index}
                    src={work.workImages[activeWorkImage].asset.url}
                    width={"90%"}
                    alt={image.alt}
                  />
                  <IconChevronRight
                    size={40}
                    color="white"
                    onClick={close}
                    style={{ cursor: "pointer" }}
                  />
                </Group>
              </MantineModal>
            </>
          ))}
        </Group>
        <FooterSocial />
        <Space h={50} />
      </div>
    </MantineModal>
  );
}

export default Modal;
