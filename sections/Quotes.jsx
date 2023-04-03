'use client';

import { motion } from 'framer-motion';
import SingleQuote from './SingleQuote';
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const naruto_quote = "“If you don't like your destiny, don't accept it. Instead, have the courage to change it the way you want it to be.”";
const fuegoleon_quote = "“Being weak is nothing to be ashamed of… Staying weak is !!“"
const mikasa_quote = "“Once I’m dead, I won’t even be able to remember you. So I’ll win, no matter what. I’ll live, no matter what!”"
const kaori_quote = "“Maybe there's only a dark road up ahead. But you still have to believe and keep going. Believe that the stars will light your path, even a little bit”"

const Quotes = () => (
  <section className={`${styles.paddings}`}>
    <div className='gradient-04 z-0' />
    <SingleQuote title="Naruto Uzumaki" subtitle="(Naruto)" quote={naruto_quote} imgUrl="/naruto-quote.png" />
    
    <SingleQuote title="Fuegoleon Vermillion" subtitle="(Black Clover)" quote={fuegoleon_quote} imgUrl="/fuegoleon-quote.png" />
    
    <SingleQuote title="Mikasa Ackerman" subtitle="(Attack on Titan)" quote={mikasa_quote} imgUrl="/mikasa-quote.png" />
    
    <SingleQuote title="Kaori Miyazono" subtitle="(Your lie in April)" quote={kaori_quote} imgUrl="/kaori-quote.png" />
  </section>
);

export default Quotes;