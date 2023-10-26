/* eslint-disable @next/next/no-img-element */

import { CldUploadWidget } from 'next-cloudinary';
import { motion } from 'framer-motion';

import { TbPhotoPlus } from 'react-icons/tb';
import Image from 'next/image';
interface ImageUploadProps {
  onChange: (value: string[]) => void;
  value: string[];
}

const ImageUpload = ({ onChange, value }: ImageUploadProps) => {
  const handleUpload = (result: any) => {
    console.log('result:', result.info.secure_url);
    const updatedValue = Array.isArray(value)
      ? [...value, result.info.secure_url]
      : [result.info.secure_url];
    onChange(updatedValue);
  };

  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  return (
    <>
      <label
        htmlFor='brand'
        className='block mb-2 text-md font-medium text-gray-900'
      >
        NFT 사진 등록
      </label>

      <CldUploadWidget
        onUpload={handleUpload}
        uploadPreset={uploadPreset}
        options={{
          maxFiles: 5,
          resourceType: 'image',
          maxFileSize: 2 * 1024 * 1024,
        }}
      >
        {({ open }) => {
          return (
            <div
              onClick={() => open?.()}
              className='flex flex-col items-center justify-center w-full h-50 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50   hover:bg-gray-100'
            >
              <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                <TbPhotoPlus size={50} className='z-3 mb-3' />
                <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                  <span className='font-semibold'>사진 업로드하기</span>
                </p>
                <p className='text-xs text-gray-500 dark:text-gray-400'>
                  SVG, PNG, JPG or GIF (MAX. 2MB)
                </p>
              </div>
            </div>
          );
        }}
      </CldUploadWidget>

      <p className='text-sm leading-relaxed mt-1 text-slate-500'>
        * 최대 5장까지 올릴 수 있으며, 선택한 사진 순서에 따라 순서대로 번호가 지정됩니다.
        
      </p>
      <p className='text-sm leading-relaxed text-slate-500 mt-1 '>
        * 첫번째 사진이 스탬프 보드가 됩니다.
      </p>

      <label
        htmlFor='brand'
        className='block mb-2 text-md font-medium text-gray-900 mt-5'
      >
        업로드된 사진들 (순서대로 1 ~ 5번)
      </label>
      <div className='grid grid-cols-5 gap-4 mt-3 mb-5'>
        <div>
          {value[0] ? (
            <motion.div
              className='box'
              whileHover={{ scale: 2.5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              <Image
                width={200}
                height={200}
                className='h-auto max-w-full rounded-lg'
                src={value[0]}
                alt=''
              />
            </motion.div>
          ) : (
            <svg
              className='w-full h-full text-gray-800 '
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 18'
            >
              <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
            </svg>
          )}
        </div>
        <div>
          {value[1] ? (
            <motion.div
              className='box'
              whileHover={{ scale: 2.5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              <Image
                width={200}
                height={200}
                className='h-auto max-w-full rounded-lg'
                src={value[1]}
                alt=''
              />
            </motion.div>
          ) : (
            <svg
              className='w-full h-full text-gray-800'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 18'
            >
              <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
            </svg>
          )}
        </div>
        <div>
          {value[2] ? (
            <motion.div
              className='box'
              whileHover={{ scale: 2.5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              <Image
                width={200}
                height={200}
                className='h-auto max-w-full rounded-lg'
                src={value[2]}
                alt=''
              />
            </motion.div>
          ) : (
            <svg
              className='w-full h-full text-gray-800'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 18'
            >
              <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
            </svg>
          )}
        </div>
        <div>
          {value[3] ? (
            <motion.div
              className='box'
              whileHover={{ scale: 2.5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              <Image
                width={200}
                height={200}
                className='h-auto max-w-full rounded-lg'
                src={value[3]}
                alt=''
              />
            </motion.div>
          ) : (
            <svg
              className='w-full h-full text-gray-800'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 18'
            >
              <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
            </svg>
          )}
        </div>
        <div>
          {value[4] ? (
            <motion.div
              className='box'
              whileHover={{ scale: 2.5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              <Image
                width={200}
                height={200}
                className='h-auto max-w-full rounded-lg'
                src={value[4]}
                alt=''
              />
            </motion.div>
          ) : (
            <svg
              className='w-full h-full text-gray-800'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 18'
            >
              <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
            </svg>
          )}
        </div>
      </div>
      
    </>
  );
};

export default ImageUpload;

// <div>
// {value.length >= 2 && (
//   <div style={{ display: 'flex' }}>
//     {value.slice(1, 5).map((imageUrl, index) => (
//       <div
//         key={index}
//         className='relative rounded-lg flex flex-col items-center justify-center p-20 transition border-2 border-dashed cursor-pointer border-neutral-300 text-neutral-300'
//         style={{ width: 'calc(25% - 16px)', margin: '8px' }}
//       >
//         <div style={{ flex: 1 }} className='flex-1'>
//           <Image
//           className='rounded-lg'
//             fill
//             style={{
//               objectFit: 'cover',
//               width: '100%',
//               height: '100%',
//             }}
//             src={imageUrl}
//             alt=''
//           />
//         </div>
//       </div>
//     ))}
//   </div>
// )}
// </div>

{
  /* <div className='flex mt-4'>
        {value[1] && (
          <div className='w-1/2'>
            <div className='relative rounded-lg items-center mr-2 justify-center p-20 transition border-2 border-dashed  border-neutral-300 text-neutral-300 cursor-pointer hover:opacity-70 '>
              <div>
                <Image
                  className='rounded-lg'
                  fill
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                  src={value[1]}
                  alt=''
                />
              </div>
            </div>
          </div>
        )}
        {value[2] && (
          <div className='w-1/2'>
            <div className='relative rounded-lg  items-center ml-2 justify-center p-20 transition border-2 border-dashed  border-neutral-300 text-neutral-300 cursor-pointer hover:opacity-70 '>
              <div style={{ flex: 1 }}>
                <Image
                  className='rounded-lg'
                  fill
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                  src={value[2]}
                  alt=''
                />
              </div>
            </div>
          </div>
        )}
      </div> */
}
{
  /* <div className='flex mt-4'>
        {value[3] && (
          <div className='w-1/2'>
            <div className='relative rounded-lg items-center mr-2 justify-center p-20 transition border-2 border-dashed  border-neutral-300 text-neutral-300 cursor-pointer hover:opacity-70 '>
              <div style={{ flex: 1 }}>
                <Image
                  className='rounded-lg'
                  fill
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                  src={value[3]}
                  alt=''
                />
              </div>
            </div>
          </div>
        )}
        {value[4] && (
          <div className='w-1/2'>
            <div className='relative rounded-lg  items-center ml-2 justify-center p-20 transition border-2 border-dashed  border-neutral-300 text-neutral-300 cursor-pointer hover:opacity-70 '>
              <div style={{ flex: 1 }}>
                <Image
                  className='rounded-lg'
                  fill
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                  src={value[4]}
                  alt=''
                />
              </div>
            </div>
          </div>
        )}
      </div> */
}
