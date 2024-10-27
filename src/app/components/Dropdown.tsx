import { Burger, Flex, Menu, Text } from "@mantine/core";
import { navigationLinks } from "../utils/constants";
import { useDisclosure } from "@mantine/hooks";
import { useRouter, usePathname } from "next/navigation";
import { theme } from "../utils/theme";

function Dropdown({
  hiddenFromSm,
  visibleFromSm,
}: {
  hiddenFromSm?: boolean;
  visibleFromSm?: boolean;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure();

  return (
    <Menu shadow="xl" width={120}>
      <Menu.Target>
        <Burger
          mr={-2}
          opened={opened}
          onClick={toggle}
          aria-label="Toggle navigation"
          color="white"
          size="sm"
          hiddenFrom={hiddenFromSm ? "sm" : "none"}
          visibleFrom={visibleFromSm ? "sm" : "none"}
          style={{ position: "absolute", top: 29, right: 40 }}
        />
      </Menu.Target>

      <Menu.Dropdown
        py={20}
        px={10}
        hiddenFrom={hiddenFromSm ? "sm" : "none"}
        visibleFrom={visibleFromSm ? "sm" : "none"}
      >
        <Flex fz="xl" gap={20} direction="column" w="100%">
          {navigationLinks.map((link, index) => {
            const isActive = pathname === link.href;

            return (
              <Text
                key={index}
                fz="md"
                fw={600}
                ta="center"
                c={isActive ? theme?.colors?.primary?.[1] : "black"}
                onClick={() => router.push(link.href)}
                style={{ cursor: "pointer" }}
              >
                {link.label}
              </Text>
            );
          })}
        </Flex>
      </Menu.Dropdown>
    </Menu>
  );
}

export default Dropdown;
