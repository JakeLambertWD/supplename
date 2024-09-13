import { useMediaQuery } from "@mantine/hooks";

export const useIsSM = () => {
  return useMediaQuery(`(max-width: 768px)`);
};
