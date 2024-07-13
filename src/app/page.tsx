"use client";

import FullScreenCarousel from "./components/FullScreenCarousel";
import LandingSection from "./components/LandingSection";
import NavigationBar from "./components/NavigationBar";
import WorkSection from "./components/WorkSection";

export default function Home() {
  return (
    <>
      <FullScreenCarousel />
      <NavigationBar />
      <LandingSection />
      <WorkSection />
    </>
  );
}
