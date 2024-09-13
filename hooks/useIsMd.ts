import { useMediaQuery } from "@mantine/hooks";

export const useIsMD = () => {
  return useMediaQuery(`(max-width: 992px)`);
};
