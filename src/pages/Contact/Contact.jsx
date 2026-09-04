import React from "react";
import "./Contact.css";

import gangadhara from "../../assets/gangadhara.webp";
import kavya from "../../assets/kavya.webp";
import latha from "../../assets/latha.webp";
import shashikumar from "../../assets/shashikumar.webp";

function Contact() {
  const mapsUrl =
    "https://maps.app.goo.gl/wJbanACTQzKJ7j8F7";

  const mapEmbedUrl =
    "https://www.google.com/maps?q=1st+A+Cross,+Siddaganga+Extension,+Tumkuru,+Karnataka+572102&output=embed";

  return (
    <main className="contact-page">
      {/* =========================================================
          TOP SECTION
          LEFT  : CONTACT HERO
          RIGHT : PRESIDENT
      ========================================================= */}

      <section className="contact-top section-shell">
        {/* =====================================================
            LEFT - HERO
        ===================================================== */}

        <div className="contact-hero" data-reveal="left">
          <span className="eyebrow">GET IN TOUCH</span>

          <h1>
            Let&apos;s Make a <span>Difference Together</span>
          </h1>

          <p>
            We are here to hear your questions, suggestions and ideas. Connect
            with us to learn more about our initiatives, support our mission,
            volunteer, or explore opportunities to make a meaningful difference
            together.
          </p>
        </div>

        {/* =====================================================
            RIGHT - PRESIDENT
        ===================================================== */}

        <div className="top-president" data-reveal="right">
          <span className="trustees-eyebrow">OUR TRUSTEES</span>

          {/* <h2>
            The People Behind
            <span> Our Mission</span>
          </h2> */}

          {/* <p className="trustees-intro">
            Meet the dedicated individuals guiding Riddhi Siddhi
            Foundation and helping us create meaningful change.
          </p> */}

          {/* PRESIDENT CARD */}

          <article className="president-card">
            {/* PRESIDENT DETAILS */}

            <div className="president-content">
              <span className="trustee-role">
                PRESIDENT / FOUNDER / MANAGING TRUSTEE
              </span>

              <h3>Gangadhara S</h3>

              <span className="president-qualification">BBM, M.Com, LL.B</span>

              <div className="trustee-line"></div>

              <p>
                A dedicated social work professional committed to serving
                communities and guiding the foundation towards meaningful social
                development.
              </p>

              <div className="member-details">
                <div>
                  <span>OCCUPATION</span>

                  <strong>Social Work</strong>
                </div>
              </div>

              <a href="tel:9901628078" className="trustee-phone">
                <span className="phone-icon">☎</span>

                <span>9901628078</span>

                <span className="phone-arrow">→</span>
              </a>
            </div>

            {/* PRESIDENT PHOTO */}

            <div className="president-photo">
              <img src={gangadhara} alt="Gangadhara S" />

              <span className="president-badge">PRESIDENT</span>
            </div>
          </article>
        </div>
      </section>

      {/* =========================================================
          CONTACT INFORMATION + OTHER TRUSTEES
      ========================================================= */}

      <section className="contact-lower section-shell">
        {/* =====================================================
            LEFT - CONTACT INFORMATION
        ===================================================== */}

        <div className="contact-info" data-reveal="left">
          <h2>We&apos;d love to hear from you.</h2>

          <p>
            Connect with Riddhi Siddhi Foundation for enquiries, support,
            volunteering and information about our initiatives.
          </p>

          {/* ADDRESS */}

          <div className="detail" data-reveal="left">
            <b>⌖</b>

            <div>
              <strong>Address</strong>

              <span>
                1st A Cross, Siddaganga Extension,
                <br />
                Near Cosmo Skin Care, Tumkuru – 572102,
                <br />
                Karnataka, India.
              </span>
            </div>
          </div>

          {/* PHONE */}

          <div className="detail" data-reveal="right">
            <b>☎</b>

            <div>
              <strong>Phone</strong>

              <span>9901628078</span>
            </div>
          </div>

          {/* EMAIL */}

          <div className="detail" data-reveal="left">
            <b>✉</b>

            <div>
              <strong>Email</strong>

              <span>riddhisiddhifoundation06@gmail.com</span>
            </div>
          </div>
        </div>

        {/* =====================================================
            RIGHT - THREE TRUSTEES
        ===================================================== */}

        <div className="other-trustees" data-reveal="right">
          {/* =================================================
              KAVYA
          ================================================= */}

          <article className="member-card">
            <div className="member-photo">
              <img src={kavya} alt="Kavya K S" />
            </div>

            <div className="member-card-content">
              <span className="trustee-role">VICE-PRESIDENT / TRUSTEE</span>

              <h3>Kavya K S</h3>

              <p>
                A social work professional contributing to community initiatives
                and supporting the foundation&apos;s mission of service and
                empowerment.
              </p>

              <div className="member-details">
                {/* <div>
                  <span>
                    AGE
                  </span>

                  <strong>
                    27
                  </strong>
                </div> */}

                <div>
                  <span>OCCUPATION</span>

                  <strong>Social Work</strong>
                </div>
              </div>
            </div>
          </article>

          {/* =================================================
              LATHA
          ================================================= */}

          <article className="member-card">
            <div className="member-photo">
              <img src={latha} alt="Latha V" />
            </div>

            <div className="member-card-content">
              <span className="trustee-role">SECRETARY / TRUSTEE</span>

              <h3>Latha V</h3>

              <p>
                A social work professional supporting the foundation&apos;s
                administrative and community service initiatives.
              </p>

              <div className="member-details">
                {/* <div>
                  <span>
                    AGE
                  </span>

                  <strong>
                    35
                  </strong>
                </div> */}

                <div>
                  <span>OCCUPATION</span>

                  <strong>Social Work</strong>
                </div>
              </div>
            </div>
          </article>

          {/* =================================================
              SHASHI KUMAR
          ================================================= */}

          <article className="member-card">
            <div className="member-photo">
              <img src={shashikumar} alt="Shashi Kumar S" />
            </div>

            <div className="member-card-content">
              <span className="trustee-role">TRUSTEE</span>

              <h3>Shashi Kumar S</h3>

              <p>
                A social work professional supporting the foundation&apos;s
                efforts to serve individuals and communities.
              </p>

              <div className="member-details">
                {/* <div>
                  <span>
                    AGE
                  </span>

                  <strong>
                    37
                  </strong>
                </div> */}

                <div>
                  <span>OCCUPATION</span>

                  <strong>Social Work</strong>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* =========================================================
          MAP
      ========================================================= */}

      <section className="map-section section-shell">
        <div className="map-card">
          <div className="map-frame">
            <iframe
              src={mapEmbedUrl}
              title="Riddhi Siddhi Foundation Location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="map-content">
            <span className="map-eyebrow">OUR LOCATION</span>

            <h2>Visit Riddhi Siddhi Foundation</h2>

            <p>Tumkuru, Karnataka, India</p>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="map-button"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;