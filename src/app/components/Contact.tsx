import {
  Button,
  Center,
  Flex,
  Group,
  Overlay,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { theme } from "../utils/theme";
import { IconMail, IconPhone } from "@tabler/icons-react";
import classes from "./Contact.module.css";

function Contact() {
  // ! Error: Hydration failed because the initial UI does not match what was rendered on the server.

  return (
    <Center h="100vh" w="100%" bg="#060e11">
      <Flex w={1150} h={600} c="white">
        <Stack w="50%" justify="center" mt={-40}>
          <Text fz={45} fw={600}>
            Let's talk!
          </Text>
          <Text>Ask me anything or just say Hi 👋</Text>
          <Group mt={50} mb={10}>
            <IconMail size={25} strokeWidth={1.1} />
            <Text>supple@supplenam.com</Text>
          </Group>
          <Group>
            <IconPhone size={25} strokeWidth={1.1} />
            <Text>+44 (0)7752 68 77 30</Text>
          </Group>
        </Stack>

        <Stack w="50%" justify="center">
          <Group mb={10}>
            <TextInput
              w="45%"
              label="NAME"
              placeholder="Enter your name"
              variant="unstyled"
              classNames={{
                input: classes.input,
                label: classes.label,
                wrapper: classes.wrapper,
              }}
            />

            <TextInput
              w="45%"
              label="EMAIL"
              placeholder="Enter your email"
              variant="unstyled"
              classNames={{
                input: classes.input,
                label: classes.label,
                wrapper: classes.wrapper,
              }}
            />
          </Group>
          <Textarea
            w="93%"
            c="white"
            label="MESSAGE"
            placeholder="Hi there.."
            variant="unstyled"
            classNames={{
              root: classes.root,
              input: classes.input,
              label: classes.label,
            }}
          />
          <Button
            color={theme.colors?.primary?.[1]}
            size="md"
            w="fit-content"
            mt="xl"
          >
            Say hello!
          </Button>
        </Stack>
      </Flex>
    </Center>
  );
}

export default Contact;
