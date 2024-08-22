import {
  Button,
  Flex,
  Group,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { theme } from "../utils/theme";
import { IconMail, IconPhone } from "@tabler/icons-react";
import classes from "../components/css/Contact.module.css";
import Copy from "./Copy";

function Contact() {
  // ! Error: Hydration failed because the initial UI does not match what was rendered on the server.

  return (
    <Flex justify="center" w="100%" h="100vh" mb={-150} bg="#141414">
      <Flex w={1150} h={600} c="white">
        <Stack w="50%" justify="center">
          <Text fz={45} fw={600}>
            Let's talk!
          </Text>
          <Text>Ask me anything or just say Hi 👋</Text>
          <Group mt={50} mb={10}>
            <IconMail size={25} strokeWidth={1.1} />
            <Text>supple@supplenam.com</Text>
            <Copy value="supple@supplenam.com" />
          </Group>
          <Group>
            <IconPhone size={25} strokeWidth={1.1} />
            <Text>+447752687730</Text>
            <Copy value="+447752687730" />
          </Group>
        </Stack>

        <Stack w="50%" justify="center">
          <Group mb={10}>
            <TextInput
              w="45%"
              label="NAME"
              placeholder="Enter your name"
              variant="unstyled"
              className={classes.contactFormField}
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
              input: classes.input,
              label: classes.label,
              root: classes.root,
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
    </Flex>
  );
}

export default Contact;
