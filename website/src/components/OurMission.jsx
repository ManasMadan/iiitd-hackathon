import React from "react";
import "./styles/OurMission.css";
import BackImg from "./styles/image-moon.webp";

const OurMission = () => {
  return (
    <main
      id="main"
      className="grid-container grid-container--destination flow fs-800"
    >
      <h1 className="numbered-title" style={{ padding: "100px" }}>
        <span aria-hidden="true"></span>
      </h1>

      <picture id="moon-image">
        <source srcSet={BackImg} type="image/webp" />
        <img src="assets/destination/image-moon.png" alt="the moon" />
      </picture>

      <div
        className="tab-list underline-indicators flex"
        role="tablist"
        aria-label="destination list"
      >
        <button
          aria-selected="true"
          role="tab"
          aria-controls="moon-tab"
          className="uppercase ff-sans-cond text-accent letter-spacing-2 fs-800"
          tabIndex="0"
          data-image="moon-image"
        >
          Mission
        </button>
      </div>

      <article
        className="destination-info flow fs-500"
        id="moon-tab"
        tabIndex="0"
        role="tabpanel"
      >
        <p className="fs-600">
          At Satellix, we are driven by a profound passion for the cosmos and a
          relentless curiosity about the mysteries beyond our planet. Our
          mission is to inspire, educate, and connect space enthusiasts,
          researchers, and dreamers from all walks of life. We believe that the
          wonders of space should be accessible to everyone, and we're committed
          to making the universe's boundless beauty and complexity come alive in
          the digital realm.
        </p>

        <div className="destination-meta flex">
          <div>
            <h3 className="destination-info flow fs-500">
              🌌 Empowering Exploration
            </h3>
            <br />
            <h3 className="text-accent fs-200 uppercase">
              Learning and Discovery
            </h3>
            <div>
              <hr />
              <h3 className="destination-info flow fs-500">
                🌏 Promoting Sustainability
              </h3>
              <br />
              <h3 className="text-accent fs-200 uppercase">
                Ethical Considerations
              </h3>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default OurMission;
