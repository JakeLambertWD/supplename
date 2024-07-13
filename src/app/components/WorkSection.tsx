import { Flex, Text } from "@mantine/core";
import { IconArrowMoveDown } from "@tabler/icons-react";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

function WorkSection() {
  return (
    <Flex
      h="100vh"
      w="100%"
      direction="column"
      align="center"
      bg="#060e11"
      c="white"
    >
      <Text
        ta="center"
        w="100%"
        h="fit-content"
        fz={35}
        mt={50}
        mb="sm"
        className={anton.className}
      >
        Showreel
      </Text>
      <IconArrowMoveDown strokeWidth={0.4} size={40} />
    </Flex>
  );
}

export default WorkSection;
