import { useState } from "react";
import { initialCards } from "./data/cards";
import { useDragAndDrop } from "./hooks/useDragAndDrop";
import { CardGrid } from "./components/CardGrid/CardGrid";

function App() {
  const [cards, setCards] = useState(initialCards);
  const { draggedIndex, handleDragStart, handleDragOver, handleDragEnd } =
    useDragAndDrop(cards, setCards);

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

  return (
    <div className="app-container" style={{ padding: "40px 20px" }}>
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
          Card Collection
        </h1>
        <p style={{ color: "var(--text-secondary)" }}>
          💡 Hint: Drag and drop cards to reorder them. Hover to flip.
        </p>
      </header>

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
