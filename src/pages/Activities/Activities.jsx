import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Activities.css";
import activitiesData from "./activitiesData";

import activitiesHero from "../../assets/activities-hero.png";


function Activities() {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);


  const filters = [
    "All",
    "Education",
    "Health",
    "Women Empowerment",
    "Rural Development",
    "Environment",
    "Welfare",
  ];


  const filteredActivities =
    filter === "All"
      ? activitiesData
      : activitiesData.filter(
          (activity) => activity.category === filter
        );


  /*
   * Show only 9 activities initially
   * when "All" is selected.
   *
   * When View All is clicked,
   * all activities will be displayed.
   *
   * When a category is selected,
   * all matching activities will be displayed.
   */

  const visibleActivities =
    filter === "All" && !showAll
      ? filteredActivities.slice(0, 9)
      : filteredActivities;


  return (
    <main className="activities-page">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="activities-hero section-shell">


        {/* HERO CONTENT */}

        <div data-reveal="left">

          <span className="eyebrow">
            OUR ACTIVITIES
          </span>


          <h1>
            Making a Difference
            <br />
            <span>Through Action</span>
          </h1>


          <p>
            Explore the initiatives through which Riddhi Siddhi
            Foundation works with individuals and communities.
          </p>

        </div>


        {/* LOCAL HERO IMAGE */}

        <img
          data-reveal="right"
          src={activitiesHero}
          alt="Riddhi Siddhi Foundation community activities"
        />

      </section>


      {/* =====================================================
          ACTIVITIES
      ===================================================== */}

      <section className="section-shell activity-list">


        {/* =================================================
            FILTERS
        ================================================= */}

        <div
          className="filters"
          data-reveal="left"
        >

          {filters.map((filterName) => (

            <button
              key={filterName}
              className={
                filter === filterName
                  ? "active"
                  : ""
              }
              onClick={() => {

                setFilter(filterName);

                /*
                 * Reset View All whenever
                 * the category changes.
                 */

                setShowAll(false);

              }}
            >

              {filterName}

            </button>

          ))}

        </div>


        {/* =================================================
            ACTIVITY GRID
        ================================================= */}

        <div className="activity-grid">

          {visibleActivities.map(
            (activity, index) => (

              <article
                key={activity.slug}
                className="activity-card"
                data-reveal={
                  index % 2 === 0
                    ? "left"
                    : "right"
                }
              >


                {/* IMAGE */}

                <div className="activity-image-wrapper">

                  <img
                    src={activity.image}
                    alt={activity.title}
                  />

                </div>


                {/* CONTENT */}

                <div className="activity-card-content">


                  <span className="activity-category">
                    {activity.category}
                  </span>


                  <h2>
                    {activity.title}
                  </h2>


                  <p>
                    {activity.shortDescription}
                  </p>


                  <Link
                    to={`/activities/${activity.slug}`}
                    className="activity-learn-more"
                  >

                    Learn More

                    <span>
                      →
                    </span>

                  </Link>

                </div>

              </article>

            )
          )}

        </div>


        {/* =================================================
            VIEW ALL ACTIVITIES
        ================================================= */}

        {filter === "All" &&
          activitiesData.length > 9 &&
          !showAll && (

            <div
              className="view-more-wrapper"
              data-reveal="right"
            >

              <button
                className="view-more-btn"
                onClick={() => setShowAll(true)}
              >

                View All Activities

                <span>
                  →
                </span>

              </button>

            </div>

          )}


        {/* =================================================
            SHOW LESS
        ================================================= */}

        {filter === "All" &&
          showAll && (

            <div
              className="view-more-wrapper"
              data-reveal="right"
            >

              <button
                className="view-more-btn"
                onClick={() => setShowAll(false)}
              >

                Show Less

                <span>
                  ↑
                </span>

              </button>

            </div>

          )}

      </section>

    </main>
  );
}


export default Activities;