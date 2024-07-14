"use client";

import Contact from "./components/Contact";
import FullScreenCarousel from "./components/FullScreenCarousel";
import LandingSection from "./components/LandingSection";
import NavigationBar from "./components/NavigationBar";
import ShowReel from "./components/ShowReel";

export default function Home() {
  return (
    <>
      <FullScreenCarousel />
      <NavigationBar />
      <LandingSection />
      <ShowReel />
      {/* <Contact /> */}
    </>
  );
}
