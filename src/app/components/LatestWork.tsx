import { Flex } from "@mantine/core";
import ProjectCard from "./ProjectCard";
import { latestWork } from "../utils/constants";

function LatestWork({ active, setActive }: any) {
  return (
    <Flex gap="sm" w="fit-content" pos="absolute" bottom={20} right={30}>
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
