'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../../utils/motion';

export const TypingText = ({ title, textStyles }: any) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
         {typeof letter === "string" ? letter : "\u00A0"}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }: any) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className={`font-bold md:text-[64px] text-[40px] -mt-20 text-black ${textStyles}`}
  >
    {title}
  </motion.h2>
);
