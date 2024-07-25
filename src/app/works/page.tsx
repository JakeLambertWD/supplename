"use client";

import { useState } from "react";
import Works from "../components/Works";
import NavigationBar from "../components/NavigationBar";
import { FooterSocial } from "../components/Footer";
import { Space } from "@mantine/core";

function page() {
  const [active, setActive] = useState(0);

  return (
    <>
      <NavigationBar />
      <Space h={100} />
      <Works active={active} setActive={setActive} />
      <FooterSocial />
    </>
  );
}

export default page;
