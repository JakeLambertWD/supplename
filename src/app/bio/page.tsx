"use client";

import NavigationBar from "../components/NavigationBar";
import {
  Button,
  Container,
  Flex,
  Grid,
  Group,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import Image from "next/image";
import bgImage from "/public/bio.jpg";
import { FooterSocial } from "../components/Footer";
import { IconTrophy } from "@tabler/icons-react";
import { theme } from "../utils/theme";
import { useEffect, useState } from "react";
import { AwardPageProps } from "../utils/typings";
import { getAwards } from "../lib/sanity";
import { useMediaQuery } from "@mantine/hooks";

function page() {
  const [awards, setAwards] = useState<AwardPageProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const awardsData = await getAwards();
      setAwards(awardsData);
    };
    fetchData();
  }, []);

  const isSM = useMediaQuery(`(max-width: 768px)`);

  return (
    <>
      <NavigationBar />
      <Space h={130} />

      <Container size="xl" style={{ zIndex: 4 }}>
        <Grid gutter={0}>
          <Grid.Col span={{ base: 12, sm: 9 }} order={{ base: 2, sm: 1 }}>
            <Stack c="white" px={{ base: 5, sm: 30, lg: 60 }}>
              <Text
                tt="uppercase"
                fz={30}
                mb="md"
                c={theme.colors?.primary?.[1]}
              >
                supple nam
              </Text>
              <Text pl="sm">Director . Choreography . Editor</Text>
              <Text pl="sm" fz="sm" mb="xl" style={{ textAlign: "justify" }}>
                As a Director and Choreographer, Supple Nam (Guillermo Martin
                Nam) has pushed boundaries with his unique understanding of
                dance, culture and stylised movement across TV, theatre, film,
                music and advertising industries winning multiple awards. <br />{" "}
                <br /> His unique edge has been consistently recognised in the
                industry with awards from all sides: “Most Innovative
                Choreography in TV and Film” (VW Golf GTI “Singing in the Rain”
                commercial), “Best Choreography in a video” UKMVA (Music video
                Money by Peace), “Best Sports Performance Act” (Mission
                Ferrari), “Best Live Action SFX” British Arrows Craft Awards
                (Honda HR-V “Stepping” commercial) and most recently won a D&AD
                award for his choreography (Music video Ghengis Khan by Miike
                Snow). <br /> <br /> Supple Nam has been engaged in multiple
                advertising campaigns for Honda, Loreal, Sony Ericsson, Toyota,
                Toshiba, Halifax, Marks and Spencer, Mahou-San Miguel, Citroën,
                Orange, BT and many more. As well as working with leading
                international brands, Supple has choreographed leading
                international bands and musicians including Jamiroquai, Chemical
                Brothers, M.I.A, the multi-award winning Asian superstar Jay
                Chou, Bollywood star Hrithik Roshan and Arab music legend Amr
                Diab.
                <br /> <br />
                portrait2 Consistently growing and expanding his art forms,
                Supple has been commissioned to present and direct live
                productions in London, Abu Dhabi, Australia and Korea. Most
                recently Supple Nam created an aerial stunt show Mission Ferrari
                – earning the 2015 Brass Spring Award for “Best Sports Show
                Performance Act”.
                <br /> <br /> As Creative/Artistic Director for Sky 1’s hit TV
                show, “Got to Dance” (2010-2012), Supple Nam supervised each
                presentation, providing the choreography concepts suitable for
                live and television audiences. His involvement in TV includes
                “Britain’s Next Top Model”, MTV’s “Bust a Move”, “So You Think
                You Can Dance” (Australia and UK), BBC’s “Top Of The Pops
                Christmas and New Years special” as well as many more.
                <br /> <br /> As a dancer/performer Supple Nam worked with
                international superstars including Madonna, Destiny Child
                “Survivor” Tour and Janet Jackson’s “Velvet Rope” Australian
                promotional appearance. He has also performed at internationally
                acclaimed arts venues: The National Theatre, English National
                Opera, Sadler’s Wells and The Place to name but a few. <br />{" "}
                <br /> Supple Nam has been a vital judge for industry award
                ceremonies such as the D&AD and UKMVA awards. His achievements
                has also made him panel for the Royal Ballet Drafts work at The
                Royal Opera House along side other international acclaimed
                choreographers/directors Matthew Bourne, Emma Southworth,
                Shobana Jeyasingh and Cathy Marston.
              </Text>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 3 }} order={{ base: 1, sm: 2 }}>
            <Stack align={"center"}>
              <Image
                src={bgImage}
                style={{
                  height: "auto",
                  width: isSM ? "50%" : "100%",
                  marginBottom: "30px",
                }}
                alt="test"
              />

              <Stack w={isSM ? "40%" : "100%"}>
                {awards.map((award, index) => {
                  return (
                    <Group wrap="nowrap" gap={4}>
                      <IconTrophy
                        color="white"
                        strokeWidth={0.9}
                        size={18}
                        style={{ width: "10%" }}
                      />
                      <Text
                        c="white"
                        fz={12}
                        w="90%"
                        style={{ fontStyle: "italic" }}
                      >
                        {award.name}
                      </Text>
                    </Group>
                  );
                })}
              </Stack>

              <Button
                mt="xl"
                color="white"
                size={isSM ? "sm" : "md"}
                variant="outline"
                w="fit-content"
                mb={{ base: "xl", sm: "0" }}
                onClick={() =>
                  window.open(
                    "https://supplenam.com/contenido/uploads/2018/08/Supple-Nam-CV-Web-2018-1.pdf"
                  )
                }
              >
                My CV
              </Button>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>

      <Space h={200} />

      <FooterSocial />
    </>
  );
}

export default page;
