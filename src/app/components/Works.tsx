"use client";

import { Container, SimpleGrid, Stack, Text } from "@mantine/core";
import Work from "./Work";
import { useRecoilState } from "recoil";
import { activeGenreTabState } from "../../../atoms/atoms";
import { useFilterWorksByGenre } from "../../../hooks/useFilterWorksByGenre";
import WorksGenreNavigation from "./worksGenreNavigation";
import { useGetGenres } from "../../../hooks/useGetGenres";
import { useGetWorks } from "../../../hooks/useGetWorks";

function Works() {
  const [activeGenreTab] = useRecoilState(activeGenreTabState);

  const { genres } = useGetGenres();
  const { works } = useGetWorks();

  const worksByGenre = useFilterWorksByGenre(genres, works, activeGenreTab);

  return (
    <Container size={"100vw"} style={{ zIndex: 4 }}>
      <Stack c="white" align="center">
        <Text fz={50} mb="lg">
          Works
        </Text>

        <WorksGenreNavigation />

        <SimpleGrid cols={{ base: 1, xs: 2, md: 3, xl: 4 }} mb={100}>
          {worksByGenre.map((work, index) => (
            <Work key={index} work={work} />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}

export default Works;
