import { Card } from "@mantine/core";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface WorkCardProps {
  workDescription: string;
  tileImage: string;
}

function WorkCard({ workDescription, tileImage }: WorkCardProps) {
  const router = useRouter();

  return (
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
        src={tileImage}
        alt="Image"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
      />
    </Card>
  );
}

export default WorkCard;
