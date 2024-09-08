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
import { getAwards, getBio, getPageInfo } from "../lib/sanity";
import { useIsSM } from "../../../hooks/hooks";
import { PortableText } from "next-sanity";

function page() {
  const isSM = useIsSM();
  const [awards, setAwards] = useState<AwardPageProps[]>([]);
  const [bio, setBio] = useState("");
  const [pageInfo, setPageInfo] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      const awardsData = await getAwards();
      setAwards(awardsData);

      const bio = await getBio();
      setBio(bio[0].description);

      const pageInfo = await getPageInfo();
      setPageInfo(pageInfo[0]);
    };

    fetchData();
  }, []);

  return (
    <>
      <NavigationBar />
      <Space h={{ base: 100, sm: 130 }} />

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
                {/* @ts-ignore */}
                <PortableText value={bio} />
              </Text>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 3 }} order={{ base: 1, sm: 2 }}>
            <Stack align={"center"}>
              <Image
                src={pageInfo.bioImage}
                width={isSM ? 160 : 220}
                height={isSM ? 190 : 280}
                quality={100}
                alt="Image"
              />

              <Stack w={isSM ? "40%" : "100%"} mt="xl">
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

      <Space h={30} />

      <FooterSocial />
    </>
  );
}

export default page;
