"use client";

import Works from "../components/WorksPage/Works";
import NavigationBar from "../components/Common/NavigationBar";
import { FooterSocial } from "../components/Common/Footer";
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
