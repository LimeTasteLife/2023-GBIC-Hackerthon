import {
  blockchain_category,
  goods_field,
  opportunity_field,
  skill_field,
  trasaction_field,
} from '@/constants/category';
import { formatTime } from '@/helpers/dayjs';
// import { Transactions } from '@prisma/client';
import { ExampleSeries as Transactions } from '@/constants';

import { GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';

import { useRouter } from 'next/router';

import React, { Fragment, useEffect, useState } from 'react';
import GoogleMaps from '@/components/GoogleMap';
import Link from 'next/link';

// import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

import { motion } from 'framer-motion';

import Image from 'next/image';
import { Drawer } from 'flowbite';

import getAddress from '@/helpers/getAddress';
import { Progress, Snippet } from '@nextui-org/react';
import KakaoMap from '@/components/KakaoMap';
import './styles.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
// import required modules
import { EffectCube, Pagination } from 'swiper/modules';

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   console.log('getServerSide33', context.params?.transactionId);
//   const transaction = await fetch(
//     `http://localhost:3000/api/get-transaction/get-transaction?id=${context.params?.transactionId}`
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       if (!data.items) {
//         context.res.writeHead(302, { Location: '/item_not_exist ' });
//         context.res.end();
//         return;
//       }
//       return data.items;
//     });

//   return {
//     props: { transaction: { ...transaction } },
//   };
// }

const SeriesID = (props: { transaction: any }) => {

  const KakaoMap = dynamic(() => import('../../../components/KakaoMap'), {
    ssr: false,
  });
  //   const Popup = dynamic(
  //   () => import('../../../../components/popup/Popup'),
  //   {
  //     ssr: false,
  //   }
  // );

  //! 신청서 작성시 같이 저장할 데이터이다.
  const { data: session, status } = useSession();

  const [index, setIndex] = useState(0);

  const router = useRouter();

  // const queryClient = useQueryClient();

  const { transactionId } = router.query;

  // useEffect(() => {
  //   if (transactionId !== null) {
  //     fetch(`/api/get-transaction/get-transaction?id=${transactionId}`)
  //       .then((res) => res.json())
  //       .then((data) => {});
  //   }
  // }, [transactionId]);

  const transaction = props.transaction;

  // const transactionImages = {
  //   imageSrc: String(transaction.imageSrc),
  // };

  console.log(transaction);

  //! wishlist

  //! Offcanvas
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <section className='bg-white dark:bg-gray-900'>
        <div className='gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-3 sm:py-16 md:gap-0 sm:flex-col lg:gap-8 lg:px-6'>
          <section className='relative col-span-2 '>
            <div className='py-8 px-4 mx-auto max-w-2xl sm:px-0 sm:py-0 lg:py-16 max-sm:max-w-sm'>
              <Swiper
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                pagination={true}
                modules={[EffectCube, Pagination]}
                className='mySwiper'
              >
                <SwiperSlide>
                  <Image
                    src='/NFTImages/stampBoardA.png'
                    width={800}
                    height={800}
                    alt='we'
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </section>
          <div className='mt-4 md:mt-0'>
            <h1 className='mb-4 text-6xl tracking-tight font-extrabold text-gray-900 '>
              강화도 맛집 탐방 시리즈~!~!
            </h1>

            <p className='mb-4 text-xl font-extrabold leading-none text-gray-900 md:text-3xl '>
              Series 05
            </p>

            <dl className='flex-col items-center'>
              <div>
                <dt className='mb-2 font-semibold leading-none text-gray-900 '>
                  시리즈 유효 기간
                </dt>
                <dd className='mb-4 font-light text-gray-600 sm:mb-5 '>
                  2023.10.27 ~ 2023.10.31
                </dd>
              </div>
              <div>
                <dt className='mb-2 font-semibold leading-none text-gray-900 '>
                  혜택 및 티켓
                </dt>
                <dd className='mb-4 font-light text-gray-600 sm:mb-5 '>
                  지역 문화 상품권 10000원
                </dd>
              </div>
            </dl>

            <dl className='flex-col items-center'>
              <div>
                <dt className='mb-2 font-semibold leading-none text-gray-900 '>
                  사용처
                </dt>
                <dd className='mb-4 font-light text-gray-600 sm:mb-5 '>
                  인천 종합 어시장
                </dd>
              </div>
              <div>
                <dt className='mb-2 font-semibold leading-none text-gray-900 '>
                  주최 사/인
                </dt>
                <dd className='mb-4 font-light text-gray-600 sm:mb-5 '>GBIC</dd>
              </div>
            </dl>
            <dl className='flex-col relative items-center'>
              <div>
                <dt className='mb-2 font-semibold leading-none text-gray-900 '>
                  Stampboard NFT Desc
                </dt>
                <dd className='mb-4 font-light text-gray-600 sm:mb-5 '>GBIC</dd>
              </div>
              <div>
                <dt className='mb-2 font-semibold leading-none text-gray-900 '>
                  Transaction Hash
                </dt>
                <h1 className=' mb-4 w-full font-light text-gray-600 sm:mb-5 '></h1>
              </div>
            </dl>

            <div className='flex-col items-center '>
              <div className='flex space-x-4'></div>

              <div></div>
              <br />

              <button
                className='inline-flex text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2'
                onClick={() => {
                  if (session === null) {
                    alert('Login first');
                    router.push('/auth/login');
                    return;
                  }
                  setIsOpen(true);
                }}
              >
                <svg
                  className='mr-2 w-5 h-5 text-white-800 '
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 21 20'
                >
                  <path d='M20.168 6.136 14.325.293a1 1 0 0 0-1.414 0l-1.445 1.444a1 1 0 0 0 0 1.414l5.844 5.843a1 1 0 0 0 1.414 0l1.444-1.444a1 1 0 0 0 0-1.414Zm-4.205 2.927L11.4 4.5a1 1 0 0 0-1-.25L4.944 5.9a1 1 0 0 0-.652.624L.518 17.206a1 1 0 0 0 .236 1.04l.023.023 6.606-6.606a2.616 2.616 0 1 1 3.65 1.304 2.615 2.615 0 0 1-2.233.108l-6.61 6.609.024.023a1 1 0 0 0 1.04.236l10.682-3.773a1 1 0 0 0 .624-.653l1.653-5.457a.999.999 0 0 0-.25-.997Z' />
                  <path d='M10.233 11.1a.613.613 0 1 0-.867-.868.613.613 0 0 0 .867.868Z' />
                </svg>
                신청하기
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className=' px-4 mx-auto max-w-screen-xl '>
              <div className='flex justify-between'>
                <p className='text-lg'>43명 참여 완료</p>
                <p className='text-lg text-foreground/50'>최대 50명</p>
              </div>
      <Progress
              aria-label='Music progress'
              classNames={{
                indicator: 'bg-green-600 ',
                track: 'bg-default-500/30',
              }}
              color='default'
              size='md'
              value={86}
            />
    </div>

      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6 '>
        <div className='grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <Swiper
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className='mySwiper'
          >
            <SwiperSlide>
              <Image
                src='/NFTImages/incheon1.jpeg'
                width={500}
                height={500}
                alt='we'
              />
            </SwiperSlide>
          </Swiper>
          <div className='text-center text-gray-600 flex justify-center flex-col bg-orange-100 border-5 border-orange-300 ring-2 ring-red-500 p-3'>
            <h3 className='mb-1  text-xl font-semibold tracking-tight text-gray-900 '>
              <span>Series1 Stamp1</span>
            </h3>
            <p>첫번째 인천 스탬프 NFT 시리즈의 도장</p>
            <br />
            <p className='text-black text-xl font-bold'>위치</p>
            <p className=''>인천광역시 강화군 보문사</p>
            <br />
          </div>
          <Swiper
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className='mySwiper'
          >
            <SwiperSlide>
              <Image
                src='/NFTImages/incheon2.jpeg'
                width={500}
                height={500}
                alt='we'
              />
            </SwiperSlide>
          </Swiper>
          <div className='text-center text-gray-600 flex justify-center flex-col bg-blue-100 border-5 border-blue-300 ring-2 ring-blue-500 p-3'>
            <h3 className='mb-1  text-xl font-semibold tracking-tight text-gray-900 '>
              <span>Series1 Stamp1</span>
            </h3>
            <p>첫번째 인천 스탬프 NFT 시리즈의 도장</p>
            <br />
            <p className='text-black text-xl font-bold'>위치</p>
            <p className=''>인천광역시 강화군 보문사</p>
            <br />
          </div>
          <Swiper
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className='mySwiper'
          >
            <SwiperSlide>
              <Image
                src='/NFTImages/incheon3.jpeg'
                width={500}
                height={500}
                alt='we'
              />
            </SwiperSlide>
          </Swiper>
          <div className='text-center text-gray-600 flex justify-center flex-col bg-teal-100 border-5 border-teal-300 ring-2 ring-teal-500 p-3'>
            <h3 className='mb-1  text-xl font-semibold tracking-tight text-gray-900 '>
              <span>Series1 Stamp1</span>
            </h3>
            <p>첫번째 인천 스탬프 NFT 시리즈의 도장</p>
            <br />
            <p className='text-black text-xl font-bold'>위치</p>
            <p className=''>인천광역시 강화군 보문사</p>
            <br />
          </div>
          <Swiper
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className='mySwiper'
          >
            <SwiperSlide>
              <Image
                src='/NFTImages/incheon4.jpeg'
                width={500}
                height={500}
                alt='we'
              />
            </SwiperSlide>
          </Swiper>

          <div className='text-center text-gray-600 flex justify-center flex-col bg-purple-100 border-5 border-purple-300 ring-2 ring-purple-500 p-3'>
            <h3 className='mb-1  text-xl font-semibold tracking-tight text-gray-900 '>
              <span>Series1 Stamp1</span>
            </h3>
            <p>첫번째 인천 스탬프 NFT 시리즈의 도장</p>
            <br />
            <p className='text-black text-xl font-bold'>위치</p>
            <p className=''>인천광역시 강화군 보문사</p>
            <br />
          </div>
        </div>
      </div>

      <section className='bg-white dark:bg-gray-900'>
        <div className='gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6'>
          <KakaoMap height='400px'/>
          <div className='mt-4 md:mt-0'>
            <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 '>
              Description
            </h2>
            <p className='mb-6 font-light text-gray-500 md:text-lg '>
              강화도에 있는 다양한 맛집과 문하재를 탐방하면서 스탬프를 찍어오는
              이벤트
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeriesID;
