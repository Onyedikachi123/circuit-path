# Technical Context: CircuitPath Projects Solutions Ltd Website

## Technology Stack
- **Framework**: Next.js 15 (React-based)
- **Styling**: TailwindCSS with custom configuration
- **Language**: TypeScript
- **Deployment**: Vercel (standard for Next.js applications)
- **Package Management**: npm

## Key Dependencies
- `react` and `react-dom`: Core React libraries
- `next`: Next.js framework
- `tailwindcss`: Utility-first CSS framework
- `@tailwindcss/postcss`: PostCSS plugin for Tailwind CSS v4
- `typescript`: JavaScript with syntax for types
- `@types/node`, `@types/react`, `@types/react-dom`: TypeScript definitions

## Development Environment
- Node.js version compatible with Next.js 15
- Modern code editor (VS Code recommended)
- Terminal for running commands
- Git for version control

## Build and Development Scripts
- `npm run dev`: Start development server with hot reloading
- `npm run build`: Create optimized production build
- `npm run start`: Start production server
- `npm run lint`: Run ESLint for code quality checks

## File Structure
```
├── app/                          # Application routes and pages
│   ├── about/                    # About page route
│   ├── contact/                  # Contact page route
│   ├── services/                 # Services page route
│   │   ├── power-energy-advisory/      # Individual service page
│   │   ├── capacity-development/       # Individual service page
│   │   ├── engineering-design-epc/     # Individual service page
│   │   ├── owners-engineer/            # Individual service page
│   │   ├── renewable-offgrid/          # Individual service page
│   │   ├── energy-project-management/  # Individual service page
│   │   └── page.tsx                  # Main services page
│   ├── favicon.ico               # Website favicon
│   ├── globals.css               # Global styles and theme variables
│   ├── layout.tsx                # Root layout component
│   └── page.tsx                  # Home page
├── components/                   # Reusable components
│   ├── HeroSection.tsx           # Hero section component
│   ├── Navigation.tsx            # Navigation component for hero section with dropdown
│   ├── SecondaryNavigation.tsx   # Navigation for other pages with dropdown
│   └── ImageWithFallback.tsx     # Image component with fallback
├── memory-bank/                  # Project documentation
├── public/                       # Static assets
├── next.config.ts                # Next.js configuration
├── package.json                  # Project dependencies and scripts
├── postcss.config.mjs            # PostCSS configuration
├── tailwind.config.ts            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

## CSS Architecture
- Uses Tailwind CSS v4 with custom theme configuration
- Custom color variables defined in `app/globals.css`
- Responsive design utilities built into Tailwind
- Component-scoped styling using className props

## Performance Optimizations
- Next.js Image component for optimized image loading
- Automatic code splitting for JavaScript bundles
- Static generation for static pages
- Server-side rendering for dynamic pages
- CSS optimization through Tailwind's utility-first approach