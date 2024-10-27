"use client";

import Carousel from "./components/Carousel";
import Contact from "./components/Contact";

import SocialIcons from "./components/SocialIcons";
import NavigationBar from "./components/NavigationBar";
import { FooterSocial } from "./components/Footer";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <Carousel />
      <Contact />
      <SocialIcons />
      <FooterSocial />
    </>
  );
}
