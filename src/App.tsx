import { useState } from "react";
import { initialCards } from "./data/cards";
import { FlipCard } from "./components/FlipCard/FlipCard";

function App() {
  const [cards, setCards] = useState(initialCards);

  const handleToggleFavorite = () => {};

  const handleDelete = () => {};

  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {cards.map((card) => (
        <div key={card.id}>
          <FlipCard
            card={card}
            onToggleFavorite={handleToggleFavorite}
            onDelete={handleDelete}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
