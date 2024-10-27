import { Stack } from "@mantine/core";
import {
  IconBrandFacebookFilled,
  IconBrandLinkedin,
  IconBrandTwitterFilled,
  IconBrandVimeo,
  IconBrandYoutubeFilled,
} from "@tabler/icons-react";

function SocialIcons() {
  return (
    <Stack
      w="fit-content"
      pos="fixed"
      align="center"
      gap={25}
      p="md"
      right={40}
      bottom="60%"
      style={{ zIndex: 35 }}
      display={{ base: "none", sm: "flex" }}
    >
      <IconBrandTwitterFilled
        color="white"
        strokeWidth={1}
        size={22}
        onClick={() => window.open("https://twitter.com/supplenam")}
        style={{ cursor: "alias" }}
      />
      <IconBrandFacebookFilled
        color="white"
        strokeWidth={1}
        size={22}
        onClick={() =>
          window.open("https://www.facebook.com/supple.nam.choreographer")
        }
        style={{ cursor: "alias" }}
      />
      <IconBrandYoutubeFilled
        color="white"
        strokeWidth={1}
        size={22}
        onClick={() => window.open("https://www.youtube.com/@supplenam1464")}
        style={{ cursor: "alias" }}
      />
      <IconBrandLinkedin
        color="white"
        strokeWidth={1.5}
        size={26}
        // fill="white"
        onClick={() =>
          window.open("https://www.linkedin.com/in/supple-nam-b89b4114/")
        }
        style={{ cursor: "alias" }}
      />
    </Stack>
  );
}

export default SocialIcons;
