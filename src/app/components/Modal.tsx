import {
  Badge,
  Burger,
  Divider,
  Flex,
  Group,
  Modal as MantineModal,
  Menu,
  NavLink,
  ScrollArea,
  Stack,
  Text,
} from "@mantine/core";
import { theme } from "../utils/theme";
import classes from "../components/css/Project.module.css";
import Image from "next/image";
import { IconChevronLeft, IconChevronRight, IconX } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { navigationLinks } from "../utils/constants";
import { usePathname } from "next/navigation";

function Modal({
  modalOpened,
  close,
  worksByGenre,
  activeWork,
  setActiveWork,
}: {
  modalOpened: boolean;
  close: () => void;
  worksByGenre: any;
  activeWork: number;
  setActiveWork: (index: number) => void;
}) {
  const [opened, { toggle }] = useDisclosure();
  const pathname = usePathname();

  const work = worksByGenre[activeWork];

  // split the overview into paragraphs
  const paragraphs = work.overview
    .split("\n")
    .filter((paragraph: string) => paragraph.trim() !== "");

  const nextWork = () => {
    if (activeWork < worksByGenre.length - 1) {
      setActiveWork(activeWork + 1);
    } else {
      setActiveWork(0);
    }
  };

  const prevWork = () => {
    if (activeWork > 0) {
      setActiveWork(activeWork - 1);
    } else {
      setActiveWork(worksByGenre.length - 1);
    }
  };

  return (
    <MantineModal
      opened={modalOpened}
      onClose={close}
      fullScreen
      size="100vw"
      radius={0}
      p={0}
      overlayProps={{
        backgroundOpacity: 0,
        blur: 0,
      }}
      classNames={{
        content: classes.content,
        header: classes.header,
        body: classes.body,
        inner: classes.inner,
        close: classes.close,
      }}
      transitionProps={{
        transition: "fade",
        duration: 600,
        timingFunction: "linear",
      }}
      closeButtonProps={{
        icon: <IconX size={40} stroke={1.5} />,
      }}
    >
      <div style={{ height: "92vh" }}>
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
                    href={link.href}
                    label={link.label}
                    h={30}
                    // pb={30}
                    c={isActive ? "#c41e3a" : "black"}
                    fz="60px"
                    fw={600}
                    ta="center"
                    childrenOffset={28}
                    className={classes.noHoverColor}
                    classNames={{ label: classes.label }}
                  />
                );
              })}
            </Flex>
          </Menu.Dropdown>
        </Menu>

        <Flex h="60%" py={0} px={100} c="white">
          <IconChevronLeft
            size={40}
            color={"white"}
            onClick={() => prevWork()}
            strokeWidth={1.5}
            style={{ cursor: "pointer", marginRight: 20 }}
          />

          <Flex
            w="70%"
            mr="xl"
            pos="relative"
            style={{
              borderLeft: "2px solid black",
              borderColor: theme?.colors?.primary?.[1],
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            >
              <source
                src={
                  "https://cdn.sanity.io/files/0s60p7qc/suppledb/a2dc5a480192216464712651ccdedc7ed50e7585.mp4"
                }
                type="video/mp4"
              />
            </video>

            <Text fz="xl" pos="absolute" top={20} left={50}>
              {work.description}
            </Text>
            {work.movementGenres && (
              <Group fz="xs" pos="absolute" bottom={20} right={20}>
                {work.movementGenres.map((genre: any, index: number) => {
                  return (
                    <Badge
                      key={index}
                      color={theme?.colors?.primary?.[1]}
                      tt="capitalize"
                      size="md"
                    >
                      {genre.name}
                    </Badge>
                  );
                })}
              </Group>
            )}
          </Flex>

          <Stack w="30%">
            <Divider size="sm" mb={0} color={theme?.colors?.primary?.[1]} />
            <Text fz="xl">{work.client}</Text>

            {work.team && (
              <Group gap={10}>
                {work.team.map((member: any, index: number) => (
                  <Group key={index}>
                    <Text fz="11px" fw={600}>
                      <span style={{ opacity: 0.5, fontStyle: "italic" }}>
                        {member.role}:
                      </span>{" "}
                      {member.name}
                    </Text>
                  </Group>
                ))}
              </Group>
            )}

            <ScrollArea
              classNames={classes}
              h="100%"
              offsetScrollbars
              scrollbarSize={1}
              scrollHideDelay={0}
              fz="sm"
              pr="sm"
            >
              {paragraphs.map((paragraph: string, index: number) => (
                <p key={index} style={{ marginBottom: "1em" }}>
                  {paragraph}
                </p>
              ))}
            </ScrollArea>
          </Stack>
          <IconChevronRight
            size={40}
            color={"white"}
            onClick={() => nextWork()}
            strokeWidth={1.5}
            style={{ cursor: "pointer", marginLeft: 20 }}
          />
        </Flex>
        <Group
          h="30%"
          pt={0}
          wrap="nowrap"
          style={{
            overflowX: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            // "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {work.workImages?.map((image: any, index: number) => (
            <Image
              key={index}
              src={image.asset.url}
              width={330}
              height={170}
              alt={image.alt}
            />
          ))}
        </Group>
      </div>
    </MantineModal>
  );
}

export default Modal;
