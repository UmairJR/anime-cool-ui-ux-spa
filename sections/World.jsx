'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, mapVariant, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| The Most Popular Anime in every Continent" textStyles="text-center" />
      <TitleText
        title={(
          <>Popularity of Anime in different Continents
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <motion.div variants={mapVariant} whileInView='up_down' className="absolute  bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="australia.png" alt="australia" className="w-full h-full" />
        </motion.div>
        <motion.div variants={mapVariant} whileInView='up_down' className="absolute top-[25%] left-[60%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="asia.png" alt="asia" className="w-full h-full" />
        </motion.div>
        <motion.div variants={mapVariant} whileInView='up_down' className="absolute top-20 left-[40%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/europe.png" alt="europe" className="w-full h-full" />
        </motion.div>
        <motion.div variants={mapVariant} whileInView='up_down' className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/north-america.png" alt="north-america" className="w-full h-full" />
        </motion.div>

        <motion.div variants={mapVariant} whileInView='up_down' className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="africa.png" alt="africa" className="w-full h-full" />
        </motion.div>
        <motion.div variants={mapVariant} whileInView='up_down' className="absolute bottom-[20%] left-[10%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="south-america.png" alt="south-america" className="w-full h-full" />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
