import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/riddhi_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer">
      {/* =========================================================
          FOOTER MAIN
      ========================================================= */}

      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/">
            <img src={logo} alt="Riddhi Siddhi Foundation" />
          </Link>

          <p>Service to Humanity</p>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/activities">Activities</Link>
          <Link to="/galleries">Gallery</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/support">Support Us</Link>
        </div>

        <div className="footer-col">
          <h3>Our Activities</h3>

          <span>Education &amp; Scholarships</span>

          <span>Health Camps &amp; Blood Donation</span>

          <span>Women’s Empowerment</span>

          <span>Rural Development</span>

          <span>Environmental Protection</span>
        </div>

        <div className="footer-col">
          <h3>Contact Info</h3>

          <span>
            1st A Cross, Siddaganga Extension,
            <br />
            Tumkuru – 572102, Karnataka
          </span>

          <span>☎ 9901628078</span>

          <span>✉ riddhisiddhifoundation06@gmail.com</span>
        </div>

        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="socials">
            <a
              href="https://www.facebook.com/profile.php?id=61594052521778"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>

            <a
              href="https://www.instagram.com/riddhi.siddhi.foundation/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              href="https://wa.me/919901628078"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================
          FOOTER BOTTOM
      ========================================================= */}

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          {/* Copyright */}
          <span className="footer-copyright">
            © {new Date().getFullYear()} Riddhi Siddhi Foundation. All Rights
            Reserved.
          </span>

          {/* Crafted By */}
          <span className="footer-crafted">
            Crafted by{" "}
            <a
              href="https://www.instagram.com/inainayam/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="INAINAYAM Instagram"
              className="developer-link"
            >
              <span className="developer-inai">INAI</span>

              <span className="developer-nayam">NAYAM</span>
            </a>
          </span>

          {/* Foundation Message */}
          <span className="footer-message">
            No Caste | No Creed | No Religion - We Serve Everyone
          </span>
        </div>

        {/* Back To Top */}
        <button
          type="button"
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑
        </button>
      </div>
    </footer>
  );
}

export default Footer;