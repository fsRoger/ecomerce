import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

import laptopImg from "../../images/slider/laptopmini.jpg";
import fundotecImg from "../../images/slider/fundo-tec.jpg";





const Banner = () => {
  return (
    <div className='relative'>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={2000}>
        <div>
          <Image priority src={laptopImg} alt='foneVermelho' />
        </div>
        <div>
          <Image src={fundotecImg} alt='fonePreto' />
        </div>
        <div>
          <Image src={laptopImg} alt='laptop' />
        </div>
      </Carousel>
      <div className='w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20'>

      </div>
    </div>
  )
}

export default Banner