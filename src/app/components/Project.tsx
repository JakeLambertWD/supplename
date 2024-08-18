import { Card, Flex, Group, HoverCard, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { motion } from "framer-motion";
import {
  IconBadge4k,
  IconPlayerPlayFilled,
  IconTrophy,
} from "@tabler/icons-react";
import Modal from "./Modal";

function Project({
  work,
  workIndex,
  activeWork,
  setActiveWork,
  worksByGenre,
}: any) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <HoverCard
        width={280}
        shadow="xl"
        openDelay={400}
        offset={-320}
        position="bottom"
        radius={4}
      >
        <HoverCard.Target>
          <Card
            shadow="xl"
            p={0}
            radius={0}
            w={300}
            h={300}
            pos="relative"
            onClick={() => {
              setActiveWork(workIndex);
              window.scrollTo({ top: 190, behavior: "smooth" });
              open();
            }}
            style={{ cursor: "pointer" }}
          >
            <motion.img
              src={work.tileImage}
              alt="Norway"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </Card>
        </HoverCard.Target>
        <HoverCard.Dropdown
          bg="#181818"
          w={350}
          h={350}
          p={0}
          onClick={() => {
            setActiveWork(workIndex);
            window.scrollTo({ top: 190, behavior: "smooth" });
            open();
          }}
          style={{ border: "none", zIndex: 10, cursor: "pointer" }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
            }}
          >
            <source
              src={
                "https://cdn.sanity.io/files/0s60p7qc/suppledb/a2dc5a480192216464712651ccdedc7ed50e7585.mp4"
              }
              type="video/mp4"
            />
          </video>

          <Stack gap={0} px="lg">
            <Group justify="space-between">
              <Text c="#bcbcbc">{work.client}</Text>
              <IconPlayerPlayFilled
                size={25}
                color="#bcbcbc"
                style={{ marginTop: 10 }}
              />
            </Group>
            <Group
              wrap="nowrap"
              style={{ overflowX: "auto", scrollbarWidth: "none" }}
            >
              <Text
                fz="xl"
                c="#bcbcbc"
                mb="xs"
                style={{ whiteSpace: "nowrap" }}
              >
                {work.description}
              </Text>
              <IconBadge4k
                size={25}
                color="white"
                strokeWidth={0.6}
                style={{ marginBottom: 8 }}
              />
            </Group>

            <IconTrophy size={19} strokeWidth={0.8} color="orange" />

            <Flex
              gap={10}
              mt="xs"
              wrap="nowrap"
              w={310}
              style={{ overflowX: "auto", scrollbarWidth: "none" }}
            >
              {work.movementGenres.map((genre: any, index: number) => {
                return (
                  <Group key={index} gap={10} wrap="nowrap">
                    <Text fz="md" c="white" style={{ whiteSpace: "nowrap" }}>
                      {genre.name}
                    </Text>

                    {index !== work.movementGenres.length - 1 && (
                      <Text c="#bcbcbc">-</Text>
                    )}
                  </Group>
                );
              })}
            </Flex>
          </Stack>
        </HoverCard.Dropdown>
      </HoverCard>

      <Modal
        modalOpened={opened}
        close={close}
        activeWork={activeWork}
        setActiveWork={setActiveWork}
        worksByGenre={worksByGenre}
      />
    </>
  );
}

export default Project;
