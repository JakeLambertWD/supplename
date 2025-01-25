"use client";

import NavigationBar from "../components/Common/NavigationBar";
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
import { FooterSocial } from "../components/Common/Footer";
import { IconTrophy } from "@tabler/icons-react";
import { theme } from "../utils/theme";
import { useEffect, useState } from "react";
import { AwardPageProps } from "../utils/typings";
import { getAwards, getBio, getPageInfo } from "../lib/sanity";
import { PortableText } from "next-sanity";
import { useMediaQuery } from "@mantine/hooks";
import { SM } from "../utils/constants";

function page() {
  const isSM = useMediaQuery(`(max-width: ${SM})`);
  const [awards, setAwards] = useState<AwardPageProps[]>([]);
  const [bio, setBio] = useState("");
  const [pageInfo, setPageInfo] = useState<any>({});
  const [buttonContent, setButtonContent] = useState("My CV");

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
                fz={15}
                mb="md"
                c={theme.colors?.primary?.[1]}
              >
                supple nam
              </Text>
              <Text>Director . Choreography . Editor</Text>
              <Text fz="sm" mb="xl" style={{ textAlign: "justify" }}>
                {/* @ts-ignore */}
                <PortableText value={bio} />
              </Text>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 3 }} order={{ base: 1, sm: 2 }}>
            <Stack align={"center"}>
              <Flex
                w={{ base: 190, sm: 220 }}
                h={{ base: 190, sm: 220 }}
                pos="relative"
              >
                <Image
                  src={pageInfo.bioImage}
                  quality={100}
                  objectFit="cover"
                  layout="fill"
                  alt="Image"
                />
              </Flex>

              <Button
                color={theme.colors?.primary?.[1]}
                mt="md"
                size="sm"
                w={100}
                onClick={() => {
                  window.open(
                    "https://supplenam.com/contenido/uploads/2018/08/Supple-Nam-CV-Web-2018-1.pdf"
                  );
                  setButtonContent("👍");
                }}
              >
                {buttonContent}
              </Button>

              <Stack w={isSM ? "40%" : "70%"} mt="sm">
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
