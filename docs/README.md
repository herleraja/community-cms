# Documentation

This folder contains all documentation for the Community CMS project.

## 📚 Available Documentation

### User Guides

- **[SETUP.md](./SETUP.md)** - Installation and setup guide
- **[GOOGLE_FORMS_SETUP.md](./GOOGLE_FORMS_SETUP.md)** - Event registration setup with Google Forms

### Technical Documentation

- **[SCSS-STRUCTURE.md](./SCSS-STRUCTURE.md)** - SCSS architecture and styling documentation

### GitHub Pages

- **[index.md](./index.md)** - Documentation home page (for GitHub Pages)
- **[GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)** - How to enable and configure GitHub Pages
- **[\_config.yml](./_config.yml)** - Jekyll configuration file

## 📁 Folder Structure

```
docs/
├── README.md                   # This file - documentation overview
├── index.md                    # GitHub Pages landing page
├── _config.yml                 # Jekyll/GitHub Pages configuration
├── GITHUB_PAGES_SETUP.md      # GitHub Pages setup instructions
├── SETUP.md                    # Installation and setup guide
├── SCSS-STRUCTURE.md          # Styling architecture
└── GOOGLE_FORMS_SETUP.md      # Event registration setup
```

## 🌐 GitHub Pages

This documentation is configured for GitHub Pages deployment. See **[GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)** for instructions on enabling GitHub Pages for your repository.

Once enabled, your documentation will be available at:

```
https://yourusername.github.io/community-cms/
```

## 📖 Adding New Documentation

1. Create a new `.md` file in the `docs/` folder
2. Add a link to it in `index.md` (for GitHub Pages navigation)
3. Add a link to it in this README (for repository browsing)
4. Optionally add it to `_config.yml` navigation section
5. Commit and push - GitHub Pages will auto-update

## 🎨 Markdown Features

All documentation files support standard Markdown:

- Headers (`#`, `##`, `###`)
- Code blocks with syntax highlighting
- Lists (ordered and unordered)
- Links and images
- Tables
- Blockquotes
- Emoji 🎉

## 🔗 Link Guidelines

Use relative links for internal documentation:

- ✅ `[SETUP.md](./SETUP.md)` - Works everywhere
- ❌ `[SETUP.md](/docs/SETUP.md)` - May break in some contexts

This ensures links work:

- In the GitHub repository file browser
- On GitHub Pages
- In local file viewers

---

For the main project overview, see the [main README](../README.md).
