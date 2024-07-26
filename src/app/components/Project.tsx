import {
  Badge,
  Card,
  Divider,
  Flex,
  Group,
  Modal,
  ScrollArea,
  Stack,
  Text,
} from "@mantine/core";
import { useDisclosure, useHover } from "@mantine/hooks";
import { motion } from "framer-motion";
import classes from "../components/css/Project.module.css";
import Image from "next/image";
import bgImage from "/public/sparklers.jpg";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import { theme } from "../utils/theme";
import { WorksProps } from "../utils/typings";

function Project({ work }: any) {
  const { hovered, ref } = useHover();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Card
        ref={ref}
        onClick={open}
        shadow="xl"
        p={0}
        radius={0}
        w={300}
        h={300}
        pos="relative"
        style={{ cursor: "pointer" }}
      >
        <motion.img
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 5 }}
          src={work.tileImage}
          alt="Norway"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              width: "100%",
              position: "absolute",
              color: "white",
              top: 0,
              background: "rgba(0, 0, 0, 0.7)",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "16px" }}>{work.client}</p>
          </motion.div>
        )}

        {hovered && (
          <IconPlayerPlayFilled
            color="white"
            style={{ position: "absolute", bottom: 20, right: 20 }}
          />
        )}
      </Card>

      <Modal
        opened={opened}
        onClose={close}
        fullScreen
        radius={0}
        p={0}
        classNames={{
          content: classes.content,
          header: classes.header,
          body: classes.body,
        }}
        transitionProps={{ transition: "fade", duration: 500 }}
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
                // paddingLeft: 30,
              }}
            >
              <Image
                src={bgImage}
                style={{ height: "auto", width: "100%" }}
                alt="test"
              />

              <Text fz="xl" pos="absolute" top={20} left={50}>
                Mars Delight Kung Fu
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
              <Divider size="sm" mb="md" color={theme?.colors?.primary?.[1]} />

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
                main actor and choreographer, Supple also took on the challenge
                of learning to make a poodle out of a balloon to make the shot
                easier to edit and look authentic. Using his martial arts and
                stage fighting background, Supple rehearsed the cast and himself
                off set the day before the shoot, to present the choreography on
                the day of shoot.
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
      </Modal>
    </>
  );
}

export default Project;
