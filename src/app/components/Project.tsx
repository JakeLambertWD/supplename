import { Card, Flex, Modal } from "@mantine/core";
import { useDisclosure, useHover } from "@mantine/hooks";
import { motion } from "framer-motion";
import classes from "../components/css/Project.module.css";

function Project({ work }: any) {
  const { hovered, ref } = useHover();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Card
        ref={ref}
        onClick={open}
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

      <Modal
        opened={opened}
        onClose={close}
        fullScreen
        radius={0}
        classNames={{
          content: classes.content,
          header: classes.header,
        }}
        transitionProps={{ transition: "fade", duration: 500 }}
      >
        <Flex>TEST</Flex>
      </Modal>
    </>
  );
}

export default Project;
