"use client";

import { useEffect, useState } from "react";
import Works from "../components/Works";
import NavigationBar from "../components/NavigationBar";
import { getPageInfo } from "../lib/sanity";

function page() {
  const [active, setActive] = useState(0);

  return (
    <>
      <NavigationBar />
      <Works active={active} setActive={setActive} />
    </>
  );
}

export default page;
