import React, { useState } from "react";
import cn from "classnames";
import type { CardData } from "../../types";
import { CardFront } from "./CardFront";
import { CardBack } from "./CardBack";
import "./FlipCard.css";

interface FlipCardProps {
  card: CardData;
  onToggleFavorite: (id: string) => void;
  onDelete: (id: string) => void;
}

export const FlipCard: React.FC<FlipCardProps> = ({
  card,
  onToggleFavorite,
  onDelete,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => setIsFlipped(true);
  const handleMouseLeave = () => setIsFlipped(false);

  const handleToggleFavorite = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    onToggleFavorite(id);
  };

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this card?")) {
      onDelete(id);
    }
  };

  return (
    <div
      className={cn("flip-card", { "is-favorite-card": card.isFavorite })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={cn("flip-card-inner", { "is-flipped": isFlipped })}>
        <CardFront card={card} onToggleFavorite={handleToggleFavorite} />
        <CardBack
          card={card}
          onToggleFavorite={handleToggleFavorite}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};
