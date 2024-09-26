import { Center, Group, Modal, Text } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { WorkProps } from "../utils/typings";
import classes from "./css/Project.module.css";
import { IconChevronLeft, IconChevronRight, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { MD } from "../utils/constants";
import { motion } from "framer-motion";
import { Carousel } from "@mantine/carousel";

type WorkImagesProps = {
  work?: WorkProps;
};

function WorkImages({ work }: WorkImagesProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const [activeWorkImage, setActiveWorkImage] = useState(0);
  const isMD = useMediaQuery(`(max-width: ${MD})`);

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
          <motion.img
            key={index}
            src={image.asset.url}
            onClick={() => {
              open();
              setActiveWorkImage(index);
            }}
            whileHover={{
              scale: 1.08,
            }}
            style={{ cursor: "pointer", height: 170, width: "auto" }}
            alt={image.alt}
          />

          <Modal
            opened={opened}
            onClose={close}
            fullScreen
            classNames={{
              header: classes.headerModal,
              content: classes.customModal,
            }}
            closeButtonProps={{
              className: classes.noHover,
              icon: <IconX size={30} stroke={1.5} color="white" />,
            }}
          >
            <Carousel ta="center" loop>
              {work.workImages.map((image: any, index: number) => {
                return (
                  <Carousel.Slide>
                    <img
                      key={index}
                      src={image.asset.url}
                      width="73%"
                      alt={image.alt}
                    />
                  </Carousel.Slide>
                );
              })}
            </Carousel>
          </Modal>
        </>
      ))}
    </Group>
  );
}

export default WorkImages;
