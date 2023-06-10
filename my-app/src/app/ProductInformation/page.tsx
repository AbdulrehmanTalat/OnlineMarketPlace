'use client'
import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Dot } from 'lucide-react';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { urlForImage } from '../../../sanity/lib/image';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/../sanity/lib/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { IProduct } from '@/lib/IProduct';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '../../components/ui/button';
import { getUserIdentifier } from '@/lib/cookie';
import toast, { Toaster } from 'react-hot-toast';
import { DineMarketContext } from '../../app/context/DineMarketContext';
// import { DineMarketContext } from '@/context/DineMarketContext';

export default function ProductInformation() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const identifier = getUserIdentifier();
  const dmContext = useContext(DineMarketContext);
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  const productIdString = searchParams.get('productId');
  const [productInfo, setProductInfo] = useState<IProduct>();
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const res = await client.fetch(`*[_type == 'product' && _id == '${productIdString}']`);
        setProductInfo(res[0]);
      } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
      }
    };

    fetchProductData();
  }, []);
  let imagesUrls: string[] = [];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const [sizeIndex, setSizeIndex] = useState(2);
  const [selectedSize, setSelectedSize] = useState(sizes[sizeIndex]);
  // product quantitiy by default 1
  const [quantity, setQuantity] = useState(1);
  // State variable for disabling the button when request to add data is sent
  const [bDisabled, setBDisabled] = useState(false);
  const builder = imageUrlBuilder(client);
  function urlFor(source: SanityImageSource) {
    return builder.image(source);
  }
  const careList: string[] = productInfo?.use.split('.') ?? [];
  if (productInfo && productInfo != null) {
    imagesUrls.push(urlFor(productInfo.images).width(700).url());
  }
  if (!productInfo) {
    return (<div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>);
  }
  async function addToCart() {
    const toastId = toast.loading('adding to cart');
    setBDisabled(true);
    fetch(`${baseUrl}api/addToCart`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',Authorization: `${identifier}`, },
      body: JSON.stringify({
        productName: productInfo?.title,
        productType: productInfo?.type,
        productSlug: productInfo?._id,
        productImageUrl: imagesUrls[0],
        productSelectedSize: selectedSize,
        productQuantity: quantity,
        productPrice: productInfo?.price,
      }),
      cache: 'no-store',
    })
      .then((response) => response.json())
      .then((response) => {
        toast.dismiss(toastId);

        if (response[0].product_quantity) {
          dmContext?.incCartItems(quantity);
          toast.success('added to cart');
        } else {
          toast.error('adding to cart failed');
        }
      })
      .catch(() => {
        toast.dismiss(toastId);
        toast.error('adding to cart failed');
      })
      .finally(() => {
        setBDisabled(false);
      });
  }
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
                src={productInfo && urlForImage(productInfo.images).url()}
                className='cursor-pointer object-cover w-[50px] h-auto custom1:min-w-[80px] sm:min-w-[100px] bg-blue-100'
                alt='product image'
                width={100}
                height={100}
                priority
              />
            </div>
            <div className='overflow-hidden'>
              <Image
                src={productInfo && urlForImage(productInfo.images).url()}
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
                    className={`w-10 cursor-pointer rounded-full p-2 text-center ${sizeIndex == ind ? 'bg-[#212121] text-white' : 'bg-gray-200'
                      }`}
                    onClick={() => {
                      setSizeIndex(ind);
                      setSelectedSize(size);
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
              <Button
                className={`w-fitt inline-flex space-x-2 bg-[#212121] px-8 py-4 focus-visible:bg-[#212121] ${!bDisabled
                  ? 'cursor-pointer'
                  : 'cursor-not-allowed disabled:opacity-50'
                  }`}
                onClick={addToCart}
                disabled={bDisabled}
              >
                <ShoppingCart size={20} />
                <span className='whitespace-nowrap text-white'>Add to Cart</span>
              </Button>
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
