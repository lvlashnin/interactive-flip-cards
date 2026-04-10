import type { Category } from "../types";

export const categoryConfig: Record<Category, { icon: string; label: string }> =
  {
    fire: { icon: "🔥", label: "Fire" },
    water: { icon: "💧", label: "Water" },
    earth: { icon: "🌍", label: "Earth" },
    air: { icon: "💨", label: "Air" },
  };
