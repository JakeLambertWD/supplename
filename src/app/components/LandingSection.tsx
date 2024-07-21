import { Button, Center, Group, Stack, Text } from "@mantine/core";
import { theme } from "../utils/theme";
import { client } from "../lib/sanity";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

// async function getData() {
//   const query = `*[_type == "pageInfo"]{
//    ...
//  }`;

//   const data = await client.fetch(query);

//   return data;
// }

// TODO: this function is suppose to have an async for Sanity purposes
export default function LandingSection() {
  // const data = await getData();
  // const { name, description, carouselImage } = data[0];

  return (
    <Center h="100vh" w="100%" pos="absolute" top={0}>
      <Stack
        c="white"
        p={{ base: 0, xl: 50 }}
        w={{ base: "85%" }}
        style={{ zIndex: 7 }}
      >
        <Text fz={14} mb={-10}>
          CHOREOGRAPHER - DIRECTOR
        </Text>
        <Text fz={45} fw={600} w={{ base: "60%" }}>
          Vision in Motion
        </Text>
        <Group>
          {/* TODO: when user clicks button show a thumbs up emoji */}
          <Button color={theme.colors?.primary?.[1]} size="md">
            My CV
          </Button>
          <Button variant="outline" color="white" size="md">
            Show Reel
          </Button>
        </Group>
      </Stack>
    </Center>
  );
}
