/* eslint-disable max-len */
import React, { useEffect } from 'react';
import CarCard from '../CarCard/CarCard';
import './style.scss';

import { useStore } from '../../../../hooks/useStore';
import CustomRadio from '../../../Custom/CustomRadio';
import { observer } from 'mobx-react-lite';
import store from '../../../../store';
import { Loader } from '../../../Loader/Loader';

export const StepTwo = observer(() => {
  const { cars, categories } = useStore();

  useEffect(async () => {
    void cars.fetchCars({ page: 0 });
    void categories.fetchCategories();
  }, []);

  return (
    <div className="car-selector">
      <form className="car-selector__category-form">
        {categories.list.map((el) => {
        return (
          <CustomRadio
          type="radio"
          name="model"
          value="all"
          checked={false}
          description={el.name}
          key={el.id}
          onClick={() => cars.setCategoryId(el.id)}
        />
        );
        })}
        <CustomRadio
          type="radio"
          name="model"
          value="all"
          checked={true}
          description='Все'
          onClick={() => cars.setCategoryId(undefined)}
        />
      {cars.list.length !== 0 ? (<div className="car-selector__container">
        <div className="car-selector__container__car-list">
           {cars.filteredListByCategory.map((el) => {
             return (
                <CarCard
                  name={el.name}
                  costMin={el.priceMin}
                  costMax={el.priceMax}
                  defaultChecked = {store.data.car.name === el.name }
                  pic={el.thumbnail.path}
                  key={el.id}
                     action={() => store.setCarData({car: {name: el.name, id: el.id}, number: el.number, colors: el.colors, thumbnail: el.thumbnail.path, price_start: el.priceMin, price_end: el.priceMax, color: null,
                    })}
                />
              );
            })}
        </div>
      </div>): <Loader/>}
      </form>
    </div>
  );
},
);
