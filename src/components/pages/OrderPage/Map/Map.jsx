import React from 'react';
import { Map, YMaps, Placemark } from 'react-yandex-maps';
import { YMAPS_KEY } from '../../../../config';
 import { observer } from 'mobx-react-lite';
 import { useEffect } from 'react';
 import fetchData, { initMaps } from '../../../../service/getData';
 import { POINTS } from '../../../../service/urls';
 import { useState } from 'react';
import pointImg from '../../../../assets/Point.png';
import store from '../../../../store';

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

return (
   <YMaps
    query={{
      apikey: YMAPS_KEY,
    }}
    >
      <Map
       width = '100%'
       height= '350px'
       instanceRef={cityRef}
      defaultState={{
          center: ([53.195878, 50.100202]),
            zoom: 11,
        }} >
              {state.map((coordinates, idx) =>
              <Placemark
              onClick = {()=> store.writePoint(coordinates)}
                key={idx}
                geometry={coordinates}
                properties={getPointData(idx)}
                options={{
                  iconLayout: 'default#image',
                  iconImageSize: [18, 18],
                  iconImageHref: pointImg,
                }}
              />)
            }
     </Map>
     </YMaps>
);
});
