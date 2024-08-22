"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Flex, Group, Overlay, Stack } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import LatestWork from "./LatestWork";
import { getLatestWork } from "../lib/sanity";
import { WorkProps } from "../utils/typings";
import { useHover } from "@mantine/hooks";

function FullScreenCarousel() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const [latestWork, setLatestWork] = useState<WorkProps[]>([]);
  const { hovered, ref: hoverRef } = useHover();
  const latestWorkCount = latestWork.length;
  const [nextVideo, setNextVideo] = useState<string | null>(null);

  const activeSlide = latestWork.filter((work, index) => index === active)[0];
  const bgVideo = activeSlide?.videoURL;

  useEffect(() => {
    if (hovered) return;

    const fetchData = async () => {
      const latestWork = await getLatestWork();
      setLatestWork(latestWork);
    };
    fetchData();

    const interval = setInterval(() => {
      setNextVideo(
        latestWork[(active + 1) % latestWorkCount]?.videoURL || null
      );
      setTimeout(() => {
        setActive((prevActive) => (prevActive + 1) % latestWorkCount);
        setNextVideo(null);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [latestWorkCount, hovered]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <Flex ref={ref} h="100vh" align="flex-end">
        {bgVideo && (
          <motion.video
            key={bgVideo}
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: -1,
              y: backgroundY,
              opacity: nextVideo ? 0 : 1,
              transition: "opacity 0.1s ease-in-out",
            }}
          >
            <source src={bgVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
        )}

        <Overlay
          color="#0b0f19"
          backgroundOpacity={0.3}
          pos="absolute"
          h={"100vh"}
          style={{ zIndex: 0 }}
        />

        <Stack c="white" gap={0} mb={70} ml={70}>
          <Group>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              style={{
                fontSize: 35,
                fontWeight: 600,
                margin: 0,
                color: "white",
                zIndex: 20,
              }}
            >
              {activeSlide?.client}
            </motion.p>
          </Group>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2 }}
            style={{ fontSize: 25, margin: 0, color: "white", zIndex: 20 }}
          >
            {activeSlide?.title}
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
