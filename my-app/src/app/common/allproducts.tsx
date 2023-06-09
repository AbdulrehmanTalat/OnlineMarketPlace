import React from 'react';
import Link from 'next/link';
import { Image } from 'sanity';
import { urlForImage } from '../../../sanity/lib/image';

interface AllProductsProps {
  allproducts: {
    gender: string;
    use: string;
    _rev: string;
    title: string;
    type: string;
    _createdAt: string;
    images: Image;
    _type: string;
    size: string[];
    price: number;
    details: string;
    _id: string;
    _updatedAt: string;
  };
}

const AllProducts: React.FC<AllProductsProps> = ({ allproducts }) => {
  return (
    <div>
      <Link href={{
        pathname: 'ProductInformation',
        query: { productInfo: `${JSON.stringify(allproducts)}` },
      }}>
        <div className='Allproduct-card'>
          <img
            src={urlForImage(allproducts.images).url()}
            width={250}
            height={270}
            alt={allproducts.title}
          />
          <p className='Allproduct-name'>{allproducts.title}</p>
          <p className='Allproduct-tags'>{allproducts.type}</p>
          <p className='Allproduct-price'>${allproducts.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default AllProducts;