"use client";

import { useState } from "react";
import Works from "../components/Works";

function page() {
  const [active, setActive] = useState(0);

  return (
    <>
      <Works active={active} setActive={setActive} />
    </>
  );
}

export default page;
