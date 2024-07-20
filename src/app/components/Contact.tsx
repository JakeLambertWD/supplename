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
import imageBg from "/public/continuation.webp";
import Image from "next/image";

function Contact() {
  return (
    <Center h="100vh" w="100%" bg="#060e11">
      <Stack w={1000} h={600} p={80} style={{ borderRadius: "15px" }}>
        <Text c="white" fz={35} fw={600}>
          Get in touch
        </Text>
        <Flex>
          <TextInput label="NAME" placeholder="Enter your full name" />
          <TextInput label="EMAIL" placeholder="Enter your email" />
        </Flex>
        <Textarea label="MESSAGE" placeholder="Start typing here" />
        <Button color={theme.colors?.primary?.[1]} size="lg" w="fit-content">
          Submit
        </Button>
      </Stack>
    </Center>
  );
}

export default Contact;
