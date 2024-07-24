import React from "react";
import NavigationBar from "../components/NavigationBar";
import { Container, Flex, Group, Space, Stack, Text } from "@mantine/core";
import Image from "next/image";
import bgImage from "/public/bio.jpg";

function page() {
  return (
    <div style={{ height: "100vh" }}>
      <NavigationBar />
      <Space h={130} />

      <Container size="lg">
        <Flex>
          {/* TODO: use Grid here instead */}
          <Flex w="60%">
            <Image
              src={bgImage}
              style={{
                height: "auto",
                width: "100%",
              }}
              alt="test"
            />
          </Flex>

          <Stack w="40%" c="white" px={60}>
            <Text tt="uppercase" fz={30}>
              supple nam
            </Text>
            <Text>Director . Choreography . Editor</Text>
            <Text>
              I am a talented and experienced video editor with a passion for
              creating engaging and entertaining content. I have a strong
              background in video editing and production, with over 10 years of
              experience working on a wide range of projects.
              <br />
              <br /> I am skilled in all aspects of video production, from
              concept development and storyboarding to editing and
              post-production. I am proficient in a variety of editing software,
              including Adobe Premiere Pro, Final Cut Pro, and Avid Media
              Composer. <br />
              <br />I am a creative thinker with a keen eye for detail, and I am
              dedicated to producing high-quality work that exceeds my clients'
              expectations. I am a team player who thrives in a collaborative
              environment, and I am always looking for new opportunities to
              expand my skills and grow as a professional.
            </Text>
          </Stack>
        </Flex>
      </Container>
    </div>
  );
}

export default page;
