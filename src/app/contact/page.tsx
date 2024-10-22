"use client";

import Contact from "../components/Contact";
import { FooterSocial } from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import SocialIcons from "../components/SocialIcons";

function page() {
  return (
    <>
      <NavigationBar />

      <Contact />
      <SocialIcons />

      <FooterSocial />
    </>
  );
}

export default page;
