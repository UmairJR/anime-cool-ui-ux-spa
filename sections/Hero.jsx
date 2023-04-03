'use client';
import {motion} from 'framer-motion';
import styles from '../styles';

import {staggerContainer, slideIn, textVariant, zoomIn} from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once:false, amount:0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex jutify-center items-center flex-col z-10 relative">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Anime
        </motion.h1>
        <motion.div variants={textVariant(1.2)} className='flex jutify-center items-center flex-row'>
          <h1 className={styles.heroHeading}>Worl</h1>
          <div className={styles.heroDText} />
          {/* <h1 className={styles.heroHeading}>ness</h1> */}
        </motion.div>
      </div>
      <motion.div variants={slideIn('right','tween',0.2,1)} className="relative w-full md:-mt-[20px] -mt-[12px]">
        <div className='absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]' />
          <img 
          src='/mikasa_cover.png'
          // src='/cover.png'
          className='w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative' />
          <a href='#explore'>
          <div className='w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10'>
            <motion.div
          variants={zoomIn(0.8, 2)}>
          <img
            src='/explore-icon.png'
            className='sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain' />
        </motion.div>
          </div>
          </a>
          
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
