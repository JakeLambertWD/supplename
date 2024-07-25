import { Container, Flex, Stack, Text } from "@mantine/core";
import { filmmakingLinks, latestWork } from "../utils/constants";
import Project from "./Project";

function Works({ active, setActive }: any) {
  return (
    <Container size="xl" h="100vh" style={{ zIndex: 4 }}>
      <Stack c="white" align="center">
        <Text fz={50}>Works</Text>
        <Flex mt="xl" mb="lg">
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
            <Project key={index} work={work} />
          ))}
        </Flex>
      </Stack>
    </Container>
  );
}

export default Works;
