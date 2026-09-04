import React, { useState } from "react";
import "./Gallery.css";

// Offline gallery images
import gallery1 from "../../assets/gallery1.png";
import gallery2 from "../../assets/gallery2.png";
import gallery3 from "../../assets/gallery3.png";
import gallery4 from "../../assets/gallery4.png";
import gallery5 from "../../assets/gallery5.png";
import gallery6 from "../../assets/gallery6.png";
import gallery7 from "../../assets/gallery7.png";
import gallery8 from "../../assets/gallery8.png";
import gallery9 from "../../assets/gallery9.png";

const photos = [
  [
    "Community Outreach",
    "Community",
    gallery1,
  ],
  [
    "Education Support",
    "Education",
    gallery2,
  ],
  [
    "Healthcare Camp",
    "Health",
    gallery3,
  ],
  [
    "Women Empowerment",
    "Women",
    gallery4,
  ],
  [
    "Tree Plantation",
    "Environment",
    gallery5,
  ],
  [
    "Digital Literacy",
    "Education",
    gallery6,
  ],
  [
    "Learning Together",
    "Education",
    gallery7,
  ],
  [
    "Rural Development",
    "Rural Development",
    gallery8,
  ],
  [
    "Senior Citizen Welfare",
    "Welfare",
    gallery9,
  ],
];

function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <main className="gallery-page">

      {/* =========================
          GALLERY HERO
      ========================= */}

      <section className="gallery-hero section-shell">

        <div data-reveal="left">

          <span className="eyebrow">
            OUR GALLERY
          </span>

          <h1>
            Moments of <span>Impact</span>
          </h1>

          <p>
            Glimpses of our initiatives and the communities we serve.
          </p>

        </div>


        <div
          className="camera-mark"
          data-reveal="right"
        >
          ◉
        </div>

      </section>


      {/* =========================
          GALLERY GRID
      ========================= */}

      <section className="section-shell gallery-content">

        <div className="gallery-grid">

          {photos.map(([title, cat, img], index) => (

            <button
              key={title}
              className="gallery-card"
              data-reveal={
                index % 2 === 0
                  ? "left"
                  : "right"
              }
              onClick={() =>
                setSelected({
                  title,
                  cat,
                  img,
                })
              }
            >

              <img
                src={img}
                alt={title}
              />

              <div>

                <span>
                  {cat}
                </span>

                <strong>
                  {title}
                </strong>

              </div>

            </button>

          ))}

        </div>

      </section>


      {/* =========================
          LIGHTBOX
      ========================= */}

      {selected && (

        <div
          className="lightbox"
          onClick={() => setSelected(null)}
        >

          <button
            className="lightbox-close"
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation();
              setSelected(null);
            }}
          >
            ×
          </button>


          <img
            src={selected.img}
            alt={selected.title}
          />


          <div className="lightbox-info">

            <span>
              {selected.cat}
            </span>

            <h2>
              {selected.title}
            </h2>

          </div>

        </div>

      )}

    </main>
  );
}

export default Gallery;