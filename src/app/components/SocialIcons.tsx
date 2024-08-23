import { Stack } from "@mantine/core";
import {
  IconBrandFacebookFilled,
  IconBrandTwitterFilled,
  IconBrandVimeo,
  IconBrandYoutubeFilled,
} from "@tabler/icons-react";

function SocialIcons() {
  return (
    <Stack
      w="fit-content"
      pos="fixed"
      gap={25}
      p="md"
      right={40}
      bottom="60%"
      style={{ zIndex: 5 }}
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
      <IconBrandVimeo
        color="white"
        strokeWidth={1}
        size={22}
        fill="white"
        onClick={() => window.open("https://vimeo.com/search?q=supple%20nam")}
        style={{ cursor: "alias" }}
      />
    </Stack>
  );
}

export default SocialIcons;
