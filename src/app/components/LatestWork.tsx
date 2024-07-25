import { Flex } from "@mantine/core";
import ProjectCard from "./ProjectCard";
import { WorkProps } from "../utils/typings";

interface LatestWorkProps {
  active: number;
  setActive: (value: number) => void;
  latestWork: WorkProps[];
}

function LatestWork({ active, setActive, latestWork }: LatestWorkProps) {
  return (
    <Flex
      gap="md"
      w="fit-content"
      pos="absolute"
      bottom={30}
      right={40}
      style={{ zIndex: 8 }}
    >
      {latestWork.map((work, index) => {
        return (
          <ProjectCard
            key={index}
            index={index}
            active={active}
            setActive={setActive}
            image={work.tileImage}
          />
        );
      })}
    </Flex>
  );
}

export default LatestWork;
