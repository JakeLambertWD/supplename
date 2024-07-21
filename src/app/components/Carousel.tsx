import { motion, useScroll, useTransform } from "framer-motion";
import { Flex, Group, Overlay, Stack, Text } from "@mantine/core";
import { latestWork } from "../utils/constants";
import { useRef } from "react";
import logoImage from "/public/mcds.png";

function FullScreenCarousel({ active }: { active: number }) {
  const ref = useRef(null);
  const getActiveWork = latestWork.filter((work, index) => index === active)[0];
  const image = getActiveWork?.image;
  const activeSlide = latestWork.filter((work, index) => index === active)[0];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Flex h="100vh" align="flex-end" ref={ref}>
      <motion.img
        src={image.src}
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
      <Overlay
        color="#0b0f19"
        backgroundOpacity={0.4}
        pos="absolute"
        h={"100vh"}
        style={{ zIndex: 0 }}
      />
      <Stack c="white" gap={0} mb={70} ml={70}>
        <Group>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ fontSize: 35, fontWeight: 600, margin: 0 }}
          >
            {activeSlide?.title}
          </motion.p>
          <motion.img src={logoImage.src} height={40} width={40} alt="logo" />
        </Group>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          style={{ fontSize: 25, margin: 0 }}
        >
          {activeSlide?.description}
        </motion.p>
      </Stack>
    </Flex>
  );
}

export default FullScreenCarousel;
