import React from 'react'
import { ProductProps } from '../../../type';
import Image from 'next/image';
import { HiShoppingCart } from 'react-icons/hi';
import { FaHeart } from 'react-icons/fa';
import FormattedAmount from '../FmtPrice'

const Products = ({ productData }: any) => {
  return (
    <div className='w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
      {productData.map(
        ({
          _id,
          brand,
          category,
          description,
          image,
          isNew,
          oldPrice,
          price,
          title,
        }: ProductProps) => (
          <div key={_id} className='w-full bg-white text-black p-4 border border-gray-300 rounded-lg group overflow-hidden'>
            <div className='w-full h-[260px]'>
              <Image
                className='w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-100'
                width={300}
                height={300}
                src={image}
                alt='productImage'
              />
              <div className='w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 transition-transform duration-300'>
                <span className='w-full h-full border-b-[1px] border-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-3000'>
                  <HiShoppingCart />
                </span>
                <span className='w-full h-full border-b-[1px] border-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-3000'>
                  <FaHeart />
                </span>
              </div>

              {isNew && (
                <p className='absolute top-0 right-0 text-amazon_blue font-medium text-sm tracking-wide animate-pulse'>
                  Preços<FormattedAmount amount={oldPrice - price} />
                </p>
              )}
            </div>
            <hr></hr>
            <div className='px-4 py-3 flex flex-col gap-1'>
              <p className='text-xs text-gray-500 tracking-wider'>{category}</p>
              <p className='text-base font-medium'>{title}</p>
              <p className='flex items-center gap-2'>
                <span className='text-sm line-through'>
                  <FormattedAmount amount={oldPrice} />
                </span>
                <span className='text-amazon_blue font-semibold'>
                  <FormattedAmount amount={price} />
                </span>
              </p>
              <p className='text-xs font-gray-600 text-justify'>
                {description.substring(0, 120)}
              </p>
              <button className='h-10 font-medium bg-amazon_blue text-white '>
                + Carrinho
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Products