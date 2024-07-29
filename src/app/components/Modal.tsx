import {
  Badge,
  Divider,
  Flex,
  Group,
  Modal as MantineModal,
  ScrollArea,
  Stack,
  Text,
} from "@mantine/core";
import { theme } from "../utils/theme";
import classes from "../components/css/Project.module.css";
import Image from "next/image";
import bgImage from "/public/sparklers.jpg";
import { IconX } from "@tabler/icons-react";

function Modal({
  opened,
  close,
  client,
  description,
  team,
  movementGenres,
  overview,
  workImages,
}: {
  opened: boolean;
  close: () => void;
  client: string;
  description: string;
  team: { role: string; name: string }[];
  movementGenres: string[];
  overview: string;
  workImages: { asset: { url: string }; alt: string }[];
}) {
  return (
    <MantineModal
      opened={opened}
      onClose={close}
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
        <Flex h="65%" py={0} px={100} c="white">
          <Flex
            w="70%"
            mr="xl"
            pos="relative"
            style={{
              borderLeft: "2px solid black",
              borderColor: theme?.colors?.primary?.[1],
            }}
          >
            <Image
              src={bgImage}
              style={{ height: "auto", width: "100%" }}
              alt="test"
            />
            <Text fz="xl" pos="absolute" top={20} left={50}>
              {description}
            </Text>
            {movementGenres && (
              <Group fz="xs" pos="absolute" bottom={20} right={20}>
                {movementGenres.map((genre: any, index) => {
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
            <Text fz="xl">{client}</Text>

            {team && (
              <Group gap={10}>
                {team.map((member, index) => (
                  <Group key={index}>
                    <Text fz="11px" fw={600}>
                      <span style={{ opacity: 0.5, fontStyle: "italic" }}>
                        {member.role}:
                      </span>{" "}
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
              mt="sm"
            >
              {overview}
            </ScrollArea>
          </Stack>
        </Flex>

        <Group
          h="35%"
          pt={45}
          wrap="nowrap"
          style={{
            overflowX: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            // "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {workImages?.map((image, index) => (
            <Image
              key={index}
              src={image.asset.url}
              width={200}
              height={100}
              // style={{ height: "auto", width: "22%" }}
              alt={image.alt}
            />
          ))}
          <Image
            src={bgImage}
            style={{ height: "auto", width: "22%" }}
            alt="test"
          />
          <Image
            src={bgImage}
            style={{ height: "auto", width: "22%" }}
            alt="test"
          />
          <Image
            src={bgImage}
            style={{ height: "auto", width: "22%" }}
            alt="test"
          />
          <Image
            src={bgImage}
            style={{ height: "auto", width: "22%" }}
            alt="test"
          />
          <Image
            src={bgImage}
            style={{ height: "auto", width: "22%" }}
            alt="test"
          />
        </Group>
      </div>
    </MantineModal>
  );
}

export default Modal;
