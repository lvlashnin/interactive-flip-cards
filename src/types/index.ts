export type Category = "fire" | "water" | "earth" | "air";
export type Rarity = "common" | "rare" | "epic" | "legendary";
export type Theme = "light" | "dark";

export interface CardStats {
  power: number;
  defense: number;
  speed: number;
  rarity: Rarity;
}

export interface CardData {
  id: string;
  title: string;
  image: string;
  description: string;
  stats: CardStats;
  category: Category;
  isFavorite: boolean;
}

export interface UseDragAndDropReturn {
  draggedIndex: number | null;
  handleDragStart: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
  handleDragOver: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
  handleDragEnd: () => void;
}

export interface AddCardFormValues {
  title: string;
  image: string;
  category: Category | "";
  rarity: Rarity | "";
  description: string;
  power: number;
  defense: number;
  speed: number;
}
