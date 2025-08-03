# System Patterns: CircuitPath Projects Solutions Ltd Website

## Architecture Overview
The website is built using Next.js 15, a React-based framework for production-ready applications. The architecture follows a component-based structure with a clear separation of concerns:

- Pages are organized in the `app` directory using the App Router
- Reusable components are stored in the `components` directory
- Global styles and theme variables are defined in `app/globals.css`
- Static assets are stored in the `public` directory

## Design System
The website uses TailwindCSS for styling with a custom color palette focused on professional energy infrastructure themes:

- Primary color: Professional blue-green (#059669)
- Secondary color: Light blue-green (#10b981)
- Accent colors: Energy yellow (#fbbf24) and sky blue (#38bdf8)
- Neutral colors following Tailwind's default palette

## Component Structure
- Navigation: Consistent header with responsive menu across all pages. Used on the hero section. Includes dropdown menu for services.
- SecondaryNavigation: A second navigation component for all pages other than the Home page. Uses the same vertical padding as the main Navigation component to maintain consistent dimensions. Includes dropdown menu for services.
- Hero Section: Prominent call-to-action area on the home page
- Content Sections: Grid-based layouts for services and features
- Footer: Consistent footer with navigation links and copyright information
- Forms: Contact form with validation and proper labeling
- Service Pages: Individual pages for each service with detailed content and images

## Routing
The website uses Next.js file-based routing:

- `/` - Home page
- `/about` - Company information (About Us)
- `/services` - Service offerings (Services)
- `/contact` - Contact information and form

## Responsive Design
The website is fully responsive and follows mobile-first design principles:

- Mobile: Single column layout with appropriate spacing
- Tablet: Two-column grids where appropriate
- Desktop: Multi-column layouts with expanded content areas
- Responsive navigation that converts to a hamburger menu on mobile

## Performance Considerations
- Optimized images using Next.js Image component
- Minimal JavaScript for fast loading
- Efficient CSS with Tailwind's utility-first approach
- Proper semantic HTML for accessibility