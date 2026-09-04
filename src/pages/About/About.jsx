import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

import aboutFoundation from "../../assets/about-foundation.png";


const activities = [
  "Education & Scholarships",
  "Women’s Empowerment",
  "Self Help Group (SHG) Promotion",
  "Legal Awareness Programs",
  "Health Camps & Blood Donation Camps",
  "Rural Development Activities",
  "Skill Development & Digital Literacy",
  "Environmental Protection & Tree Plantation",
  "Senior Citizen Welfare",
  "Disaster Relief & Humanitarian Assistance",
];


const values = [
  "Service",
  "Equality",
  "Transparency",
  "Empowerment",
  "Social Responsibility",
  "Compassion",
];


function About() {
  return (
    <main className="about-page">


      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="about-hero">

        <div
          className="about-copy"
          data-reveal="left"
        >

          <span className="eyebrow">
            ABOUT US
          </span>


          <h1>
            Riddhi Siddhi <span>Foundation</span>
          </h1>


          <p>
            Riddhi Siddhi Foundation is committed to serving humanity
            through education, health, empowerment, welfare and
            sustainable community initiatives.
          </p>


          <p className="motto-line">
            Empowering Lives, Building Futures
          </p>

        </div>


        {/* =====================================================
            OFFLINE ABOUT IMAGE
        ===================================================== */}

        <div
          className="about-hero-image"
          data-reveal="right"
        >

          <img
            src={aboutFoundation}
            alt="Riddhi Siddhi Foundation community activities"
          />

        </div>

      </section>


      {/* =========================================================
          VISION / MISSION / MOTTO
      ========================================================= */}

      <section className="about-pillars section-shell">
  {/* =====================================================
            MOTTO
        ===================================================== */}

        <article
          className="motto-card"
          data-reveal="left"
        >

          <span>
            OUR MOTTO
          </span>


          <h2>
            “Empowering Lives,
            <br />
            Building Futures”
          </h2>

        </article>

        {/* =====================================================
            VISION
        ===================================================== */}

        <article
          className="vision-card"
          data-reveal="left"
        >

          <div className="pillar-icon">
            ◉
          </div>


          <div>

            <span>
              OUR VISION
            </span>


            <h2>
              A stronger, healthier and more empowered society.
            </h2>


            <p>
              We envision a society where every individual has the
              opportunity to thrive.
            </p>

          </div>

        </article>


        {/* =====================================================
            MISSION
        ===================================================== */}

        <article
          className="mission-card"
          data-reveal="right"
        >

          <div className="pillar-icon">
            ◎
          </div>


          <div>

            <span>
              OUR MISSION
            </span>


            <h2>
              Empowering individuals and communities.
            </h2>


            <p>
              To empower individuals and communities through education,
              health, social welfare, skill development and sustainable
              development initiatives.
            </p>

          </div>

        </article>


      

      </section>


      {/* =========================================================
          VALUES
      ========================================================= */}

      <section className="about-values section-shell">

        <div
          className="center-heading"
          data-reveal="left"
        >

          <span className="eyebrow">
            WHAT GUIDES US
          </span>


          <h2>
            Our Values
          </h2>

        </div>


        <div className="values-grid">

          {values.map((value, index) => (

            <div
              key={value}
              data-reveal={
                index % 2 === 0
                  ? "left"
                  : "right"
              }
            >

              <b>
                {[
                  "♡",
                  "⚖",
                  "◉",
                  "♧",
                  "♥",
                  "✦",
                ][index]}
              </b>


              <strong>
                {value}
              </strong>

            </div>

          ))}

        </div>

      </section>


      {/* =========================================================
          KEY ACTIVITIES
      ========================================================= */}

      <section className="about-key section-shell">

        <div
          className="center-heading"
          data-reveal="right"
        >

          <span className="eyebrow">
            WHAT WE DO
          </span>


          <h2>
            Our Key Activities
          </h2>

        </div>


        <div className="key-grid">

          {activities.map((activity, index) => (

            <div
              key={activity}
              data-reveal={
                index % 2 === 0
                  ? "left"
                  : "right"
              }
            >

              <b>
                {String(index + 1).padStart(2, "0")}
              </b>


              <span>
                {activity}
              </span>

            </div>

          ))}

        </div>

      </section>


      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="about-cta">

        <div
          className="section-shell"
          data-reveal="right"
        >

          <h2>
            Together for a Better Tomorrow
          </h2>


          <p>
            Together, we can create a stronger, healthier and more
            compassionate society.
          </p>


          <Link
            to="/support"
            className="btn btn-gold"
          >
            Support Our Mission →
          </Link>

        </div>

      </section>

    </main>
  );
}


export default About;