import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ScrollReveal.css";

const selectors = [
  ".home-hero-copy",
  ".home-hero-image",
  ".section-copy",
  ".home-about-image",
  ".home-activity-card",
  ".mission-banner-inner > img",
  ".mission-banner-inner > div",
  ".home-gallery-grid img",
  ".support-banner-inner > div",
  ".support-banner-inner > a",

  ".about-copy",
  ".about-hero-image",
  ".about-pillars article",
  ".values-grid",
  ".key-grid > div",

  ".activities-hero > div",
  ".activities-hero > img",
  ".activity-grid article",

  ".gallery-hero > div",
  ".gallery-grid button",

  ".contact-info",
  ".contact-form",
  ".map-card",

  ".support-hero-inner > div",
  ".support-hero-inner > img",
  ".ways-grid article",
  ".impact-points",
  ".donation-note > div",
].join(",");

function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    let observer;

    const setupAnimation = () => {
      const elements = document.querySelectorAll(
        "[data-reveal]"
      );

      console.log(
        `ScrollReveal: ${elements.length} elements found on ${pathname}`
      );

      if (!elements.length) return;

      elements.forEach((element, index) => {
        element.classList.remove(
          "scroll-reveal-visible",
          "scroll-reveal-left",
          "scroll-reveal-right"
        );

        element.classList.add("scroll-reveal-item");

        const direction =
          element.dataset.reveal ||
          (index % 2 === 0 ? "left" : "right");

        if (direction === "right") {
          element.classList.add("scroll-reveal-right");
        } else {
          element.classList.add("scroll-reveal-left");
        }

        element.style.setProperty(
          "--reveal-delay",
          `${(index % 6) * 80}ms`
        );
      });

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // ENTER VIEW
              entry.target.classList.add(
                "scroll-reveal-visible"
              );
            } else {
              // LEAVE VIEW
              entry.target.classList.remove(
                "scroll-reveal-visible"
              );
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: "0px 0px -40px 0px",
        }
      );

      elements.forEach((element) => {
        observer.observe(element);
      });
    };

    // Wait for React Router to render the page
    const timer = setTimeout(setupAnimation, 100);

    return () => {
      clearTimeout(timer);

      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname]);

  return null;
}

export default ScrollReveal;