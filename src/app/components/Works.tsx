"use client";

import { useEffect, useState } from "react";
import { Container, SimpleGrid, Space, Stack, Text } from "@mantine/core";
import Project from "./Project";
import { getGenres, getWorks } from "../lib/sanity";
import { GenreProps, WorkProps } from "../utils/typings";
import { useRecoilState } from "recoil";
import { activeGenreTabState } from "../../../atoms/atoms";
import WorksGenreNavigation from "./worksGenreNavigation";

function Works() {
  const [genres, setGenres] = useState<GenreProps[]>([]);
  const [works, setWorks] = useState<WorkProps[]>([]);
  const [activeGenreTab] = useRecoilState(activeGenreTabState);

  useEffect(() => {
    const fetchData = async () => {
      const genreData = await getGenres();
      // add awards to genres array
      genreData.push({ name: "Awards" });
      setGenres(genreData);
      const workData = await getWorks();
      setWorks(workData);
    };
    fetchData();
  }, []);

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

        {/* navbar */}
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
