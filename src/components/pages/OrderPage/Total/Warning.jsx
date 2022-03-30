import React from 'react';
import Button from '../../../Button/Button';
import './style.scss';
import store from '../../../../store';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';

export const Warning = observer(() => {
  const {push} = useHistory();
  return (
    <div
    className={`warning ${(store.data.modal == false) ? '' : 'active'}`}>
      <div className='warning__btns-block'>
        <h1 className='warning__btns-block__head'>
           Подтвердить заказ?
        </h1>
        <span>
          <Button
            title='Подтвердить'
            type='warn-btn'
            action={async () => {
              await store.postDataOrder();
              store.action( 'orderState', true);
              store.action( 'modal', false);
              store.action( 's4', false);
              push(`/practicum_iteration_1/order-page/${store.data.orderId}`);
}}
          ></Button>
          <Button
            title='Вернуться'
            type='warn-btn red-btn'
            action={() => store.action( 'modal', false)}
          />
        </span>
      </div>
    </div>
  );
});
