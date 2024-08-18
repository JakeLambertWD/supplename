"use client";

import Carousel from "./components/Carousel";
import { useEffect, useState } from "react";
import LandingSection from "./components/LandingSection";
import Contact from "./components/Contact";
import SocialIcons from "./components/SocialIcons";
import NavigationBar from "./components/NavigationBar";
import { FooterSocial } from "./components/Footer";
import { getPageInfo } from "./lib/sanity";

export default function Home() {
  const [pageInfo, setPageInfo] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      const pageInfo = await getPageInfo();
      setPageInfo(pageInfo[0]);
    };

    fetchData();
  }, []);

  return (
    <>
      <NavigationBar />
      <Carousel />
      <LandingSection jobTitle={pageInfo.jobTitle} />
      <Contact />
      <SocialIcons />
      <FooterSocial />
    </>
  );
}
