"use client";

import { Space, Text } from "@mantine/core";
import Contact from "../components/Contact";
import { FooterSocial } from "../components/Footer";
import NavigationBar from "../components/NavigationBar";

function page() {
  return (
    <>
      <NavigationBar />
      <Space h={100} />

      <Text fz={50} ta="center" c="white">
        Contact
      </Text>
      <Contact />
      <FooterSocial />
    </>
  );
}

export default page;
