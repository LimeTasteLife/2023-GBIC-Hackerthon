import { useEffect, useMemo, useState } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  MarkerF,
} from '@react-google-maps/api';
import usePlacesAutocomplete, {
  LatLng,
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

import { Combobox } from '@headlessui/react';


interface GoogleMapProps {
  id?: string;
  latitude?: number;
  longitude?: number;
  setCustomValue?: (id: string, value: any) => void;
  detailAddress?: string | null;
  transactionLat?: number | null;
  transactionLong?: number | null;
  showSearch?: boolean;
}

const GoogleMaps = ({
  id,
  latitude,
  longitude,
  setCustomValue,
  detailAddress,
  transactionLat,
  transactionLong,
  showSearch,
}: GoogleMapProps) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: ['places'],
  });

  if (!isLoaded) {
    return (
      <div
        role='status'
        className='flex items-center justify-center h-56  max-w-full bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700'
      >
        <span className='text-3xl'>Google map Loading...</span>
        <span className='sr-only'>Google map Loading...</span>
      </div>
    );
  }

  return (
    <Map
      id={id}
      latitude={latitude}
      longitude={longitude}
      setCustomValue={setCustomValue}
      transactionLat={transactionLat}
      transactionLong={transactionLong}
      showSearch={showSearch}
      detailAddress={detailAddress}
    />
  );
};

export default GoogleMaps;

function Map({
  id,
  latitude,
  longitude,
  setCustomValue,
  showSearch,
  transactionLat,
  transactionLong,
  detailAddress,
}: GoogleMapProps) {
  const center = useMemo(
    () =>
      transactionLat && transactionLong
        ? { lat: transactionLat, lng: transactionLong }
        : { lat: 37.4562557, lng: 126.7052062 },
    [transactionLat, transactionLong]
  );

  // const [center, setCenter] = useState<undefined | LatLng>();

  // function isEquivalent(obj1: any, obj2: any) {
  //   const keys1 = Object.keys(obj1);
  //   const keys2 = Object.keys(obj2);

  //   if (keys1.length !== keys2.length) {
  //     return false;
  //   }

  //   for (const key of keys1) {
  //     if (obj1[key] !== obj2[key]) {
  //       return false;
  //     }
  //   }

  //   return true;
  // }

  // console.log(isEquivalent(center, {}));

  // if(transactionLat && transactionLong) {

  //   const center ={ lat: transactionLat, lng: transactionLong }
  //   setCenter(center)
  // } else {
  //   setCenter(null)
  // }

  // const center = useMemo(() => ({ lat: 21.3099, 157.8581 }), []);
  

  const [selected, setSelected] = useState(null);

  
  return (
    <div className='mt-2'>
      <div className={showSearch ? 'mb-3' : 'hidden'}>
        <PlacesAutocomplete
          transactionLat={transactionLat}
          transactionLong={transactionLong}
          setSelected={setSelected}
          latitude={latitude}
          longitude={longitude}
          setCustomValue={setCustomValue}
          detailAddress={detailAddress}
          id={id}
        />
      </div>

      <GoogleMap
        zoom={selected ? 16 : center.lat === 0 && center.lng === 0 ? 5 : 15}
        center={selected ? selected : center}
        mapContainerClassName='w-full h-[30vh] rounded-lg'
      >
        <Marker position={center} />
        {center.lat !== 0 && center.lng !== 0 && <MarkerF position={center} />}
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </div>
  );
}

const PlacesAutocomplete = ({
  id,
  transactionLong,
  transactionLat,
  setSelected,
  latitude,
  longitude,
  setCustomValue,
  detailAddress,
}: any) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const [address, setAddress] = useState('');

  const handleSelect = async (address: string) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);

    if (id === '1') {
      setCustomValue('firstStampLat', lat);
      setCustomValue('firstStampLot', lng);
      setCustomValue('firstStampAddress', address);
    } else if (id === '2') {
      setCustomValue('secondStampLat', lat);
      setCustomValue('secondStampLot', lng);
      setCustomValue('secondStampAddress', address);
    } else if (id === '3') {
      setCustomValue('thirdStampLat', lat);
      setCustomValue('thirdStampLot', lng);
      setCustomValue('thirdStampAddress', address);
    } else if (id === '4') {
      setCustomValue('fourthStampLat', lat);
      setCustomValue('fourthStampLot', lng);
      setCustomValue('fourthStampAddress', address);
    }

    setSelected({ lat, lng });
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const address = await getAddress(transactionLat, transactionLong);
  //       setAddress(address);

  //       // Do something with the 'address' variable if needed
  //     } catch (error) {
  //       // Handle any errors that occurred during the API call
  //       console.error('Error fetching address:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <Combobox onChange={handleSelect} disabled={!ready} value={value}>
      <div className='relative'>
        <Combobox.Input
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 '
          placeholder={
            detailAddress
              ? detailAddress
              : '해당 스탬프 NFT를 얻을 수 있는 장소를 검색하세요.'
          }
          onChange={(e: any) => setValue(e.target.value)}
        />
        <Combobox.Options className='absolute z-10 bg-gray-50 border border-gray-300 overflow-y-auto text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 w-full p-2.5'>
          {status === 'OK' &&
            data.map(({ place_id, description }) => (
              <Combobox.Option key={place_id} value={description}>
                {({ active }) => (
                  <div
                    className={`space-x-1 px-4 py-2 rounded-lg ${
                      active ? 'bg-green-200' : 'bg-gray-50'
                    }`}
                  >
                    <span className='font-medium'>{description}</span>
                  </div>
                )}
              </Combobox.Option>
            ))}
        </Combobox.Options>
      </div>
    </Combobox>
  );
};
