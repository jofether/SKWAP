<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Skwap Mobile Web App - Project Instructions

### Project Overview

Skwap is a mobile-first React web application built for university students to trade skills with each other.

### Technology Stack

- React 18 with TypeScript
- Tailwind CSS for styling
- Vite as build tool
- Lucide React for icons

### Design System & Color Palette

- **White Background**: Clean, minimal interface
- **Dark Blue (#0d47a1)**: Primary text, headers, and UI elements
- **Bright Cyan (#00bcd4)**: Primary buttons, accents, and interactive elements
- **Rounded Corners**: All components use rounded corners for a friendly, modern aesthetic

### Key Pages

1. **Feed** - Discovery and browsing of skills
2. **Post Skill** - Create new skill listings
3. **Messages** - Direct messaging between users
4. **Profile** - User profile management

### Code Style Guidelines

- Use TypeScript for type safety
- Component-based architecture
- Mobile-first responsive design
- Accessibility best practices

### Development Commands

```
npm install    # Install dependencies
npm run dev    # Start development server
npm run build  # Build for production
npm run lint   # Run linting
```

### Customization Notes

When adding new features:

- Maintain mobile-first design approach
- Use Tailwind CSS custom components from `src/index.css`
- Keep color scheme consistent with Skwap branding
- Ensure rounded corners on all interactive elements
