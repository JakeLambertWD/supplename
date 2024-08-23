"use client";

import { Button, Flex, Grid, Space, Stack, Text } from "@mantine/core";
import NavigationBar from "../components/NavigationBar";
import { motion } from "framer-motion";
import { theme } from "../utils/theme";
import { FooterSocial } from "../components/Footer";
import { useEffect, useState } from "react";
import { getAwards } from "../lib/sanity";
import { AwardPageProps } from "../utils/typings";

function page() {
  const [awards, setAwards] = useState<AwardPageProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const awardsData = await getAwards();
      setAwards(awardsData);
    };
    fetchData();
  }, []);

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
                    <motion.video
                      key={award?.work?.videoURL}
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "cover",
                        zIndex: -1,
                      }}
                    >
                      <source src={award?.work?.videoURL} type="video/mp4" />
                      Your browser does not support the video tag.
                    </motion.video>

                    <Text c="white" fz="xl" fw={800} pos="absolute">
                      {award.name}
                    </Text>
                  </Flex>
                </Grid.Col>

                <Grid.Col span={6} order={isOdd ? 2 : 1}>
                  <Flex p={150} h="100%" c="white">
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
