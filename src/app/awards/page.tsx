import { Button, Center, Flex, Space, Stack, Text } from "@mantine/core";
import NavigationBar from "../components/NavigationBar";
import Image from "next/image";
import bgImage from "/public/sparklers.jpg";
import { theme } from "../utils/theme";

function page() {
  return (
    <Stack h="100vh" gap={0}>
      <NavigationBar />
      <Space h={90} />

      <Flex>
        <Flex pos="relative" align="center" justify="center" w="50%">
          <Image
            src={bgImage}
            style={{
              height: "auto",
              width: "100%",
            }}
            alt="test"
          />
          <Text c="white" fz="lg" fw={700} pos="absolute">
            2023 VIDDY AWARDS
          </Text>
        </Flex>

        <Flex p={120} h="100%" w="50%" c="white">
          <Stack w="100%" align="flex-end" ta="right">
            <Text>2023 VIDDY AWARDS</Text>
            <Text>PLATINUM WINNER</Text>
            <Text>
              Category: Commercials | Broadcast / Non-Broadcast / Web
              Commercials | Food & Beverage
            </Text>
            <Button
              color={theme.colors?.primary?.[1]}
              size="md"
              w="fit-content"
            >
              Watch
            </Button>
          </Stack>
        </Flex>
      </Flex>

      <Flex>
        <Flex p={120} h="100%" w="50%" c="white">
          <Stack w="100%" align="flex-start">
            <Text>2023 VIDDY AWARDS</Text>
            <Text>PLATINUM WINNER</Text>
            <Text>
              Category: Commercials | Broadcast / Non-Broadcast / Web
              Commercials | Food & Beverage
            </Text>
            <Button
              color={theme.colors?.primary?.[1]}
              size="md"
              w="fit-content"
            >
              Watch
            </Button>
          </Stack>
        </Flex>

        <Flex pos="relative" align="center" justify="center" w="50%">
          <Image
            src={bgImage}
            style={{
              height: "auto",
              width: "100%",
            }}
            alt="test"
          />
          <Text c="white" fz="lg" fw={700} pos="absolute">
            2023 VIDDY AWARDS
          </Text>
        </Flex>
      </Flex>
    </Stack>
  );
}

export default page;
