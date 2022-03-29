import React from 'react';
import './style.scss';
import moment from 'moment';
import { observer } from 'mobx-react-lite';
import store from '../../../../store';
import { useStore } from '../../../../hooks/useStore';
export const StepFour = observer(() => {
 const {order} = useStore();
  const formatDate = store.data.rent_start;
  const responseDate = moment(formatDate).format('DD.MM.YYYY h:mm');
  const finalDate = order.order?.dateFrom;
  const resDate = moment(finalDate).format('DD.MM.YYYY h:mm');
    return (
      <div className="step-four">
        <div className="step-four__info-block">
          <h1 className="step-four__info-block__brand">
          {store.data.car.name || order.order?.carId.name}
          </h1>
          <p className="step-four__info-block__number">
          {store.data.number || order.order?.carId.number}
          </p>
          <p className="step-four__info-block__fuel">
            <span>Топливо </span>
            100%
          </p>
          <p className="step-four__info-block__avilable">
            <span>Доступна с </span>
            {store.steps.s4 ? (responseDate) : resDate }
          </p>
        </div>
        <div className="step-four__car">
          <img
          src={store.data.thumbnail || order.order?.carId.thumbnail.path}
           alt="car" />
        </div>
      </div>
    );
  });
