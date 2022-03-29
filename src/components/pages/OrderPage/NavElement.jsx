/* eslint-disable max-len */
import { observer } from 'mobx-react-lite';
import React from 'react';
import store from '../../../store';
export const NavElement = observer(({
    value,
    action,
    description,
  }) => {
;

  return (
      <button
        className={`order-page__nav__btn ${ (store.data.c1 && value === 's1') || (store.data.c2 && value == 's2') || (store.data.c3 && value == 's3') ? 'completed' : ''}`}
        name='currentStep'
        value={value}
        onClick={action}
        disabled={ (!store.data.c1 && value == 's1') || (store.data.c1 && value == 's1') || (store.data.c1 && value == 's2') || (store.data.c2 && value == 's3') || (store.data.c3 && value == 's4') ? false : true }
      >
        {description} {value !== 4 && <span> ► </span>}
      </button>
  );
  });
