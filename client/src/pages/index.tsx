import How from '@/components/LendingPage/How';
import Feature from '@/components/LendingPage/Feature';
import GetApp from '@/components/LendingPage/GetApp';
import Guide from '@/components/LendingPage/Guide';
import Hero from '@/components/LendingPage/Hero';
import Series from '@/components/LendingPage/Series';
import { Button } from '@nextui-org/react';

export default function Home() {
  return (
    <div className='relative overflow-hidden'>
      <Hero />
      <Series />
      <How />
      <Guide />
      <Feature />
      <GetApp />
    </div>
  );
}
