import React from "react";
import cn from "classnames";
import type { CardData } from "../../types";
import { FlipCard } from "../FlipCard/FlipCard";

import "./CardGrid.css";

interface CardGridProps {
  cards: CardData[];
  onToggleFavorite: (id: string) => void;
  onDelete: (id: string) => void;
  draggedIndex: number | null;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
  onDragEnd: () => void;
}

export const CardGrid: React.FC<CardGridProps> = ({
  cards,
  onToggleFavorite,
  onDelete,
  draggedIndex,
  onDragStart,
  onDragOver,
  onDragEnd,
}) => {
  return (
    <div className="card-grid">
      {cards.map((card, index) => {
        const isDragged = draggedIndex === index;

        return (
          <div
            key={card.id}
            className={cn("grid-item", { "is-dragged": isDragged })}
            draggable
            onDragStart={(e) => onDragStart(e, index)}
            onDragOver={(e) => onDragOver(e, index)}
            onDragEnd={onDragEnd}
          >
            <FlipCard
              card={card}
              onToggleFavorite={onToggleFavorite}
              onDelete={onDelete}
            />
          </div>
        );
      })}
    </div>
  );
};
