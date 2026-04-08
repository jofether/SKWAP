# Skwap - Skill Trading Platform

A streamlined, mobile-first React web app for students to discover and trade skills with each other through a matching interface and credit-based system.

## 🎨 Design System

### Color Palette
- **Background**: White
- **Primary Text & Headers**: Dark Blue (#0d47a1)
- **Primary Buttons & Accents**: Bright Cyan (#00bcd4)
- **Accent Light**: Light Cyan (#e0f7fa)

### Key Design Features
- Mobile-first approach (optimized for 390x844px screens)
- Rounded corners throughout for a friendly, modern feel
- Clean, minimalist interface
- Smooth transitions and interactions

## 🚀 Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Icon library

## 📱 Three Core Screens

### 1. Homepage
The landing screen featuring:
- Personalized greeting ("Hello, Student!")
- Prominent search bar with icon
- Horizontally scrollable skill categories
- "Find Your Match" call-to-action button
- Recommended students with view profile buttons
- Quick statistics showcase

### 2. Matching Screen
Tinder-like skill-swap discovery interface:
- Large profile cards with student information
- Skills offered vs. skills sought
- Match Synergy percentage indicator
- Circular action buttons (Pass/Connect)
- Smooth card transitions
- Match counter and progress

### 3. Credits/Wallet Screen
Virtual currency tracking:
- Gradient-styled balance card
- Visual balance display with earned/spent breakdown
- "Offer a Skill to Earn" and "Request a Skill" action buttons
- Transaction history with scrollable activity list
- Color-coded transactions (green for earnings, red for spending)

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Project Structure

```
src/
├── main.tsx           # Entry point
├── App.tsx            # Main app with page routing
├── index.css          # Global styles (Tailwind)
└── pages/
    ├── Homepage.tsx   # Skill discovery & categories
    ├── Matching.tsx   # Skill-swap partner matching
    └── Credits.tsx    # Virtual currency wallet
```

## 🎯 Features

✅ Mobile-optimized responsive design
✅ Skill discovery with category filtering
✅ AI-powered match synergy calculations
✅ Virtual credit system for skill trades
✅ User rating and review system
✅ Transaction history tracking
✅ Smooth page transitions and animations

## 🎨 Tailwind Custom Components

Custom Tailwind components defined in `src/index.css`:

- `.btn-primary` - Primary action button (cyan)
- `.btn-secondary` - Secondary action button (light cyan)
- `.card` - Card container with shadow and border
- `.card-interactive` - Interactive card with hover effects
- `.input-field` - Styled form input
- `.heading-lg/md/sm` - Typography hierarchy
- `.badge-accent` - Cyan accent badges
- `.badge-success` - Green success badges

## 📱 Mobile Optimization

The app is built with mobile-first design principles:
- Optimized for small screens (390x844px)
- Touch-friendly button sizes (48x48px minimum)
- Safe area insets for notched devices
- Smooth scrolling and transitions
- Responsive typography

## 🗂️ Navigation Flow

The app uses a simple three-page architecture with client-side routing:

- **Homepage** → Entry point, category browsing, "Find Your Match" button
- **Matching** → Skill-swap discovery, back to homepage
- **Credits** → Virtual wallet view, back to homepage

No bottom navigation bars or global sidebars - clean, focused screens for each task.

## 🚀 Getting Started

1. Navigate to the project directory
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Open `http://localhost:3000` in your browser
5. Explore the three core screens

## 📄 License

MIT

---

**Built for university students to discover and trade skills** 🎓✨
