// CMS Content Data Structure
export interface Event {
  id: string;
  title: string;
  titleKannada?: string;
  date: string;
  time: string;
  venueAddress: string;
  description: string;
  image?: string;
  registerLink?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

// Site Configuration
export const siteConfig = {
  name: "Community Organization",
  nameKannada: "ಸಮುದಾಯ ಸಂಘಟನೆ",
  tagline: "Bringing our community together",
  taglineKannada: "ನಮ್ಮ ಸಮುದಾಯವನ್ನು ಒಟ್ಟುಗೂಡಿಸುವುದು",
  description:
    "A non-profit organization dedicated to celebrating our culture, heritage, and community spirit.",
  email: "info@community.org",
  phone: "+49 123 456 7890",
  address: "Community Center, City, Germany",
  socialLinks: [
    { platform: "Facebook", url: "https://facebook.com", icon: "FaFacebook" },
    {
      platform: "Instagram",
      url: "https://instagram.com",
      icon: "FaInstagram",
    },
    { platform: "YouTube", url: "https://youtube.com", icon: "FaYoutube" },
    { platform: "Twitter", url: "https://twitter.com", icon: "FaTwitter" },
    { platform: "LinkedIn", url: "https://linkedin.com", icon: "FaLinkedin" },
  ] as SocialLink[],
};

// About Us Content
export const aboutContent = {
  mission:
    "Our mission is to bring together our community in Germany and surrounding regions to celebrate the flourish anything and everything about our beautiful culture. The organization offers a variety of activities and events including sports, food, and festivals. The goal is to create a positive and inclusive community where everyone can feel welcome and connected.",
  missionKannada:
    "ಜರ್ಮನಿ ಮತ್ತು ಸುತ್ತಮುತ್ತಲಿನ ಪ್ರದೇಶಗಳಲ್ಲಿ ನಮ್ಮ ಸಮುದಾಯವನ್ನು ಒಟ್ಟುಗೂಡಿಸುವುದು ಮತ್ತು ನಮ್ಮ ಸುಂದರ ಸಂಸ್ಕೃತಿಯ ಬಗ್ಗೆ ಎಲ್ಲವನ್ನೂ ಆಚರಿಸುವುದು ನಮ್ಮ ಗುರಿಯಾಗಿದೆ.",
  vision:
    "To create a vibrant, connected community that preserves and promotes our cultural heritage while fostering integration and mutual understanding.",
  values: [
    "Cultural Preservation",
    "Community Unity",
    "Inclusivity",
    "Youth Engagement",
    "Social Responsibility",
  ],
};

// Team Members
export const teamMembers: TeamMember[] = [
  { id: "1", name: "President Name", role: "President" },
  { id: "2", name: "Vice President Name", role: "Vice President" },
  { id: "3", name: "Secretary Name", role: "Secretary" },
  { id: "4", name: "Treasurer Name", role: "Treasurer" },
  { id: "5", name: "Cultural Head", role: "Cultural Coordinator" },
  { id: "6", name: "Events Head", role: "Events Coordinator" },
];

// Events Data
export const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "Cultural Festival 2026",
    titleKannada: "ಸಾಂಸ್ಕೃತಿಕ ಉತ್ಸವ 2026",
    date: "2026-08-15",
    time: "14:00 - 20:00",
    venueAddress:
      "Messe Frankfurt, Ludwig-Erhard-Anlage 1, 60327 Frankfurt am Main, Germany",
    description:
      "Join us for an evening filled with culture, community, and celebration. Experience traditional music, dance performances, delicious food, and connect with fellow community members.",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop",
    registerLink: "https://register.example.com/cultural-festival-2026",
  },
  {
    id: "2",
    title: "Sports Day",
    titleKannada: "ಕ್ರೀಡಾ ದಿನ",
    date: "2026-07-20",
    time: "10:00 - 18:00",
    venueAddress:
      "Olympiapark München, Spiridon-Louis-Ring 21, 80809 München, Germany",
    description:
      "Annual sports day featuring cricket, volleyball, badminton, and various fun activities for all age groups. Bring your family and friends!",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
    registerLink: "https://register.example.com/sports-day-2026",
  },
  {
    id: "3",
    title: "Diwali Celebration",
    titleKannada: "ದೀಪಾವಳಿ ಆಚರಣೆ",
    date: "2026-11-01",
    time: "17:00 - 22:00",
    venueAddress: "Messe Berlin, Messedamm 22, 14055 Berlin, Germany",
    description:
      "Celebrate the festival of lights with traditional rituals, cultural programs, dinner, and fireworks display.",
    image:
      "https://images.unsplash.com/photo-1609952048342-5d5a8b194d87?w=800&h=600&fit=crop",
    registerLink: "https://register.example.com/diwali-2026",
  },
];

// Past Events
export const pastEvents: Event[] = [
  {
    id: "p1",
    title: "Sankranthi Sambrama 2026",
    titleKannada: "ಸಂಕ್ರಾಂತಿ ಸಂಭ್ರಮ 2026",
    date: "2026-01-17",
    time: "14:00 - 20:00",
    venueAddress:
      "Messe Frankfurt, Ludwig-Erhard-Anlage 1, 60327 Frankfurt am Main, Germany",
    description:
      "Celebration of the harvest festival together with traditional music, cultural performances, and community festivities.",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop",
  },
  {
    id: "p2",
    title: "Kannada Rajyotsava 2025",
    titleKannada: "ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವ 2025",
    date: "2025-11-07",
    time: "15:00 - 21:00",
    venueAddress:
      "Olympiapark München, Spiridon-Louis-Ring 21, 80809 München, Germany",
    description:
      "Celebrating Karnataka Formation Day with cultural performances, traditional music, and community festivities.",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop",
  },
  {
    id: "p3",
    title: "Rajyotsava 2024",
    titleKannada: "ರಾಜ್ಯೋತ್ಸವ 2024",
    date: "2024-11-01",
    time: "16:00 - 22:00",
    venueAddress: "Messe Berlin, Messedamm 22, 14055 Berlin, Germany",
    description:
      "Celebration of Karnataka Rajyotsava! Our annual event featuring cultural performances, music, and dance.",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop",
  },
  {
    id: "p4",
    title: "IPL RCB Final Live Streaming",
    titleKannada: "ಐಪಿಎಲ್ ಆರ್‌ಸಿಬಿ ಫೈನಲ್",
    date: "2025-06-03",
    time: "19:30 - 23:30",
    venueAddress:
      "Sports Bar Stuttgart, Königstraße 1A, 70173 Stuttgart, Germany",
    description:
      "Community gathering to watch the IPL final match together with snacks and beverages.",
    image:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=600&fit=crop",
  },
  {
    id: "p5",
    title: "Sankranthi",
    titleKannada: "ಸಂಕ್ರಾಂತಿ",
    date: "2025-01-18",
    time: "13:00 - 19:00",
    venueAddress:
      "Kölner Philharmonie, Bischofsgartenstraße 1, 50667 Köln, Germany",
    description:
      "Sankranthi celebrations with cultural performances, events, and traditional meal.",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop",
  },
  {
    id: "p6",
    title: "Chaats Mela",
    titleKannada: "ಚಾಟ್ ಮೇಳ",
    date: "2025-03-16",
    time: "12:00 - 18:00",
    venueAddress: "Hamburg Messe, Messeplatz 1, 20357 Hamburg, Germany",
    description:
      "A delightful evening of street food, music, and theatre in the Indian theatre.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop",
  },
];
