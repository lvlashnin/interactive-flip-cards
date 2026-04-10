import { useState } from "react";
import cn from "classnames";
import { initialCards } from "./data/cards";
import { CardGrid } from "./components/CardGrid/CardGrid";
import { AddCardForm } from "./components/AddCardForm/AddCardForm";
import { useDragAndDrop } from "./hooks/useDragAndDrop";
import type { CardData } from "./types";
import "./App.css";
import { ThemeToggle } from "./components/ThemeToggle/ThemeToggle";

function App() {
  const [cards, setCards] = useState<CardData[]>(initialCards);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const { draggedIndex, handleDragStart, handleDragOver, handleDragEnd } =
    useDragAndDrop(cards, setCards);

  const favoriteCount = cards.filter((card) => card.isFavorite).length;

  const handleToggleFavorite = (id: string) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, isFavorite: !card.isFavorite } : card,
      ),
    );
  };

  const handleDelete = (id: string) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  const handleAddCard = (newCardData: Omit<CardData, "id" | "isFavorite">) => {
    const newCard: CardData = {
      ...newCardData,
      id: crypto.randomUUID(),
      isFavorite: false,
    };
    setCards((prevCards) => [newCard, ...prevCards]);
    setIsFormOpen(false);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div>
          <h1 className="app-title">Card Collection</h1>
          <p className="app-subtitle">Hover or tap a card to flip it</p>
        </div>

        <div className="header-controls">
          <div className="favorite-counter">
            ⭐ {favoriteCount} / {cards.length}
          </div>
          <ThemeToggle />
        </div>
      </header>

      <div className="controls-section">
        <button
          onClick={() => setIsFormOpen(!isFormOpen)}
          className={cn("toggle-form-btn", {
            "is-open": isFormOpen,
            "is-closed": !isFormOpen,
          })}
        >
          {isFormOpen ? "❌ Close Form" : "✨ Add Card"}
        </button>
      </div>

      {isFormOpen && <AddCardForm onAddCard={handleAddCard} />}

      <div className="hint-box">
        💡 <strong>Підказка:</strong> Перетягуйте картки, щоб змінити їх порядок
      </div>

      <CardGrid
        cards={cards}
        onToggleFavorite={handleToggleFavorite}
        onDelete={handleDelete}
        draggedIndex={draggedIndex}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      />
    </div>
  );
}

export default App;
