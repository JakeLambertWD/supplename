import { Flex } from "@mantine/core";
import WorkTile from "./WorkTile";
import { HomePageWorkProps } from "../utils/typings";

interface LatestWorkProps {
  active: number;
  setActive: (value: number) => void;
  latestWork: HomePageWorkProps[];
  hoverRef: any;
}

function LatestWork({
  active,
  setActive,
  latestWork,
  hoverRef,
}: LatestWorkProps) {
  return (
    <Flex
      ref={hoverRef}
      gap="md"
      w="fit-content"
      pos="absolute"
      bottom={30}
      right={40}
      style={{ zIndex: 8 }}
    >
      {latestWork.map((work, index) => {
        return (
          <WorkTile
            key={index}
            index={index}
            active={active}
            setActive={setActive}
            image={work.featuredWork.tileImage}
            description={work.featuredWork.description}
          />
        );
      })}
    </Flex>
  );
}

export default LatestWork;
