import { Card, Flex, Group, HoverCard, Stack, Text } from "@mantine/core";
import { motion } from "framer-motion";
import {
  IconBadge4k,
  IconPlayerPlayFilled,
  IconTrophy,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useFormattedDescription } from "../../../hooks/useFormattedDescription";
import { theme } from "../utils/theme";
import { WorkProps } from "../utils/typings";
import { SM } from "../utils/constants";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import { useGetAwards } from "../../../hooks/getAwards";

interface ProjectProps {
  work: WorkProps;
}

function Work({ work }: ProjectProps) {
  const router = useRouter();
  const workDescription =
    work.description && useFormattedDescription(work.description);
  const isSM = useMediaQuery(`(max-width: ${SM})`);

  const [isVideoReady, setIsVideoReady] = useState(false);

  const { awards } = useGetAwards();

  const handleCanPlayThrough = () => {
    setIsVideoReady(true);
  };

  // Find a matching award based on work description
  const matchingAward = awards.find(
    (award) => award.work.description === work.description
  );

  return (
    <>
      {isSM ? (
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
      ) : (
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
            bg={theme?.colors?.primary?.[8]}
            w={350}
            h={350}
            p={0}
            onClick={() => {
              router.push(`/works/${workDescription}`);
            }}
            style={{ border: "none", zIndex: 10, cursor: "pointer" }}
          >
            {isVideoReady ? (
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

            {/* By preloading the video and ensuring it is ready to play before displaying it, you can prevent the black flash that occurs when the user hovers over the card.  */}
            <video
              style={{ display: "none" }}
              onCanPlayThrough={handleCanPlayThrough}
            >
              <source src={work.videoURL} type="video/mp4" />
            </video>

            <Stack gap={0} px="lg">
              <Group justify="space-between">
                <Text c={theme?.colors?.primary?.[5]}>{work.client}</Text>
                <IconPlayerPlayFilled
                  size={25}
                  color={theme?.colors?.primary?.[5]}
                  style={{ marginTop: 10 }}
                />
              </Group>
              <Group
                wrap="nowrap"
                style={{ overflowX: "auto", scrollbarWidth: "none" }}
              >
                <Text
                  fz="xl"
                  c={theme?.colors?.primary?.[5]}
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
                matchingAward && (
                  <Group wrap="nowrap">
                    <Text
                      c="orange"
                      fz="xs"
                      w={"auto"}
                      style={{
                        whiteSpace: "nowrap",
                        fontStyle: "italic",
                        overflowX: "scroll",
                        scrollbarWidth: "none",
                      }}
                    >
                      {matchingAward.name}
                    </Text>
                    <IconTrophy
                      size={23}
                      strokeWidth={0.8}
                      color="orange"
                      style={{ marginTop: -5 }}
                    />
                  </Group>
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
                        <Text c={theme?.colors?.primary?.[5]}>-</Text>
                      )}
                    </Group>
                  );
                })}
              </Flex>
            </Stack>
          </HoverCard.Dropdown>
        </HoverCard>
      )}
    </>
  );
}

export default Work;
