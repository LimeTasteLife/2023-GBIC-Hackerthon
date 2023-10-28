import { Avatar, Button, Progress } from '@nextui-org/react';
import Image from 'next/image';
import { useMotionValue, useTransform, motion } from 'framer-motion';
import Link from 'next/link';

const MainSeriesCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [100, -100], [-30, 30]);

  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='relative grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
        <div className=' relative mr-auto place-self-center lg:col-span-7'>
          <a
            href='#'
            className='inline-flex justify-between items-center px-1 pr-4 mb-7 text-sm text-gray-700 bg-green-400 rounded-full hover:bg-gray-200 '
          >
            <span className='absolute flex min-w-max text-gray font-semibold  -top-[50px] -left-[150px] opacity-20  leading-0'>
              <span className='text-[130px]'>#01</span>
            </span>

            <Avatar
              isBordered
              color='success'
              src='https://i.pravatar.cc/150?u=a04258114e29026302d'
              className=' mr-3'
            />
            <span className='text-md text-white text-semibold '>
              GBIC 해커톤
            </span>
          </a>

          <h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl '>
            강화도 맛집 탐방 시리즈~
          </h1>
          <p className='max-w-2xl mb-2 font-light text-gray-500 lg:mb-3 md:text-lg lg:text-xl dark:text-gray-400'>
            강화도에 있는 다양한 맛집과 문화재를 탐방하면서 스탬프를 찍어오는
            이벤트! 많은 경품과 함께 추후 예정되어 있는 이벤트까지 참여가능!
          </p>

          <div className='flex flex-col mt-5 gap-1'>
            <Progress
              aria-label='Music progress'
              classNames={{
                indicator: 'bg-green-600 ',
                track: 'bg-default-500/30',
              }}
              color='default'
              size='sm'
              value={86}
            />
            <div className='flex justify-between'>
              <p className='text-small'>43명 참여 완료</p>
              <p className='text-small text-foreground/50'>최대 50명</p>
            </div>
          </div>

          <blockquote className='p-4 my-4 border-l-4 border-teal-400 bg-teal-50 space-y-1'>
            <span className='text-md flex text-green-500'>
              <p>시리즈 진행 기간 : &nbsp;</p>
              <p>2023.10.28</p>
              <p>&nbsp;~&nbsp;</p>
              <p>2023.10.31</p>
            </span>
            <span className='text-md flex text-green-500 '>
              <p>혜택 : &nbsp;</p>
              <p>지역 문화 상품권 10000 p</p>
            </span>
            <span className='text-md flex text-green-500 '>
              <p>사용처 : &nbsp;</p>
              <p>인천 종합 어시장</p>
            </span>
          </blockquote>

          <Link
            href='/Series/1'
            className='px-5 py-2.5 mt-2 relative rounded group font-medium text-white inline-block shadow-2xl shadow-cyan-500'
          >
            <span className='absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-green-600 to-blue-500'></span>
            <span className='h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-green-600 to-blue-500'></span>
            <span className='absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-green-600 to-blue-500'></span>
            <span className='absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-green-600 from-blue-500'></span>
            <span className='relative'>자세히 보기</span>
          </Link>
        </div>
        <div className='hidden relative lg:mt-0 lg:col-span-5 lg:flex'>
          <motion.div
            style={{ x, y, rotateX, rotateY, z: 100 }}
            drag
            dragElastic={0.18}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: 'grabbing' }}
          >
            <Image
              src='/NFTImages/stampBoardA.png'
              height={500}
              width={500}
              alt='Stamp Board Image of Main Series'
              className='shadow-2xl'
            />

            <motion.div
              style={{ x, y, rotateX, rotateY, z: 100000 }}
              className='absolute -left-40 -bottom-10'
            >
              <div
                className='grid grid-rows-2 grid-cols-2 gap-4'
                draggable='false'
              >
                <Image
                  src='/NFTImages/incheon1.jpeg'
                  alt='stamp1'
                  width={100}
                  height={100}
                  className='rounded-xl shadow-2xl'
                />
                <Image
                  src='/NFTImages/incheon1.jpeg'
                  alt='stamp1'
                  width={100}
                  height={100}
                  className='rounded-xl shadow-2xl'
                />
                <Image
                  src='/NFTImages/incheon1.jpeg'
                  alt='stamp1'
                  width={100}
                  height={100}
                  className='rounded-xl shadow-2xl'
                />
                <Image
                  src='/NFTImages/incheon1.jpeg'
                  alt='stamp1'
                  width={100}
                  height={100}
                  className='rounded-xl shadow-2xl'
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MainSeriesCard;
