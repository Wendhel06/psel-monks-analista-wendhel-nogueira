import React from "react";
import "./styles.css";
import { Card } from "./components/Card";

export function Home({ dataObject, cards }) {
  return (
    <main>
      <section className="hero-banner">
        <div>
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
          {/* <div className="monks-img">
            <img src={dataObject.hero_banner_monks_image} alt="" />
          </div> */}
        </div>
      </section>
      <section className="cards">
        <h2 className="section-title">{dataObject.second_section_title}</h2>
        <p className="section-main-text">
          {dataObject.second_section_description}
        </p>
        <div className="grid-cards">
          {cards.map(({ id, content, title, thumbnail }) => {
            return (
              <Card
                id={id}
                content={content}
                title={title}
                thumbnail={thumbnail}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
