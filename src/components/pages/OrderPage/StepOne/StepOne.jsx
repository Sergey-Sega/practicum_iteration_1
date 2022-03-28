/* eslint-disable max-len */
/* eslint-disable camelcase */
import React, { useEffect, useRef } from 'react';
import './style.scss';
import { observer } from 'mobx-react-lite';
import store from '../../../../store';
import { useStore } from '../../../../hooks/useStore';
import { CustomDropDownPoints } from '../../../Custom/CustomDropDown/CustomDropDownPoints';
import { CustomDropDownCities } from '../../../Custom/CustomDropDown/CustomDropDown';
import {CarMap} from '../Map/Map';

export const StepOne = observer(() => {
  const { orderStatus } = useStore();

  useEffect(() => {
    store.getData();
  }, []);


  useEffect(() => {
    (async () => {
      await orderStatus.fetchOrderStatus({page: 0});
      store.setOrderStatus(orderStatus.list[0].id);
    })();
  }, [orderStatus]);

  const map = useRef();

  const myPanTo = (coordinates) => {
    map.current.panTo(coordinates);
  };

  return (
      <div className='step-one'>

        <form className='step-one__form' action=''>
          <div className='step-one__form__location'>
            Город
            <CustomDropDownCities placeholder='Введите название города' options={ store.data.Cities } k="name" onClickCity={myPanTo} defaultValue={store.data.city}/>
            </div>

        <div
        className='step-one__form__location'>
          Пункт выдачи
          <CustomDropDownPoints placeholder='Начните вводить пункт...' options={ store.data.points } k="address" onClickPoint={myPanTo} defaultValue={store.data.destination}/>
          </div>

        </form>
        <div className='map-block'>
          <p className='map-block__description'>Выбрать на карте:</p>
           <CarMap cityRef={map}/>
        </div>
      </div>
    );
  });
