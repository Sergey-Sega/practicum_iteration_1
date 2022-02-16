import React from "react";
import Button from "../Button/Button";
export default function Slide({img, head, text, color} ) {
  const style = { backgroundImage: `url(${img})`};
  return (
    <div className="slide" style={style}>
      <span className="slide__content">
        <h1 className="slide__content__heading">{head}</h1>
        <p className="slide__content__text">{text}</p>
        <Button title="Подробнее" type={`slide__content__btn ${color}`} />
      </span>
    </div>
  );
}