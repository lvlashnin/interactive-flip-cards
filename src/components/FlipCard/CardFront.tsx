import React from "react";
import cn from "classnames";
import type { CardData } from "../../types";
import { categoryConfig } from "../../data/icons";

interface CardFrontProps {
  card: CardData;
  onToggleFavorite: (e: React.MouseEvent, id: string) => void;
}

export const CardFront: React.FC<CardFrontProps> = ({
  card,
  onToggleFavorite,
}) => {
  const currentCategory = categoryConfig[card.category];
  return (
    <div className="card-face card-front">
      <div className="card-image-wrapper">
        <img src={card.image} alt={card.title} className="card-image" />
        <button
          className={cn("favorite-btn", { "is-active": card.isFavorite })}
          onClick={(e) => onToggleFavorite(e, card.id)}
          title="Toggle Favorite"
        >
          {card.isFavorite ? "⭐" : "☆"}
        </button>
      </div>

      <div className="card-content front-content">
        <div className="category-row">
          <span className="category-badge">
            {currentCategory?.icon} {currentCategory?.label}
          </span>
        </div>
        <h3 className="card-title centered">{card.title}</h3>
      </div>
    </div>
  );
};
