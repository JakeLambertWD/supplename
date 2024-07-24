"use client";

import Contact from "../components/Contact";
import { FooterSocial } from "../components/Footer";
import NavigationBar from "../components/NavigationBar";

function page() {
  return (
    <>
      <NavigationBar />
      <Contact />
      <FooterSocial />
    </>
  );
}

export default page;
