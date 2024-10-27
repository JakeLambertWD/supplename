"use client";

import { Container, SimpleGrid, Stack } from "@mantine/core";
import Work from "./Work";
import { useRecoilState } from "recoil";
import { activeGenreTabState } from "../../../../atoms/atoms";
import { useFilterWorksByGenre } from "../../../../hooks/useFilterWorksByGenre";
import WorksGenreNavigation from "../worksGenreNavigation";
import { useGetGenres } from "../../../../hooks/useGetGenres";
import { useGetWorks } from "../../../../hooks/useGetWorks";
import { useEffect, useState } from "react";

function Works() {
  const [activeGenreTab] = useRecoilState(activeGenreTabState);

  const { genres } = useGetGenres();
  const { works } = useGetWorks();

  const worksByGenre = useFilterWorksByGenre(genres, works, activeGenreTab);

  // give navbar a fixed position on scroll
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container size={"100vw"} style={{ zIndex: 4 }}>
      <Stack c="white" align="center">
        <WorksGenreNavigation isFixed={isFixed} />

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
