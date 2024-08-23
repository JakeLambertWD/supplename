"use client";

import { Burger, Button, Flex, NavLink } from "@mantine/core";
import { navigationLinks } from "../utils/constants";
import Image from "next/image";
import { useDisclosure, useHover } from "@mantine/hooks";
import { theme } from "../utils/theme";
import { useRouter, usePathname } from "next/navigation";
import navLogo from "/public/supple-logo-home.png";
import classes from "./css/NavigationBar.module.css";

function NavigationBar() {
  const router = useRouter();
  const pathname = usePathname();

  const [opened, { toggle }] = useDisclosure();
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
      style={{ zIndex: 5 }}
    >
      <Image
        onClick={() => navigateToPage("/")}
        src={navLogo}
        width={200}
        height={50}
        quality={100}
        alt="image"
        style={{ cursor: "pointer" }}
      />

      <Burger
        opened={opened}
        onClick={toggle}
        color="white"
        mr={38}
        mt="md"
        display={{ base: "flex", sm: "none" }}
      />

      <Flex fz="xl" gap="lg" mr="70px" display={{ base: "none", sm: "flex" }}>
        {navigationLinks.map((link) => {
          const isActive = pathname === link.href;

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
                  ? "2px solid #c41e3a !important"
                  : "none",
              }}
            />
          );
        })}
      </Flex>

      <Flex gap="sm" display={{ base: "none", sm: "flex" }}>
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
