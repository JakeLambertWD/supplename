import { Button, Center, Group, Stack, Text } from "@mantine/core";
import { theme } from "./utils/theme";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

function LandingSection() {
  return (
    <Center h="100vh" w="100%">
      <Stack mt="xl" c="white" style={{ zIndex: 7 }}>
        <Text className={anton.className} fz={70} ta="center" mb={250}>
          Supple Nam
        </Text>
        <Text fz="xl" ta="center" maw={680} px="md">
          Supple Nam is a world-renowned filmmaker that inspired a generation of
          content creators from all around the world
        </Text>
        <Group justify="center" mt="lg">
          <Button color={theme.colors?.primary?.[0]} size="lg">
            Get in touch
          </Button>
          <Button variant="outline" color="white" size="lg">
            Explore work
          </Button>
        </Group>
      </Stack>
    </Center>
  );
}

export default LandingSection;
