import { Button, Center, Group, Stack, Text } from "@mantine/core";
import { theme } from "../utils/theme";
import { client } from "../lib/sanity";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

async function getData() {
  const query = `*[_type == "pageInfo"]{
   ...
 }`;

  const data = client.fetch(query);
  return data;
}

async function LandingSection() {
  const data = await getData();

  // desctructure data
  const { name, description, carouselImage } = data[0];

  return (
    <Center h="100vh" w="100%">
      <Stack mt="xl" c="white" style={{ zIndex: 7 }}>
        <Text className={anton.className} fz={70} ta="center" mb={250}>
          {name}
        </Text>
        <Text fz="xl" ta="center" maw={680} px="md">
          {description}
        </Text>
        <Group justify="center" mt="lg">
          <Button color={theme.colors?.primary?.[1]} size="lg">
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
