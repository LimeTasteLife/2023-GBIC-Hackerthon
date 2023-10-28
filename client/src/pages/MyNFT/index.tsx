import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import React, { useState } from 'react';
import { User } from '@prisma/client';
import { getSession } from 'next-auth/react';
import axios from 'axios';
import { Card, CardBody, CardFooter, Progress } from '@nextui-org/react';
import Link from 'next/link';

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const account = context.params?.user as string;
//   console.log('account', account);
//   let userProfile;
//   try {
//     // Send GET request using axios
//     const response = await axios.get(
//       'http://localhost:3000/api/user/get-profile',
//       {
//         params: {
//           address: account,
//         },
//       }
//     );

//     if (!response.data.items.account) {
//       context.res.writeHead(302, { Location: '/item_not_exist ' });
//       context.res.end();
//       return;
//     }

//     // Access the response data
//     userProfile = response.data;

//     console.log('userProfile', userProfile);
//   } catch (error) {
//     console.error('Error fetching user profile:', error);
//     userProfile = null;
//   }

//   return {
//     props: { userProfile: userProfile.items },
//   };
// }

const Profile = (props: { userProfile: any }) => {
  const profile = props.userProfile;

  console.log(profile);

  //! offcanvas
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-white '>
      <section className='relative block h-[50vh]'>
        <div className='absolute top-0 h-full w-full'>
          <Image
            src='/NFTImages/incheonLand2.png'
            alt='Background Image'
            fill
          />
        </div>
        <div className='absolute top-0 h-full w-full bg-black/20 bg-cover bg-center' />
      </section>
      <section className='relative py-16 bg-blue-gray-50/50 sm:px-4'>
        <div className=' mx-auto'>
          <div className='relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-lg shadow-gray-300 '>
            <div className='flex flex-wrap justify-center'>
              <div className='flex w-full justify-center px-4 lg:order-2 lg:w-3/12'>
                <div className='relative'>
                  <div className='-mt-40 w-50 mx-auto'>
                    <Image
                      className='rounded-full'
                      src='https://i.pravatar.cc/150?u=a04258a2462d826712d'
                      alt='Rounded avatar'
                      width={300}
                      height={300}
                    />
                    {/* {profile.image ? (
                        <Image
                          className='rounded-full'
                          src={`${profile.image}`}
                          alt='Rounded avatar'
                          width={300}
                          height={300}
                        />
                      ) : (
                        <>
                          <svg
                            className='w-60 mt-10 h-60 text-gray-800 dark:text-white'
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                          >
                            <path d='M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z' />
                          </svg>
                        </>
                      )} */}
                  </div>
                </div>
              </div>
              <div className='w-full px-4 lg:order-1 lg:w-4/12 text-lg'>
                <div className='flex justify-center py-4 pt-8 lg:pt-4'>
                  <div className='flex flex-col mr-4 p-3 text-center'>
                    <span className='font-bold uppercase'>3</span>
                    <span className='font-normal text-gray-500'>
                      참여한 시리즈 수
                    </span>
                  </div>
                  <div className='flex flex-col mr-4 p-3 text-center'>
                    <span className='font-bold uppercase'>5</span>
                    <span className='font-normal text-gray-500'>
                      받은 NFT 개수
                    </span>
                  </div>
                </div>
              </div>

              <div className='w-full px-4 lg:order-3 lg:w-4/12 text-lg'>
                <div className='flex justify-center py-4 pt-8 lg:pt-4'>
                  <div className='flex flex-col mr-4 p-3 text-center'>
                    <span className='font-bold uppercase'>YouJun</span>
                    <span className='font-normal text-gray-500'>닉네임</span>
                  </div>
                  <div className='flex flex-col mr-4 p-3 text-center'>
                    <span className='font-bold uppercase'>관리자</span>
                    <span className='font-normal text-gray-500'>Type</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='my-8 text-center'>
              <h3 className='mb-2 font-semibold text-2xl'>YouJun</h3>
              <div className='mb-10 mt-3 flex flex-col items-center justify-center gap-2'>
                <span className='font-medium text-blue-gray-700'>
                  0x718579A4952DF3Ffc46226f4071Dc40131ae0E3d
                </span>
                <span className='font-normal text-blue-gray-500'>
                  안녕하세요! 스탬프 NFT로 다양한 활동을 기획중인 교사입니다.
                </span>
              </div>
            </div>

            <div className='mb-10 border-t-3 border-green-300 py-10 text-center'>
              <div className='flex flex-wrap w-full justify-around px-4 gap-10 '>
                <div className='relative flex justify-center'>
                  <Card
                    shadow='lg'
                    isPressable
                    onPress={() => console.log('item pressed')}
                    
                  >
                    <CardBody className='overflow-visible p-0'>
                      <Image
                        width={400}
                        height={400}
                        alt='NextUI hero Image'
                        src='/NFTImages/stampBoardA.png'
                        className='min-w-[400px]'
                      />
                    </CardBody>
                    <CardFooter className='text-md px-4 mx-auto'>
                      <div className=' px-4 mx-auto w-full '>
                        <div className='flex justify-between'>
                          <p className='text-lg'>Series 1</p>
                          <p className='text-lg '>
                            100%
                          </p>
                        </div>
                        <Progress
                          aria-label='Music progress'
                          classNames={{
                            base: 'max-w-md',
                            track: 'drop-shadow-md border border-default',
                            indicator: 'bg-gradient-to-r from-blue-500 to-green-500',
                            label: 'tracking-wider font-medium text-default-600',
                            value: 'text-green-50',
                          }}
                          
                          color='default'
                          size='md'
                          value={100}
                        />
                      </div>
                    </CardFooter>
                  </Card>

                  <div
                    className='absolute grid grid-rows-2 grid-cols-2 gap-9 top-24'
                    draggable='false'
                  >
                    <Image
                      src='/NFTImages/incheon1.jpeg'
                      alt='stamp1'
                      width={90}
                      height={90}
                      className='rounded-xl shadow-2xl'
                    />
                    <Image
                      src='/NFTImages/incheon2.jpeg'
                      alt='stamp1'
                      width={90}
                      height={90}
                      className='rounded-xl shadow-2xl'
                    />
                    <Image
                      src='/NFTImages/incheon3.jpeg'
                      alt='stamp1'
                      width={90}
                      height={90}
                      className='rounded-xl shadow-2xl'
                    />
                    <Image
                      src='/NFTImages/incheon4.jpeg'
                      alt='stamp1'
                      width={90}
                      height={90}
                      className='rounded-xl shadow-2xl'
                    />
                  </div>
                </div>
                <div className='relative flex justify-center'>
                  <Card
                    shadow='sm'
                    isPressable
                    onPress={() => console.log('item pressed')}
                  >
                    <CardBody className='overflow-visible p-0'>
                      <Image
                        width={400}
                        height={400}
                        alt='NextUI hero Image'
                        src='/NFTImages/stampBoardA.png'
                        className='min-w-[400px]'
                      />
                    </CardBody>
                    <CardFooter className='text-small justify-between'>
                      <b>Title</b>
                      <p className='text-default-500'>Series 1</p>
                    </CardFooter>
                  </Card>
                </div>
                <div className='relative flex justify-center'>
                  <Card
                    shadow='sm'
                    isPressable
                    onPress={() => console.log('item pressed')}
                  >
                    <CardBody className='overflow-visible p-0'>
                      <Image
                        width={400}
                        height={400}
                        alt='NextUI hero Image'
                        src='/NFTImages/stampBoardA.png'
                        className='min-w-[400px]'
                      />
                    </CardBody>
                    <CardFooter className='text-small justify-between'>
                      <b>Title</b>
                      <p className='text-default-500'>Series 1</p>
                    </CardFooter>
                  </Card>
                </div>
                <div className='relative flex justify-center'>
                  <Card
                    shadow='sm'
                    isPressable
                    onPress={() => console.log('item pressed')}
                  >
                    <CardBody className='overflow-visible p-0'>
                      <Image
                        width={400}
                        height={400}
                        alt='NextUI hero Image'
                        src='/NFTImages/stampBoardA.png'
                        className='min-w-[400px]'
                      />
                    </CardBody>
                    <CardFooter className='text-small justify-between'>
                      <b>Title</b>
                      <p className='text-default-500'>Series 1</p>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
