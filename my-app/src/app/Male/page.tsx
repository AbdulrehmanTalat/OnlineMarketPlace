'use client'
import React, { useEffect, useState } from 'react';
import { client } from '../../lib/sanityClient';
import { IProduct } from '../../lib/IProduct';
import AllProducts from '../common/allproducts';
import { Skeleton } from '@/components/ui/skeleton';

export default function Kid() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const res = await client.fetch(`*[_type=='product' && gender == 'Male']`);
        setProducts(res);
      } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
      }
    };

    fetchProductData();
  }, []);
  if (!products) {
    return (<div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>);
  }
  return (
    <div className="container mx-auto flex flex-wrap justify-center items-center py-12">
      {products?.map((prod, index) => (
        <div key={prod._id} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
          <AllProducts allproducts={prod} />
        </div>
      ))}
    </div>
  );
}
