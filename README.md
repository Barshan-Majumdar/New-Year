# 🎆 New Year 2026 Experience

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18-61DAFB.svg?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF.svg?style=flat&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC.svg?style=flat&logo=tailwind-css)

A cinematic, high-fidelity interactive web experience designed to ring in 2026 with style. This project showcases premium UI design, physics-based particle effects, and immersive audio-visual storytelling.

## ✨ Key Features

### 🎨 Visual & UI
-   **Holographic Aurora**: A fluid, living background using custom mesh gradients and noise textures.
-   **"Liquid" Motion**: Floating elements moved by custom Bezier curves for a premium, weightless feel.
-   **Glassmorphism**: High-end glass panels with dynamic light reflections and tilt effects.
-   **Custom Cursor**: A lag-free, physics-based magnetic cursor (Stiffness 2500) for tactile interaction.

### 🧨 Interactive Effects
-   **Cell Bomb Firecrackers**: Chaotic, physics-driven firework bursts with realistic gravity and debris.
-   **Cinematic Typing**: Terminal-style text reveals with a blink-and-wait cursor state.
-   **3D Tilt Cards**: Input forms that react to mouse position in 3D space.

### 🧠 Smart Logic
-   **Random Dialogues**: A curated engine that serves unique motivational quotes for 2026 on every visit.
-   **Audio Reactive**: Integrated sound manager for ambient loops and launch SFX.

## 🛠️ Tech Stack

-   **Core**: [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animation**: [Framer Motion](https://www.framer.com/motion/)
-   **Physics**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
-   **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Barshan-Majumdar/New-Year.git
    cd New-Year
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run Locally**
    ```bash
    npm run dev
    ```

4.  **Build**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
src/
├── components/
│   ├── LandingStage.jsx    # Initial form with floating icons
│   ├── RevealStage.jsx     # Celebration page with firecrackers & quotes
│   ├── CustomCursor.jsx    # Physics-based mouse tracker
│   └── ...
├── utils/
│   └── SoundManager.js     # Audio controller
└── index.css               # Global styles & Tailwind
```

---

<p align="center">
  Made for 2026 by Barshan Majumdar
</p>
