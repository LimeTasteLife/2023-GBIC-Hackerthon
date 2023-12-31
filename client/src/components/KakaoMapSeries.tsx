import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { IncheonSeriesExample } from '../constants';

interface KakaoMapProps {
  latitude?: number | string;
  longitude?: number | string;
  setCustomValue?: (id: string, value: number) => void;
  detailPage?: boolean;
  width?: string;
  height?: string;
  level: number;
  draggable: boolean;
  zoomable: boolean;

}

const KakaoMapSeries = ({
  latitude,
  longitude,
  setCustomValue,
  detailPage = false,
  width,
  height,
  level,
  draggable,
  zoomable,
 
}: KakaoMapProps) => {


  return (
    <Map
      center={{ lat: 37.66673760000001, lng: 126.3833964 }}
      style={{ width: width, height: height, borderRadius: '20px' }}
      level={level}
      draggable={draggable}
      zoomable={zoomable}
    >
      <MapMarker
        position={{
          lat: IncheonSeriesExample[1].lat,
          lng: IncheonSeriesExample[1].lng,
        }}
        image={{
          src: '/checkSign.svg',
          size: {
            width: 64,
            height: 64,
          },
          options: {
            offset: {
              x: 27,
              y: 69,
            },
          },
        }}
      >
        <div style={{ color: '#000' }}>{IncheonSeriesExample[1].label}</div>
      </MapMarker>
      <MapMarker
        position={{
          lat: IncheonSeriesExample[2].lat,
          lng: IncheonSeriesExample[2].lng,
        }}
        image={{
          src: '/checkSign.svg',
          size: {
            width: 64,
            height: 64,
          },
          options: {
            offset: {
              x: 27,
              y: 69,
            },
          },
        }}
      >
        <div style={{ color: '#000' }}>{IncheonSeriesExample[2].label}</div>
      </MapMarker>
      <MapMarker
        position={{
          lat: IncheonSeriesExample[3].lat,
          lng: IncheonSeriesExample[3].lng,
        }}
      >
        <div style={{ color: '#000' }}>{IncheonSeriesExample[3].label}</div>
      </MapMarker>
      <MapMarker
        position={{
          lat: IncheonSeriesExample[0].lat,
          lng: IncheonSeriesExample[0].lng,
        }}
      >
        <div style={{ color: '#000' }}>{IncheonSeriesExample[3].label}</div>
      </MapMarker>
    </Map>
  );
};

export default KakaoMapSeries;

// width={1440} 37.75373760000001, lng: 126.4833964
//           height={580}
//           className="w-full object-cover object-center 2xl:rounded-5xl"
