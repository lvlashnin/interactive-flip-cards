# 🐉 Interactive Flip Cards Collection

A dynamic React + TypeScript application featuring interactive 3D flip cards, native HTML5 drag-and-drop reordering, theme switching, and data persistence.

![Demo Placeholder]()

## ✨ Features

- **3D Flip Animations:** Smooth CSS-based 3D transformations on card hover.
- **Native Drag & Drop:** Reorder cards using the HTML5 Drag and Drop API (no external libraries used).
- **CRUD Operations:** Add new cards via a validated form (`react-hook-form`) and delete existing ones.
- **Favorites System:** Mark cards as favorites with a dedicated counter.
- **Dark/Light Theme:** CSS variables-based theme toggle, persisting user preference in `localStorage`.
- **Audio Effects:** Native Audio API integration playing a sound effect when a card is flipped.
- **Data Persistence:** Cards order, newly added cards, and favorites are automatically saved to `localStorage`.
- **Responsive Design:** Adapts seamlessly from desktop grids to single-column mobile layouts.

## 🛠 Tech Stack

- **Framework:** React 19 (Vite)
- **Language:** TypeScript
- **Forms & Validation:** `react-hook-form`
- **Styling:** CSS 3D Transforms, CSS Custom Properties (Variables)
- **State Management:** React Hooks (`useState`, `useEffect`, Custom Hooks)

## 📁 Project Structure

```text
src/
├── components/
│   ├── AddCardForm/   # Form to add new cards (react-hook-form)
│   ├── CardGrid/      # Grid layout with drag & drop support
│   ├── FlipCard/      # 3D Flip Card implementation (Front & Back)
│   └── ThemeToggle/   # Light/Dark mode switcher
├── hooks/
│   ├── useDragAndDrop.ts  # Logic for HTML5 Drag & Drop
│   ├── useFlipSound.ts    # Audio API wrapper for flip sounds
│   └── useTheme.ts        # Theme switching & localStorage persistence
├── data/
│   └── cards.ts       # Initial card mock data
├── types/
│   └── index.ts       # Global TypeScript interfaces
├── App.tsx            # Main application component
└── App.css            # Global application layout styles

```
