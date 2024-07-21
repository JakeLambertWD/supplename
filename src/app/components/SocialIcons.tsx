import { Stack } from "@mantine/core";
import {
  IconBrandDiscordFilled,
  IconBrandTiktokFilled,
  IconBrandTwitterFilled,
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
      style={{ zIndex: 1000 }}
    >
      <IconBrandTwitterFilled color="white" strokeWidth={1} size={22} />
      <IconBrandDiscordFilled color="white" strokeWidth={1} size={22} />
      <IconBrandYoutubeFilled color="white" strokeWidth={1} size={22} />
      <IconBrandTiktokFilled color="white" strokeWidth={1} size={22} />
    </Stack>
  );
}

export default SocialIcons;
