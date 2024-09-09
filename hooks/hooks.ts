import { useMediaQuery } from "@mantine/hooks";
import { useCallback, useMemo } from "react";

// Hook to handle video ready event
export const useVideoReady = () => {
  const onReady = useCallback((event: any) => {
    event.target.playVideo();
  }, []);

  return { onReady };
};

export const useFormattedDescription = (description: string) => {
  const workDescription = description.replace(/\s+/g, "-").toLowerCase();

  return workDescription;
};

export const useIsSM = () => {
  return useMediaQuery(`(max-width: 768px)`);
};

export const useIsMD = () => {
  return useMediaQuery(`(max-width: 992px)`);
};
