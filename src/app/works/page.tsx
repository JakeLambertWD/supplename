"use client";

import { useState } from "react";
import Works from "../components/Works";
import NavigationBar from "../components/NavigationBar";

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
