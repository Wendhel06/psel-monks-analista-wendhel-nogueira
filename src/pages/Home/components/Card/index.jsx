import React from "react";
import "./styles.css";

export function Card({ id, thumbnail, title, content }) {
  return (
    <div className="card" key={id}>
      <div className="hold-card-img">
        <img src={thumbnail} alt="" />
      </div>
      <div className="hold-card-text">
        <h3 className="hold-card-title">{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}
