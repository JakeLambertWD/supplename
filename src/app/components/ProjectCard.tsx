import React from "react";
import { Card, Divider, Overlay, Stack } from "@mantine/core";
import Image from "next/image";
import { useHover } from "@mantine/hooks";
import { motion } from "framer-motion";

type IProjectCardProps = {
  title: string;
  image: any;
  index: number;
  active: number;
  setActive: (active: number) => void;
};

const ProjectCard = ({
  title,
  image,
  index,
  active,
  setActive,
}: IProjectCardProps) => {
  const { hovered, ref } = useHover();

  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.6 }}
      style={{ scale: hovered ? 1.1 : 1 }}
    >
      <Stack align="center" gap="xs" ref={ref}>
        <Card
          onClick={() => setActive(index)}
          shadow="xl"
          radius={0}
          w={120}
          h={120}
          style={{ cursor: "pointer" }}
        >
          <Card.Section>
            <Image
              src={image}
              fill={true}
              quality={100}
              objectFit="cover"
              alt="Norway"
            />

            {active !== index && !hovered && (
              <Overlay
                color="#0b0f19"
                backgroundOpacity={0.6}
                pos="absolute"
                h={"100%"}
                style={{ zIndex: 0 }}
              />
            )}
          </Card.Section>
        </Card>
        {active === index && <Divider mt="xs" color={"white"} h={1} w={50} />}
      </Stack>
    </motion.div>
  );
};

export default ProjectCard;
