import { WorkProps } from "@/app/utils/typings";
import { useMediaQuery } from "@mantine/hooks";
import { useCallback, useMemo } from "react";

// Hook to handle video ready event
export const useVideoReady = () => {
  const onReady = useCallback((event: any) => {
    event.target.playVideo();
  }, []);

  return { onReady };
};

export const useFormattedDescription = (work: WorkProps) => {
  const workDescription = useMemo(() => {
    return work.description.replace(/\s+/g, "-").toLowerCase();
  }, [work.description]);

  return workDescription;
};

export const useIsSM = () => {
  return useMediaQuery(`(max-width: 768px)`);
};
