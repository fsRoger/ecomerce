import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

import laptopImg from "../../images/slider/laptop.jpg";
import foneVermelhoImg from "../../images/slider/fone-vermelho.jpg";
import fonePretoImg from "../../images/slider/fone-preto.png";




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
          <Image priority src={foneVermelhoImg} alt='foneVermelho' />
        </div>
        <div>
          <Image src={fonePretoImg} alt='fonePreto' />
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