# EDIGHT - IT Solutions & Technology Innovation

## Overview

EDIGHT (EDGAR BRIGHT GROUP PTY) is a corporate website built with React and TypeScript that showcases IT solutions, technology services, and training programs. The application serves as a digital presence for a Pretoria-based technology company offering hardware solutions, software development, security technologies, and professional training programs.

The project is a multi-page React application built with Vite, featuring a modern UI with shadcn/ui components, responsive design with Tailwind CSS, and client-side routing. It's designed to present the company's services, values, and contact information in an elegant, professional manner.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **React 18.3.1** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast hot module replacement
- **React Router DOM** for client-side routing between pages (Home, About, Services, Training, Contact)

**Design rationale**: React with TypeScript provides strong typing and component reusability, while Vite offers superior developer experience with instant server start and fast HMR. This stack is optimal for a content-focused marketing website that needs to be maintainable and performant.

### UI Component System
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design system
- **Custom design tokens** defined in CSS variables (HSL color system)
- **Responsive design** with mobile-first approach

**Design rationale**: shadcn/ui provides accessible, customizable components without framework lock-in. The components are copied into the project rather than installed as dependencies, allowing full control and customization. Tailwind CSS enables rapid UI development with a consistent design language.

### Design System
- **Brand colors**: Coral (#E86161), Beige (#C8B8A8), Dark navy (#1D2637)
- **Typography**: Playfair Display (headings/display) and Inter (body text)
- **Custom animations**: Fade-in, slide-in, floating effects for enhanced UX
- **Gradient themes**: Dynamic gradient backgrounds for hero sections

**Design rationale**: The custom design system creates a professional, modern aesthetic appropriate for a technology company while maintaining brand consistency across all pages.

### State Management
- **TanStack Query (React Query) v5** for server state management
- **React hooks** for local component state
- **Context API** for shared UI state (toasts, tooltips)

**Design rationale**: React Query handles asynchronous data fetching and caching efficiently. For a primarily static marketing site, this lightweight approach avoids the complexity of global state management solutions like Redux.

### Form Handling
- **React Hook Form** with Zod resolvers for form validation
- **shadcn/ui form components** for consistent form UX

**Design rationale**: React Hook Form provides performant form handling with minimal re-renders, while Zod ensures type-safe validation schemas.

### Routing Architecture
```
/ (Home)
/about
/services
/training
/contact
/* (404 Not Found)
```

All routes are client-side rendered with a catch-all route for 404 handling. The Navigation component provides persistent navigation across all pages.

### Development Configuration
- **ESLint** with TypeScript and React plugins for code quality
- **PostCSS** with Tailwind CSS and Autoprefixer
- **Strict TypeScript** disabled for rapid development (noImplicitAny: false)
- **Path aliases** (@/* maps to ./src/*) for clean imports

**Design rationale**: The configuration prioritizes developer experience and rapid iteration while maintaining basic code quality standards. The relaxed TypeScript settings allow for faster development in a Lovable environment.

### Build & Deployment
- **Vite build** for optimized production bundles
- **Replit-specific configuration** with HMR over WebSocket (wss://)
- **Static asset handling** through Vite's public directory

**Design rationale**: The Replit-specific Vite configuration ensures proper hot module replacement in the Replit environment with custom host and port settings.

## External Dependencies

### UI & Styling
- **@radix-ui/* packages**: Accessible UI primitives (accordion, dialog, dropdown, etc.)
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant handling for components
- **clsx** & **tailwind-merge**: Conditional className utilities
- **lucide-react**: Icon library
- **@heroicons/react**: Additional icon set
- **next-themes**: Theme switching support (light/dark mode)

### Forms & Validation
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Validation resolver adapters
- **zod**: Schema validation (implied by hookform resolvers)

### Utilities
- **date-fns**: Date manipulation and formatting
- **embla-carousel-react**: Carousel/slider functionality
- **cmdk**: Command menu component
- **input-otp**: OTP input handling
- **vaul**: Drawer component library

### Development Tools
- **@vitejs/plugin-react-swc**: Fast React refresh using SWC compiler
- **lovable-tagger**: Development mode component tagging
- **eslint**: Code linting
- **typescript-eslint**: TypeScript-specific linting rules

### Fonts
- **Google Fonts**: Playfair Display and Inter font families

**Integration notes**: All dependencies are managed through npm. The application does not currently integrate with external APIs or databases but has the infrastructure (React Query) to add such integrations easily. Forms currently handle data client-side only; backend integration would be needed for actual form submissions.