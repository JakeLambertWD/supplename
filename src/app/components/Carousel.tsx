import Image from "next/image";
import { motion } from "framer-motion";
import { Flex, Overlay, Stack, Text } from "@mantine/core";
import { latestWork } from "../utils/constants";

function FullScreenCarousel({ active }: { active: number }) {
  const getActiveWork = latestWork.filter((work, index) => index === active)[0];
  const image = getActiveWork.image;

  const activeSlide = latestWork.filter((work, index) => index === active)[0];

  return (
    <Flex h="100vh" align="flex-end">
      <Image
        src={image}
        alt="Picture of the author"
        sizes="100vw"
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          position: "absolute",
          zIndex: -1,
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
        <motion.p
          initial={{ x: -500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ fontSize: 35, fontWeight: 600, margin: 0 }}
        >
          {activeSlide.title}
        </motion.p>
        <motion.p
          initial={{ x: -500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          style={{ fontSize: 25, margin: 0 }}
        >
          {activeSlide.description}
        </motion.p>
      </Stack>
    </Flex>
  );
}

export default FullScreenCarousel;
