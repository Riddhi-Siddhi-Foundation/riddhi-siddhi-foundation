import React from "react";
import { Link, useParams } from "react-router-dom";
import "./ActivityDetails.css";
import activitiesData from "./activitiesData";

function ActivityDetails() {
  const { slug } = useParams();

  const activity = activitiesData.find(
    (item) => item.slug === slug
  );

  if (!activity) {
    return (
      <main className="activity-details-page">

        <section className="activity-not-found">

          <span
            className="eyebrow"
            data-reveal="left"
          >
            ACTIVITY
          </span>

          <h1 data-reveal="left">
            Activity Not Found
          </h1>

          <p data-reveal="left">
            The activity you are looking for could not be found.
          </p>

          <Link
            to="/activities"
            data-reveal="right"
          >
            ← Back to Activities
          </Link>

        </section>

      </main>
    );
  }

  return (
    <main className="activity-details-page">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="activity-detail-hero">

        <div className="activity-detail-hero-inner">

          <div
            className="activity-detail-heading"
            data-reveal="left"
          >

            <Link
              to="/activities"
              className="back-to-activities"
            >
              ← All Activities
            </Link>

            <span className="eyebrow">
              {activity.category}
            </span>

            <h1>
              {activity.title}
            </h1>

            <p>
              {activity.shortDescription}
            </p>

          </div>


          <div
            className="activity-detail-image"
            data-reveal="right"
          >

            <img
              src={activity.image}
              alt={activity.title}
            />

          </div>

        </div>

      </section>


      {/* =========================================================
          CONTENT
      ========================================================= */}

      <section className="activity-detail-content">

        <div className="activity-detail-main">


          {/* =====================================================
              ABOUT THIS INITIATIVE
          ===================================================== */}

          <div data-reveal="left">

            <span className="detail-label">
              ABOUT THIS INITIATIVE
            </span>

            <h2>
              Creating Meaningful Change
            </h2>

            <p className="detail-description">
              {activity.description}
            </p>

          </div>


          {/* =====================================================
              OBJECTIVES
          ===================================================== */}

          <div className="detail-objectives">

            <div data-reveal="left">

              <span className="detail-label">
                OUR FOCUS
              </span>

              <h2>
                What We Aim To Do
              </h2>

            </div>


            <div className="objective-list">

              {activity.objectives.map(
                (objective, index) => (

                  <div
                    className="objective-item"
                    key={index}
                    data-reveal={
                      index % 2 === 0
                        ? "left"
                        : "right"
                    }
                  >

                    <span className="objective-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p>
                      {objective}
                    </p>

                  </div>

                )
              )}

            </div>

          </div>


          {/* =====================================================
              OUR IMPACT
          ===================================================== */}

          <div
            className="detail-impact"
            data-reveal="left"
          >

            <span className="detail-label">
              OUR IMPACT
            </span>

            <h2>
              Building a Better Tomorrow
            </h2>

            <p>
              {activity.impact}
            </p>

          </div>


          {/* =====================================================
              GET INVOLVED
          ===================================================== */}

          <div className="activity-detail-cta">

            <div data-reveal="left">

              <span className="detail-label">
                GET INVOLVED
              </span>

              <h2>
                Be Part of the Change
              </h2>

              <p>
                Your support can help us continue our work
                with individuals and communities.
              </p>

            </div>


            <Link
              to="/support"
              className="detail-support-btn"
              data-reveal="right"
            >
              Support Our Mission ❤
            </Link>

          </div>


        </div>

      </section>

    </main>
  );
}

export default ActivityDetails;