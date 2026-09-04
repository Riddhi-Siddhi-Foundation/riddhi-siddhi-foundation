import React from "react";
import { Link } from "react-router-dom";
import "./Support.css";

import supportImage from "../../assets/support.png";

const ways = [
  [
    "♥",
    "Donate",
    "Your contribution helps support charitable activities and community initiatives.",
    "Support Now →",
  ],
  [
    "♧",
    "Volunteer",
    "Give your time, skills and energy to support people and communities.",
    "Become a Volunteer →",
  ],
  [
    "🤝",
    "Partner With Us",
    "Organizations and businesses can collaborate with us to create meaningful social impact.",
    "Partner With Us →",
  ],
  [
    "⚑",
    "Spread the Word",
    "Help us reach more people by sharing our work and initiatives with your network.",
    "Share Our Mission →",
  ],
];

function Support() {
  return (
    <main className="support-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="support-hero">

        <div className="section-shell support-hero-inner">

          <div data-reveal="left">

            <span className="eyebrow">
              SUPPORT OUR MISSION
            </span>

            <h1>
              Together, 
              <br />
              We Can
              <br />
              <span>Create Change</span>
            </h1>

            <p>
              Every contribution, every helping hand and every act
              of kindness can make a meaningful difference.
            </p>

          </div>


          {/* OFFLINE IMAGE */}

          <img
            data-reveal="right"
            src={supportImage}
            alt="People supporting community"
          />

        </div>

      </section>


      {/* =========================
          WAYS TO SUPPORT
      ========================= */}

      <section className="section-shell support-ways">

        <div
          className="center-heading"
          data-reveal="left"
        >

          <span className="eyebrow">
            WAYS TO SUPPORT
          </span>

          <h2>
            Be Part of the Change
          </h2>

          <p>
            There are many meaningful ways to stand with our mission.
          </p>

        </div>


        <div className="ways-grid">

          {ways.map(
            ([icon, title, desc, cta], index) => (

              <article
                key={title}
                data-reveal={
                  index % 2 === 0
                    ? "left"
                    : "right"
                }
              >

                <b>
                  {icon}
                </b>

                <h3>
                  {title}
                </h3>

                <p>
                  {desc}
                </p>

                <Link
                  to={
                    title === "Donate"
                      ? "/contact"
                      : title === "Volunteer"
                      ? "/contact"
                      : title === "Partner With Us"
                      ? "/contact"
                      : "/galleries"
                  }
                >
                  {cta}
                </Link>

              </article>

            )
          )}

        </div>

      </section>


      {/* =========================
          IMPACT
      ========================= */}

      <section className="support-impact">

        <div className="section-shell">

          <div
            className="center-heading"
            data-reveal="right"
          >

            <span className="eyebrow">
              YOUR SUPPORT CAN CHANGE LIVES
            </span>

            <h2>
              Where Your Support Makes a Difference
            </h2>

          </div>


          <div className="impact-points">

            {[
              ["01", "Education"],
              ["02", "Health"],
              ["03", "Women Empowerment"],
              ["04", "Social Welfare"],
              ["05", "Community Development"],
            ].map(([number, title], index) => (

              <div
                key={number}
                data-reveal={
                  index % 2 === 0
                    ? "left"
                    : "right"
                }
              >

                <b>
                  {number}
                </b>

                <span>
                  {title}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================
          DONATION NOTE
      ========================= */}

      <section className="donation-note section-shell">

        <div data-reveal="left">

          <h2>
            Donations Welcome
          </h2>

          <p>
            Donations are used strictly for charitable activities.
            If you would like to support our work, please contact
            the foundation for current donation details.
          </p>

          <Link
            className="btn"
            to="/contact"
          >
            Contact Us →
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Support;