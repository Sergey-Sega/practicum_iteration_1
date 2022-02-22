/* eslint-disable new-cap */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import Header from '../../Header/Header';
import Total from './Total/Total';
import './style.scss';
import { StepOne } from './StepOne/StepOne';
import { StepTwo } from './StepTwo/StepTwo';
import {StepThree} from './StepThree/StepThree';
import {StepFour} from './StepFour/StepFour';
import { NavElement } from './NavElement';
import { Warning } from './Total/Warning';

import { observer } from 'mobx-react-lite';
import store from '../../../store';

export const OrderPage = observer(() => {
    return (
    <>
        <Header classNames='header order-page_header' />
      <div className='order-page'>
      <div className='order-page__nav'>
       {store.navigation.map((el, i) => (
              <NavElement
                key={i}
                value={el.value}
                description={el.description}
                action={ () => store.navAction(el.value) }
              />
            ))}
        </div>
        <div className='order-page__container'>
          <section className='order-page__container__form'>
            { store.steps.s1 ? <StepOne/> : null }
            { store.steps.s2 ? <StepTwo/> : null }
            { store.steps.s3 ? <StepThree/> : null }
            { store.steps.s4 ? <StepFour/> : null }
          </section>
          <section className='order-page__container__total'>
            <Total/>
            <Warning/>
          </section>
        </div>
      </div>
      </>
    );
});
