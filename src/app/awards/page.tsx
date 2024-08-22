"use client";

import { Button, Flex, Grid, Space, Stack, Text } from "@mantine/core";
import NavigationBar from "../components/NavigationBar";
import Image from "next/image";
import bgImage from "/public/sparklers.jpg";
import { theme } from "../utils/theme";
import { FooterSocial } from "../components/Footer";
import { useEffect, useState } from "react";
import { getAwards } from "../lib/sanity";
import { AwardProps } from "../utils/typings";

function page() {
  const [awards, setAwards] = useState<AwardProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const awardsData = await getAwards();
      setAwards(awardsData);
    };
    fetchData();
  }, []);
  console.log(awards);

  return (
    <>
      <NavigationBar />
      <Space h={100} />

      <Text fz={50} c="white" ta="center" mb={50}>
        Awards
      </Text>
      <Stack gap={0}>
        {awards?.map((award, index) => {
          const isOdd = index % 2 === 0;
          const awardYear = award.work.award[0].year;

          return (
            <>
              <Grid gutter={0}>
                <Grid.Col span={6} order={isOdd ? 1 : 2}>
                  <Flex pos="relative" align="center" justify="center">
                    <Image
                      src={bgImage}
                      style={{
                        height: "auto",
                        width: "100%",
                      }}
                      alt="test"
                    />
                    <Text c="white" fz="lg" fw={700} pos="absolute">
                      {award.name}
                    </Text>
                  </Flex>
                </Grid.Col>

                <Grid.Col span={6} order={isOdd ? 2 : 1}>
                  <Flex p={120} h="100%" c="white">
                    <Stack
                      w="100%"
                      align={isOdd ? "flex-end" : "flex-start"}
                      ta={"right"}
                    >
                      <Text>{award.name}</Text>
                      <Text>PLATINUM WINNER</Text>
                      <Text>{awardYear}</Text>
                      <Button
                        color={theme.colors?.primary?.[1]}
                        size="md"
                        w="fit-content"
                      >
                        Watch
                      </Button>
                    </Stack>
                  </Flex>
                </Grid.Col>
              </Grid>
            </>
          );
        })}
      </Stack>

      <FooterSocial />
    </>
  );
}

export default page;
