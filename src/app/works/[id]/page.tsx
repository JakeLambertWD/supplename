"use client";

import React, { useEffect, useState } from "react";
import {
  Badge,
  Divider,
  Flex,
  Group,
  ScrollArea,
  Space,
  Stack,
  Text,
  Modal as MantineModal,
} from "@mantine/core";
import YouTube from "react-youtube";
import { useRouter } from "next/navigation";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useRecoilState } from "recoil";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { activeGenreTabState } from "../../../../atoms/atoms";
import { theme } from "../../utils/theme";
import classes from "../../components/css/Project.module.css";
import { getGenres, getWorkByDescription, getWorks } from "../../lib/sanity";
import { GenreProps, WorkProps } from "../../utils/typings";
import { useVideoReady } from "../../../../hooks/useVideoReady";
import { opts, SM } from "@/app/utils/constants";
import NavigationBar from "../../components/NavigationBar";
import VideoPlayer from "../../components/VideoPlayer";
import { FooterSocial } from "../../components/Footer";
import WorksGenreNavigation from "../../components/worksGenreNavigation";

function Work({ params }: { params: { id: string } }) {
  const id = params.id;

  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);
  const isSM = useMediaQuery(`(max-width: ${SM})`);

  // hooks
  const { onReady } = useVideoReady();

  // states
  const [work, setWork] = useState<WorkProps>();
  const [works, setWorks] = useState<WorkProps[]>([]);
  const [genres, setGenres] = useState<GenreProps[]>([]);

  // get active genre tab
  const [activeGenreTab] = useRecoilState(activeGenreTabState);

  // for image modal
  const [activeWorkImage, setActiveWorkImage] = useState(0);

  const currentGenre = work?.projectGenre?.name;

  let worksByGenre = works.filter(
    (item) => item.projectGenre?.name === currentGenre
  );

  // if the genre is awards, filter by award
  if (activeGenreTab === 5) {
    worksByGenre = works.filter((item) => item.award);
  }

  // find the index of the current work within the worksByGenre array
  const currentWorkIndex = worksByGenre.findIndex(
    (item) => item.description === work?.description
  );

  useEffect(() => {
    const fetchData = async () => {
      // fetch all works
      const works = await getWorks();
      setWorks(works);

      // fetch work by description
      const workByDescriptionData = await getWorkByDescription(id);
      setWork(workByDescriptionData[0]);

      // fetch genres
      const genreData = await getGenres();
      genreData.push({ name: "Awards" });
      setGenres(genreData);
    };
    fetchData();
  }, [id]);

  // next
  const nextWork = () => {
    if (worksByGenre.length > 0) {
      const nextIndex = (currentWorkIndex + 1) % worksByGenre.length;
      const nextWork = worksByGenre[nextIndex];
      router.push(`/works/${nextWork.description.replace(/\s+/g, "-")}`);
    } else {
    }
  };

  // previous
  const prevWork = () => {
    if (worksByGenre.length > 0) {
      const prevIndex =
        (currentWorkIndex - 1 + worksByGenre.length) % worksByGenre.length;
      const prevWork = worksByGenre[prevIndex];
      router.push(`/works/${prevWork.description.replace(/\s+/g, "-")}`);
    }
  };

  // split the overview into paragraphs
  const paragraphs = work?.overview
    .split("\n")
    .filter((paragraph: string) => paragraph.trim() !== "");

  // next image
  const nextImage = () => {
    if (activeWorkImage < (work?.workImages.length ?? 0) - 1) {
      setActiveWorkImage(activeWorkImage + 1);
    }
  };

  // previous image
  const previousImage = () => {
    if (activeWorkImage > 0) {
      setActiveWorkImage(activeWorkImage - 1);
    }
  };

  return (
    <>
      <NavigationBar />
      <Space h={100} />

      <WorksGenreNavigation genres={genres} />

      {/* navigation buttons */}
      <Flex
        pos="relative"
        c="white"
        h={{ md: "60vh" }}
        mt="md"
        py={0}
        px={{ base: 6, md: 50 }}
        direction={{ base: "column", md: "row" }}
      >
        <Flex
          pos="absolute"
          right={{ base: 15, sm: 45 }}
          top={-40}
          gap={isSM ? 5 : 0}
          style={{ zIndex: 4000 }}
        >
          <IconChevronLeft
            size={30}
            color={"white"}
            onClick={() => prevWork()}
            strokeWidth={1.5}
            style={{
              cursor: "pointer",
            }}
          />
          <IconChevronRight
            size={30}
            color={"white"}
            onClick={() => nextWork()}
            strokeWidth={1.5}
            style={{
              cursor: "pointer",
            }}
          />
        </Flex>

        {/* Video Player */}
        <Flex
          w={{ base: "100%", md: "70%" }}
          mr="xl"
          pos="relative"
          style={{
            borderLeft: "2px solid black",
            borderColor: theme?.colors?.primary?.[1],
          }}
        >
          {work?.videoURL ? (
            <>
              <VideoPlayer source={work?.videoURL} />

              <Text fz="xl" pos="absolute" top={20} left={{ base: 20, sm: 50 }}>
                {work?.description}
              </Text>

              {work?.movementGenres && (
                <Group
                  fz="xs"
                  pos="absolute"
                  top={20}
                  right={20}
                  visibleFrom="sm"
                >
                  {work?.movementGenres.map((genre: any, index: number) => {
                    return (
                      <Badge
                        key={index}
                        color={theme?.colors?.primary?.[1]}
                        tt="capitalize"
                        size={isSM ? "sm" : "md"}
                      >
                        {genre.name}
                      </Badge>
                    );
                  })}
                </Group>
              )}
            </>
          ) : (
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%", // 16:9 aspect ratio
                height: "100%",
                overflow: "hidden",
                width: "100%",
              }}
            >
              <YouTube
                videoId="8nssMbahow0"
                opts={opts}
                onReady={onReady}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "auto",
                  height: "inherit",
                }}
              />
            </div>
          )}
        </Flex>

        {/* text content */}
        <Stack w={{ base: "100%", md: "30%" }}>
          <Divider size="sm" mb={0} color={theme?.colors?.primary?.[1]} />

          <Text fz="xl" ml="lg">
            {work?.client}
          </Text>

          {work?.team && (
            <Group gap={10} ml="lg">
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
            h={{ base: "50%", sm: "100%" }}
            ml="lg"
            offsetScrollbars
            scrollbarSize={1}
            scrollHideDelay={0}
            fz="sm"
            pr="sm"
          >
            {paragraphs?.map((paragraph: string, index: number) => (
              <p
                key={index}
                style={{ marginBottom: "1em", textAlign: "justify" }}
              >
                {paragraph}
              </p>
            ))}
          </ScrollArea>
        </Stack>
      </Flex>

      {/* Work images */}
      <Group mt={30} justify="center" pt={0}>
        {work?.workImages?.map((image: any, index: number) => (
          <>
            <img
              key={index}
              src={image.asset.url}
              onClick={() => {
                open();
                setActiveWorkImage(index);
              }}
              style={{ cursor: "pointer" }}
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
                  onClick={previousImage}
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
                  onClick={nextImage}
                  style={{ cursor: "pointer" }}
                />
              </Group>
            </MantineModal>
          </>
        ))}
      </Group>

      <FooterSocial />
    </>
  );
}

export default Work;
