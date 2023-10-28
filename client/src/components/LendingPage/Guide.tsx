import Image from 'next/image';
import { Progress } from '@nextui-org/react';
import dynamic from 'next/dynamic';

const Guide = () => {
  const KakaoMap = dynamic(() => import('../KakaoMap'), {
    ssr: false,
  });
  return (
    <section className='flexCenter flex-col'>
      <div className='padding-container max-container w-full pb-24'>
        <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
          <h2 className='bold-40 flex flex-col lg:bold-64 xl:max-w-[500px]'>
            <span>쉽고 빠르게! </span>

            <span>그리고 재미있게!</span>
          </h2>

          <p className='regular-16 text-gray-30 xl:max-w-[520px]'>
            저희들의 웹을 사용하면 보다 일상에서 쉽고 빠르게 NFT를 얻고, 이에
            따른 실질적인 보상을 얻을 수 있습니다! 보다 직관적인 UI로 여러분들은
            내가 원하는 혜택들을 선택하고 해당 미션을 달성할 수 있습니다. 그리고
            NFT 기술을 통해서 그 기록과 가치는 영구히 저장됩니다. 그 누구도
            조작하거나 방해할 수 없습니다. 지금 바로 신청해서 스탬프 보드 NFT에 스탬프 NFT들을 찍으세요! 아래의 지도에 나와 있는 NFT와 Point를 얻을 수 있습니다!
          </p>
        </div>
      </div>

      <div className='flexCenter max-container relative w-full'>
        {/* <Image 
          src="/lendingPage/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        /> */}
        <KakaoMap  width="1440px" height="580px"/>

        <div className='absolute z-10 flex flex-col bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20'>
          <div className='flex w-full flex-col'>
            <p className='bold-20 text-green-500'>Series 1</p>
            <p className='bold-20 mt-2'>나의 스탬프 보드 현황</p>
          </div>
          <Progress
            size='md'
            radius='sm'
            classNames={{
              base: 'max-w-md',
              track: 'drop-shadow-md border border-default',
              indicator: 'bg-gradient-to-r from-blue-500 to-green-500',
              label: 'tracking-wider font-medium text-default-600',
              value: 'text-green-50',
            }}
            label='완성까지'
            value={66.6}
            showValueLabel={true}
          />

          <p className='regular-16 text-gray-20'>남은 목적지 : 보문사</p>
        </div>
      </div>
    </section>
  );
};

export default Guide;
