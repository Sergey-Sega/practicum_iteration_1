import React from "react";

import Slider from "../../Slider/Slider";
import Header from "../../Header/Header";
import "./style.scss";
import Button from "../../Button/Button";

export default function MainPageContainer() {
  return (
    <div className="main-page">
      <div className="main-page__content">
        <Header />
        <div className="main-page__content__info-block">
          <h1 className="main-page__content__info-block__heading">
            Каршеринг
            <br />
            <span className="main-page__content__info-block__heading__eng">
              Need for drive
            </span>
          </h1>
          <p className="main-page__content__info-block__text">
            Поминутная аренда авто твоего города
          </p>
          <Button type={"button fake-btn big-btn"} title="Забронировать" />
        </div>
        <footer className="footer">
          <span className="footer__copyright">
            © 2016-2019 «Need for drive»
          </span>
          <a href="tel: 84952342244" className="footer__phone-number">
            8 (495) 234-22-44
          </a>
        </footer>
      </div>
      <Slider />
    </div>
  );
}
