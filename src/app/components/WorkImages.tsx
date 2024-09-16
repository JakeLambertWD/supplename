import { Group, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { WorkProps } from "../utils/typings";
import classes from "./css/Project.module.css";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";

type WorkImagesProps = {
  work?: WorkProps;
};

function WorkImages({ work }: WorkImagesProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const [activeWorkImage, setActiveWorkImage] = useState(0);

  const nextImage = () => {
    if (activeWorkImage < (work?.workImages.length ?? 0) - 1) {
      setActiveWorkImage(activeWorkImage + 1);
    }
  };

  const previousImage = () => {
    if (activeWorkImage > 0) {
      setActiveWorkImage(activeWorkImage - 1);
    }
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
            style={{ cursor: "pointer" }}
            width={330}
            height={170}
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
          >
            <Group w="100%" h="100%" align="center" justify="center" gap={0}>
              <IconChevronLeft
                size={40}
                color="white"
                onClick={previousImage}
                style={{ cursor: "pointer" }}
              />
              <img
                key={index}
                src={work.workImages[activeWorkImage].asset.url}
                width={"80%"}
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
