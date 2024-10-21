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
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const isSM = useMediaQuery(`(max-width: ${SM})`);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e: any) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Supple Nam",
      message: message,
    };

    emailjs
      .send(
        "service_un6ldad",
        "template_1duzkpz",
        templateParams,
        "9zQCwzKelfuK0I-28"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );
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
          <form onSubmit={sendEmail}>
            <Group mb={10}>
              <TextInput
                w="45%"
                label="NAME"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
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
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
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
              value={message}
              onChange={(e) => setMessage(e.currentTarget.value)}
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
