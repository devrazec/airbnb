# Interactive Map & Region-Based Filtering

The project includes dynamic map controls, multi-region selection, responsive property cards, and real-time map filtering.

This project demonstrates a practical use of geospatial UI/UX, combining map visualization, custom markers, and filterable datasets to create a smooth and highly interactive browsing experience.

# 🚀 Purpose of the Project

- Interactive map UX patterns
- Region-based geospatial filtering
- Integration of Leaflet with a modern React app
- Smooth client-side filtering of large datasets
- Designing components that sync map state + UI state

## It serves as a strong template for

- Real estate apps
- Airbnb-style property listings
- Geospatial dashboards
- Tourism or business location directories
- Any project requiring filtering on a map

# ✨ Features

## 🗺️ Interactive Leaflet Map

- Clean, responsive, and fast map using React-Leaflet
- Custom markers with hover effects
- Smooth zoom + pan animations
- Adjustable light/dark mode support
- Dynamic reset-view and "locate me" map tools

## 📍 Region-Based Filtering

- Multi-select region filter with checkboxes
- Ability to combine Lisbon, Porto, Faro, etc.
- "All regions" option with automatic zoom reset
- Map automatically fits bounds of selected regions

## 🧭 Smart Auto-Zoom Behavior

- Selecting All zooms to a national view (zoom 7)
- Selecting specific areas zooms to show all chosen regions
- Map center & zoom stored in global context

## 🛏️ Property Cards (Airbnb-style)

- Clean grid layout with responsive mobile support
- Superhost badge
- Heart/favorite system with local state
- Hover highlight synced with map markers
- Old & new pricing display

# 🧰 Tech Stack

| Technology | Purpose |
|------------|---------|
| React	| Frontend UI framework |
| React-Leaflet |	Map engine |
| Leaflet	| Geospatial rendering & marker system |
| Reactstrap | UI components |
| Context API	| Global state management |
| CSS	| Styling & layout |

# Commands

````

npx create-vite@latest . -- --template react

Select a framework: React
Select a variant: TypeScript
Use rolldown-vite (Experimental)?: No
Install with npm and start now? Yes

npm i -S react-router-dom
npm i -D gh-pages

npm i -S leaflet
npm i -S leaflet-draw
npm i -S react-leaflet@next
npm i -S react-leaflet-cluster
npm i -S react-leaflet-draw

npm i -D prettier eslint-plugin-prettier eslint-config-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react

npm i -S flag-icons
npm i -D @types/aos

Setup package.json

  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "lint": "eslint 'src/**/*.{ts,tsx}'",
    "lint:fix": "eslint 'src/**/*.{ts,tsx}' --fix",
    "format": "prettier --write 'src/**/*.{ts,tsx,js,jsx,json,css,scss,md}'",
    "deploy": "gh-pages -d dist"
  },

Copy files from other project
.env
eslint.config.js
.prettierrc
.prettierignore

-- UI
npm i -S aos bootstrap bootstrap-icons reactstrap

-- Deploy
npm run predeploy
npm run deploy

php -S localhost:8080

````

# Web Interface

http://localhost:3000

![Pic1](./src/assets/img/pic1.png)

# Demo

https://devrazec.github.io/airbnb
https://youtu.be/Ltwa3tM8gbI

# Project

https://github.com/devrazec/airbnb