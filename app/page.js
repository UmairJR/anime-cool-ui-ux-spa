import { Footer, Navbar } from '../components';
import { About, Explore, HistFact, Hero, Popular, FunFact, World } from '../sections';
import Quotes from '../sections/Quotes';


const Page = () => (
  <div className='bg-black overflow-hidden'>
    <Navbar />
    <Hero />
    <div className='relative'>
    <About />
    <div className='gradient-03 z-0' />
    <Explore />
    </div>
    <div className='relative'>
    <HistFact />
    <div className='gradient-04 z-0' />
    <FunFact />
    </div>
    <World />
    <div className='relative'>
    <Popular />
    {/* <div className='gradient-04 z-0' /> */}
    <Quotes />
    </div>
    <Footer />
  </div>
);

export default Page;
