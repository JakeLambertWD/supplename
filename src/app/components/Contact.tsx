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
import { useMediaQuery } from "@mantine/hooks";
import { SM } from "../utils/constants";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const isSM = useMediaQuery(`(max-width: ${SM})`);
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_elmydx7",
          "template_1duzkpz", // Replace with your EmailJS template ID
          form.current,
          "9zQCwzKelfuK0I-28" // Replace with your EmailJS user ID
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Message sent successfully!");
          },
          (error) => {
            console.log(error.text);
            alert("Failed to send the message, please try again.");
          }
        );
    }
  };

  return (
    <Flex
      justify="center"
      w="100%"
      h="90vh"
      mb={-150}
      bg={theme?.colors?.primary?.[9]}
      p={50}
    >
      <Flex
        w={1150}
        h={600}
        c="white"
        direction={isSM ? "column" : "row"}
        gap={{ base: 50, sm: 0 }}
      >
        <Stack
          justify="center"
          w={{ sm: "50%" }}
          ta={{ base: "center", sm: "left" }}
        >
          <Text fz={45} fw={600}>
            Let's talk!
          </Text>
          <Text>Ask me anything or just say Hi 👋</Text>

          <Group mt={50} mb={10} justify={isSM ? "center" : "left"}>
            <IconMail size={25} strokeWidth={1.1} />
            <Text>supple@supplenam.com</Text>
            <Copy value="supple@supplenam.com" />
          </Group>
          <Group justify={isSM ? "center" : "left"}>
            <IconPhone size={25} strokeWidth={1.1} />
            <Text>+447752687730</Text>
            <Copy value="+447752687730" />
          </Group>
        </Stack>

        <Stack justify="center" w={{ sm: "50%" }}>
          <form ref={form} onSubmit={sendEmail}>
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
              type="submit"
            >
              Say hello!
            </Button>
          </form>
        </Stack>
      </Flex>
    </Flex>
  );
}

export default Contact;
