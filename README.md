# Tomato Project (React + Vite)

A modern food ordering SPA built with React and Vite. Features a sleek, contemporary design with a comprehensive menu, item browsing, cart functionality, login popup, and order management pages.

## What we did in this session

- Installed dependencies using `npm ci`.
- Launched the Vite development server with `npm run dev`.
- Verified the app is running at `http://localhost:5173`.
- **Completely redesigned the website with a modern UI/UX**:
  - Updated color scheme to a modern purple/indigo palette
  - Implemented Inter font family for better typography
  - Added CSS custom properties for consistent design tokens
  - Redesigned navbar with sticky positioning and backdrop blur
  - Created modern gradient header with improved visual hierarchy
  - Updated food cards with hover effects and better spacing
  - Redesigned menu categories with interactive elements
  - Modernized footer with gradient background
  - Added responsive design improvements
  - Implemented smooth animations and transitions

## Tech stack

- React 18
- Vite 5 (React plugin)
- React Router DOM 6
- ESLint (React + Hooks + Refresh plugins)
- Modern CSS with custom properties and Flexbox/Grid

## Design Features

- **Modern Color Palette**: Purple/indigo primary colors with orange accents
- **Typography**: Inter font family for clean, readable text
- **Responsive Design**: Mobile-first approach with breakpoints
- **Smooth Animations**: CSS transitions and keyframe animations
- **Interactive Elements**: Hover effects, focus states, and micro-interactions
- **Accessibility**: Proper contrast ratios and semantic HTML
- **Performance**: Optimized CSS with custom properties

## Getting started

Prerequisites:
- Node.js 18+ and npm

Install and run locally:
1. Install dependencies:
   ```bash
   npm ci
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open the app:
   - Local: `http://localhost:5173`
   - Network (shown in terminal): e.g., `http://<your-lan-ip>:5173`

## Available scripts

- `npm run dev` — Start Vite in development mode.
- `npm run build` — Build for production to `dist/`.
- `npm run preview` — Preview the production build locally.
- `npm run lint` — Run ESLint on the project.

## Project structure (high level)

```
src/
  assets/           # images and static assets
  components/       # UI components (Navbar, Header, FoodItem, etc.)
  Context/          # React context (StoreContext)
  pages/            # Pages (Home, Cart, MyOrders, PlaceOrder)
  App.jsx           # App root
  main.jsx          # Vite entry
  index.css         # Global styles with design system
public/             # static public assets
vite.config.js      # Vite configuration
Dockerfile          # Container build (optional)
docker-compose.yml  # Local container orchestration (optional)
deployment.yaml     # K8s deployment (optional)
Service.yaml        # K8s service (optional)
pod.yaml            # K8s pod example (optional)
```

## Design System

The project uses a comprehensive design system with CSS custom properties:

- **Colors**: Primary (purple), Secondary (orange), Accent (green)
- **Typography**: Inter font family with consistent sizing
- **Spacing**: 8px base unit system
- **Shadows**: Multiple elevation levels
- **Border Radius**: Consistent rounded corners
- **Transitions**: Standardized animation durations

## Docker (optional)

Build and run with Docker:
```bash
docker build -t tomato-app .
docker run -p 5173:5173 tomato-app
```

Using docker-compose:
```bash
docker-compose up --build
```

Note: The Docker image should expose the correct port and run the dev/preview server accordingly. For a production image, prefer `npm run build` and serve `dist/` with a static server (e.g., Nginx or `vite preview`).

## Kubernetes (optional)

Manifests are provided as examples: `deployment.yaml`, `Service.yaml`, and `pod.yaml`. Update image names and configuration as needed before applying:
```bash
kubectl apply -f Service.yaml
kubectl apply -f deployment.yaml
```

## License

This project is provided as-is for learning/demo purposes.
