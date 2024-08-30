"use client";

import { Space, Text } from "@mantine/core";
import Contact from "../components/Contact";
import { FooterSocial } from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import SocialIcons from "../components/SocialIcons";

function page() {
  return (
    <>
      <NavigationBar />
      <Space h={100} />

      <Text fz={50} ta="center" c="white">
        Contact
      </Text>
      <Contact />
      <SocialIcons />

      <FooterSocial />
    </>
  );
}

export default page;
