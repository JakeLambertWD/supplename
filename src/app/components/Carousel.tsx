"use client";

import { motion } from "framer-motion";
import { Flex, Group, Overlay, Stack } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import LatestWork from "./LatestWork";
import { getHomePage } from "../lib/sanity";
import { HomePageWorkProps } from "../utils/typings";
import { useHover } from "@mantine/hooks";
import CarouselVideoPlayer from "./CarouselVideoPlayer";
import { theme } from "../utils/theme";

function FullScreenCarousel() {
  const ref = useRef(null);
  const { hovered, ref: hoverRef } = useHover();

  const [active, setActive] = useState(0);
  const [latestWork, setLatestWork] = useState<HomePageWorkProps[]>([]);
  const [nextVideo, setNextVideo] = useState<string | null>(null);

  const activeSlide = latestWork.filter((work, index) => index === active)[0];
  const featuredWork = activeSlide?.featuredWork;

  const latestWorkCount = latestWork.length;

  useEffect(() => {
    // If the user is hovering over the carousel, don't autoplay the videos
    if (hovered) return;

    // Fetch the latest work from Sanity
    const fetchData = async () => {
      // const latestWork = await getLatestWork();
      const latestWork = await getHomePage();
      // latestWork has a property of order, which is a number that we can use to sort the projects
      const sortLatestWorkByOrder = latestWork.sort(
        (a: any, b: any) => a.order - b.order
      );
      setLatestWork(sortLatestWorkByOrder);
    };
    fetchData();

    // Set an interval to autoplay the videos
    const interval = setInterval(() => {
      setNextVideo(
        latestWork[(active + 1) % latestWorkCount]?.featuredWork?.videoURL ||
          null
      );

      setTimeout(() => {
        setActive((prevActive) => (prevActive + 1) % latestWorkCount);
        setNextVideo(null);
      }, 700);
    }, 7000);

    return () => clearInterval(interval);
  }, [latestWorkCount, hovered]);

  return (
    <>
      <Flex ref={ref} h="100vh" align="flex-end" pos="relative">
        <CarouselVideoPlayer
          nextVideo={nextVideo}
          featuredWork={featuredWork}
          ref={ref}
        />

        <Overlay
          color={theme?.colors?.primary?.[7]}
          backgroundOpacity={0.2}
          pos="absolute"
          h={"100vh"}
          style={{ zIndex: 0 }}
        />

        <Stack c="white" gap={0} mb={{ base: 190, xs: 70 }} ml={70}>
          <Group>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                fontSize: 35,
                fontWeight: 600,
                margin: 0,
                color: "white",
                zIndex: 20,
              }}
            >
              {featuredWork?.client}
            </motion.p>
          </Group>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ fontSize: 25, margin: 0, color: "white", zIndex: 20 }}
          >
            {featuredWork?.description}
          </motion.p>
        </Stack>
      </Flex>

      <LatestWork
        hoverRef={hoverRef}
        active={active}
        setActive={setActive}
        latestWork={latestWork}
      />
    </>
  );
}

export default FullScreenCarousel;
