import { Flex } from "@mantine/core";
import ProjectCard from "./ProjectCard";
import { latestWork } from "../utils/constants";

function LatestWork({ active, setActive }: any) {
  return (
    <Flex
      gap="md"
      w="fit-content"
      pos="absolute"
      bottom={30}
      right={40}
      style={{ zIndex: 8 }}
    >
      {latestWork.map((item, index) => (
        <ProjectCard
          key={index}
          index={index}
          active={active}
          setActive={setActive}
          image={item.image}
          title={item.title}
        />
      ))}
    </Flex>
  );
}

export default LatestWork;
