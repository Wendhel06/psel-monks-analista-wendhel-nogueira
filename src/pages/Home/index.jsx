import React from "react";
import "./styles.css";

export function Home({ dataObject }) {
  return (
    <div className="content">
      <div className="hold-all-sections">
        <section className="hero-banner">
          <div className="hero-banner-text">
            <h1 className="hero-banner-title">
              {dataObject.hero_banner_title}
            </h1>
            <p className="hero-banner-subtitle">
              {dataObject.hero_banner_description}
            </p>
            <div className="hero-banne-hold-scroll-img">
              <img
                className="hero-banner-scroll-img"
                src={dataObject.hero_banner_scroll_image}
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
      {/* <img src={dataObject.hero_banner_monks_image} alt="" /> */}
    </div>
  );
}
