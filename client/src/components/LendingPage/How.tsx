'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../HowStyles';
import { Step } from '../../constants';
import HowCard from '../HowComponent/HowCard';

import { TitleText } from '../HowComponent/TypingText';

const How = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings}`} id='explore'>
      <motion.div
    
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TitleText
          title={
            <>
              새로운 기회와 혜택을 <br className='md:block hidden' /> 찾을 수 있는 과정!
            </>
          }
          textStyles='text-center'
        />
        <div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5'>
          {Step.map((step: any, index: any) => (
            <HowCard
              key={step.id}
              {...step}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default How;
