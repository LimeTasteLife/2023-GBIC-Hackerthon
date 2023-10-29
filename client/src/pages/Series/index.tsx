import HeadlineCards from '@/components/SeriesPage/HeadlineCards';
import MainSeries from '@/components/SeriesPage/MainSeries';


import { ExampleSeries } from '@/constants';

const index = () => {
  return (
    <div className='mb-20'>
 

      <MainSeries mainSeries={ExampleSeries} />
      
<div className='flex relative flex-col md:flex-row items-center p-5  rounded-b-2xl'>
<div className='absolute top-30 left-0 w-full h-96 bg-gradient-to-br from-green-400 to-[#0055D1] rounded-md filter blur-3xl opacity-50 -z-50'></div>
      <HeadlineCards />
</div>
   
    </div>
  );
};

export default index;
