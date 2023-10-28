
import { ExampleSeries } from '@/constants';
import Image from 'next/image';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Progress,
  Avatar,
} from '@nextui-org/react';
import { useMotionValue, useTransform, motion } from 'framer-motion';
import Link from 'next/link';
import { HeartIcon } from '../HeartIcon';
import { useState } from 'react';

const SeriesCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [100, -100], [-30, 30]);

  const [liked, setLiked] = useState(false);

  return (
    <Card
      isPressable
      onPress={() => console.log('item pressed')}
      isBlurred
      className='border-none bg-background/60 max-w-[800px] relative'
      shadow='md'
    >
      <CardBody>
        <div className=' grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center'>
          <div className='col-span-6 md:col-span-4'>
            <Image
              src='/NFTImages/incheon3.jpeg'
              alt='stamp1'
              width={400}
              height={400}
              className='rounded-xl'
            />
          </div>

          <div className='flex flex-col col-span-6 md:col-span-8'>
            <div className='flex justify-between items-start'>
              <div className='flex flex-col gap-0'>
            <span className='absolute flex min-w-max text-gray font-semibold  -top-[50px] -right-[0px] opacity-20  leading-0'>
              <span className='text-[130px]'>#01</span>
            </span>
              <a
            href='#'
            className='justify-between w-fit flex items-center px-1 pr-4 mb-7 text-sm text-gray-700 bg-green-400 rounded-full hover:bg-gray-200 '
          >

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
                <h1 className='text-xl font-medium mt-2 mb-3'>
                  강화도 맛집 탐방 시리즈~
                </h1>
                <p className='text-small text-foreground/80'>
                  {' '}
                  강화도에 있는 다양한 맛집과 문화재를 탐방하면서 스탬프를
                  찍어오는 이벤트! 많은 경품과 함께 추후 예정되어 있는
                  이벤트까지 참여가능!
                </p>
              </div>
              {/* <Button
                isIconOnly
                className='text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2'
                radius='full'
                variant='light'
                onPress={() => setLiked((v) => !v)}
              >
                <HeartIcon
                  className={liked ? '[&>path]:stroke-transparent' : ''}
                  fill={liked ? 'red' : 'none'}
                />
              </Button> */}
            </div>

            <div className='flex flex-col mt-3 gap-1'>
              <Progress
                aria-label='Music progress'
                classNames={{
                  indicator: 'bg-green-600 dark:bg-white',
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
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default SeriesCard;

{
  /* <div style={{ perspective: 2000 }}>
<motion.div
  style={{ x, y, rotateX, rotateY, z: 100 }}
  drag
  dragElastic={0.18}
  dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
  whileTap={{ cursor: 'grabbing' }}
  className='w-[426px] min-h-[600px] bg-[#e3e2df] rounded-[30px] border-[4px] border-white cursor-grab relative'
>
  
  <Image
        src='/NFTImages/incheon1.jpeg'
        alt='stamp1'
        width={100}
        height={100}
        
      />

  <motion.div
  style={{x, y, rotateX, rotateY, z:100000}}
  className='absolute -right-20 w-fit'>
    <div className='grid grid-rows-2 grid-cols-2 gap-4' draggable='false'>
      <Image
        src='/NFTImages/incheon1.jpeg'
        alt='stamp1'
        width={100}
        height={100}
        
      />
      <Image
        src='/NFTImages/incheon1.jpeg'
        alt='stamp1'
        width={100}
        height={100}
      />
      <Image
        src='/NFTImages/incheon1.jpeg'
        alt='stamp1'
        width={100}
        height={100}
      />
      <Image
        src='/NFTImages/incheon1.jpeg'
        alt='stamp1'
        width={100}
        height={100}
      />
    </div>
  </motion.div>
</motion.div>
</div> */
}
