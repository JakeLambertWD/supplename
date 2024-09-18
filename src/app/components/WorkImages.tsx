import { Group, Modal } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { WorkProps } from "../utils/typings";
import classes from "./css/Project.module.css";
import { IconChevronLeft, IconChevronRight, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { SM } from "../utils/constants";

type WorkImagesProps = {
  work?: WorkProps;
};

function WorkImages({ work }: WorkImagesProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const [activeWorkImage, setActiveWorkImage] = useState(0);
  const isSM = useMediaQuery(`(max-width: ${SM})`);

  const nextImage = () => {
    setActiveWorkImage(
      (prevIndex) => (prevIndex + 1) % (work?.workImages?.length || 1)
    );
  };

  const previousImage = () => {
    setActiveWorkImage((prevIndex) =>
      prevIndex === 0 ? (work?.workImages?.length || 1) - 1 : prevIndex - 1
    );
  };

  return (
    <Group mt={30} justify="center" pt={0}>
      {work?.workImages?.map((image: any, index: number) => (
        <>
          <img
            key={index}
            src={image.asset.url}
            onClick={() => {
              open();
              setActiveWorkImage(index);
            }}
            style={{ cursor: "pointer", height: 170, width: "auto" }}
            alt={image.alt}
          />

          <Modal
            opened={opened}
            onClose={close}
            fullScreen
            classNames={{
              content: classes.customModal,
              header: classes.customModal,
            }}
            closeButtonProps={{
              className: classes.noHover,
              icon: <IconX size={30} stroke={1.5} color="white" />,
            }}
          >
            <Group
              w="100%"
              h={isSM ? "auto" : "90vh"}
              align="center"
              justify="space-between"
              gap={0}
            >
              <IconChevronLeft
                size={40}
                color="white"
                onClick={previousImage}
                style={{ cursor: "pointer" }}
              />
              <img
                key={index}
                src={work.workImages[activeWorkImage].asset.url}
                height={"90%"}
                alt={image.alt}
              />
              <IconChevronRight
                size={40}
                color="white"
                onClick={nextImage}
                style={{ cursor: "pointer" }}
              />
            </Group>
          </Modal>
        </>
      ))}
    </Group>
  );
}

export default WorkImages;
