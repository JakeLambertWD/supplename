import { Flex, Group, Stack, Text } from "@mantine/core";
import {
  IconBadge4k,
  IconPlayerPlayFilled,
  IconTrophy,
} from "@tabler/icons-react";
import { theme } from "../../utils/theme";

interface HoverCardContentProps {
  client: string;
  description: string;
  awardName?: string;
  movementGenres: { name: string }[];
  matchingAward?: any;
}

function HoverCardContent({
  client,
  description,
  awardName,
  movementGenres,
  matchingAward,
}: HoverCardContentProps) {
  return (
    <Stack gap={0} px="lg">
      <Group justify="space-between">
        <Text c={theme?.colors?.primary?.[5]}>{client}</Text>
        <IconPlayerPlayFilled
          size={25}
          color={theme?.colors?.primary?.[5]}
          style={{ marginTop: 10 }}
        />
      </Group>
      <Group
        wrap="nowrap"
        style={{ overflowX: "auto", scrollbarWidth: "none" }}
      >
        <Text
          fz="xl"
          c={theme?.colors?.primary?.[5]}
          mb="xs"
          style={{ whiteSpace: "nowrap" }}
        >
          {description}
        </Text>
        <IconBadge4k
          size={25}
          color="white"
          strokeWidth={0.6}
          style={{ marginBottom: 8 }}
        />
      </Group>

      {
        // @ts-ignore
        matchingAward && (
          <Group wrap="nowrap">
            <Text
              c="orange"
              fz="xs"
              w={"auto"}
              style={{
                whiteSpace: "nowrap",
                fontStyle: "italic",
                overflowX: "scroll",
                scrollbarWidth: "none",
              }}
            >
              {awardName}
            </Text>
            <IconTrophy
              size={23}
              strokeWidth={0.8}
              color="orange"
              style={{ marginTop: -5 }}
            />
          </Group>
        )
      }

      <Flex
        gap={10}
        mt="xs"
        mb="lg"
        w={310}
        wrap="nowrap"
        style={{ overflowX: "auto", scrollbarWidth: "none" }}
      >
        {movementGenres?.map((genre: any, index: number) => {
          return (
            <Group key={index} gap={10} wrap="nowrap">
              <Text fz="md" c="white" style={{ whiteSpace: "nowrap" }}>
                {genre.name}
              </Text>

              {index !== movementGenres.length - 1 && (
                <Text c={theme?.colors?.primary?.[5]}>-</Text>
              )}
            </Group>
          );
        })}
      </Flex>
    </Stack>
  );
}

export default HoverCardContent;
