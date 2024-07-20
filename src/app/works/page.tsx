"use client";

import { Card, Container, Flex, Stack, Tabs, Text } from "@mantine/core";
import classes from "./page.module.css";
import { filmmakingLinks, latestWork } from "../utils/constants";
import { useState } from "react";
import Image from "next/image";
import Works from "./Works";

function page() {
  const [active, setActive] = useState(0);

  return (
    <>
      <Works active={active} setActive={setActive} />
    </>
  );
}

export default page;
