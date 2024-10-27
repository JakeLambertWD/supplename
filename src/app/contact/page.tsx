"use client";

import Contact from "../components/ContactPage/Contact";
import { FooterSocial } from "../components/Common/Footer";
import NavigationBar from "../components/Common/NavigationBar";
import SocialIcons from "../components/Common/SocialIcons";

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
