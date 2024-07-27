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
}: {
  opened: boolean;
  close: () => void;
  client: string;
  description: string;
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

            <Group fz="xs" pos="absolute" bottom={20} right={20}>
              <Badge
                color={theme?.colors?.primary?.[1]}
                tt="capitalize"
                size="md"
              >
                Contemporary
              </Badge>
              <Badge color={theme?.colors?.primary?.[1]} tt="capitalize">
                Movement Direction
              </Badge>
            </Group>
          </Flex>

          <Stack w="30%">
            <Divider size="sm" mb={0} color={theme?.colors?.primary?.[1]} />
            <Text fz="xl">{client}</Text>

            <Group gap={10}>
              <Group>
                <Text fz="11px" fw={600}>
                  <span style={{ opacity: 0.5, fontStyle: "italic" }}>
                    Choreographer:
                  </span>{" "}
                  Supple Nam
                </Text>
              </Group>
              <Group>
                <Text fz="11px" fw={600}>
                  <span style={{ opacity: 0.5, fontStyle: "italic" }}>
                    Director:
                  </span>{" "}
                  Erik Nilsson & Tomas Skoging
                </Text>
              </Group>
              <Group>
                <Text fz="11px" fw={600}>
                  <span style={{ opacity: 0.5, fontStyle: "italic" }}>
                    Client:
                  </span>{" "}
                  Mars UK
                </Text>
              </Group>
            </Group>

            <ScrollArea
              classNames={classes}
              h="100%"
              offsetScrollbars
              scrollbarSize={1}
              scrollHideDelay={0}
              fz="sm"
              mt="sm"
            >
              When Supple Nam was cast as Bruce Lee for the Mars Delight “Kung
              Fu” advert, little did Production Company ‘Outsider’ know of
              Supple Nam’s choreography bio. The production had not yet
              allocated a choreographer or fight co-ordinator for the shoot.
              Producer Anna Hashmi and directors Erik Nilsson & Tomas Skoging
              turned to Supple to save the commercial. Taking the role of both
              main actor and choreographer, Supple also took on the challenge of
              learning to make a poodle out of a balloon to make the shot easier
              to edit and look authentic. Using his martial arts and stage
              fighting background, Supple rehearsed the cast and himself off set
              the day before the shoot, to present the choreography on the day
              of shoot.
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
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
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
