import { ActionIcon, CopyButton, rem, Tooltip } from "@mantine/core";
import { IconCheck, IconCopy } from "@tabler/icons-react";

function Copy({ value }: { value: string }) {
  return (
    <CopyButton value={value} timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip
          label={copied ? "Copied" : "Copy"}
          withArrow
          position="right"
          fz={12}
        >
          <ActionIcon
            color={copied ? "teal" : "gray"}
            variant="subtle"
            onClick={copy}
            size={15}
          >
            {copied ? (
              <IconCheck style={{ width: rem(16) }} />
            ) : (
              <IconCopy style={{ width: rem(16) }} />
            )}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  );
}

export default Copy;
