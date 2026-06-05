import { upcomingEvents, pastEvents } from "@/lib/content";
import EventCard from "@/components/EventCard";

export default function EventsPage() {
  return (
    <div className="events">
      <section className="hero hero--yellow">
        <div className="hero-container">
          <h1 className="hero-title" style={{ color: "#111827" }}>
            Events
          </h1>
          <p className="hero-subtitle" style={{ color: "#1f2937" }}>
            Join us for exciting cultural celebrations and community gatherings
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <h2
            className="section-title"
            style={{ marginBottom: "3rem", textAlign: "center" }}
          >
            Upcoming Events
          </h2>
          <div className="events__grid">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <h2
            className="section-title"
            style={{ marginBottom: "3rem", textAlign: "center" }}
          >
            Past Events
          </h2>
          <div className="events__grid">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} showFullDetails={false} />
            ))}
          </div>
        </div>
      </section>

      <section className="hero hero--red" style={{ padding: "4rem 1rem" }}>
        <div
          className="container"
          style={{ maxWidth: "64rem", textAlign: "center" }}
        >
          <h2 className="events__subscribe-title">
            Stay Updated on Our Events
          </h2>
          <p className="events__subscribe-description">
            Subscribe to get updates on our events and never miss out on
            community celebrations!
          </p>
          <div className="events__subscribe-form">
            <input
              type="email"
              placeholder="Enter your email address"
              className="events__subscribe-input"
            />
            <button className="events__subscribe-button">Subscribe</button>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container" style={{ maxWidth: "64rem" }}>
          <h2 className="events__guidelines-title">Event Guidelines</h2>
          <div className="kannada-box" style={{ borderRadius: "0.75rem" }}>
            <ul className="events__guidelines-list">
              <li className="events__guidelines-item">
                Please arrive 15 minutes before the event start time
              </li>
              <li className="events__guidelines-item">
                Tickets are non-refundable but transferable
              </li>
              <li className="events__guidelines-item">
                Traditional attire is encouraged but not mandatory
              </li>
              <li className="events__guidelines-item">
                Photography and videography are allowed for personal use
              </li>
              <li className="events__guidelines-item">
                For any queries, please contact us through our contact page
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
