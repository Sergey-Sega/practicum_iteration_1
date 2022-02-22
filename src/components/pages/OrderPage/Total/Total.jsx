import React from "react";
import Button from "../../../Button/Button";
import "./style.scss";
export default function Total() {
  return (
    <div className="total">
      <h1 className="total__head">Ваш заказ:</h1>
      <div className="total__list">
        <p className="total__list__item">
          <span className="text">Пункт выдачи</span>
          <span className="dots"/>
          <span className="text__dinamic">
            Ульяновск,
            <br /> Нариманова 42
          </span>
        </p>
        <p className="total__sum">
          <span>Цена: от 8000 до 12000 Р</span> 
        </p>
        <Button type="button big-btn total-btn" title="Выбрать модель"/>
      </div>
    </div>
  );
}