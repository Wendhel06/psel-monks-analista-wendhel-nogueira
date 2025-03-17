import React from "react";
import "./styles.css";

export function Product({ id, permalink, thumbnail, title, excerpt }) {
  return (
    <a href={permalink} className="card" key={id}>
      <div className="hold-card-img">
        <img src={thumbnail} alt="" />
      </div>
      <div className="hold-card-text">
        <h3 className="hold-card-title">{title}</h3>
        <p
          className="card-text"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      </div>
    </a>
  );
}
