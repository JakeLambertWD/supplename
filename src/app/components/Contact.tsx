import {
  Button,
  Flex,
  Group,
  Overlay,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { theme } from "../utils/theme";

function Contact() {
  return (
    <Flex h="100vh" w="100%" direction="column" align="center" bg="#060e11">
      <Stack w={1000} p="lg" style={{ borderRadius: "15px" }} bg="red">
        <Stack></Stack>
        <Text>Get in touch</Text>
        <Flex>
          <TextInput label="NAME" placeholder="Enter your full name" />
          <TextInput label="EMAIL" placeholder="Enter your email" />
        </Flex>
        <Textarea label="MESSAGE" placeholder="Start typing here" />
        <Button color={theme.colors?.primary?.[0]} size="lg">
          Submit
        </Button>
      </Stack>
    </Flex>
  );
}

export default Contact;
