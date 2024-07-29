import { Card, Space } from "@mantine/core";
import { useDisclosure, useHover } from "@mantine/hooks";
import { motion } from "framer-motion";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import Modal from "./Modal";

function Project({ work }: any) {
  const { hovered, ref } = useHover();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Card
        ref={ref}
        onClick={() => {
          window.scrollTo({ top: 190, behavior: "smooth" });
          open();
        }}
        shadow="xl"
        p={0}
        radius={0}
        w={300}
        h={300}
        pos="relative"
        style={{ cursor: "pointer" }}
      >
        <motion.img
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 5 }}
          src={work.tileImage}
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
            <p style={{ fontSize: "16px" }}>{work.client}</p>
          </motion.div>
        )}

        {hovered && (
          <IconPlayerPlayFilled
            color="white"
            style={{ position: "absolute", bottom: 20, right: 20 }}
          />
        )}
      </Card>

      <Modal
        opened={opened}
        close={close}
        client={work.client}
        description={work.description}
        team={work.team}
        movementGenres={work.movementGenres}
        overview={work.overview}
        workImages={work.workImages}
      />
    </>
  );
}

export default Project;
