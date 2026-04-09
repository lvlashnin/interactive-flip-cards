import type { CardData } from "../types";

export const initialCards: CardData[] = [
  {
    id: "1",
    title: "Джиммі МакГілл",
    image: "https://placehold.co/400x600/f59e0b/ffffff?text=Jimmy",
    description:
      "Харизматичний адвокат з гнучкими моральними принципами. Зробить усе заради перемоги.",
    stats: { power: 60, defense: 80, speed: 90, rarity: "legendary" },
    category: "air",
    isFavorite: false,
  },
  {
    id: "2",
    title: "Кім Векслер",
    image: "https://placehold.co/400x600/3b82f6/ffffff?text=Kim",
    description:
      "Видатна юристка, яка постійно розривається між правилами та жагою до авантюр.",
    stats: { power: 75, defense: 95, speed: 70, rarity: "epic" },
    category: "water",
    isFavorite: true,
  },
  {
    id: "3",
    title: "Чак МакГілл",
    image: "https://placehold.co/400x600/8b5cf6/ffffff?text=Chuck",
    description:
      "Геніальний знавець прецедентного права. Твердо вірить у святість закону.",
    stats: { power: 90, defense: 40, speed: 20, rarity: "rare" },
    category: "earth",
    isFavorite: false,
  },
  {
    id: "4",
    title: "Майк Ермантраут",
    image: "https://placehold.co/400x600/374151/ffffff?text=Mike",
    description:
      "Колишній поліцейський. Мовчазний, смертоносний професіонал, який вирішує будь-які проблеми.",
    stats: { power: 95, defense: 90, speed: 60, rarity: "legendary" },
    category: "earth",
    isFavorite: false,
  },
  {
    id: "5",
    title: "Лало Саламанка",
    image: "https://placehold.co/400x600/ef4444/ffffff?text=Lalo",
    description:
      "Чарівний, але надзвичайно небезпечний та непередбачуваний стратег картелю.",
    stats: { power: 95, defense: 75, speed: 85, rarity: "epic" },
    category: "fire",
    isFavorite: false,
  },
];
