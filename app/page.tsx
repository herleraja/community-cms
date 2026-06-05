import Link from "next/link";
import { FaCalendarAlt, FaUsers, FaHeart } from "react-icons/fa";
import { siteConfig, upcomingEvents } from "@/lib/content";

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

          <div className="grid">
            {upcomingEvents.slice(0, 3).map((event) => (
              <div key={event.id} className="card home__event-card">
                <div className="home__event-header">
                  <h3 className="home__event-title">{event.title}</h3>
                  {event.titleKannada && (
                    <p className="home__event-title-kannada">
                      {event.titleKannada}
                    </p>
                  )}
                </div>
                <div className="home__event-body">
                  <div className="home__event-details">
                    <p className="home__event-detail">
                      <FaCalendarAlt />
                      <strong>Date:</strong>
                      <span>
                        {new Date(event.date).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </p>
                    <p className="home__event-detail">
                      <strong>Time:</strong> {event.time}
                    </p>
                    <p className="home__event-detail">
                      <strong>Venue:</strong> {event.venue}
                    </p>
                  </div>
                  <p className="home__event-description">{event.description}</p>
                  {event.ticketLink && (
                    <a
                      href={event.ticketLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="home__event-button"
                    >
                      Book Tickets
                    </a>
                  )}
                </div>
              </div>
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
