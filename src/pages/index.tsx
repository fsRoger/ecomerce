
import Image from "next/image";

import Banner from '@/components/Banner/Banner';
import Products from '@/components/Products/Products';

import { ProductProps } from "../../type";

interface Props {
  productData: ProductProps;
}

export default function Home({ productData }: Props) {
  return (
    <main>
      <div className='max-w-screen-2xl h-auto'>
        <Banner />
        <div className='relative md:-mt020 lgl:-mt-32 xl:-mt-60 z-20 mb-10 '>
          <Products productData={productData} />
        </div>
      </div>
    </main>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const productData = await res.json();
  return { props: { productData } };
}