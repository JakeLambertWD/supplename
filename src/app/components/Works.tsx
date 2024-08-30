"use client";

import { useEffect, useState } from "react";
import { Container, Flex, SimpleGrid, Space, Stack, Text } from "@mantine/core";
import Project from "./Project";
import { getGenres, getWorks } from "../lib/sanity";
import { GenreProps, WorkProps } from "../utils/typings";
import classes from "./css/Works.module.css";

function Works() {
  const [active, setActive] = useState(0);
  const [genres, setGenres] = useState<GenreProps[]>([]);
  const [works, setWorks] = useState<WorkProps[]>([]);

  const activeGenre = genres[active];

  const worksByGenre = works.filter(
    (work) => work.projectGenre.name === activeGenre.name
  );

  useEffect(() => {
    const fetchData = async () => {
      const genreData = await getGenres();
      setGenres(genreData);

      const workData = await getWorks();
      setWorks(workData);
    };
    fetchData();
  }, []);

  return (
    <Container size={"100vw"} style={{ zIndex: 4 }}>
      <Stack c="white" align="center">
        <Text fz={50}>Works</Text>
        <Flex
          className={classes.hideScrollbar}
          mt="xl"
          mb="lg"
          w={{ base: "100%", xs: "fit-content" }}
          wrap="nowrap"
          gap={{ base: 10, sm: 20 }}
          style={{ overflowX: "auto", scrollbarWidth: "none" }}
        >
          {genres.map((link: any, index: any) => (
            <Text
              key={index}
              fz={{ base: "md", md: "lg" }}
              fw={300}
              pb="sm"
              px={{ base: 8, sm: 0 }}
              w={{ base: 110, sm: 140, md: 170 }}
              ta="center"
              c={active === index ? "white" : "#5e5e5e"}
              onClick={() => setActive(index)}
              style={{
                borderBottom:
                  active === index
                    ? "1px solid #4631bd"
                    : "1px solid transparent",
                cursor: "pointer",
                textWrap: "nowrap",
              }}
            >
              {link.name}
            </Text>
          ))}
        </Flex>

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
