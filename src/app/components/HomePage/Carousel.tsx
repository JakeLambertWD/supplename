"use client";

import { motion } from "framer-motion";
import { Flex, Group, Overlay, Stack } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { getHomePage } from "../../lib/sanity";
import { HomePageWorkProps } from "../../utils/typings";
import { useHover } from "@mantine/hooks";
import { theme } from "../../utils/theme";
import LatestWork from "./LatestWork";
import CarouselVideoPlayer from "./CarouselVideoPlayer";

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
    const fetchData = async () => {
      const latestWork = await getHomePage();

      setLatestWork(latestWork);
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
  }, [latestWorkCount, active]);

  return (
    <>
      <Flex
        ref={ref}
        h={{ base: "90vh", sm: "100vh" }}
        align="flex-end"
        pos="relative"
      >
        <CarouselVideoPlayer
          ref={ref}
          nextVideo={nextVideo}
          featuredWork={featuredWork}
        />

        <Stack
          c="white"
          gap={0}
          mb={{ base: 160, xs: 70 }}
          ml={{ base: 30, xs: 70 }}
        >
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
