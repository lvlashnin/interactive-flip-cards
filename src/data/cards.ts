import type { CardData } from "../types";

export const initialCards: CardData[] = [
  {
    id: "1",
    title: "Джиммі МакГілл",
    image:
      "https://wallpapers.com/images/high/better-call-saul-mirror-6deo7n8r9syxpxv4.webp",
    description:
      "Харизматичний адвокат з гнучкими моральними принципами. Зробить усе заради перемоги.",
    stats: { power: 60, defense: 80, speed: 90, rarity: "legendary" },
    category: "air",
    isFavorite: false,
  },
  {
    id: "2",
    title: "Кім Векслер",
    image:
      "https://w0.peakpx.com/wallpaper/853/827/HD-wallpaper-most-memorable-kim-wexler-moments-in-better-call-saul.jpg",
    description:
      "Видатна юристка, яка постійно розривається між правилами та жагою до авантюр.",
    stats: { power: 75, defense: 95, speed: 70, rarity: "epic" },
    category: "water",
    isFavorite: true,
  },
  {
    id: "3",
    title: "Чак МакГілл",
    image:
      "https://static0.colliderimages.com/wordpress/wp-content/uploads/2017/06/better-call-saul-season-3-lantern-slice.jpg?q=70&fit=crop&w=1200&h=628&dpr=1",
    description:
      "Геніальний знавець прецедентного права. Твердо вірить у святість закону.",
    stats: { power: 90, defense: 40, speed: 20, rarity: "rare" },
    category: "earth",
    isFavorite: false,
  },
  {
    id: "4",
    title: "Майк Ермантраут",
    image:
      "https://www.looper.com/img/gallery/the-real-reason-mike-had-the-postcard-taken-down-in-better-call-saul-season-5/intro-1583438102.jpg",
    description:
      "Колишній поліцейський. Мовчазний, смертоносний професіонал, який вирішує будь-які проблеми.",
    stats: { power: 95, defense: 90, speed: 60, rarity: "legendary" },
    category: "earth",
    isFavorite: false,
  },
  {
    id: "5",
    title: "Лало Саламанка",
    image:
      "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/10/Lalo-Better-Call-Saul.jpg?q=50&fit=crop&w=825&dpr=1.5",
    description:
      "Чарівний, але надзвичайно небезпечний та непередбачуваний стратег картелю.",
    stats: { power: 95, defense: 75, speed: 85, rarity: "epic" },
    category: "fire",
    isFavorite: false,
  },
];
