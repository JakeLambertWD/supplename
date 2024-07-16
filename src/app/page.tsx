"use client";

import FullScreenCarousel from "./components/FullScreenCarousel";
import LandingSection from "./components/LandingSection";
import LatestWork from "./components/LatestWork";
import NavigationBar from "./components/NavigationBar";
import ShowReel from "./components/ShowReel";
import VideoPlayer from "./components/VideoPlayer";

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      <VideoPlayer />
      {/* <FullScreenCarousel /> */}
      {/* <LandingSection /> */}
      {/* <ShowReel /> */}
      {/* <LatestWork /> */}
    </div>
  );
}
