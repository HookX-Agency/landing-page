# HookX Agency Website

A modern, animated website for HookX, a digital agency specializing in Video Editing and Email & SMS Marketing for creators and brands.

## Features

- Modern UI with animated components
- Responsive design for all devices
- Light/Dark mode
- Static site generation for optimal performance
- SEO optimized

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Shadcn UI](https://ui.shadcn.com/) - Accessible component system
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Next Themes](https://github.com/pacocoursey/next-themes) - Theme management

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- Bun (recommended) or npm

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/hookx-agency.git
cd hookx-agency
```

2. Install dependencies

```bash
bun install
# or
npm install
```

3. Run the development server

```bash
bun run dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

To create a production build:

```bash
bun run build
# or
npm run build
```

This will generate a static export in the `out` directory that can be served by any static hosting provider.

## Deployment

This site is configured for easy deployment to Netlify or Vercel.

### Netlify

The `netlify.toml` file is already configured for static site deployment. Simply connect your repository to Netlify and it will automatically build and deploy the site.

## Project Structure

- `src/app` - Next.js App Router pages and layouts
- `src/components` - React components
  - `sections` - Page sections (hero, features, etc.)
  - `ui` - UI components from Shadcn
- `public` - Static assets
- `src/lib` - Utility functions and helpers
- `out` - Production build output (generated)

## License

This project is licensed under the MIT License.
