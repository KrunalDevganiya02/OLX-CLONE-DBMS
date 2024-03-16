import React from "react";
import "../style/about.css";

function About() {
  return (
    <div>
      <section className="about-us-section">
        <h1>About Us</h1>
        <p>
          Welcome to our website! We are a passionate team dedicated to
          providing the best products/services to our customers.
        </p>
        <p>
          At our company, we strive for excellence in everything we do. From our
          innovative solutions to our exceptional customer service, we are
          committed to exceeding your expectations.
        </p>
        <br />
      </section>

      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-member">
          <span>
            Team <br /> Member <br />1
          </span>
          <div className="member-info">
            <h3>Swati</h3>
            <p>Captain</p>
            <p>
              "swati is a dedicated individual with a passion for
              problem-solving and a keen eye for detail."
            </p>
          </div>
        </div>
        <div className="team-member">
          <span>
            Team <br /> Member <br />2
          </span>
          <div className="member-info">
            <h3>Krunal</h3>
            <p>Member</p>
            <p>
              Krunal is a creative thinker with a knack for communication and a
              drive for innovation.
            </p>
          </div>
        </div>
        <div className="team-member">
          <span>
            Team <br /> Member <br />3
          </span>
          <div className="member-info">
            <h3>Samreen</h3>
            <p>Member</p>
            <p>
              Samreen is a compassionate leader known for her empathy and
              commitment to community engagement.
            </p>
          </div>
        </div>
        <div className="team-member">
          <span>
            Team <br /> Member <br />4
          </span>
          <div className="member-info">
            <h3>Sandhya</h3>
            <p>Member</p>
            <p>
              Sandhya is an analytical thinker who thrives on challenges and
              excels in finding effective solutions.
            </p>
          </div>
        </div>

        {/* Add more team members as needed */}
      </section>
      <br />

      <section className="history-section">
        <h2>Our History</h2>
        <p>
          Our company was founded in 2002. Since then, we have grown into a
          leading provider of second hand products with a global presence.
        </p>
        <p>
          Throughout our journey, we have overcome many challenges and achieved
          numerous milestones. We are proud of our accomplishments and grateful
          for the support of our customers and partners.
        </p>
      </section>
      <br />
      <br />
      <br />
      {/* Add more sections as needed */}
    </div>
  );
}

export default About;
