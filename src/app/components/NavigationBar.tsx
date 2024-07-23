"use client";

import { Button, Flex, NavLink } from "@mantine/core";
import { navigationLinks } from "../utils/constants";
import Image from "next/image";
import { useHover } from "@mantine/hooks";
import { theme } from "../utils/theme";
import { useRouter } from "next/navigation";

function NavigationBar({ logo }: { logo: string }) {
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
      style={{ zIndex: 5 }}
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
          return (
            <NavLink
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
