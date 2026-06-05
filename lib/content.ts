// CMS Content Data Structure
export interface Event {
  id: string;
  title: string;
  titleKannada?: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  image?: string;
  ticketLink?: string;
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
    venue: "Community Hall, Frankfurt",
    description:
      "Join us for an evening filled with culture, community, and celebration. Experience traditional music, dance performances, delicious food, and connect with fellow community members.",
    ticketLink: "https://tickets.example.com",
  },
  {
    id: "2",
    title: "Sports Day",
    titleKannada: "ಕ್ರೀಡಾ ದಿನ",
    date: "2026-07-20",
    time: "10:00 - 18:00",
    venue: "Sports Complex, Munich",
    description:
      "Annual sports day featuring cricket, volleyball, badminton, and various fun activities for all age groups. Bring your family and friends!",
  },
  {
    id: "3",
    title: "Diwali Celebration",
    titleKannada: "ದೀಪಾವಳಿ ಆಚರಣೆ",
    date: "2026-11-01",
    time: "17:00 - 22:00",
    venue: "Convention Center, Berlin",
    description:
      "Celebrate the festival of lights with traditional rituals, cultural programs, dinner, and fireworks display.",
  },
];

// Past Events
export const pastEvents: Event[] = [
  {
    id: "p1",
    title: "New Year Celebration 2026",
    titleKannada: "ಹೊಸ ವರ್ಷದ ಆಚರಣೆ 2026",
    date: "2026-01-01",
    time: "19:00 - 01:00",
    venue: "Grand Hotel, Cologne",
    description: "Welcomed 2026 with music, dance, dinner, and entertainment.",
  },
  {
    id: "p2",
    title: "Ugadi Festival",
    titleKannada: "ಉಗಾದಿ ಹಬ್ಬ",
    date: "2026-03-22",
    time: "11:00 - 16:00",
    venue: "Community Center, Stuttgart",
    description:
      "Celebrated the traditional new year with special programs and feast.",
  },
];
