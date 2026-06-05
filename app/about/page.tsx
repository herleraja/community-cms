import { aboutContent, teamMembers } from "@/lib/content";
import { FaCheckCircle } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="about">
      <section className="hero hero--red">
        <div className="hero-container">
          <h1 className="hero-title">About Us</h1>
          <p className="hero-subtitle">
            Learn more about our community and mission
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="about__mission-grid">
            <div className="about__mission-content">
              <h2>Our Mission</h2>
              <p>{aboutContent.mission}</p>
              <div className="kannada-box">
                <p>{aboutContent.missionKannada}</p>
              </div>
            </div>
            <div className="card-gradient card-gradient--yellow about__vision-card">
              <h3>Our Vision</h3>
              <p>{aboutContent.vision}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <h2
            className="section-title"
            style={{ marginBottom: "3rem", textAlign: "center" }}
          >
            Our Core Values
          </h2>
          <div className="grid grid--gap-lg">
            {aboutContent.values.map((value, index) => (
              <div key={index} className="card about__value-card">
                <FaCheckCircle className="about__value-icon" />
                <div>
                  <h3 className="about__value-title">{value}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="about__team-header">
            <h2>Our Team</h2>
            <p>Meet the dedicated individuals who make our community thrive</p>
          </div>
          <div className="grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="card-gradient about__team-card">
                <div className="icon-container icon-container--xlarge about__team-avatar">
                  <span>{member.name.charAt(0)}</span>
                </div>
                <h3 className="about__team-name">{member.name}</h3>
                <p className="about__team-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hero hero--yellow" style={{ padding: "4rem 1rem" }}>
        <div className="container">
          <div className="grid" style={{ textAlign: "center" }}>
            <div className="about__impact-card">
              <div className="about__impact-number">500+</div>
              <div className="about__impact-label">Active Members</div>
            </div>
            <div className="about__impact-card">
              <div className="about__impact-number">50+</div>
              <div className="about__impact-label">Events Organized</div>
            </div>
            <div className="about__impact-card">
              <div className="about__impact-number">10+</div>
              <div className="about__impact-label">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div
          className="container"
          style={{ maxWidth: "64rem", textAlign: "center" }}
        >
          <h2 className="about__join-title">Want to Get Involved?</h2>
          <p className="about__join-description">
            Join us in our mission to build a stronger, more connected
            community. Whether you want to volunteer, attend events, or become a
            member, we'd love to hear from you!
          </p>
          <a href="/contact" className="about__join-button">
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
