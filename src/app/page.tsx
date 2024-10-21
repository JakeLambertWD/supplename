"use client";

import Carousel from "./components/Carousel";
import { useEffect, useState } from "react";
import LandingSection from "./components/LandingSection";
import Contact from "./components/Contact";
import SocialIcons from "./components/SocialIcons";
import NavigationBar from "./components/NavigationBar";
import { FooterSocial } from "./components/Footer";
import { getPageInfo } from "./lib/sanity";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./components/css/Project.module.css";
import YouTube from "react-youtube";
import { opts } from "./utils/constants";
import { useVideoReady } from "../../hooks/useVideoReady";

export default function Home() {
  const [pageInfo, setPageInfo] = useState<any>({});

  const { onReady } = useVideoReady();

  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    const fetchData = async () => {
      const pageInfo = await getPageInfo();
      setPageInfo(pageInfo[0]);
    };

    fetchData();
  }, []);

  return (
    <>
      <NavigationBar open={open} />
      <Carousel />
      <Contact />
      <SocialIcons />
      <FooterSocial />

      <Modal
        opened={opened}
        onClose={close}
        fullScreen
        radius={0}
        classNames={{
          content: classes.content,
          header: classes.header,
          close: classes.close,
        }}
        transitionProps={{ transition: "fade", duration: 500 }}
      >
        <div className={classes.videoResponsive}>
          <YouTube videoId="8nssMbahow0" opts={opts} onReady={onReady} />
        </div>
      </Modal>
    </>
  );
}
