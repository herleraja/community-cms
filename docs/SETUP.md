# Quick Setup Guide

## Installation Steps

Follow these steps to get your Community CMS application running:

### 1. Install Dependencies

Open your terminal in the `community-cms` directory and run:

```bash
npm install
```

This will install all required packages including:

- Next.js
- React
- TypeScript
- Tailwind CSS
- React Icons

### 2. Start Development Server

After installation completes, start the development server:

```bash
npm run dev
```

### 3. View the Application

Open your browser and navigate to:

```
http://localhost:3000
```

You should see the home page with:

- Yellow hero section with community name
- Navigation menu (Home, About, Events, Contact Us)
- Feature cards
- Upcoming events section
- Footer with contact information and social links

### 4. Navigate Through Pages

Test all pages:

- **Home** (`/`) - Landing page with events preview
- **About Us** (`/about`) - Mission, vision, team members
- **Events** (`/events`) - Upcoming and past events
- **Contact Us** (`/contact`) - Contact form and information

## Customization

### Update Site Information

Edit `lib/content.ts` to customize:

1. **Site Name and Tagline**:

```typescript
export const siteConfig = {
  name: "Your Community Name",
  nameKannada: "ನಿಮ್ಮ ಸಮುದಾಯದ ಹೆಸರು",
  // ...
};
```

2. **Contact Information**:

```typescript
email: "your@email.com",
phone: "+49 XXX XXX XXXX",
address: "Your Address, City, Country",
```

3. **Social Media Links**:

```typescript
socialLinks: [
  {
    platform: "Facebook",
    url: "https://facebook.com/yourpage",
    icon: "FaFacebook",
  },
  // Add or remove social links
];
```

### Add New Events

In `lib/content.ts`, add to `upcomingEvents` array:

```typescript
{
  id: "4",
  title: "Your Event Name",
  titleKannada: "ಕನ್ನಡದಲ್ಲಿ ಹೆಸರು",
  date: "2026-12-31",
  time: "18:00 - 22:00",
  venue: "Event Location",
  description: "Event description here...",
  ticketLink: "https://your-ticket-link.com" // Optional
}
```

### Update Team Members

Modify the `teamMembers` array in `lib/content.ts`:

```typescript
{
  id: "1",
  name: "Member Name",
  role: "Position/Role"
}
```

## Color Scheme

The application uses:

- **Primary**: Red (#dc2626)
- **Secondary**: Yellow (#facc15)
- **Accent**: Green, Gray

To change colors, search and replace Tailwind classes:

- `bg-red-600` → `bg-[your-color]`
- `text-red-600` → `text-[your-color]`

## Troubleshooting

### TypeScript Errors for react-icons

If you see TypeScript errors about `react-icons/fa`, they will resolve after running `npm install`.

### Port Already in Use

If port 3000 is busy, Next.js will automatically use the next available port (3001, 3002, etc.).

### Build Errors

If you encounter build errors:

1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Run `npm run dev`

## Production Build

To create a production build:

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with default settings

### Environment Variables

For production, you may want to add:

- Email service API keys
- Analytics tracking IDs
- Database connection strings

Create a `.env.local` file:

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
# Add other environment variables
```

## Next Steps

1. ✅ Install dependencies
2. ✅ Start development server
3. ✅ Customize content in `lib/content.ts`
4. ✅ Add your logo/images to `public/` folder
5. ✅ Update colors and styling as needed
6. ✅ Test all pages and forms
7. ✅ Build for production
8. ✅ Deploy to hosting platform

## Need Help?

- Check the main README.md for detailed documentation
- Review Next.js documentation: https://nextjs.org/docs
- Tailwind CSS documentation: https://tailwindcss.com/docs

---

Happy building! 🎉
