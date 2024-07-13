import { Container, Group, ActionIcon, rem, Flex, Text } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";

export function FooterSocial() {
  return (
    <Flex w="100vw" p="md" align="center" justify="center" bg="#060e11">
      <Text c="white" fz="sm" mr="xl">
        © 2024 By Supple Nam. Proudly created by Mantine UI
      </Text>
      <ActionIcon size="lg" color="gray" variant="subtle">
        <IconBrandTwitter
          style={{ width: rem(18), height: rem(18) }}
          stroke={1.5}
        />
      </ActionIcon>
      <ActionIcon size="lg" color="gray" variant="subtle">
        <IconBrandYoutube
          style={{ width: rem(18), height: rem(18) }}
          stroke={1.5}
        />
      </ActionIcon>
      <ActionIcon size="lg" color="gray" variant="subtle">
        <IconBrandInstagram
          style={{ width: rem(18), height: rem(18) }}
          stroke={1.5}
        />
      </ActionIcon>
    </Flex>
  );
}
