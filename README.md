# Community CMS Application

A modern Next.js-based Content Management System for community organizations, inspired by Kannada community websites in Germany.

## Features

- **Home Page**: Vibrant landing page with hero section, feature cards, and upcoming events
- **About Us Page**: Mission, vision, values, team members, and community impact statistics
- **Events Page**: Upcoming and past events with detailed information and ticket booking
- **Contact Us Page**: Contact form, contact information, membership benefits, and FAQ
- **Event Registration**: Google Forms integration with automatic email notifications and calendar invites
- **Responsive Design**: Mobile-first design that works on all devices
- **Bilingual Support**: English and Kannada language content
- **CMS Structure**: Easy-to-manage content through centralized data files

## Design Inspiration

This application is inspired by successful Kannada community organizations:

- Berlin Kannada Balaga (berlinkannadabalaga.org)
- Munich Kannadigaru (munichkannadigaru.org)
- Rhein Main Kannada Sangha (rmksgermany.org)

## Tech Stack

- **Framework**: Next.js 16.2.7 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: React Icons
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

See **[SETUP.md](./docs/SETUP.md)** for detailed installation and setup instructions.

## Project Structure

```
community-cms/
├── app/                    # Next.js App Router pages
│   ├── about/             # About Us page
│   ├── events/            # Events page
│   ├── contact/           # Contact Us page
│   ├── layout.tsx         # Root layout with Navigation & Footer
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Header navigation
│   └── Footer.tsx         # Footer component
├── lib/                   # Utilities and data
│   └── content.ts         # CMS content data structure
└── public/               # Static assets
```

## Content Management

All content is managed through the `lib/content.ts` file. This acts as a simple CMS where you can update site configuration, manage events, team members, and more.

For detailed customization instructions, see **[SETUP.md](./docs/SETUP.md)**.

## Event Registration

This application supports embedded Google Forms for event registration with automatic email notifications and calendar invites. See **[GOOGLE_FORMS_SETUP.md](./docs/GOOGLE_FORMS_SETUP.md)** for complete setup instructions.

## Styling

The application uses SCSS with BEM methodology for maintainable, scalable styling. See **[SCSS-STRUCTURE.md](./docs/SCSS-STRUCTURE.md)** for detailed documentation on the styling architecture.

## Documentation

- **[SETUP.md](./docs/SETUP.md)** - Quick setup guide with installation, customization, and deployment instructions
- **[GOOGLE_FORMS_SETUP.md](./docs/GOOGLE_FORMS_SETUP.md)** - Complete guide for setting up event registration with Google Forms
- **[SCSS-STRUCTURE.md](./docs/SCSS-STRUCTURE.md)** - SCSS architecture and styling documentation

## Future Enhancements

- [ ] Add image gallery for events
- [ ] Implement actual backend for contact form
- [ ] Add member login/dashboard
- [ ] Integrate payment gateway for memberships
- [ ] Add blog/news section
- [ ] Implement search functionality
- [ ] Add multi-language support (full i18n)
- [ ] Connect to a headless CMS (Contentful, Sanity, etc.)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Support

For questions or support, please contact through the application's contact form or open an issue on GitHub.

---

Built with ❤️ for community organizations
