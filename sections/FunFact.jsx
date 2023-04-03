'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { factTwo, newFeatures } from '../constants';
import { TitleText, TypingText, StartSteps } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const FunFact = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| Anime Facts" />
        <TitleText title={<>Fun Facts about Anime </>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {factTwo.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? '0' : ''} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/bg-img.png"
          alt="tokyo-revenger"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default FunFact;