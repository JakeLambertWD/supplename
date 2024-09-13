import React, { useEffect } from "react";
import { Card, Divider, Overlay, Stack } from "@mantine/core";
import Image from "next/image";
import { useHover } from "@mantine/hooks";
import { motion } from "framer-motion";
import { useFormattedDescription } from "../../../hooks/useFormattedDescription";
import { useRouter } from "next/navigation";
import { useIsSM } from "../../../hooks/useIsSM";
import { useIsMD } from "../../../hooks/useIsMD";

type IProjectCardProps = {
  image: any;
  index: number;
  active: number;
  setActive: (active: number) => void;
  description: string;
};

const ProjectCard = ({
  image,
  index,
  active,
  setActive,
  description,
}: IProjectCardProps) => {
  const { hovered, ref } = useHover();
  const router = useRouter();

  const isMd = useIsMD();
  const isSM = useIsSM();

  const formattedDescription = useFormattedDescription(description);

  useEffect(() => {
    if (hovered) {
      setActive(index);
    }
  }, [hovered]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.6 }}
      style={{ scale: hovered ? 1.1 : 1 }}
    >
      <Stack align="center" gap="xs" ref={ref}>
        <Card
          onClick={() => router.push(`/works/${formattedDescription}`)}
          shadow="xl"
          radius={isMd ? 100 : 0}
          w={{ base: 60, md: 90, lg: 120 }}
          h={{ base: 60, md: 90, lg: 120 }}
          style={{ cursor: "pointer" }}
        >
          <Card.Section>
            <Image
              src={image}
              fill={true}
              quality={100}
              objectFit="cover"
              alt="Image"
            />
          </Card.Section>
        </Card>
        {active === index && (
          <Divider
            mt={{ base: 5, sm: "xs" }}
            color={"white"}
            h={1}
            w={{ base: 25, sm: 50 }}
            style={{
              border: isSM ? "1px white solid" : "2px white solid",
              borderRadius: "10%",
            }}
          />
        )}
      </Stack>
    </motion.div>
  );
};

export default ProjectCard;
