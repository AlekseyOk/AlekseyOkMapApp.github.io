import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

function MapYandex({ endpoint, coodrs }) {
  return (
    <div style={{ width:'66.6%', height:'100%', display:'inline-block'}}>
        <YMaps>

            <Map
              state={coodrs ? {
                zoom: 15,
                center: coodrs,
                controls: ['zoomControl']
              }: console.log()}
              defaultState={{
                center: [53.9000000, 27.5666700],
                zoom: 12,
                controls: ['zoomControl', 'fullscreenControl']
              }}
              modules={['control.ZoomControl', 'control.FullscreenControl']}
              width = '100%'
              height = '600px'
            >

            {endpoint.map(({ coodrs, name }) => (
              <div  key={name}>
                  <Placemark
                    modules={['geoObject.addon.balloon']}
                    defaultGeometry={coodrs.split(',').map((item) => Number(item.trim()))}
                    properties={{
                    balloonContentBody: name,
                  }}
                />
              </div>
            ))}
            </Map>
            
      </YMaps>
  </div>
  );
}

export default MapYandex;