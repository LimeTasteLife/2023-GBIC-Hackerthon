import { PEOPLE_URL } from '@/constants';
import Image from 'next/image';

// import Swiper core and required modules
import { Navigation, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';



interface SeriesProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const SeriesSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: SeriesProps) => {
  return (
    <div
      className={`h-full relative w-full  ${backgroundImage} bg-cover bg-no-repeat lg:rounded-5xl 2xl:rounded-5xl`}
    >
      <div className='flex h-full flex-col items-start p-6 lg:px-10 lg:py-10'>
        <div className='flex flex-col gap-10'>
          <div className='flexCenter gap-4'>
            <div className='rounded-full p-4 '>
              <div className='text-5xl'>☕️</div>
            </div>

            <h4 className='text-3xl text-white'>{title}</h4>
          </div>
        </div>

        <span className='text-[200px] flex flex-col text-white font-semibold absolute -bottom-[120px] opacity-40 left-0 leading-0'>
          <span className='text-[100px] -mb-20'>Series</span>
          01
        </span>

        <div className='flexCenter gap-6'>
          <span className='flex -space-x-4 overflow-hidden'>
            {PEOPLE_URL.map((url) => (
              <Image
                className='inline-block h-10 w-10 rounded-full'
                src={url}
                key={url}
                alt='person'
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className='bold-16 md:bold-20 text-white'>{peopleJoined}</p>
        </div>
        
      </div>
    </div>
  );
};

const Series = () => {
  return (
    <section className='2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 '>
      <div className='hide-scrollbar sm:flex hidden h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          
          className='h-full w-full '
        >
          <SwiperSlide>
            <SeriesSite
              backgroundImage='bg-bg-img-1'
              title='강화도 여행 코스~!'
              subtitle='Series 1'
              peopleJoined='50+ 참여중'
            />
          </SwiperSlide>
          <SwiperSlide>
            <SeriesSite
              backgroundImage='bg-bg-img-1'
              title='인천 골목 맛집'
              subtitle='Series 2'
              peopleJoined='50+ 참여중'
            />
          </SwiperSlide>
          <SwiperSlide>
            <SeriesSite
              backgroundImage='bg-bg-img-1'
              title='영종도 카페'
              subtitle='Series 3'
              peopleJoined='50+ 참여중'
            />
          </SwiperSlide>
          <SwiperSlide>
            <SeriesSite
              backgroundImage='bg-bg-img-1'
              title='강화도 유적지'
              subtitle='Series 4'
              peopleJoined='50+ 참여중'
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='hide-scrollbar sm:hidden flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          
          className='h-full w-full '
          
        >
          <SwiperSlide>
            <SeriesSite
              backgroundImage='bg-bg-img-1'
              title='강화도 여행 코스~!'
              subtitle='Series 1'
              peopleJoined='50+ 참여중'
            />
          </SwiperSlide>
          <SwiperSlide>
            <SeriesSite
              backgroundImage='bg-bg-img-1'
              title='인천 골목 맛집'
              subtitle='Series 2'
              peopleJoined='50+ 참여중'
            />
          </SwiperSlide>
          <SwiperSlide>
            <SeriesSite
              backgroundImage='bg-bg-img-1'
              title='영종도 카페'
              subtitle='Series 3'
              peopleJoined='50+ 참여중'
            />
          </SwiperSlide>
          <SwiperSlide>
            <SeriesSite
              backgroundImage='bg-bg-img-1'
              title='강화도 유적지'
              subtitle='Series 4'
              peopleJoined='50+ 참여중'
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='flexEnd mt-10 z-30 px-6 lg:-mt-60 lg:mr-6'>
        <div className='bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl'>
          <h2 className='regular-24 md:regular-32 2xl:regular-64 capitalize text-white'>
            <strong>다양한 테마의 Series</strong> 에 바로 참여하세요!
          </h2>
          <p className='regular-14 xl:regular-16 mt-5 text-white'>
            각각의 series은 서로 다른 도장판을 갖고 있으며 각 도장판에 유효한
            도장들은 동일한 series의 도장이 됩니다. 원하는 도장판을 선택한 후
            미션을 달성하세요! 그리고 다양한 혜택과 기회를 누리세요!
          </p>
          <Image
            src='/lendingPage/quote.svg'
            alt='camp-2'
            width={186}
            height={219}
            className='camp-quote'
          />
        </div>
      </div>
    </section>
  );
};

export default Series;
