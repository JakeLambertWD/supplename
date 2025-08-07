import { Group, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { WorkProps } from "../../utils/typings";
import classes from "../css/Project.module.css";
import { IconX } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { Carousel } from "@mantine/carousel";

type WorkImagesProps = {
  work?: WorkProps;
  handlePauseVideo: () => void;
};

function WorkImages({ work, handlePauseVideo }: WorkImagesProps) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Group mt={30} justify="center" pt={0}>
      {work?.workImages?.map((image: any, index: number) => (
        <>
          <motion.img
            key={index}
            src={image}
            onClick={() => {
              handlePauseVideo();
              open();
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
                    <img key={index} src={image} width="73%" alt={image.alt} />
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
