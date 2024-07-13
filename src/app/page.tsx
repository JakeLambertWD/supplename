"use client";

import FullScreenCarousel from "./FullScreenCarousel";
import LandingSection from "./LandingSection";
import NavigationBar from "./NavigationBar";
import WorkSection from "./WorkSection";

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
