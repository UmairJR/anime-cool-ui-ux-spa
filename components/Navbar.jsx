'use client';

import {motion} from 'framer-motion';
import styles from '../styles';

import {navVariants} from '../utils/motion';

const Navbar = () => (
  
  <motion.nav 
  variants={navVariants}
  initial="hidden"
  whileInView="show"
  className={`${styles.xPaddings} py-8 relative`}>
  <div className='abolute w-[50%] inset-0 gradient-02' />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img 
      src='/search.svg'
      className='w-[24px] h-[24px] object-contain'
      />
      <h2 className='text-white font-extrabold text-[24px] leading-[30px]'>
        Umair Shaikh
      </h2>
      <img
      src='/menu.svg'
      classname='w-[24px] h-[24px] object-contain' />
    </div>
  
  </motion.nav>
  
);

export default Navbar;

// style={{background: 'linear-gradient(270deg,hsl(295deg 76% 51%) 0%, hsl(284deg 70% 73%) 26%,hsl(257deg 70% 86%) 39%,hsl(202deg 92% 90%) 50%,hsl(215deg 77% 81%) 61%,hsl(221deg 73% 70%) 74%,hsl(220deg 76% 51%) 100%);'}}