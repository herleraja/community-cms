# SCSS Structure Documentation

## Overview

All styling has been refactored from inline Tailwind CSS classes to structured, reusable SCSS files following the BEM (Block Element Modifier) methodology.

## Directory Structure

```
styles/
├── _variables.scss          # Color, spacing, and design tokens
├── _mixins.scss            # Reusable style patterns
├── main.scss               # Main entry point, imports all styles
├── components/             # Component-specific styles
│   ├── _navigation.scss    # Navigation bar styles
│   └── _footer.scss        # Footer styles
└── pages/                  # Page-specific styles
    ├── _home.scss          # Home page styles
    ├── _about.scss         # About page styles
    ├── _events.scss        # Events page styles
    └── _contact.scss       # Contact page styles
```

## File Descriptions

### 1. `_variables.scss`

Contains all design tokens and configuration:

- **Colors**: Primary (red), secondary (yellow), accent (green), neutrals
- **Spacing**: Consistent spacing scale (xs to 3xl)
- **Border Radius**: From small to full rounded
- **Shadows**: Multiple shadow levels
- **Transitions**: Animation timing
- **Breakpoints**: Responsive design breakpoints
- **Z-index**: Layering system

### 2. `_mixins.scss`

Reusable style patterns:

- **Flexbox mixins**: `flex-center`, `flex-between`, `flex-column`
- **Button mixins**: `button-base`, `button-primary`, `button-secondary`
- **Card mixins**: `card`, `card-gradient`
- **Container mixins**: `container`, `section-padding`
- **Typography mixins**: `heading-1` through `heading-4`, `text-large`
- **Form mixins**: `input-base`
- **Gradient mixins**: `gradient-red`, `gradient-yellow`
- **Icon container**: `icon-container`
- **Responsive grid**: `grid-responsive`

### 3. Component Styles

#### `_navigation.scss`

BEM classes for navigation:

- `.navigation` - Main container
- `.navigation__container` - Inner wrapper
- `.navigation__logo` - Logo link
- `.navigation__logo-icon` - Logo circle
- `.navigation__logo-text` - Site name text
- `.navigation__links` - Desktop menu
- `.navigation__link` - Menu item
- `.navigation__mobile-toggle` - Hamburger button
- `.navigation__mobile-menu` - Mobile dropdown
- `.navigation__mobile-links` - Mobile menu items

#### `_footer.scss`

BEM classes for footer:

- `.footer` - Main container
- `.footer__container` - Inner wrapper
- `.footer__grid` - Three-column layout
- `.footer__section-title` - Section headings
- `.footer__links` - Quick links list
- `.footer__contact-list` - Contact info list
- `.footer__social-links` - Social media icons
- `.footer__copyright` - Copyright text

### 4. Page Styles

#### `_home.scss`

Home page sections:

- `.home__hero` - Hero section with yellow gradient
- `.home__welcome` - Welcome section with features
- `.home__features` - Feature cards grid
- `.home__events` - Upcoming events section
- `.home__cta` - Call-to-action section

#### `_about.scss`

About page sections:

- `.about__hero` - Hero with red gradient
- `.about__mission` - Mission and vision
- `.about__values` - Core values grid
- `.about__team` - Team members showcase
- `.about__impact` - Statistics cards
- `.about__join` - Join CTA

#### `_events.scss`

Events page sections:

- `.events__hero` - Hero with yellow gradient
- `.events__upcoming` - Upcoming events grid
- `.events__past` - Past events grid
- `.events__subscribe` - Newsletter subscription
- `.events__guidelines` - Event guidelines

#### `_contact.scss`

Contact page sections:

- `.contact__hero` - Hero with red gradient
- `.contact__main` - Two-column layout
- `.contact__info-cards` - Contact information cards
- `.contact__form` - Contact form
- `.contact__membership` - Membership benefits
- `.contact__faq` - FAQ section

## BEM Naming Convention

### Block

The main component (e.g., `.navigation`, `.footer`, `.home`)

### Element

Parts of the block, separated by double underscore (e.g., `.navigation__logo`, `.footer__link`)

### Modifier

Variations of blocks or elements, separated by double dash (e.g., `.home__feature-card--yellow`)

## Usage in Components

### Example: Navigation Component

**Before (Tailwind):**

```tsx
<nav className="bg-red-600 text-white shadow-lg sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
    // ...
  </div>
</nav>
```

**After (SCSS):**

```tsx
<nav className="navigation">
  <div className="navigation__container">// ...</div>
</nav>
```

## Color Palette

### Primary Colors

- **Red**: `$primary-red` (#dc2626) - Main brand color
- **Yellow**: `$secondary-yellow` (#facc15) - Secondary brand color
- **Green**: `$accent-green` (#16a34a) - Accent color

### Usage

```scss
.my-element {
  background-color: $primary-red;
  color: $white;

  &:hover {
    background-color: $primary-red-dark;
  }
}
```

## Responsive Design

All styles are mobile-first with breakpoints:

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

### Example

```scss
.element {
  font-size: 1rem;

  @media (min-width: $breakpoint-md) {
    font-size: 1.25rem;
  }

  @media (min-width: $breakpoint-lg) {
    font-size: 1.5rem;
  }
}
```

## Customization Guide

### Changing Colors

Edit `styles/_variables.scss`:

```scss
$primary-red: #your-color;
$secondary-yellow: #your-color;
```

### Adding New Components

1. Create `styles/components/_yourcomponent.scss`
2. Define BEM classes
3. Import in `styles/main.scss`:

```scss
@import "./components/yourcomponent";
```

### Adding New Pages

1. Create `styles/pages/_yourpage.scss`
2. Define page-specific styles
3. Import in `styles/main.scss`:

```scss
@import "./pages/yourpage";
```

### Using Mixins

```scss
.my-button {
  @include button-primary;
  // Add custom styles
  font-size: 1.25rem;
}

.my-container {
  @include container;
  @include section-padding;
}
```

## Benefits of This Structure

1. **Maintainability**: Easy to find and update styles
2. **Reusability**: Mixins and variables prevent code duplication
3. **Scalability**: Clear structure for adding new components
4. **Performance**: Compiled CSS is optimized
5. **Consistency**: Design tokens ensure visual consistency
6. **Readability**: BEM naming makes HTML more semantic
7. **Type Safety**: SCSS provides better error checking than inline styles

## Development Workflow

1. **Install dependencies**: `npm install`
2. **Start dev server**: `npm run dev`
3. **Edit SCSS files**: Changes auto-compile
4. **Use BEM classes**: Apply classes in TSX components
5. **Build for production**: `npm run build`

## Migration Notes

All inline Tailwind classes have been removed from:

- ✅ `components/Navigation.tsx`
- ✅ `components/Footer.tsx`
- ✅ `app/page.tsx` (Home)
- ✅ `app/about/page.tsx`
- ✅ `app/events/page.tsx`
- ✅ `app/contact/page.tsx`

Styles are now managed through:

- ✅ Structured SCSS files
- ✅ BEM naming convention
- ✅ Reusable mixins and variables
- ✅ Responsive design patterns

## Best Practices

1. **Always use variables** for colors, spacing, and other design tokens
2. **Use mixins** for repeated patterns
3. **Follow BEM naming** for consistency
4. **Keep specificity low** - avoid deep nesting
5. **Mobile-first** - start with mobile styles, add desktop overrides
6. **Comment complex styles** for future reference
7. **Group related styles** together
8. **Use semantic class names** that describe purpose, not appearance

---

For questions or contributions, please refer to the main README.md
