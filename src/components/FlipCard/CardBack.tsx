import React from "react";
import cn from "classnames";
import type { CardData } from "../../types";

interface CardBackProps {
  card: CardData;
  onToggleFavorite: (e: React.MouseEvent, id: string) => void;
  onDelete: (e: React.MouseEvent, id: string) => void;
}

export const CardBack: React.FC<CardBackProps> = ({
  card,
  onToggleFavorite,
  onDelete,
}) => {
  return (
    <div className="card-face card-back">
      <div className="back-header">
        <h3 className="card-title-back">{card.title}</h3>
        <button
          className={cn("favorite-btn-back", {
            "is-active": card.isFavorite,
          })}
          onClick={(e) => onToggleFavorite(e, card.id)}
        >
          {card.isFavorite ? "★" : "☆"}
        </button>
        <span className={cn("rarity-badge", `rarity-${card.stats.rarity}`)}>
          {card.stats.rarity}
        </span>
      </div>

      <p className="card-description-back">{card.description}</p>

      <div className="stats-container">
        <div className="stat-row">
          <div className="stat-header">
            <span className="stat-label">Power</span>
            <span className="stat-val red">{card.stats.power}</span>
          </div>
          <div className="stat-bar-bg">
            <div
              className="stat-bar-fill bg-red"
              style={{ width: `${card.stats.power}%` }}
            ></div>
          </div>
        </div>

        <div className="stat-row">
          <div className="stat-header">
            <span className="stat-label">Defense</span>
            <span className="stat-val blue">{card.stats.defense}</span>
          </div>
          <div className="stat-bar-bg">
            <div
              className="stat-bar-fill bg-blue"
              style={{ width: `${card.stats.defense}%` }}
            ></div>
          </div>
        </div>

        <div className="stat-row">
          <div className="stat-header">
            <span className="stat-label">Speed</span>
            <span className="stat-val green">{card.stats.speed}</span>
          </div>
          <div className="stat-bar-bg">
            <div
              className="stat-bar-fill bg-green"
              style={{ width: `${card.stats.speed}%` }}
            ></div>
          </div>
        </div>
      </div>

      <button className="delete-btn-full" onClick={(e) => onDelete(e, card.id)}>
        🗑️ Delete
      </button>
    </div>
  );
};
