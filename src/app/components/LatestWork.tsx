import { Box, Card, Flex, Stack, Text } from "@mantine/core";
import Image from "next/image";
import suppleNamLogo from "/public/supplenamLogo.png";
import workThumb1 from "/public/work-thumb.jpg";
import workThumb2 from "/public/work-thumb2.png";
import workThumb3 from "/public/work_thumb-McNugget.jpg";
import workThumb4 from "/public/work_thumb_Guinness.jpg";
import workThumb5 from "/public/Work_Joy-Crookes-FDFMN1-420x420.jpg";

const ProjectCard = ({ title, image }) => (
  <Stack>
    <Card shadow="xl" radius={0} w={200} h={200}>
      <Card.Section>
        <Image
          src={image}
          fill={true}
          quality={100}
          objectFit="cover"
          alt="Norway"
        />
      </Card.Section>
    </Card>
    <Text ta="center" c="white" mt="sm">
      {title}
    </Text>
  </Stack>
);

const latestWork = [
  {
    title: "Peace - Money",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: workThumb1,
  },
  {
    title: "Honda HRV - Precision",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: workThumb2,
  },
  {
    title: "McDonalds - McNugget",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: workThumb3,
  },
  {
    title: "Guinness - Liquid Tumble",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: workThumb4,
  },
  {
    title: "Joy Crookes - Feat Don't Fail",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: workThumb5,
  },
];

function LatestWork() {
  return (
    <Flex mt={30} gap="xl" justify="center">
      <ProjectCard image={suppleNamLogo} title="Showreel" />
      {latestWork.map((item, index) => (
        <ProjectCard key={index} image={item.image} title={item.title} />
      ))}
    </Flex>
  );
}

export default LatestWork;
