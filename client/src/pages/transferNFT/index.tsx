import { Input } from '@nextui-org/react'


const index = () => {
  return (
    <div className="w-full min-h-[600px] px-8 flex justify-center items-center bg-gradient-to-tr from-green-500 to-teal-500 text-black shadow-lg mb-20">
      <div className='py-8 px-4 mx-auto max-w-2xl space-y-5 lg:py-16'>
          <h2 className='mb-4 text-4xl font-bold text-center text-white'>
            행위 인증자에게 스탬프 NFT 전달하기
          </h2>
     <Input type="string" label="받는 사람 지갑 주소" />
     <Input type="string" label="시리즈 번호" />
     <Input type="string" label="도장 번호" />
     </div>
    </div>
  )
}

export default index