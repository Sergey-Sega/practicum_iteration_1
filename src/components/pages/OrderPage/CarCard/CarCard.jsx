/* eslint-disable max-len */
import React from 'react';
import './style.scss';
import FakeImg from '../../../../assets/FakeImg.png';

export default function CarCard(props) {
  const { name, action, costMin, costMax, pic, defaultChecked } = props;
  return (
    <label className='car-card'>
      <input
        className='car-card__radio-btn'
        type='radio'
        name='car'
        value={name}
        defaultChecked = {defaultChecked}
      />
      <div className='car-card__info-card' onClick ={action} >
        <h2 className='car-card__info-card__head'>{name}</h2>
        <p className='car-card__info-card__cost'>
          {costMin} - {costMax}
        </p>
        <div className='wrapper'>
        <img className='car-card__info-card__img'
        src={pic} alt=''
        onError={(e)=> {
        e.target.src=FakeImg;
        }} /></div>
      </div>
    </label>
  );
}
