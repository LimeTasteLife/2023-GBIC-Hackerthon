import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button';
5049;

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row '>
      <div className='hero-map' />

      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
       
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl "><span className="underline underline-offset-3 decoration-8 decoration-green-400 ">world’s first</span></h1>
        <span className='flex flex-col bold-52 md:text-5xl lg:text-6xl lg:bold-88'>
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Dynamic NFT</span> Stamp event
        </span>
        <p className='regular-16 py-6 text-gray-30 xl:max-w-[520px]'>
          스탬프 보드 NFT와 함께 인천의 다양한 문화를 더욱 알차게 즐기세요! 이
          스탬프 보드는 여러분들로 하여금 그 어떤 조작과 의심의 여지 없이 오로지
          재미와 혜택을 위해 존재합니다! 고민하지 마시고 쉽고 빠르게 다양한 인천
          NFT 이벤트에 참가하세요!
        </p>

        <div className='my-8 flex flex-wrap gap-5'>
          <p className='bold-16 lg:bold-10 text-blue-70'>
            활성화된 NFT 스팟 :
            <span className='regular-16 lg:regular-20 ml-1'>132 곳</span>
          </p>
          <p className='bold-16 lg:bold-10 text-blue-70'>
            발행된 NFT 개수 :
            <span className='regular-16 lg:regular-20 ml-1'>400 개</span>
          </p>
        </div>

        <div className='flex flex-col w-full gap-3 sm:flex-row'>
          <Link
            href='/Series'
            className='relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-green-500 rounded-full shadow-md group'
          >
            <span className='absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-500 group-hover:translate-x-0 ease'>
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M14 5l7 7m0 0l-7 7m7-7H3'
                ></path>
              </svg>
            </span>
            <span className='absolute flex items-center justify-center w-full h-full text-green-500 transition-all duration-300 transform group-hover:translate-x-full ease'>
              신청하기
            </span>
            <span className='relative invisible'>Button Text</span>
          </Link>
          <Button
            type='button'
            title='NFT 이벤트 과정'
            icon='/lendingPage/play.svg'
            variant='btn-white'
          />
        </div>
      </div>

      <div className='relative flex flex-1 items-start  '>
        <Image
          className='ml-10'
          src='/NFTImages/stampBoard.png'
          alt='stampBoardExample'
          width={550}
          height={550}
        />
        <div className='absolute flex  -bottom-20 -ml-20 z-20 w-[268px] flex-col gap-8 rounded-3xl bg-green-400 px-7 py-8'>
          <div className='flex flex-col'>
            <div className='flexBetween'>
              <p className='regular-20 text-white'>남은 장소 :</p>
              <Image
                src='/lendingPage/close.svg'
                alt='close'
                width={24}
                height={24}
              />
            </div>
            <p className='bold-18 text-white'>강화도 동막해수욕장</p>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-col'>
              <p className='regular-20 block text-white'>
                모든 미션 달성시 포인트 및 혜택 :
              </p>
              <p className='bold-18 text-white'>2,000 p</p>
              <p className='bold-18 text-white'>+</p>
              <p className='bold-18 text-white'>GBIC 입장권</p>
            </div>
            {/* <div className='flex flex-col'>
              <p className='regular-16 block text-white'>현재 포인트</p>
              <p className='bold-20 text-white'>1,000 p</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
