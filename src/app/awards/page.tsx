"use client";

import { Space, Stack } from "@mantine/core";
import NavigationBar from "../components/Common/NavigationBar";
import { FooterSocial } from "../components/Common/Footer";
import { useGetAwards } from "../../../hooks/getAwards";
import Award from "../components/AwardsPage/Award";

function page() {
  const { awards } = useGetAwards();

  return (
    <>
      <NavigationBar />
      <Space h={100} />

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
