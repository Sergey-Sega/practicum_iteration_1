import React from "react";
import "./style.scss";
import FakeMap from "../../../../assets/FakeMap.jpg";

export default class FirstStep extends React.Component {
    render() {
      return (
        <div className="step-one">
          <form className="step-one__form" action="">
            <label className="step-one__form__city__description" htmlFor="City">
              Город
              <input
                className="step-one__form__city__input"
                type="text"
                required="required"
                name="Город"
                id="City"
                value="Ульяновск"
              />
              <button
                className="step-one__form__city__reset"
                type="reset"
                title="Click me to clear the input field"
              >
                &times;
              </button>
            </label>
            <br />
            <label
              className="step-one__form__pick-up-point__description"
              htmlFor="pick-up-point"
            >
              Пункт выдачи
              <input
                className="step-one__form__pick-up-point__input"
                type="text"
                required="required"
                name="Пункт выдачи"
                id="pick-up-point"
              />
              <button
                className="step-one__form__pick-up-point__reset"
                type="reset"
                title="Click me to clear the input field"
              >
                &times;
              </button>
            </label>
          </form>
  
          <div className="map-block">
            <p className="map-block__description">Выбрать на карте:</p>
            <span>
              <img className="map" src={FakeMap} alt="" />
            </span>
          </div>
        </div>
      );
    }
  }