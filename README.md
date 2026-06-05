# Community CMS Application

A modern Next.js-based Content Management System for community organizations, inspired by Kannada community websites in Germany.

## Features

- **Home Page**: Vibrant landing page with hero section, feature cards, and upcoming events
- **About Us Page**: Mission, vision, values, team members, and community impact statistics
- **Events Page**: Upcoming and past events with detailed information and ticket booking
- **Contact Us Page**: Contact form, contact information, membership benefits, and FAQ
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

### Prerequisites

- Node.js 18+ and npm installed on your system

### Installation

1. Navigate to the project directory:

```bash
cd community-cms
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

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

All content is managed through the `lib/content.ts` file. This acts as a simple CMS where you can:

- Update site configuration (name, tagline, contact info, social links)
- Manage about us content (mission, vision, values)
- Add/edit team members
- Create and update events (upcoming and past)

### Adding a New Event

Edit `lib/content.ts` and add to the `upcomingEvents` array:

```typescript
{
  id: "unique-id",
  title: "Event Title",
  titleKannada: "ಕನ್ನಡ ಶೀರ್ಷಿಕೆ",
  date: "2026-12-31",
  time: "18:00 - 22:00",
  venue: "Event Location",
  description: "Event description...",
  ticketLink: "https://tickets.example.com"
}
```

### Updating Site Information

Modify the `siteConfig` object in `lib/content.ts`:

```typescript
export const siteConfig = {
  name: "Your Organization Name",
  nameKannada: "ನಿಮ್ಮ ಸಂಸ್ಥೆಯ ಹೆಸರು",
  email: "your@email.com",
  phone: "+49 XXX XXX XXXX",
  // ... other settings
};
```

## Customization

### Colors

The application uses a red and yellow color scheme. To change colors, update Tailwind classes in components:

- Primary Red: `bg-red-600`, `text-red-600`
- Primary Yellow: `bg-yellow-400`, `text-yellow-400`
- Accent colors: Green, Gray

### Fonts

Fonts are configured in `app/layout.tsx` using Google Fonts (Geist Sans & Geist Mono).

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This application can be deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with default settings

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
