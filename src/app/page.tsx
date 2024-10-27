"use client";

import Carousel from "./components/Carousel";
import Contact from "./components/ContactPage/Contact";

import SocialIcons from "./components/Common/SocialIcons";
import NavigationBar from "./components/Common/NavigationBar";
import { FooterSocial } from "./components/Common/Footer";

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
