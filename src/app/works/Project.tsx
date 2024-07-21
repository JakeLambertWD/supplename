import { Card, Center, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { motion } from "framer-motion";

function Project({ work }: any) {
  const { hovered, ref } = useHover();

  return (
    <Card
      shadow="xl"
      p={0}
      radius={0}
      w={300}
      h={300}
      pos="relative"
      style={{ cursor: "pointer" }}
      ref={ref}
    >
      <motion.img
        whileHover={{ scale: 1.5 }}
        transition={{ duration: 5 }}
        src={work.image.src}
        alt="Norway"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
      />
      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            width: "100%",
            position: "absolute",
            color: "white",
            top: 0,
            background: "rgba(0, 0, 0, 0.7)",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "18px" }}>{work.title}</p>
        </motion.div>
      )}
    </Card>
  );
}

export default Project;
