"use client";

import { Space, Stack, Text } from "@mantine/core";
import NavigationBar from "../components/NavigationBar";
import { FooterSocial } from "../components/Footer";
import { useGetAwards } from "../../../hooks/getAwards";
import Award from "../components/Award";

function page() {
  const { awards } = useGetAwards();

  return (
    <>
      <NavigationBar />
      <Space h={100} />

      <Text fz={50} c="white" ta="center" mb={50}>
        Awards
      </Text>
      <Stack gap={0}>
        {awards?.map((award, index) => {
          const isOdd = index % 2 === 0;

          return <Award award={award} isOdd={isOdd} />;
        })}
      </Stack>

      <FooterSocial />
    </>
  );
}

export default page;
