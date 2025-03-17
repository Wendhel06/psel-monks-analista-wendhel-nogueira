import React from "react";
import "./styles.css";
import { Product } from "./components/Product";

export function Home({ dataObject, products }) {
  const allCategoriesProduct = [];
  const limitProducts = products.slice(0, 4);
  const limitProductsToThree = products.slice(0, 3);
  {
    products.forEach((product) => {
      product.categories.forEach((category) => {
        allCategoriesProduct.push(category);
      });
    });
  }

  return (
    <main>
      <section className="hero-banner">
        <div className="default-container">
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
                alt="img-scroll"
              />
            </div>
          </div>
          {/* <div className="monks-img">
            <img src={dataObject.hero_banner_monks_image} alt="" />
          </div> */}
        </div>
      </section>
      <section className="cards mobile-section">
        <div className="default-container">
          <h2 className="section-title">{dataObject.second_section_title}</h2>
          <p className="section-main-text">
            {dataObject.second_section_description}
          </p>
          <div className="grid-cards">
            {limitProducts.map(
              ({ id, content, title, thumbnail, permalink, excerpt }) => {
                return (
                  <Product
                    key={id}
                    content={content}
                    title={title}
                    thumbnail={thumbnail}
                    permalink={permalink}
                    excerpt={excerpt}
                  />
                );
              },
            )}
          </div>
        </div>
      </section>
      <section className="third-section mobile-section">
        <div className="third-section-grid default-container">
          <div className="third-section-col-1">
            <div className="third-section-col-1-hold-text">
              <h2 className="section-title">
                {dataObject.third_section_title}
              </h2>
              <p className="section-main-text">
                {dataObject.third_section_description}
              </p>
            </div>

            <div className="third-section-grid-hold-img">
              <img src={dataObject.third_section_image_1} alt="imagem-1" />
            </div>
          </div>

          <div className="third-section-col-2">
            <div className="third-section-grid-hold-img">
              <img src={dataObject.third_section_image_2} alt="imagem-2" />
            </div>

            <div className="third-section-grid-hold-img">
              <img src={dataObject.third_section_image_3} alt="imagem-3" />
            </div>
          </div>
        </div>
      </section>
      <section className="app-section mobile-section">
        <div className="app-section-container default-container">
          <div className="app-section-container-col-text">
            <h2 className="section-title text-gray-color">
              {dataObject.app_section_title}
            </h2>
            <p className="section-main-text text-gray-color">
              {dataObject.app_section_description}
            </p>
          </div>
          <div className="app-section-hold-app-img">
            <a href={dataObject.link_google_play} target="_blank">
              <img
                className="google-play-image"
                src={dataObject.app_section_image1}
                alt="google-play-image"
              />
            </a>
            <a href={dataObject.link_app_store} target="_blank">
              <img src={dataObject.app_section_image2} alt="apple-store" />
            </a>
          </div>
        </div>
      </section>
      <section className="category-section mobile-section">
        <div className="default-container">
          <h2 className="section-title">{dataObject.category_section_title}</h2>
          <div className="grid-category-products">
            {allCategoriesProduct.map(({ id, name, link }) => {
              return (
                <a key={id} href={link} className="product-category">
                  {name}
                </a>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section-last-cards mobile-section">
        <div className="default-container grid-last-products">
          {limitProductsToThree.map(({ id, title, content, permalink }) => {
            return (
              <div key={id} className="grid-card">
                <h3 className="hold-card-title">{title}</h3>
                <p className="card-text last-card-text">{content}</p>
                <a href={permalink} className="card-button">
                  Lorem ipsum
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
