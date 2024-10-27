import { useRef, useState } from "react";

import { Card, HoverCard } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import HoverCardContent from "./HoverCardContent";
import WorkCard from "./WorkCard";
import { useGetAwards } from "../../../../hooks/getAwards";
import { useFormattedDescription } from "../../../../hooks/useFormattedDescription";
import { theme } from "../../utils/theme";
import { WorkProps } from "../../utils/typings";
import { SM } from "../../utils/constants";

interface ProjectProps {
  work: WorkProps;
}

function Work({ work }: ProjectProps) {
  const router = useRouter();
  const workDescription =
    work.description && useFormattedDescription(work.description);
  const isSM = useMediaQuery(`(max-width: ${SM})`);

  const [isVideoReady, setIsVideoReady] = useState(false);

  const { awards } = useGetAwards();

  const handleCanPlayThrough = () => {
    setIsVideoReady(true);
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = work?.startTime; // Set the start time in seconds
    }
  };

  // Find a matching award based on work description
  const matchingAward = awards.find(
    (award) => award.work.description === work.description
  );

  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      {isSM ? (
        <WorkCard
          workDescription={workDescription}
          tileImage={work.tileImage}
        />
      ) : (
        <HoverCard
          width={280}
          shadow="xl"
          openDelay={400}
          offset={-320}
          position="bottom"
          radius={4}
          transitionProps={{ duration: 500, transition: "pop" }}
        >
          <HoverCard.Target>
            <Card
              shadow="xl"
              p={0}
              radius={0}
              w={{ base: "100%", sm: 300 }}
              h={{ base: "auto", sm: 300 }}
              pos="relative"
              onClick={() => {
                router.push(`/works/${workDescription}`);
              }}
              style={{ cursor: "pointer" }}
            >
              <motion.img
                src={work.tileImage}
                alt="Image"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </Card>
          </HoverCard.Target>
          <HoverCard.Dropdown
            bg={theme?.colors?.primary?.[8]}
            w={350}
            h={"auto"}
            p={0}
            onClick={() => {
              router.push(`/works/${workDescription}`);
            }}
            style={{ border: "none", zIndex: 10, cursor: "pointer" }}
          >
            {isVideoReady ? (
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                onLoadedMetadata={handleLoadedMetadata}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              >
                <source src={work.videoURL} type="video/mp4" />
              </video>
            ) : (
              <motion.img
                src={work.tileImage}
                alt="Image"
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                  width: 350,
                  height: 200,
                }}
              />
            )}

            {/* By preloading the video and ensuring it is ready to play before displaying it, you can prevent the black flash that occurs when the user hovers over the card.  */}
            <video
              style={{ display: "none" }}
              onCanPlayThrough={handleCanPlayThrough}
            >
              <source src={work.videoURL} type="video/mp4" />
            </video>

            <HoverCardContent
              client={work.client}
              description={work.description}
              awardName={matchingAward?.name}
              movementGenres={work.movementGenres}
              matchingAward={matchingAward}
            />
          </HoverCard.Dropdown>
        </HoverCard>
      )}
    </>
  );
}

export default Work;
