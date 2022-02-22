/* eslint-disable react/react-in-jsx-scope */
import { Map, YMaps, Placemark } from 'react-yandex-maps';
import { YMAPS_KEY } from '../../../../config';
import { observer } from 'mobx-react-lite';
import store from '../../../../store';


export const CarMap = observer(() => {
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

  console.log(store.data.mapsAddress);

return (
   <YMaps
    query={{
      apikey: YMAPS_KEY,
    }}
    >
      <Map
       width = '500px'
       height= '352px'
      defaultState={{
          //  center: [54.314192, 48.403132],
           center: [54.735152, 55.958736],
            zoom: 8,
        }} >
              {store.data.mapsAddress.map((coordinates, idx) => (
              <Placemark
                key={idx}
                geometry={ coordinates }
                properties={getPointData(idx)}
                options={getPointOptions()}
              />
            ))

          }
     </Map>
     </YMaps>
);
});
