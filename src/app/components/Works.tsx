"use client";

import { Container, SimpleGrid, Space, Stack, Text } from "@mantine/core";
import Project from "./Project";
import { useRecoilState } from "recoil";
import { activeGenreTabState } from "../../../atoms/atoms";
import WorksGenreNavigation from "./worksGenreNavigation";
import { useFetchData } from "../../../hooks/useFetchData";

function Works() {
  const { genres, works } = useFetchData();
  const [activeGenreTab] = useRecoilState(activeGenreTabState);

  const activeGenre = genres[activeGenreTab];

  let worksByGenre = works.filter(
    (work) => work.projectGenre.name === activeGenre.name
  );
  if (activeGenre?.name === "Awards") {
    worksByGenre = works.filter((work) => work.award);
  }

  return (
    <Container size={"100vw"} style={{ zIndex: 4 }}>
      <Stack c="white" align="center">
        <Text fz={50} mb="lg">
          Works
        </Text>
        <WorksGenreNavigation genres={genres} />
        <SimpleGrid cols={{ base: 1, xs: 2, md: 3, xl: 4 }}>
          {worksByGenre.map((work, index) => (
            <Project key={index} work={work} />
          ))}
        </SimpleGrid>
        <Space h={100} />
      </Stack>
    </Container>
  );
}

export default Works;
