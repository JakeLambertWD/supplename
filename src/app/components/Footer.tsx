import { Container, Group, Text, Stack, Divider } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandVimeo,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { theme } from "../utils/theme";

export function FooterSocial() {
  return (
    <Container pb={50} c="white" mt={150}>
      <Group justify="center" gap={120}>
        <Text fz={14} fw={400} c={theme?.colors?.primary?.[1]} visibleFrom="sm">
          EST. 2004
        </Text>
        <Stack align="center" justify="center" gap={3}>
          <Text fz={12}>© 2024 | Supple Nam</Text>
          <Text fz={12}>Powered By Mantine UI</Text>
          <Divider
            size="sm"
            w={70}
            my={3}
            color={theme?.colors?.primary?.[1]}
          />
          <Text fz={12}>supple@supplenam.com</Text>
        </Stack>
        <Group visibleFrom="sm">
          <IconBrandTwitter
            color="white"
            strokeWidth={1}
            size={22}
            onClick={() => window.open("https://twitter.com/supplenam")}
            style={{ cursor: "alias" }}
          />
          <IconBrandFacebook
            color="white"
            strokeWidth={1}
            size={22}
            onClick={() =>
              window.open("https://www.facebook.com/supple.nam.choreographer")
            }
            style={{ cursor: "alias" }}
          />
          <IconBrandYoutube
            color="white"
            strokeWidth={1}
            size={22}
            onClick={() =>
              window.open("https://www.youtube.com/@supplenam1464")
            }
            style={{ cursor: "alias" }}
          />
          <IconBrandVimeo
            color="white"
            strokeWidth={1}
            size={22}
            onClick={() =>
              window.open("https://vimeo.com/search?q=supple%20nam")
            }
            style={{ cursor: "alias" }}
          />
        </Group>
      </Group>
    </Container>
  );
}
