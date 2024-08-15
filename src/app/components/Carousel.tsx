"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Flex, Group, Overlay, Stack } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import logoImage from "/public/nhs.svg";
import LatestWork from "./LatestWork";
import { getLatestWork } from "../lib/sanity";
import { WorkProps } from "../utils/typings";
import YouTube from "react-youtube";
import classes from "./css/Project.module.css";
import { useHover } from "@mantine/hooks";

function FullScreenCarousel() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const [latestWork, setLatestWork] = useState<WorkProps[]>([]);
  const { hovered, ref: hoverRef } = useHover();
  const latestWorkCount = latestWork.length;

  const activeSlide = latestWork.filter((work, index) => index === active)[0];
  const bgImage = activeSlide?.tileImage;
  console.log(hovered);

  useEffect(() => {
    if (hovered) return;

    const fetchData = async () => {
      const latestWork = await getLatestWork();
      setLatestWork(latestWork);
    };
    fetchData();

    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % latestWorkCount);
    }, 5000);

    return () => clearInterval(interval);
  }, [latestWorkCount, hovered]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const opts = {
    height: "100vh",
    width: "100ve",
    playerVars: {
      autoplay: 1,
      controls: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      vq: "highres",
    },
  };

  const onReady = (event: any) => {
    event.target.playVideo();
  };

  return (
    <>
      <Flex ref={ref} h="100vh" align="flex-end">
        <motion.img
          src={bgImage}
          alt="Picture of the author"
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            position: "absolute",
            zIndex: -1,
            y: backgroundY,
          }}
        />
        {/* <YouTube
          className={classes.fullscreenVideo}
          videoId={activeSlide?.youtubeID}
          opts={opts}
          onReady={onReady}
          style={{
            y: backgroundY,
          }}
        /> */}

        <Overlay
          color="#0b0f19"
          backgroundOpacity={0.1}
          pos="absolute"
          h={"100vh"}
          style={{ zIndex: 0 }}
        />

        <Stack c="white" gap={0} mb={70} ml={70}>
          {/* https://www.svgrepo.com/ */}

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
