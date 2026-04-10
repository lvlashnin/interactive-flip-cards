import { useRef, useEffect, useCallback } from "react";

export const useFlipSound = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("public/sounds/flip-g.wav");
    audioRef.current.volume = 0.3;
  }, []);

  const playFlip = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;

      audioRef.current.play().catch((error) => {
        console.warn("browser policy:", error);
      });
    }
  }, []);

  return { playFlip };
};
