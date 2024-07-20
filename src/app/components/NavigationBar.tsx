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

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

function NavigationBar() {
  return (
    <Flex
      w="100vw"
      pos="absolute"
      c="#dadada"
      justify="space-between"
      align="center"
      px={{ base: "sm", md: 70 }}
      py="lg"
      bg="transparent"
      style={{ zIndex: 2 }}
    >
      {/* <motion.div>
        <Text className={anton.className} fz={35}>
          Supple Nam
        </Text>
      </motion.div> */}

      <Image
        src={logo}
        // fill={true}
        width={200}
        height={50}
        quality={100}
        // objectFit="cover"
        alt="Norway"
      />

      <Flex fz="xl">
        {navigationLinks.map((link) => {
          if (link.label === "Filmmaking") {
            return (
              <Menu>
                <Menu.Target>
                  <NavLink
                    className={classes.noHoverColor}
                    // href={link.href}
                    label={link.label}
                    rightSection={<IconChevronDown size="1rem" stroke={1.5} />}
                    h={40}
                    childrenOffset={28}
                  />
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Item>Commercial</Menu.Item>
                  <Menu.Item>Documentary</Menu.Item>
                  <Menu.Item>Music Video</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            );
          }
          return (
            <NavLink
              className={classes.noHoverColor}
              key={link.href}
              href={link.href}
              label={link.label}
              rightSection={
                link.dropdown && <IconChevronDown size="1rem" stroke={1.5} />
              }
              h={40}
              childrenOffset={28}
            />
          );
        })}
      </Flex>

      <Flex gap="sm">
        <Button variant="outline" color="white" size="md">
          Let's chat
        </Button>
      </Flex>
    </Flex>
  );
}

export default NavigationBar;
