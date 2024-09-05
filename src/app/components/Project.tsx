import { Card, Flex, Group, HoverCard, Stack, Text } from "@mantine/core";
import { motion } from "framer-motion";
import {
  IconBadge4k,
  IconPlayerPlayFilled,
  IconTrophy,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useFormattedDescription, useIsSM } from "../../../hooks/hooks";

function Project({ work }: any) {
  const router = useRouter();
  const workDescription = useFormattedDescription(work);
  const isSM = useIsSM();

  return (
    <>
      {!isSM ? (
        <HoverCard
          width={280}
          shadow="xl"
          openDelay={400}
          offset={-320}
          position="bottom"
          radius={4}
          transitionProps={{ duration: 500, transition: "pop" }}
        >
          <HoverCard.Target>
            <Card
              shadow="xl"
              p={0}
              radius={0}
              w={{ base: "100%", sm: 300 }}
              h={{ base: "auto", sm: 300 }}
              pos="relative"
              onClick={() => {
                router.push(`/works/${workDescription}`);
              }}
              style={{ cursor: "pointer" }}
            >
              <motion.img
                src={work.tileImage}
                alt="Image"
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
              router.push(`/works/${workDescription}`);
            }}
            style={{ border: "none", zIndex: 10, cursor: "pointer" }}
          >
            {work.videoURL ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                style={{
                  width: "100%",
                }}
              >
                <source src={work.videoURL} type="video/mp4" />
              </video>
            ) : (
              <motion.img
                src={work.tileImage}
                alt="Image"
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                  width: 350,
                  height: 200,
                }}
              />
            )}

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

              {
                // @ts-ignore
                work.award && (
                  <IconTrophy size={19} strokeWidth={0.8} color="orange" />
                )
              }

              <Flex
                gap={10}
                mt="xs"
                w={310}
                wrap="nowrap"
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
      ) : (
        <Card
          shadow="xl"
          p={0}
          radius={0}
          w={{ base: "100%", sm: 300 }}
          h={{ base: "auto", sm: 300 }}
          pos="relative"
          onClick={() => {
            router.push(`/works/${workDescription}`);
          }}
          style={{ cursor: "pointer" }}
        >
          <motion.img
            src={work.tileImage}
            alt="Image"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </Card>
      )}
    </>
  );
}

export default Project;
