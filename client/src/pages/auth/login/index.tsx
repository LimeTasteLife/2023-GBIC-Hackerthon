import Link from 'next/link';
import MetamaskButton from '@/components/MetamaskButton';

import Image from 'next/image';

const LoginPage = () => {
  return (
    <div className='flex h-[calc(100vh_-_56px)] place-items-center justify-center '>
      <div>
        <Image
          src='/NFTImages/incheon4.jpeg'
          width={500}
          height={500}
          alt='login'
          className='max-sm:hidden mr-10'
        />
      </div>
      <section>
        <div className='flex flex-col items-center justify-center w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 '>
          <form className='space-y-6'>
            <h1 className='text-xl font-bold text-gray-900 md:text-2xl  text-center'>
              로그인 및 회원가입하기
            </h1>
            <MetamaskButton />
            <div className='text-center'>
              <p className='text-gray-550'>
                메타마스크가 있다면 <br />
                별도의 회원가입 절차없이 <br />
                바로 로그인이 가능합니다.
              </p>
            </div>
            <div className='text-center'>
              <p className='text-gray-500'>
                메타마스크 지갑이 없으신가요? <br />
                <Link
                  href='https://metamask.io/'
                  className='font-medium text-green-500  hover:underline'
                  target='_blank'
                >
                  쉽고 빠르게 지갑을 만드세요.
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;