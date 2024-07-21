import { Card, Container, Flex, Stack, Tabs, Text } from "@mantine/core";
import { filmmakingLinks, latestWork } from "../utils/constants";
import { motion } from "framer-motion";

import Image from "next/image";

function Works({ active, setActive }: any) {
  return (
    <Container size="xl" h="100vh">
      <Stack align="center" justify="center" h="100vh">
        <Flex c="white" mt="xl" mb="lg">
          {filmmakingLinks.map((link, index) => (
            <Text
              key={index}
              fz={16}
              fw={300}
              pb="sm"
              w={170}
              ta="center"
              c={active === index ? "white" : "#5e5e5e"}
              onClick={() => setActive(index)}
              style={{
                borderBottom:
                  active === index
                    ? "1px solid #4631bd"
                    : "1px solid transparent",
                cursor: "pointer",
              }}
            >
              {link.label}
            </Text>
          ))}
        </Flex>

        <Flex w="100%" wrap="wrap" justify="center" gap={20}>
          {latestWork.map((work, index) => (
            <Card
              shadow="xl"
              p={0}
              radius={0}
              w={300}
              h={300}
              style={{ cursor: "pointer" }}
            >
              {/* <motion.div whileHover={{ scale: 1.2 }}> */}
              <motion.img
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 5 }}
                src={work.image.src}
                alt="Norway"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  // inset: "0px",
                }}
                // fill={true}
                // quality={100}
                // objectFit="cover"
              />
              {/* </motion.div> */}
            </Card>
          ))}
        </Flex>
      </Stack>
    </Container>
  );
}

export default Works;
