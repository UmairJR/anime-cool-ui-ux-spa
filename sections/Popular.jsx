'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { popular } from '../constants';
import { staggerContainer } from '../utils/motion';
import { PopularCard, TitleText, TypingText } from '../components';

const Popular = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Top Characters" textStyles="text-center" />
      <TitleText title={<>Top Most Popular Anime Characters</>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {popular.map((item, index) => (
          <PopularCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Popular;