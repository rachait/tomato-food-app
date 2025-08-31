# 🍅 Tomato Food App

A modern, responsive food ordering web application built with React and Vite. Features a sleek design with comprehensive menu browsing, cart functionality, and order management.


## 🚀 Features

- **Modern UI/UX Design** - Purple/indigo color scheme with smooth animations
- **Responsive Layout** - Works perfectly on desktop, tablet, and mobile
- **Interactive Menu** - Browse food categories with real-time filtering
- **Shopping Cart** - Add/remove items with quantity management
- **User Authentication** - Login popup with user session management
- **Order Management** - View and track your orders
- **Mobile-First Design** - Optimized for all screen sizes

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite 5
- **Routing**: React Router DOM 6 (HashRouter for GitHub Pages)
- **Styling**: Modern CSS with custom properties
- **Font**: Inter font family
- **Build Tool**: Vite with React plugin
- **Linting**: ESLint with React rules

## 🎨 Design System

- **Colors**: Purple/indigo primary, orange secondary, green accent
- **Typography**: Inter font with consistent sizing
- **Spacing**: 8px base unit system
- **Shadows**: Multiple elevation levels
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Mobile-first approach

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Quick Start
```bash
# Clone the repository
git clone https://github.com/rachait/tomato-food-app.git
cd tomato-food-app

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# http://localhost:5173
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📁 Project Structure

```
tomato-food-app/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar/         # Navigation bar
│   │   ├── Header/         # Hero section
│   │   ├── FoodItem/       # Food card component
│   │   ├── FoodDisplay/    # Food grid display
│   │   ├── ExploreMenu/    # Category selection
│   │   ├── Footer/         # Site footer
│   │   └── LoginPopup/     # Authentication modal
│   ├── pages/              # Page components
│   │   ├── Home/           # Landing page
│   │   ├── Cart/           # Shopping cart
│   │   ├── MyOrders/       # Order history
│   │   └── PlaceOrder/     # Checkout page
│   ├── Context/            # React context providers
│   ├── assets/             # Images and static files
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # App entry point
│   └── index.css           # Global styles
├── public/                 # Public assets
├── dist/                   # Production build
└── package.json            # Dependencies and scripts
```

## 🌐 Deployment

### GitHub Pages (Current)
- **URL**: https://rachait.github.io/tomato-food-app
- **Branch**: `gh-pages` (auto-deployed via GitHub Actions)
- **Router**: HashRouter for static hosting compatibility

### Other Deployment Options

#### Docker
```bash
# Build image
docker build -t tomato-app .

# Run container
docker run -p 5173:5173 tomato-app
```

#### Docker Compose
```bash
docker-compose up --build
```

#### Kubernetes
```bash
kubectl apply -f Service.yaml
kubectl apply -f deployment.yaml
```

## 🔧 Development

### Key Features Implemented
- ✅ Modern responsive design
- ✅ Interactive food menu with categories
- ✅ Shopping cart functionality
- ✅ User authentication system
- ✅ Order management
- ✅ Mobile-optimized layout
- ✅ Smooth animations and transitions
- ✅ GitHub Pages deployment

### Recent Updates
- **Fixed white screen issue** on GitHub Pages
- **Implemented HashRouter** for static hosting
- **Added GitHub Actions** for automatic deployment
- **Enhanced responsive design** for all devices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is provided as-is for learning and demonstration purposes.

## 👨‍💻 Author

**Rachait** - [GitHub Profile](https://github.com/rachait)

---

⭐ **Star this repository if you found it helpful!**