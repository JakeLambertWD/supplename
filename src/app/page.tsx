"use client";

import Carousel from "./components/Carousel";
import LatestWork from "./components/LatestWork";
import { useEffect, useState } from "react";
import LandingSection from "./components/LandingSection";
import Works from "./works/Works";
import Contact from "./components/Contact";

export default function Home() {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % 4);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Carousel active={active} />
      <LatestWork active={active} setActive={setActive} />
      <LandingSection />
      <Contact />
    </>
  );
}
