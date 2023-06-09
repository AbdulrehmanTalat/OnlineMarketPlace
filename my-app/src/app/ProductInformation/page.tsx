'use client'
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Dot } from 'lucide-react';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { getUserIdentifier } from '@/lib/cookie';
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image';
import { urlForImage } from '../../../sanity/lib/image';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/../sanity/lib/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
// import { DineMarketContext } from '@/context/DineMarketContext';

interface IProduct {
  gender: string;
  _rev: string;
  _type: string;
  title: string;
  _id: string;
  _updatedAt: string;
  images: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  use: string;
  type: string;
  size: string[];
  price: number;
  _createdAt: string;
  details: string;
}

export default function ProductInformation() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  const productInfoString = searchParams.get('productInfo');
  const [productInfo, setProductInfo] = useState<IProduct | null>(null);
  const [index, setIndex] = useState(0);
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const builder = imageUrlBuilder(client);
  function urlFor(source: SanityImageSource) {
    return builder.image(source);
  }

  useEffect(() => {
    if (productInfoString) {
      const parsedProductInfo = JSON.parse(productInfoString) as IProduct;
      setProductInfo(parsedProductInfo);
    }
  }, [productInfoString]);
  const careList: string[] = productInfo?.use.split('.') ?? [];
  const productImage = productInfo?.images as SanityImageSource;
  return (
    <div className='mx-auto flex max-w-[1560px] flex-wrap justify-center gap-5 rounded-xl bg-[#f3f3f35d] px-5 py-12 sm:px-10 md:px-16 lg:px-20'>
      <div className=' flex w-full flex-col items-start space-y-8 md:flex-row md:space-x-7 md:space-y-0 lg:space-x-10'>
        <div className='hidden w-full custom1:block md:hidden'>
          <div className='flex w-full flex-col items-start justify-start'>
            <p className='text-2xl lg:text-3xl font-normal text-[#212121]'>{productInfo?.title}</p>
            <p className='text-xl font-semibold text-gray-400'>{productInfo?.type}</p>
          </div>
        </div>
        <div className='w-full basis-8/12'>
          <div className='flex w-full space-x-10 justify-between'>
            <div className='flex flex-col space-y-4 min-w-[50px] custom1:min-w-[80px] sm:min-w-[100px]'>
              <Image
                src={urlFor(productImage).width(700).url()}
                className='cursor-pointer object-cover w-[50px] h-auto custom1:min-w-[80px] sm:min-w-[100px] bg-blue-100'
                alt='product image'
                width={100}
                height={100}
                priority
              />
            </div>
            <div className='overflow-hidden'>
              <Image
                src={urlFor(productImage).width(700).url()}
                alt='product image'
                width={750}
                height={750}
                className='object-cover rounded-xl bg-blue-100'
                priority
              />
            </div>
          </div>
        </div>
        <div className='w-full basis-full space-y-12 md:basis-4/12'>
          <div className='block custom1:hidden md:block md:pt-16'>
            <div className='flex w-full flex-col items-start justify-start'>
              <p className='text-2xl lg:text-3xl font-normal text-[#212121]'>{productInfo?.title}</p>
              <p className='text-xl font-semibold text-gray-400'>{productInfo?.type}</p>
            </div>
          </div>
          <div className='flex flex-col space-y-8 text-[#212121]'>
            <div className='flex flex-col space-y-3'>
              <p className='text-sm font-semibold'>SELECT SIZE</p>
              <div className='flex flex-wrap gap-5'>
                {productInfo?.size.map((size, ind) => (
                  <p
                    key={ind}
                    className={`w-10 cursor-pointer rounded-full p-2 text-center ${index == ind ? 'bg-[#212121] text-white' : 'bg-gray-200'
                      }`}
                    onClick={() => {
                      setIndex(ind);
                      setSize(size);
                    }}
                  >
                    {size}
                  </p>
                ))}
              </div>
            </div>
            <div className='flex items-center space-x-5'>
              <p className='text-sm font-semibold'>Quantity</p>
              <div className='inline-flex items-center justify-between space-x-3'>
                <span
                  className={`w-fitt cursor-pointer rounded-full bg-gray-200 p-2 text-center`}
                  onClick={() => {
                    quantity > 1 && setQuantity(quantity - 1);
                  }}
                >
                  <Minus size={15} color={'gray'} />
                </span>
                <span className='w-10 text-center'>{quantity}</span>
                <span
                  className={`w-fitt cursor-pointer rounded-full bg-gray-200 p-2 text-center`}
                  onClick={() => {
                    quantity < 26 && setQuantity(quantity + 1);
                  }}
                >
                  <Plus size={15} color={'gray'} />
                </span>
              </div>
            </div>
            <div className='flex items-center space-x-5'>
              <p className='text-sm font-semibold'>Total : </p>
              <p className='text-lg font-semibold'>
                ${Number(productInfo?.price) * quantity}.00
              </p>
            </div>
            <div className='flex items-center space-x-5'>
              {/* <button
          className={`w-fitt inline-flex space-x-2 bg-[#212121] px-8 py-4 focus-visible:bg-[#212121] ${
            !bDisabled
              ? 'cursor-pointer'
              : 'cursor-not-allowed disabled:opacity-50'
          }`}
          onClick={addToCart}
          disabled={bDisabled}
        >
          <ShoppingCart size={20} />
          <span className='whitespace-nowrap'>Add to Cart</span>
        </button> */}
            </div>
            <Toaster position='top-center' />
          </div>
        </div>
      </div>
      <div className='z-10 mt-8 flex w-full flex-col items-start space-y-8 bg-white px-8 py-16 md:p-16'>
        <div className='relative mb-6 w-full items-start sm:mb-8'>
          <p className='text-2xl font-bold'>Product Information</p>
          <div className='absolute inset-0 -z-50 flex items-center justify-start'>
            <div className='text-[45px] font-bold text-gray-100 custom1:text-[70px] sm:text-8xl sm:font-extrabold'>
              Overview
            </div>
          </div>
        </div>
        <div className='w-full border-[1px]'></div>
        <div className='flex w-full flex-col space-y-8 sm:flex-row sm:justify-start sm:space-x-16 sm:space-y-0'>
          <p className='whitespace-nowrap font-semibold text-gray-700  md:basis-2/6'>
            PRODUCT DETAILS
          </p>

          <div className='flex-col space-y-4 md:basis-4/6'>
            <p className='text-justify tracking-wider text-gray-600 '>
              {productInfo?.details}
            </p>
          </div>
        </div>
        <div className='flex w-full flex-col space-y-8 sm:flex-row sm:justify-start sm:space-x-16 sm:space-y-0'>
          <p className='whitespace-nowrap font-semibold text-gray-700  md:basis-2/6'>
            PRODUCT CARE
          </p>

          <ul className='flex-col space-y-2 md:basis-4/6'>
            {careList.map((item: string, ind) => (
              <li
                key={ind}
                className='flex text-justify font-semibold tracking-wider text-gray-900'
              >
                <Dot /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

  );
}
