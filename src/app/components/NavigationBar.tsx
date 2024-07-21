"use client";

import { Button, Flex, Menu, NavLink, Text } from "@mantine/core";
import { navigationLinks } from "../utils/constants";
import {
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandTwitter,
  IconChevronDown,
} from "@tabler/icons-react";
import classes from "./home.module.css";
import { Anton } from "next/font/google";
import logo from "/public/supple-logo-home.png";
import Image from "next/image";
import { useHover } from "@mantine/hooks";
import { theme } from "../utils/theme";
import { useRouter } from "next/navigation";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

function NavigationBar() {
  const router = useRouter();
  const { hovered, ref } = useHover();

  const navigateToPage = (href: string) => router.push(href);

  return (
    <Flex
      w="100vw"
      pos="absolute"
      c="#dadada"
      justify="space-between"
      align="center"
      px={{ base: "sm", md: 50 }}
      py="lg"
      bg="transparent"
      style={{ zIndex: 2 }}
    >
      <Image
        onClick={() => navigateToPage("/")}
        src={logo}
        width={200}
        height={50}
        quality={100}
        alt="Norway"
        style={{ cursor: "pointer" }}
      />

      <Flex fz="xl">
        {navigationLinks.map((link) => {
          // if (link.label === "Filmmaking") {
          //   return (
          //     <Menu>
          //       <Menu.Target>
          //         <NavLink
          //           className={classes.noHoverColor}
          //           label={link.label}
          //           rightSection={<IconChevronDown size="1rem" stroke={1.5} />}
          //           h={40}
          //           childrenOffset={28}
          //         />
          //       </Menu.Target>

          //       <Menu.Dropdown>
          //         <Menu.Item>Commercial</Menu.Item>
          //         <Menu.Item>Documentary</Menu.Item>
          //         <Menu.Item>Music Video</Menu.Item>
          //       </Menu.Dropdown>
          //     </Menu>
          //   );
          // }
          return (
            <NavLink
              className={classes.noHoverColor}
              key={link.href}
              href={link.href}
              label={link.label}
              h={40}
              childrenOffset={28}
            />
          );
        })}
      </Flex>

      <Flex gap="sm">
        <Button
          ref={ref as any}
          onClick={() => navigateToPage("/contact")}
          variant="outline"
          color="white"
          size="md"
          style={{
            outline: `3px solid ${theme.colors?.primary?.[1]}`,
            outlineOffset: hovered ? "2px" : "-3px",
            transition: "outline-offset 200ms ease",
          }}
        >
          Let's chat
        </Button>
      </Flex>
    </Flex>
  );
}

export default NavigationBar;
