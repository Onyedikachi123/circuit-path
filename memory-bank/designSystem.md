# Design System: CircuitPath Projects Solutions Ltd Website

## Color Palette

### Primary Colors
- **Primary**: `#059669` (Professional Blue-Green) - Used for primary actions, links, and key elements
- **Secondary**: `#10b981` (Light Blue-Green) - Used for hover states and secondary actions
- **Primary Foreground**: `#ffffff` (White) - Text color on primary background

### Supportive Colors
- **Energy Yellow**: `#fbbf24` - Used for accents and highlights
- **Sky Blue**: `#38bdf8` - Used for additional accents
- **Professional Gray**: `#64748b` - Used for grounding elements and text

### Background Colors
- **Light Background**: `#f0fdf4` (Light Blue-Green) - Main background color
- **Dark Background**: `#0f172a` (Dark Blue) - Dark mode background
- **Card Background**: `#ffffff` (White) - Light mode cards
- **Dark Card Background**: `#1e293b` (Dark Gray) - Dark mode cards

### Text Colors
- **Foreground**: `#0f172a` (Dark Blue) - Light mode text
- **Dark Foreground**: `#f1f5f9` (Light Gray) - Dark mode text
- **Muted Foreground**: `#64748b` (Gray) - Secondary text
- **Dark Muted Foreground**: `#94a3b8` (Light Gray) - Dark mode secondary text

### Border Colors
- **Border**: `#cbd5e1` (Light Gray) - Light mode borders
- **Dark Border**: `#334155` (Dark Gray) - Dark mode borders

## Typography

### Font Families
- **Primary Font**: System UI stack (San Francisco, Segoe UI, Roboto, etc.)
- **Monospace Font**: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas

### Font Weights
- **Normal**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

### Font Sizes
- **Small**: 14px (0.875rem)
- **Base**: 16px (1rem)
- **Large**: 18px (1.125rem)
- **XL**: 20px (1.25rem)
- **2XL**: 24px (1.5rem)
- **3XL**: 30px (1.875rem)
- **4XL**: 36px (2.25rem)

## Component Styles

### Buttons
- **Primary Button**:
  - Background: `bg-primary` (`#059669`)
  - Text: `text-primary-foreground` (`#ffffff`)
  - Hover: `hover:bg-secondary` (`#10b981`)
  - Padding: `px-6 py-3`
  - Rounded: `rounded-full`
  - Font: `font-medium`

- **Secondary Button**:
  - Background: `bg-transparent`
  - Border: `border-2 border-primary`
  - Text: `text-primary`
  - Hover: `hover:bg-primary/10`
  - Padding: `px-6 py-3`
  - Rounded: `rounded-full`
  - Font: `font-medium`

### Forms
- **Input Fields**:
  - Background: `bg-card`
  - Border: `border border-border`
  - Focus Ring: `focus:ring-primary focus:border-primary`
  - Padding: `px-4 py-2`
  - Rounded: `rounded-md`

- **Labels**:
  - Font: `block text-sm font-medium text-foreground`
  - Margin: `mb-1`

### Cards
- **Base Card**:
  - Background: `bg-card`
  - Border: `border border-border`
  - Rounded: `rounded-xl`
  - Padding: `p-6`
  - Shadow: `hover:shadow-lg transition-shadow`

### Navigation
- **Desktop Navigation**:
  - Text: `hover:text-secondary transition-colors`
  - Active: `text-secondary`
  - Dropdown: White background with shadow, rounded corners

- **Mobile Navigation**:
  - Trigger: Hamburger menu icon
  - Menu: Hidden by default, shown when toggled
  - Dropdown: Collapsible sections with indentation

## Spacing System
- **XS**: 4px (0.25rem)
- **Small**: 8px (0.5rem)
- **Base**: 16px (1rem)
- **Large**: 24px (1.5rem)
- **XL**: 32px (2rem)
- **2XL**: 48px (3rem)
- **3XL**: 64px (4rem)

## Border Radius
- **Small**: 4px (0.25rem)
- **Base**: 8px (0.5rem)
- **Large**: 12px (0.75rem)
- **XL**: 16px (1rem)
- **Full**: 9999px (pill shape)

## Shadows
- **Small**: `shadow-sm`
- **Medium**: `shadow`
- **Large**: `shadow-lg`
- **Hover**: Applied on card hover states