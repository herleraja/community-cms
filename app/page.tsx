import Link from "next/link";
import { FaCalendarAlt, FaUsers, FaHeart } from "react-icons/fa";
import { siteConfig, upcomingEvents } from "@/lib/content";
import EventCard from "@/components/EventCard";

export default function Home() {
  return (
    <div className="home">
      <section className="hero hero--yellow">
        <div className="hero-container">
          <h1 className="hero-title" style={{ color: "#111827" }}>
            {siteConfig.name}
          </h1>
          <p className="home__hero-title-kannada">{siteConfig.nameKannada}</p>
          <p className="hero-subtitle" style={{ color: "#1f2937" }}>
            {siteConfig.tagline}
          </p>
          <p className="home__hero-tagline-kannada">
            {siteConfig.taglineKannada}
          </p>
          <div className="home__hero-buttons">
            <Link href="/events" className="home__hero-button-primary">
              View Events
            </Link>
            <Link href="/contact" className="home__hero-button-secondary">
              Become a Member
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Welcome to Our Community</h2>
            <p className="section-description">{siteConfig.description}</p>
          </div>

          <div className="grid home__features">
            <div className="card-gradient home__feature-card">
              <div className="home__feature-icon">
                <div className="icon-container icon-container--large">
                  <FaCalendarAlt />
                </div>
              </div>
              <h3 className="home__feature-title">Events & Festivals</h3>
              <p className="home__feature-description">
                Join us for cultural celebrations, festivals, and community
                gatherings throughout the year.
              </p>
            </div>

            <div className="card-gradient card-gradient--yellow home__feature-card">
              <div className="home__feature-icon">
                <div className="icon-container icon-container--large icon-container--yellow">
                  <FaUsers />
                </div>
              </div>
              <h3 className="home__feature-title">Community Unity</h3>
              <p className="home__feature-description">
                Connect with fellow community members and build lasting
                friendships and relationships.
              </p>
            </div>

            <div className="card-gradient card-gradient--green home__feature-card">
              <div className="home__feature-icon">
                <div className="icon-container icon-container--large icon-container--green">
                  <FaHeart />
                </div>
              </div>
              <h3 className="home__feature-title">Cultural Heritage</h3>
              <p className="home__feature-description">
                Preserve and celebrate our rich cultural traditions, language,
                and heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Upcoming Events</h2>
            <p className="section-description">
              Don't miss out on our exciting upcoming events!
            </p>
          </div>

          <div className="home__events-grid">
            {upcomingEvents.slice(0, 3).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          <div className="home__events-view-all">
            <Link href="/events" className="home__view-all-button">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      <section className="home__cta">
        <div className="home__cta-container">
          <h2 className="home__cta-title">Join Our Community Today!</h2>
          <p className="home__cta-description">
            Be part of something special. Connect with your roots, celebrate
            your culture, and make lasting memories.
          </p>
          <Link href="/contact" className="home__cta-button">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
