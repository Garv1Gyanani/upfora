# Upfora - Development Setup Guide

This project is a modern React-based landing page for Upfora, built with Vite for fast development and production.

## Project Overview

Upfora helps businesses build working software before committing to projects. The platform offers a zero-risk approach where you see a fully functional demo before any payment.

## Technologies Used

- **React 18** - Component library
- **Vite 4** - Fast development server with HMR
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **Lucide React** - Icon library
- **TypeScript** - Type safety

## Quick Start

### Prerequisites

- Node.js 18+ installed
- Git (for version control)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd upfora

# Install dependencies
npm install

# Start development server
npm run dev
```

### Project Structure

```
upfora/
├── public/
│   ├── index.html          # Main HTML template
│   └── assets/             # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/             # UI primitives
│   │   ├── layout/         # Layout components
│   │   └── sections/       # Section components
│   ├── pages/              # Page components
│   ├── hooks/              # Custom hooks
│   ├── utils/              # Helper functions
│   ├── services/           # API services
│   ├── stores/             # State management
│   ├── styles/             # Global styles
│   └── App.tsx             # Root component
├── .eslintrc.cjs           # ESLint configuration
├── .prettierrc            # Prettier configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── package.json           # Dependencies and scripts
```

## Key Features

### 1. Modern UI/UX

- **Animated Components**: Smooth transitions and micro-interactions using Framer Motion
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Glass Morphism**: Modern visual style with blurred backgrounds and borders
- **Dark Mode**: Automatic preference detection with smooth transitions

### 2. Core Sections

#### Hero Section
- Animated headline with gradient text effects
- Three interactive mockup cards (website, WhatsApp, dashboard)
- Real-time status indicator with pulse animation
- Proof statistics with counting animations
- Call-to-action buttons with hover effects

#### Services Section
- Bento grid layout with varying card sizes
- Code preview blocks with syntax highlighting
- Icon-based service categorization
- Hover effects and transition animations

#### Process Section
- Timeline visualization with connecting lines
- Step-by-step progression with numbered indicators
- Smooth scroll animations for each step

#### Client Reviews
- Testimonial carousel with auto-play
- Star ratings with animated fills
- Author avatars and credentials
- Smooth transitions between testimonials

#### Industry Blueprints
- Tab-based navigation for different industries
- Icon-based industry categorization
- Feature lists with checkmarks and animations
- Hover effects on hover

### 3. Performance Optimizations

- **Code Splitting**: Lazy loading for non-critical components
- **Image Optimization**: WebP format with fallbacks
- **Tree Shaking**: Remove unused code from bundles
- **Bundle Analysis**: Monitor and optimize bundle size
- **Caching Strategy**: Service worker for offline support

### 4. Accessibility

- **WCAG 2.1 AA**: Full accessibility compliance
- **Screen Reader Support**: ARIA labels and roles
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Visible focus indicators
- **High Contrast**: Support for high contrast mode

## Development Scripts

### Available Commands

```bash
# Start development server with HMR
npm run dev
# Default: http://localhost:3000

# Build for production
npm run build
# Outputs to dist/ directory

# Preview built application
npm run preview
# Default: http://localhost:4173

# Type checking
npm run typecheck
# Checks TypeScript types

# Lint code
npm run lint
# Flashes code style issues

# Format code
npm run format
# Formats code with Prettier

# Test components
npm run test
# Runs Jest tests

# Run e2e tests
npm run test:e2e
# Runs Playwright tests
```

### Development Workflow

1. **Start Development**
   ```bash
   npm run dev
   ```

2. **Implement Features**
   - Create new components in `src/components/`
   - Add styles using Tailwind classes
   - Write tests in component directories
   - Update TypeScript types as needed

3. **Code Quality**
   ```bash
   npm run lint
   npm run format
   npm run typecheck
   ```

4. **Testing**
   ```bash
   npm run test
   npm run test:e2e
   ```

5. **Build & Deploy**
   ```bash
   npm run build
   npm run preview
   ```

## Component Library

### UI Components

- `Button` - Interactive button with variants and states
- `Card` - Flexible content container with hover effects
- `Modal` - Modal dialogs with animations
- `Badge` - Status indicators and labels
- `Avatar` - User profile images

### Layout Components

- `NavBar` - Responsive navigation bar
- `Footer` - Site footer with links
- `Container` - Responsive content containers
- `Section` - Page section wrappers

### Feature Components

- `Hero` - Hero sections with CTAs
- `Testimonial` - Client testimonials
- `ServiceCard` - Service offering cards
- `ProcessStep` - Process timeline steps
- `IndustryCard` - Industry-specific cards

## Styling

### Tailwind CSS

The project uses Tailwind CSS for styling:

#### Color Classes
- Primary colors based on `--accent: #853953`
- Secondary colors based on `--accent-soft: #D59EB0`
- Background colors: `--bg`, `--bg2`, `--bg3`
- Text colors: `--text`, `--text2`, `--muted`

#### Utility Classes
- `text-primary`: Text using primary color
- `bg-primary`: Background using primary color
- `border-primary`: Border using primary color
- `hover:scale-105`: Scale transformation on hover
- `transition-all`: Smooth transitions for all properties

#### Responsive Design
Tailwind's responsive prefixes:
- `sm:` - Small screens (>= 640px)
- `md:` - Medium screens (>= 768px)
- `lg:` - Large screens (>= 1024px)
- `xl:` - Extra large screens (>= 1280px)

### Design Tokens

The project uses CSS custom properties for consistent theming:

```css
:root {
  --bg: #141213;           /* Main background */
  --accent: #853953;       /* Primary color */
  --accent-soft: #D59EB0;  /* Soft accent color */
  --text: #F3F4F4;         /* Primary text */
  --text2: #B5A7AB;        /* Secondary text */
  --border: rgba(133,57,83,0.2); /* Borders */
}
```

## Animation System

### Framer Motion

The project uses Framer Motion for animations:

#### Common Animations
- **FadeIn**: Fade in elements with slide-up
- **Scale**: Scale effects on hover and click
- **Stagger**: Sequential animations for lists
- **Blur**: Blur effects for transitions

#### Animation Examples

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

## State Management

### React Context

The project uses React Context for global state:

- `ThemeContext`: Dark/light theme management
- `UIContext`: UI state (modals, notifications)
- `DataContext`: Application data (testimonials, services)

### Custom Hooks

- `useMediaQuery`: Responsive breakpoint detection
- `useScroll`: Scroll position tracking
- `useIntersectionObserver`: Element visibility detection
- `useLocalStorage`: Local storage with type safety

## Testing

### Unit Tests

Using Jest and React Testing Library:

```tsx
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });
});
```

### Integration Tests

Testing component interactions:

```tsx
import { userEvent } from '@testing-library/user-event';

it('changes state when button is clicked', async () => {
  render(<Counter />);
  await userEvent.click(screen.getByRole('button'));
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});
```

## Performance Optimization

### Bundle Size Analysis

Monitor and optimize bundle size:

```bash
npm run build
npx analyze
```

### Image Optimization

- Use WebP format for modern browsers
- Provide fallbacks for older browsers
- Lazy load images with intersection observer
- Optimize image dimensions for each use case

### Code Splitting

Lazy load components:

```tsx
const HeavyComponent = lazy(() => import('./HeavyComponent'));
```

## Deployment

### Production Build

```bash
npm run build
```

### Preview Locally

```bash
npm run preview
```

### Deploy to Production

1. Commit changes to main branch
2. Push to remote repository
3. Configure CI/CD pipeline
4. Deploy to hosting platform (Vercel, Netlify, etc.)

## Environment Variables

### Available Variables

```env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=Upfora
VITE_APP_VERSION=1.0.0
```

### Configuration

Environment variables are prefixed with `VITE_` for client-side access.

## Localization

### Supported Languages

- English (en) - Default

### Implementation

Use React Internationalization (i18n):

```tsx
import { useTranslation } from 'react-i18next';

const { t } = useTranslation();

<h1>{t('hero.title')}</h1>
```

## Monitoring & Analytics

### Performance Monitoring

- Track Core Web Vitals
- Monitor bundle size
- Analyze user interactions
- Measure loading times

### Error Tracking

- Capture runtime errors
- Track user behavior
- Monitor performance issues
- Set up alerts for critical errors

## Security

### Headers

The project implements security headers:

- Content-Security-Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy

### CORS

Configure CORS for API requests:

```js
// vite.config.ts
export default {
  server: {
    cors: {
      origin: ['https://example.com', 'https://api.example.com']
    }
  }
};
```

## Future Enhancements

### Planned Features

1. **Dark/Light Theme Toggle**
   - User preference storage
   - Smooth transitions
   - System preference detection

2. **Interactive Elements**
   - 3D transforms with Three.js
   - Particle effects
   - Dynamic backgrounds

3. **Advanced Animations**
   - Mouse tracking effects
   - Parallax scrolling
   - Custom easing functions

4. **Integration**
   - Chatbot widget
   - Calendar booking
   - Payment integration

5. **Advanced Features**
   - Custom domain mapping
   - Analytics dashboard
   - Team collaboration tools

## Contributing

### Guidelines

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/new-feature
   ```
3. **Make changes**
4. **Run tests**
   ```bash
   npm test
   ```
5. **Format code**
   ```bash
   npm run format
   ```
6. **Commit changes**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```
7. **Push and create PR**

### Code Style

- Use Prettier for formatting
- Follow ESLint rules
- Write TypeScript interfaces
- Add JSDoc comments for public APIs
- Write unit tests for new code

## Support

### Documentation
- [Main Documentation](https://docs.upfora.ai)
- [API Reference](https://api.upfora.ai)
- [Developer Guide](https://dev.upfora.ai)

### Support Channels
- GitHub Issues: [Submit issues](https://github.com/upfora/upfora/issues)
- Email: support@upfora.ai
- Slack: [Join our community](https://slack.upfora.ai)

### Community

Join our community to discuss:
- New features
- Best practices
- Troubleshooting
- Collaboration opportunities

## License

This project is licensed under the MIT License. See LICENSE file for details.

## Acknowledgements

### Thanks To

- Original Kronx design team
- Open-source contributors
- Community members
- Beta testers

### Libraries Used

- [React](https://react.dev)
- [Vite](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Lucide React](https://lucide.dev)
- [TypeScript](https://www.typescriptlang.org)

## Changelog

### Recent Changes

- **v1.0.0**: Initial release
- **v1.1.0**: Added animations and micro-interactions
- **v1.2.0**: Enhanced responsive design
- **v1.3.0**: Improved accessibility

See git history for detailed changes.

---

*Built with ❤️ for businesses looking for a better way to start projects.*