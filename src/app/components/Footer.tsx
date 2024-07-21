import {
  Container,
  Group,
  ActionIcon,
  rem,
  Flex,
  Text,
  Stack,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import logo from "/public/supple-logo-home.png";
import Image from "next/image";
import { navigationLinks } from "../utils/constants";

export function FooterSocial() {
  return (
    <Group
      w="100vw"
      align="center"
      pb={100}
      gap={40}
      justify="center"
      bg="#060e11"
    >
      <Text c="white" fz="sm" mr="xl">
        © 2024 By Supple Nam. All rights reserved.
      </Text>

      <Image src={logo} width={200} height={50} quality={100} alt="Norway" />

      <Group gap={50}>
        {navigationLinks.map((link, index) => (
          <Text key={index} c="white" tt="uppercase" fz={12}>
            {link.label}
          </Text>
        ))}
      </Group>
    </Group>
  );
}
