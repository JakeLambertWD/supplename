"use client";

import { Button, Flex, NavLink } from "@mantine/core";
import { navigationLinks, SM } from "../utils/constants";
import Image from "next/image";
import { useHover, useMediaQuery } from "@mantine/hooks";
import { theme } from "../utils/theme";
import { useRouter, usePathname } from "next/navigation";
import navLogo from "/public/supple-logo-home.png";
import classes from "./css/NavigationBar.module.css";
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";

function NavigationBar({ open }: any) {
  const router = useRouter();
  const pathname = usePathname();
  const isSM = useMediaQuery(`(max-width: ${SM})`);
  const [scrolled, setScrolled] = useState(false);

  const { hovered, ref } = useHover();
  const navigateToPage = (href: string) => router.push(href);

  // change navbar color on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > (pathname === "/" ? 200 : 0)) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Flex
      w="100vw"
      pos="fixed"
      c={theme?.colors?.primary?.[4]}
      justify="space-between"
      align="center"
      px={{ base: "sm", md: 50 }}
      py="lg"
      bg={scrolled ? theme?.colors?.primary?.[9] : "transparent"}
      style={{ zIndex: 45 }}
    >
      <Image
        onClick={() => navigateToPage("/")}
        src={navLogo}
        width={isSM ? 150 : 200}
        height={isSM ? 37 : 50}
        quality={100}
        alt="image"
        style={{ cursor: "pointer" }}
      />

      <Dropdown hiddenFromSm />

      <Flex fz="xl" gap="lg" mr="70px" visibleFrom="sm">
        {navigationLinks.map((link) => {
          const isActive = pathname.includes(link.href);

          return (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              h={40}
              pb={35}
              c="white"
              fz="60px"
              fw={600}
              childrenOffset={28}
              className={classes.noHoverColor}
              classNames={{ label: classes.label }}
              style={{
                borderBottom: isActive
                  ? `2px solid ${theme?.colors?.primary?.[1]} !important`
                  : "none",
              }}
            />
          );
        })}
      </Flex>

      <Flex gap="sm" display={{ base: "none", sm: "flex" }}>
        <Button
          ref={ref as any}
          onClick={open}
          variant="outline"
          color="white"
          size="md"
          style={{
            outline: `3px solid ${theme.colors?.primary?.[1]}`,
            outlineOffset: hovered ? "2px" : "-3px",
            transition: "outline-offset 200ms ease",
          }}
        >
          Show Reel
        </Button>
      </Flex>
    </Flex>
  );
}

export default NavigationBar;
