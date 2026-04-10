import { useState, useCallback } from "react";
import type { CardData, UseDragAndDropReturn } from "../types";

export const useDragAndDrop = (
  cards: CardData[],
  setCards: React.Dispatch<React.SetStateAction<CardData[]>>,
): UseDragAndDropReturn => {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleDragStart = useCallback(
    (e: React.DragEvent<HTMLDivElement>, index: number) => {
      setDraggedIndex(index);

      if (e.dataTransfer) {
        e.dataTransfer.effectAllowed = "move";
      }
    },
    [],
  );

  const handleDragOver = useCallback(
    (e: React.DragEvent<HTMLDivElement>, index: number) => {
      e.preventDefault();

      if (e.dataTransfer) {
        e.dataTransfer.dropEffect = "move";
      }

      if (draggedIndex === null || draggedIndex === index) {
        return;
      }

      setCards((prevCards) => {
        const newCards = [...prevCards];
        const draggedCard = newCards[draggedIndex];

        newCards.splice(draggedIndex, 1);
        newCards.splice(index, 0, draggedCard);

        return newCards;
      });

      setDraggedIndex(index);
    },
    [draggedIndex, setCards],
  );

  const handleDragEnd = useCallback(() => {
    setDraggedIndex(null);
  }, []);

  return {
    draggedIndex,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
  };
};
