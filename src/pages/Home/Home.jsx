import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import CountUp from "../../components/CountUp";

/* =========================================================
   LOCAL IMAGES
   Place these files inside: src/assets/
========================================================= */

import homeHero from "../../assets/home-hero.webp";
import aboutHome from "../../assets/about-home.webp";
import missionImage from "../../assets/mission.webp";
import educationImage from "../../assets/education.webp";
import healthImage from "../../assets/health.webp";
import womenEmpowermentImage from "../../assets/women-empowerment.webp";
import ruralDevelopmentImage from "../../assets/rural-development.webp";
import skillDevelopmentImage from "../../assets/skill-development.webp";
import environmentImage from "../../assets/environment.webp";
import gallery1 from "../../assets/gallery-1.webp";
import gallery2 from "../../assets/gallery-2.webp";
import gallery3 from "../../assets/gallery-3.webp";
import gallery4 from "../../assets/gallery-4.webp";


/* =========================================================
   ACTIVITIES
========================================================= */

const activities = [
  [
    "Education & Scholarships",
    "Supporting education and creating brighter futures for underprivileged children.",
    educationImage,
  ],

  [
    "Health Camps & Blood Donation",
    "Organizing healthcare camps and promoting healthy communities.",
    healthImage,
  ],

  [
    "Women’s Empowerment",
    "Empowering women through skills, training and opportunities.",
    womenEmpowermentImage,
  ],

  [
    "Rural Development Activities",
    "Working for community development and rural upliftment.",
    ruralDevelopmentImage,
  ],

  [
    "Skill Development & Digital Literacy",
    "Building skills and digital literacy for a better tomorrow.",
    skillDevelopmentImage,
  ],

  [
    "Environmental Protection & Tree Plantation",
    "Planting trees and promoting a greener and healthier planet.",
    environmentImage,
  ],
];


/* =========================================================
   GALLERY
========================================================= */

const gallery = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
];


/* =========================================================
   HOME
========================================================= */

function Home() {
  return (
    <main className="home-page">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="home-hero">

        <div
          className="home-hero-copy"
          data-reveal="left"
        >

          <span className="eyebrow">
            SERVICE TO HUMANITY
          </span>


          <h1>
            Empowering Lives,
            <br />
            <span>Building Futures</span>
          </h1>


          <p>
            Together we can create a stronger, healthier and
            more compassionate society.
          </p>


          <div className="home-actions">

            <Link
              className="btn btn-green"
              to="/activities"
            >
              Explore Our Work
              <span>→</span>
            </Link>


            <Link
              className="btn btn-gold hero-support-btn"
              to="/support"
            >
              Support Our Mission
              <span>❤︎</span>
            </Link>

          </div>

        </div>


        {/* HERO IMAGE */}

        <div
          className="home-hero-image"
          data-reveal="right"
        >

          <img
            src={homeHero}
            alt="Children together"
          />


          <div className="hero-impact">

            <div className="hero-impact-icon">

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >

                <path
                  d="M16 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-8 0a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm8 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4ZM8 13c-.34 0-.7.02-1.07.06C4.55 13.37 1 14.6 1 17v2h5v-2c0-1.52.82-2.77 2.17-3.72A7.4 7.4 0 0 0 8 13Z"
                />

              </svg>

            </div>


            <div className="hero-impact-content">

              <strong>
                500+
              </strong>

              <span>
                Lives Impacted
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          IMPACT STATISTICS
      ===================================================== */}

      <section className="impact-strip">


        {/* BENEFICIARIES */}

        <div className="impact-stat">

          <div className="impact-icon">

            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >

              <path
                d="M16 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-8 0a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm8 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4ZM8 13c-.34 0-.7.02-1.07.06C4.55 13.37 1 14.6 1 17v2h5v-2c0-1.52.82-2.77 2.17-3.72A7.4 7.4 0 0 0 8 13Z"
              />

            </svg>

          </div>


          <div className="impact-content">

            <CountUp end={500} />

            <span>
              Beneficiaries
            </span>

          </div>

        </div>


        {/* ACTIVITIES */}

        <div className="impact-stat">

          <div className="impact-icon">

            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >

              <path
                d="M4 19h16v2H4v-2Zm2-2h3V9H6v8Zm5 0h3V5h-3v12Zm5 0h3V2h-3v15Z"
              />

            </svg>

          </div>


          <div className="impact-content">

            <CountUp end={50} />

            <span>
              Activities
            </span>

          </div>

        </div>


        {/* COMMUNITIES */}

        <div className="impact-stat">

          <div className="impact-icon">

            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >

              <path
                d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
              />

            </svg>

          </div>


          <div className="impact-content">

            <CountUp end={20} />

            <span>
              Communities
            </span>

          </div>

        </div>


        {/* YEARS */}

        <div className="impact-stat">

          <div className="impact-icon">

            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >

              <path
                d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2Zm1 5h-2v6l5 3 1-1.7-4-2.3V7Z"
              />

            </svg>

          </div>


          <div className="impact-content">

            <CountUp end={10} />

            <span>
              Years of Service
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section className="home-about section-shell">


        <div
          className="section-copy"
          data-reveal="left"
        >

          <span className="eyebrow">
            ABOUT RIDDHI SIDDHI FOUNDATION
          </span>


          <h2>
            Working together for a better tomorrow.
          </h2>


          <p>
            Riddhi Siddhi Foundation works towards creating a stronger,
            healthier and more compassionate society through meaningful
            initiatives in education, health, women empowerment, social
            welfare and sustainable development.
          </p>


          <Link
            className="text-link"
            to="/about"
          >
            Know More About Us
            <span>→</span>
          </Link>

        </div>


        <div
          className="home-about-image"
          data-reveal="right"
        >

          <img
            src={aboutHome}
            alt="Community initiative"
          />

        </div>

      </section>


      {/* =====================================================
          ACTIVITIES
      ===================================================== */}

      <section className="home-activities section-shell">


        <div
          className="center-heading"
          data-reveal="left"
        >

          <span className="eyebrow">
            WHAT WE DO
          </span>


          <h2>
            Our Key Activities
          </h2>


          <p>
            Meaningful initiatives designed to empower people and
            strengthen communities.
          </p>

        </div>


        <div className="home-activity-grid">

          {activities.map(
            ([title, desc, image], index) => (

              <article
                className="home-activity-card"
                key={title}
                data-reveal={
                  index % 2 === 0
                    ? "left"
                    : "right"
                }
              >

                <img
                  src={image}
                  alt={title}
                />


                <div>

                  <h3>
                    {title}
                  </h3>


                  <p>
                    {desc}
                  </p>


                  <Link to="/activities">
                    Learn More →
                  </Link>

                </div>

              </article>

            )
          )}

        </div>


        <div
          className="center-link"
          data-reveal="right"
        >

          <Link
            className="text-link"
            to="/activities"
          >
            View All Activities →
          </Link>

        </div>

      </section>


      {/* =====================================================
          MISSION
      ===================================================== */}

      <section className="mission-banner">


        <div className="mission-banner-inner section-shell">


          <img
            data-reveal="left"
            src={missionImage}
            alt="Planting for a better future"
          />


          <div data-reveal="right">

            <span className="eyebrow">
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


            <Link
              className="btn btn-gold"
              to="/about"
            >
              Learn More
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          GALLERY
      ===================================================== */}

      <section className="home-gallery section-shell">


        <div
          className="center-heading"
          data-reveal="left"
        >

          <span className="eyebrow">
            MOMENTS OF IMPACT
          </span>


          <h2>
            Our Work in Pictures
          </h2>

        </div>


        <div className="home-gallery-grid">

          {gallery.map((image, i) => (

            <img
              key={image}
              data-reveal={
                i % 2 === 0
                  ? "left"
                  : "right"
              }
              src={image}
              alt={`Foundation activity ${i + 1}`}
            />

          ))}

        </div>


        <div
          className="center-link"
          data-reveal="right"
        >

          <Link
            className="text-link"
            to="/galleries"
          >
            View Gallery →
          </Link>

        </div>

      </section>


      {/* =====================================================
          SUPPORT
      ===================================================== */}

      <section className="support-banner">


        <div className="support-banner-inner section-shell">


          <div data-reveal="left">

            <span className="eyebrow">
              MAKE A DIFFERENCE
            </span>


            <h2>
              Your Support Can Change Lives
            </h2>


            <p>
              Together, we can build a stronger, healthier and
              more compassionate society.
            </p>

          </div>


          <Link
            className="btn btn-gold"
            to="/support"
            data-reveal="right"
          >
            Support Our Mission
            <span>♡</span>
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Home;