"use client";

import Carousel from "./components/Carousel";
import LatestWork from "./components/LatestWork";
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
      const data = await getPageInfo();
      setPageInfo(data[0]);
    };
    fetchData();
  }, []);

  return (
    <>
      <NavigationBar logo={pageInfo.imageURL} />
      <Carousel />
      <LandingSection jobTitle={pageInfo.jobTitle} />
      <Contact />
      <SocialIcons />
      <FooterSocial />
    </>
  );
}
