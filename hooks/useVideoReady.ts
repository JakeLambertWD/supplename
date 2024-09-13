import { useCallback } from "react";

// Hook to handle video ready event
export const useVideoReady = () => {
  const onReady = useCallback((event: any) => {
    event.target.playVideo();
  }, []);

  return { onReady };
};
