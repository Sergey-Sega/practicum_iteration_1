/* eslint-disable max-len */
/* eslint-disable react/jsx-no-undef */
import React, {useEffect} from 'react';
import {StepFour} from '../StepFour/StepFour';
import './style.scss';
import { useStore } from '../../../../hooks/useStore';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Header from '../../../Header/Header';
import store from '../../../../store';
import Button from '../../../Button/Button';
import { getHumanizedValue } from '../../../../utils';
export const FinalPage = observer(() => {
  const {orderId} = useParams();
 const {order} = useStore();
const date = getHumanizedValue(order.order?.dateTo-order.order?.dateFrom);

useEffect(()=>{
  (async () => {
 await order.fetchOrder(orderId);
  })();
});

return (
  <>
      <Header classNames='header order-page_header' />
    <div className='order-page'>
     <div className='order-page__nav'>
      Заказ номер RU{store.data.orderId || order.order?.id}
      </div>
      <div className='order-page__container'>
        <section className='order-page__container__form'>
        <h1 className='order-page__container__form__head'>
              Ваш заказ подтвержден
            </h1>
          <StepFour/>
        </section>
        <section className='order-page__container__total'>
        <div className='total'>
      <h1 className='total__head'>Ваш заказ:</h1>
      <div className='total__list'>
        <p className='total__list__item'>
          <span className='text'>Пункт выдачи</span>
          <span className='dots'></span>
          <span className='text__dinamic'>
             { order.order?.cityId.name}
            <br /> { order.order?.pointId.address}
          </span>
        </p>
          <p className='total__list__item'>
          <span className='text'>Модель</span> <span className='dots'></span>
          <span className='text__dinamic'>{ order.order?.carId.name}</span>
        </p>
          <p className='total__list__item'>
          <span className='text'>Цвет</span> <span className='dots'></span>
          <span className='text__dinamic'>{order.order?.color}</span>
        </p>
          <p className='total__list__item'>
          <span className='text'>Длительность аренды</span>
          <span className='dots'></span>
          <span className='text__dinamic'>{date}</span>
        </p>
          <p className='total__list__item'>
          <span className='text'>Тариф</span> <span className='dots'></span>
          <span className='text__dinamic'>{order.order?.rateId.rateTypeId.name}</span>
        </p>
        {order.order?.isFullTank ? (
           <p className='total__list__item'>
          <span className='text'>Полный бак</span> <span className='dots'></span>
          <span className='text__dinamic'>Да</span>
        </p>) : null}
        {order.order?.isRightWheel ? (
           <p className='total__list__item'>
          <span className='text'>Правый руль</span> <span className='dots'></span>
          <span className='text__dinamic'>Да</span>
        </p>) : null}
        {order.order?.isNeedChildChair ? (
           <p className='total__list__item'>
          <span className='text'>Детское кресло</span> <span className='dots'></span>
          <span className='text__dinamic'>Да</span>
        </p>) : null}
        <p className='total__sum'>
            <span>Цена: { order.order?.price } Р</span>
        </p>
        <Button
        type='button big-btn total-btn warn-btn red-btn'
        title='Отменить'
        />
      </div>
    </div>
        </section>
      </div>
    </div>
    </>
    );
});
