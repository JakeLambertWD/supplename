"use client";

import Works from "../components/WorksPage/Works";
import NavigationBar from "../components/NavigationBar";
import { FooterSocial } from "../components/Footer";
import { Space } from "@mantine/core";

function page() {
  return (
    <>
      <NavigationBar />
      <Space h={100} />
      <Works />
      <FooterSocial />
    </>
  );
}

export default page;
