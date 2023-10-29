import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import MainSeriesCard from './MainSeriesCard';
import MainSeriesCard1 from './MainSeriesCard1';
import MainSeriesCard2 from './MainSeriesCard2';

const MainSeries = ({ ExampleSeries }: any) => {
  return (
    <Swiper
     
      spaceBetween={30}
      loop={true}
      effect={'fade'}
      // autoplay={{
      //   delay: 2500, 그림자 격자 디자인 추가
      //   disableOnInteraction: false,
      // }}
      pagination={{
        clickable: true,
      }}
      // Autoplay
      modules={[EffectFade, Navigation, Pagination]}
      className='mySwiper'
    >
      <SwiperSlide>
        <MainSeriesCard />
      </SwiperSlide>
      <SwiperSlide>
        <MainSeriesCard1 />
      </SwiperSlide>
      <SwiperSlide>
        <MainSeriesCard2 />
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default MainSeries;
