"use client";

import Carousel from "./components/Carousel";
import LatestWork from "./components/LatestWork";
import { useEffect, useState } from "react";

export default function Home() {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % 5);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Carousel active={active} />
      <LatestWork active={active} setActive={setActive} />

      {/* <LandingSection /> */}
    </>
  );
}
