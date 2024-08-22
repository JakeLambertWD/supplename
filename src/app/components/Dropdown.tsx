import { Burger, Flex, Menu, NavLink } from "@mantine/core";
import React from "react";
import { navigationLinks } from "../utils/constants";
import { usePathname } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
import classes from "../components/css/Project.module.css";

function Dropdown() {
  const pathname = usePathname();
  const [opened, { toggle }] = useDisclosure();

  return (
    <Menu shadow="xl" width={120}>
      <Menu.Target>
        <Burger
          mr={10}
          opened={opened}
          onClick={toggle}
          aria-label="Toggle navigation"
          color="white"
          size="sm"
          style={{ position: "absolute", top: 35, right: 40 }}
        />
      </Menu.Target>

      <Menu.Dropdown>
        <Flex fz="xl" gap={5} direction="column" pt={0} pb={20}>
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <NavLink
                key={link.href}
                classNames={{ label: classes.label }}
                className={classes.noHoverColor}
                href={link.href}
                label={link.label}
                h={30}
                // pb={30}
                c={isActive ? "#c41e3a" : "black"}
                fz="60px"
                fw={600}
                ta="center"
                childrenOffset={28}
              />
            );
          })}
        </Flex>
      </Menu.Dropdown>
    </Menu>
  );
}

export default Dropdown;
