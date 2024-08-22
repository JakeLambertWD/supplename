"use client";

import { Container, Flex, SimpleGrid, Space, Stack, Text } from "@mantine/core";
import Project from "./Project";
import { useEffect, useState } from "react";
import { getGenres, getWorks } from "../lib/sanity";
import { GenreProps, WorkProps } from "../utils/typings";

function Works() {
  const [active, setActive] = useState(0);
  const [genres, setGenres] = useState<GenreProps[]>([]);
  const [works, setWorks] = useState<WorkProps[]>([]);
  const [activeWork, setActiveWork] = useState(0);

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
  }, [activeWork]);

  return (
    <Container size={"100vw"} style={{ zIndex: 4 }}>
      <Stack c="white" align="center">
        <Text fz={50}>Works</Text>
        <Flex mt="xl" mb="lg">
          {genres.map((link: any, index: any) => (
            <Text
              key={index}
              fz={16}
              fw={300}
              pb="sm"
              w={170}
              ta="center"
              c={active === index ? "white" : "#5e5e5e"}
              onClick={() => setActive(index)}
              style={{
                borderBottom:
                  active === index
                    ? "1px solid #4631bd"
                    : "1px solid transparent",
                cursor: "pointer",
              }}
            >
              {link.name}
            </Text>
          ))}
        </Flex>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3, xl: 4 }}>
          {worksByGenre.map((work, index) => (
            <Project
              key={index}
              work={work}
              workIndex={index}
              activeWork={activeWork}
              setActiveWork={setActiveWork}
              worksByGenre={worksByGenre}
            />
          ))}
        </SimpleGrid>
        <Space h={100} />
      </Stack>
    </Container>
  );
}

export default Works;
