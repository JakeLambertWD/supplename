"use client";

import {
  Badge,
  Divider,
  Flex,
  Group,
  ScrollArea,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import YouTube from "react-youtube";
import { useRouter } from "next/navigation";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useRecoilState } from "recoil";
import { useMediaQuery } from "@mantine/hooks";
import { activeGenreTabState } from "../../../../atoms/atoms";
import { theme } from "../../utils/theme";
import classes from "../../components/css/Project.module.css";
import { useVideoReady } from "../../../../hooks/useVideoReady";
import { genresNavLinks, SM } from "@/app/utils/constants";
import NavigationBar from "../../components/Common/NavigationBar";
import VideoPlayer from "../../components/WorkIdPage/VideoPlayer";
import { FooterSocial } from "../../components/Common/Footer";
import WorkImages from "@/app/components/WorkIdPage/WorkImages";
import { useGetWorks } from "../../../../hooks/useGetWorks";
import { useGetWorkByDescription } from "../../../../hooks/useGetWorkByDescription";
import { useGetAwards } from "../../../../hooks/getAwards";
import WorksGenreNavigation from "@/app/components/WorkIdPage/worksGenreNavigation";
import { useEffect, useRef } from "react";
import {
  responsiveOpts,
  splitOverviewIntoParagraphs,
} from "@/app/components/WorkIdPage/utils";

function Work({ params }: { params: { id: string } }) {
  const id = params.id;
  const router = useRouter();
  const isSM = useMediaQuery(`(max-width: ${SM})`);
  const videoPlayerRef = useRef<{ pause: () => void } | null>(null);
  const handlePauseVideo = () => {
    if (videoPlayerRef.current) {
      videoPlayerRef.current.pause();
    }
  };
  const { onReady } = useVideoReady();
  const { awards } = useGetAwards();
  const { works } = useGetWorks();
  const { work, isLoading } = useGetWorkByDescription(id);

  let worksByGenre = works.filter(
    (item) => item.projectGenre?.name === work?.projectGenre?.name
  );

  // get active genre tab
  const [activeGenreTab, setActiveGenreTab] =
    useRecoilState(activeGenreTabState);

  // if the genre is awards, filter by award
  if (activeGenreTab === 5) {
    worksByGenre = awards
      .map((award) =>
        works.find((work) => work.description === award.work.description)
      )
      .filter((work) => work !== undefined);
  }

  useEffect(() => {
    if (work && activeGenreTab !== 5) {
      const currentGenre = work.projectGenre?.name;
      const genreIndex = genresNavLinks.findIndex(
        (genre) => genre.name === currentGenre
      );
      if (genreIndex !== -1) {
        setActiveGenreTab(genreIndex);
      }
    }
  }, [work]);

  // find the index of the current work within the worksByGenre array
  const currentWorkIndex = worksByGenre.findIndex(
    (item) => item.description === work?.description
  );

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

  const paragraphs = splitOverviewIntoParagraphs(work?.overview);

  return (
    <>
      <NavigationBar handlePauseVideo={handlePauseVideo} />
      <Space h={100} />
      <WorksGenreNavigation />

      <Flex
        pos="relative"
        c="white"
        h={{ md: "60vh" }}
        mt={45}
        py={0}
        px={{ base: 6, md: 50 }}
        direction={{ base: "column", md: "row" }}
      >
        <Flex
          pos="absolute"
          right={{ base: 19, sm: 45 }}
          top={isSM ? -52 : -40}
          gap={isSM ? 5 : 0}
          style={{ zIndex: 10 }}
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
              <VideoPlayer ref={videoPlayerRef} source={work?.videoURL} />

              <Text fz="xl" pos="absolute" top={20} left={{ base: 20, sm: 50 }}>
                {work?.description}
              </Text>
            </>
          ) : (
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%", // 16:9 aspect ratio
                height: 0,
                overflow: "hidden",
                width: "100%",
              }}
            >
              <YouTube
                videoId={work?.youtubeID}
                opts={responsiveOpts}
                onReady={onReady}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          )}
        </Flex>

        {/* text content */}
        <Stack w={{ base: "100%", md: "30%" }}>
          <Divider size="sm" mb={0} color={theme?.colors?.primary?.[1]} />

          <Text
            fz="xl"
            ml="lg"
            c={work?.brandColour ? work?.brandColour : "white"}
          >
            {work?.client}
          </Text>

          {work?.team && (
            <Group gap={10} ml="lg">
              {work.team.map((member: any, index: number) => (
                <Group key={index}>
                  <Text fz="11px" fw={600}>
                    <span style={{ opacity: 0.5, fontStyle: "italic" }}>
                      {member?.role}: &nbsp;
                    </span>
                    {member?.name}
                  </Text>
                </Group>
              ))}
            </Group>
          )}

          <Group fz="xs" ml="lg" mt="xs" visibleFrom="sm">
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

      <WorkImages work={work} handlePauseVideo={handlePauseVideo} />

      <FooterSocial />
    </>
  );
}

export default Work;
