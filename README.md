# React Homework 13 — React Memoization

A React application created to demonstrate performance optimization with `useMemo`, `useCallback`, and `React.memo`.

The **NOIR / EDIT** project is a responsive editorial product catalogue with filtering, sorting, favorites, product details, custom navigation, routing, and a built-in performance inspector that compares baseline and optimized rendering behavior.

## Live Demo

https://react-homework-13-memoization-noir.vercel.app/

## Features

- Displays a curated collection of 12 products across five categories
- Provides live search by product name, category, and material
- Filters products by category
- Supports an **In stock only** availability filter
- Provides sorting by:
  - Newest
  - Name
  - Price — low to high
  - Price — high to low
- Uses a custom accessible dropdown instead of a native `<select>`
- Allows all active filters to be reset
- Displays a dedicated empty state when no products match the current selection
- Calculates dynamic collection statistics:
  - visible pieces
  - products in stock
  - saved products
  - average price
- Supports adding and removing products from favorites
- Synchronizes favorite state between product cards and the product modal
- Displays availability status for unavailable products
- Opens detailed product information in a modal rendered through a React portal
- Supports modal closing by close button, backdrop click, and `Escape`
- Locks page scrolling while the product modal is open
- Moves focus to the modal close button when the modal opens
- Includes responsive desktop and mobile navigation
- Supports category filtering from the header and footer
- Uses smooth scrolling to navigate to the collection and editorial sections
- Includes a responsive hero section with the **Explore the collection** CTA
- Includes an editorial section with the **Discover the edit** action and expandable journal content
- Includes hover, focus, active, and reduced-motion states for CTA elements
- Includes a custom responsive 404 page
- Provides navigation from the 404 page back home, to the collection, or to the previous page
- Uses responsive layouts for desktop, tablet, and mobile screens
- Uses WebP image assets
- Prioritizes important above-the-fold imagery
- Uses lazy loading for non-critical images
- Includes semantic HTML, ARIA attributes, keyboard interaction, and visible focus states
- Supports `prefers-reduced-motion`

## Memoization

The project demonstrates the three memoization techniques required by the homework:

- `useMemo`
- `useCallback`
- `React.memo`

### useMemo

`useMemo` is used to prevent unnecessary recalculation of derived catalogue data.

The optimized mode memoizes:

- filtered and sorted products
- collection statistics

The calculations run again only when their actual dependencies change.

### useCallback

`useCallback` is used to keep callback references stable when they are passed to child components.

Memoized callbacks include:

- toggling favorites
- opening product details
- closing product details
- resetting filters
- toggling editorial content
- triggering the performance demonstration

Stable callback references allow memoized child components to avoid re-rendering when their relevant props have not changed.

### React.memo

The optimized product card is wrapped with `React.memo`.

When unrelated parent state changes, unchanged product cards can skip unnecessary re-renders as long as their props remain referentially equal.

The original non-memoized product card is preserved and used in Baseline mode for comparison.

## Baseline vs Optimized

The application contains two performance modes that render the same catalogue UI.

### Baseline

Baseline mode intentionally performs the work without memoization.

An unrelated parent update can cause:

- filter and sort calculations
- statistics calculations
- product card re-renders

### Optimized

Optimized mode uses:

- `useMemo` for derived collection data
- `useMemo` for collection statistics
- `useCallback` for stable callbacks
- `React.memo` for product cards

An unrelated parent update can therefore render the parent without repeating calculations or rendering unchanged product cards.

## Memoization Inspector

The project includes a built-in **Memoization Inspector** that makes the optimization effect visible and measurable.

It provides:

- Baseline / Optimized mode switch
- current optimization status
- visible product count
- unrelated parent-render trigger
- performance counters

The inspector tracks:

- Parent renders
- Filter / sort calculations
- Statistics calculations
- Product card renders

The **Trigger parent render** action changes only dedicated demo state. It does not modify products, filters, sorting, favorites, or search.

This creates a controlled comparison between unnecessary work in Baseline mode and avoided work in Optimized mode.

React `StrictMode` may intentionally invoke rendering logic more than once in development. The important result is therefore the difference between Baseline and Optimized behavior rather than a specific absolute render count.

## Product Collection

The catalogue contains products in the following categories:

- Bags
- Eyewear
- Watches
- Accessories
- Footwear

Product data includes:

- name
- category
- material
- price
- collection year
- availability
- image
- description
- hardware
- dimensions
- weight

Each product card displays the main catalogue information and provides access to the detailed product view.

## Search, Filters and Sorting

Search matches product:

- name
- category
- material

Available collection controls include:

- category selection
- **In stock only** filter
- sorting by newest, name, and price
- reset action

All controls can be combined, and the collection statistics update together with the visible results.

## Favorites

Products can be added to or removed from favorites from both the product card and the product modal.

Favorite state is reflected through:

- visual heart state
- `aria-pressed`
- modal action state
- dynamic **Saved** collection statistic

## Product Modal

The product modal displays detailed information for the selected product, including:

- image
- category
- product name
- price
- description
- material
- hardware
- dimensions
- weight
- collection year
- availability
- favorite state

The modal uses:

- `createPortal`
- `role="dialog"`
- `aria-modal`
- accessible labels
- `Escape` key handling
- backdrop closing
- body scroll locking
- automatic focus management

## Navigation and Routing

Routing is implemented with `react-router-dom`.

Routes:

- `/` — main application
- `*` — custom 404 page

Header and footer navigation can change the active product category and smoothly scroll to the collection.

Editorial navigation smoothly scrolls to the editorial section.

The 404 page includes:

- Return home
- Continue shopping
- Back to previous page
- category navigation

`Continue shopping` returns to the home route and scrolls directly to the collection.

## Responsive Design

The interface adapts to desktop, tablet, and mobile layouts.

Responsive behavior includes:

- desktop and mobile navigation
- adaptive hero layout
- responsive product grid
- adaptive collection controls
- responsive statistics
- responsive product modal
- responsive editorial section
- responsive footer
- responsive 404 page

## Accessibility

Accessibility-related implementation includes:

- semantic HTML
- accessible navigation labels
- `aria-expanded`
- `aria-pressed`
- `aria-live`
- `aria-modal`
- dialog semantics
- meaningful image alternative text
- decorative image handling
- keyboard `Escape` support
- visible focus states
- modal focus management
- form control identifiers and names
- reduced-motion support

## Performance and Image Loading

The application includes additional performance-oriented decisions:

- memoized filtered and sorted product data
- memoized collection statistics
- stable callback references
- memoized product cards
- lightweight performance instrumentation
- WebP image assets
- prioritized hero and above-the-fold imagery
- eager loading for initial product imagery
- lazy loading for non-critical imagery
- no unnecessary preload for route-specific 404 artwork

## Validation

The project was checked before submission:

- HTML validation — passed
- CSS validation — passed
- browser console — no runtime errors
- form fields include valid identifiers and names
- production build checked with Vite
- source code checked with Oxlint

## Installation

```bash
git clone https://github.com/andrii-dolzhenko/react-homework-13-memoization-noir-edit.git
cd react-homework-13-memoization-noir-edit
npm install
```

## Run the Application

```bash
npm run dev
```

## Code Quality

Run Oxlint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Tech Stack

- React 19
- React DOM
- React Router
- Vite
- JavaScript
- CSS
- Oxlint
- HTML5

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── CollectionStats.jsx
│   ├── CollectionToolbar.jsx
│   ├── CustomSelect.jsx
│   ├── EditorialSection.jsx
│   ├── EmptyState.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── PerformanceInspector.jsx
│   ├── ProductCard.jsx
│   ├── ProductGrid.jsx
│   └── ProductModal.jsx
├── data/
│   └── products.js
├── pages/
│   ├── HomePage.jsx
│   └── NotFoundPage.jsx
├── utils/
│   ├── calculateCollectionStats.js
│   ├── filterAndSortProducts.js
│   └── performanceMetrics.js
├── App.jsx
├── index.css
└── main.jsx
```

## Links

Repository:

https://github.com/andrii-dolzhenko/react-homework-13-memoization-noir-edit

Live Demo:

https://react-homework-13-memoization-noir.vercel.app/

GitHub Pages:

https://andrii-dolzhenko.github.io/react-homework-13-memoization-noir-edit/

## Author

© 2026 Andrii Dolzhenko. All Rights Reserved.
