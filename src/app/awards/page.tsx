"use client";

import { Button, Center, Flex, Grid, Space, Stack, Text } from "@mantine/core";
import NavigationBar from "../components/NavigationBar";
import { motion } from "framer-motion";
import { theme } from "../utils/theme";
import { FooterSocial } from "../components/Footer";
import { useEffect, useState } from "react";
import { getAwards } from "../lib/sanity";
import { AwardPageProps } from "../utils/typings";
import { useRouter } from "next/navigation";
import { activeGenreTabState } from "../../../atoms/atoms";
import { useRecoilState } from "recoil";
import { useMediaQuery } from "@mantine/hooks";
import { SM } from "../utils/constants";

function page() {
  const isSM = useMediaQuery(`(max-width: ${SM})`);
  const [awards, setAwards] = useState<AwardPageProps[]>([]);
  const router = useRouter();

  const [activeGenreTab, setActiveGenreTab] =
    useRecoilState(activeGenreTabState);

  // replace spaces with a dash for awards.work.description
  // to be used in the url
  const replaceSpaces = (str: string) => {
    return str.replace(/\s/g, "-");
  };

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
          const awardYear = award.year;

          return (
            <>
              <Grid gutter={0}>
                <Grid.Col span={{ sm: 6 }} order={{ sm: isOdd ? 1 : 2 }}>
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

                    <Text
                      c="white"
                      fz="xl"
                      fw={800}
                      ta="center"
                      px="lg"
                      pos="absolute"
                    >
                      {award.name}
                    </Text>
                  </Flex>
                </Grid.Col>

                <Grid.Col span={{ sm: 6 }} order={{ sm: isOdd ? 2 : 1 }}>
                  <Center
                    p={{ base: 30, xs: 40, sm: 80, md: 90, lg: 110, xl: 130 }}
                    h="100%"
                    c="white"
                  >
                    <Stack
                      w="100%"
                      align={
                        !isSM ? (isOdd ? "flex-end" : "flex-start") : "center"
                      }
                      ta={{ sm: "right" }}
                    >
                      <Text ta={isSM ? "center" : "match-parent"}>
                        {award.name}
                      </Text>

                      <Button
                        color={theme.colors?.primary?.[1]}
                        size="md"
                        w="fit-content"
                        onClick={() => {
                          router.push(
                            `/works/${replaceSpaces(award.work.description)}`
                          );
                          setActiveGenreTab(5);
                        }}
                      >
                        Go To Work
                      </Button>
                      <Text>{award.work.client}</Text>
                      <Text>{award.work.description}</Text>
                    </Stack>
                  </Center>
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
