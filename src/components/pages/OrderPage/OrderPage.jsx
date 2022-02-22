import React from "react";
import Header from "../../Header/Header";
import Total from "./Total/Total";
import "./style.scss";
import FirstStep from "./FirstStep/FirstStep";
export default class OrderPage extends React.Component {
  render() {
    return (
    <>
        <Header />
      <div className="order-page">
        <div className="order-page__nav">
          <input
            type="button"
            className="order-page__nav__btn"
            value="Местоположение"
          />
          <span>►</span>
          <input
            type="button"
            className="order-page__nav__btn"
            value="Модель"
            disabled
          />
          <span>►</span>
          <input
            type="button"
            className="order-page__nav__btn"
            value="Дополнительно"
            disabled
          />
          <span>►</span>
          <input
            type="button"
            className="order-page__nav__btn"
            value="Итого"
            disabled
          />
        </div>
        <div className="order-page__container">
          <section className="order-page__container__form">
            <FirstStep />
          </section>
          <section className="order-page__container__total">
            <Total />
          </section>
        </div>
      </div>
      </>
    );
  }
}