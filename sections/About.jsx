'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText } from '../components'
import { staggerContainer, fadeIn, textVariant } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About " textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Welcome!</span> This website is a showcase of my skills
        in front-end development, created{' '}
        <span className="font-extrabold text-white">
          ReactJS
        </span>,{' '}
        <span className="font-extrabold text-white">
          TailwindCSS
        </span>, and{' '}
        <span className="font-extrabold text-white">
          Framer Motion
        </span>{' '}
        library.{' '}
        As a passionate front-end developer, I have designed this website to demonstrate my abilities and
        creativity in creating interactive and visually appealing user interfaces. Through this website,
        I hope to showcase my expertise in creating visually stunning and{' '}
        <span className="font-extrabold text-white">
          interactive front-end designs.
        </span>{' '}
        Please take a look around and feel free to contact me if you have any questions or if you would like
        to work together on a project.<br />
        <span className="font-extrabold text-white">
        Thank you for visiting!
        </span>
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
