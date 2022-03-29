/* eslint-disable react/jsx-key */
/* eslint-disable max-len */
import React, {useEffect} from 'react';
import './style.scss';
import CustomInput from '../../../Custom/CustomInput';
import CustomCheckbox from '../../../Custom/CustomCheckbox';
import CustomRadio from '../../../Custom/CustomRadio';
import store from '../../../../store';
import { observer } from 'mobx-react-lite';
import moment from 'moment';
export const StepThree = observer(() => {
   useEffect(() => {
     store.getDataRates();
   }, []);
   const defaultDateFrom = moment(store.data.dateFrom).format('YYYY-MM-DDTkk:mm');
   const defaultDateTo = moment(store.data.dateTo).format('YYYY-MM-DDTkk:mm');

  return (
    <div className="step-three">
      <form className="step-three__form">
        <fieldset className="step-three__form__color-selector">
          <legend>Цвет</legend>
          <br></br>
          <CustomRadio
            type="radio"
            name="Цвет"
            value="Любой"
            checked={true}
            description="Любой"
            action={(e) => store.action('color', e.target.value )}
          />
          {store.data.colors.map((el)=>{
            return (
              <React.Fragment key={el}>
              <CustomRadio
            type="radio"
            name="Цвет"
            value={el}
            checked={store.data.color === el}
            description={el}
            action={(e) => store.action('color', e.target.value )}
          />
          </React.Fragment>
            );
          })}
        </fieldset>
         <fieldset className="step-three__form__date-selector">
          <legend>Дата аренды</legend>
          <CustomInput
            name={'С'}
            type="datetime-local"
            defaultValue={store.data.dateFrom ? defaultDateFrom : null }
            onChangeAction={(e) => {
              store.action('dateFrom', Date.parse(e.target.value));
            }}
          />
          <br />
          <CustomInput
            name={'До'}
            type="datetime-local"
            defaultValue={ store.data.dateTo ? defaultDateTo : null}
            onChangeAction={(e) => {
              store.action('dateTo', Date.parse(e.target.value));
            }}
          />
        </fieldset>
        <fieldset className="step-three__form__rates">
          <legend>Тариф</legend>
          <br />
          {store.data.Rates.map((el)=>{
            if (el.rateTypeId) {
              return (
                <React.Fragment key={el.id}>
                  <CustomRadio
                    type="radio"
                    name="Тариф"
                    value={el.rateTypeId.name}
                    checked={store.data.rate.name === el.rateTypeId.name}
                    description={`${el.rateTypeId.name}, ${el.price}₽ ${el.rateTypeId.unit}`}
                    action={(e) =>{
                       store.setRateData({rate: { id: el.id, price: el.price, unit: el.rateTypeId.unit, name: e.target.value}});
                    }}
                  />
                  <br />
                </React.Fragment>);
            }
           return;
          })}
        </fieldset>
         <fieldset className="step-three__form__additional">
          <legend>Доп. услуги</legend>
          <br />
          <CustomCheckbox
            type="checkbox"
            name="Опции"
            value="Полный бак"
            key={1}
            checked = {store.order.isFullTank}
            description="Полный бак, 500р"
            action={(e) => store.setOptions(e.target.value)}
          />
          <br />
          <CustomCheckbox
            type="checkbox"
            name="Опции"
            key={2}
            checked = {store.order.isNeedChildChair}
            value="Детское кресло"
            description="Детское кресло, 200р"
            action={(e) => store.setOptions(e.target.value)}
          />
          <br />
          <CustomCheckbox
            type="checkbox"
            name="Опции"
            key={3}
            checked = {store.order.isRightWheel}
            value="Правый руль"
            description="Правый руль, 1600р"
            action={(e) => store.setOptions(e.target.value)}
          />
        </fieldset>
      </form>
    </div>
  );
});
