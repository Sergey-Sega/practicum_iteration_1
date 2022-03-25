import React from 'react';
import { Map, YMaps, Placemark } from 'react-yandex-maps';
import { YMAPS_KEY } from '../../../../config';
 import { observer } from 'mobx-react-lite';
 import { useEffect } from 'react';
 import fetchData, { initMaps } from '../../../../service/getData';
 import { POINTS } from '../../../../service/urls';
 import { useState } from 'react';

export const CarMap = observer(({cityRef}) => {
  const [state, setState] = useState([]);
  useEffect(()=>{
(async () =>{
    const resPoints = await fetchData(POINTS);
    const res = await initMaps(resPoints.data);
    setState(res);
})();
  }, []);


  const getPointData = (index) => {
    return {
      balloonContentBody: 'placemark <strong>balloon ' + index + '</strong>',
      clusterCaption: 'placemark <strong>' + index + '</strong>',
    };
  };

  const getPointOptions = () => {
    return {
      preset: 'islands#violetIcon',
    };
  };

return (
   <YMaps
    query={{
      apikey: YMAPS_KEY,
    }}
    >
      <Map
       width = '100%'
       height= '100%'
       instanceRef={cityRef}
      defaultState={{
          center: ([53.195878, 50.100202]),
            zoom: 11,
        }} >
              {state.map((coordinates, idx) =>
              <Placemark
                key={idx}
                geometry={coordinates}
                properties={getPointData(idx)}
                options={getPointOptions()}
              />)
            }
     </Map>
     </YMaps>
);
});
