import { Collapse, Flex, NavLink, Text } from "@mantine/core";
import { navigationLinks } from "./utils/constants";
import FullScreenCarousel from "./FullScreenCarousel";
import {
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandTwitter,
  IconChevronDown,
} from "@tabler/icons-react";
import classes from "./home.module.css";

export default function Home() {
  return (
    <>
      <FullScreenCarousel />
      <Flex
        w="100vw"
        pos="absolute"
        c="#dadada"
        justify="space-between"
        align="center"
        py="md"
        px={70}
      >
        <Text fz="xl">Supple Nam</Text>

        <Flex>
          {navigationLinks.map((link) => {
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
              ></NavLink>
            );
          })}
        </Flex>

        <Flex gap="sm">
          <IconBrandInstagram strokeWidth={0.8} />
          <IconBrandYoutube strokeWidth={0.8} />
          <IconBrandTwitter strokeWidth={0.8} />
        </Flex>
      </Flex>
    </>
  );
}
