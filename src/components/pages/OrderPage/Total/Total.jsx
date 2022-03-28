/* eslint-disable max-len */
import React from 'react';
import Button from '../../../Button/Button';
import './style.scss';

import { observer } from 'mobx-react-lite';
import store from '../../../../store';
import { getHumanizedValue } from '../../../../utils';

export default observer(function Total() {
  const date = getHumanizedValue(store.data.dateTo-store.data.dateFrom);
  console.log(store.data);
  return (
    <div className='total'>
      <h1 className='total__head'>Ваш заказ:</h1>
      <div className='total__list'>
        <p className='total__list__item'>
          <span className='text'>Пункт выдачи</span>
          <span className='dots'></span>
          <span className='text__dinamic'>
             { store.data.city}
            <br /> { store.data.destination}
          </span>
        </p>
        {store.data.car ? (
          <p className='total__list__item'>
          <span className='text'>Модель</span> <span className='dots'></span>
          <span className='text__dinamic'>{ store.data.car.name}</span>
        </p>) : null}
        {store.data.color ? (
          <p className='total__list__item'>
          <span className='text'>Цвет</span> <span className='dots'></span>
          <span className='text__dinamic'>{store.data.color}</span>
        </p>) : null}
        {store.data.dateTo ? (
          <p className='total__list__item'>
          <span className='text'>Длительность аренды</span>
          <span className='dots'></span>
          <span className='text__dinamic'> {date}</span>
        </p>) : null}
        {store.data.rate ?(
          <p className='total__list__item'>
          <span className='text'>Тариф</span> <span className='dots'></span>
          <span className='text__dinamic'>{store.data.rate.name}</span>
        </p>): null}
          {store.data.options.map((option) => {
            return (
               <React.Fragment key={option}>
            <p className='total__list__item'>
              <span className='text'>{option}</span>
              <span className='dots'></span>
              <span className='text__dinamic'>Да</span>
              </p>
              </React.Fragment>
            );
})}

        <p className='total__sum'>
          {store.steps.s1 || store.steps.s2 ?
            (<span>Цена: от { store.data.price_start } до { store.data.price_end } Р</span>) :
            (<span>Цена: { store.finalCarPrice } Р</span>)
          }
        </p>
        { store.steps.s1 ?
        <Button
        type='button big-btn total-btn'
        title='Выбрать модель'
        action={ () => store.navAction('s2') }
        disable={ store.data.city && store.data.destination ? false : true } /> : null
        }

        { store.steps.s2 ?
        <Button
        type='button big-btn total-btn'
        title='Дополнительно'
        action={ () => {
          store.action('color', 'Любой');
          store.navAction('s3');
        }}
        disable = {store.data.car ? false : true}/> : null
        }
        { store.steps.s3 ?
        <Button
        type='button big-btn total-btn'
        title='Итого'
        action={ () => {
        store.navAction('s4');
        store.setCurrentPrice();
} }
        disable = {store.data.dateTo && store.data.dateFrom ? false : true}/> : null }
        { store.steps.s4 ?
        <Button
        type='button big-btn total-btn'
        title='Заказать'
        action={() => store.action( 'modal', true)}
        /> : null }
      </div>
    </div>
  );
});
