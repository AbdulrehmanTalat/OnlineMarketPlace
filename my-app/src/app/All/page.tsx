'use client'
import React, { useEffect, useState } from 'react';
import { client } from "../../lib/sanityClient";
import { IProduct } from '../../lib/IProduct';
import AllProducts from '../common/allproducts';

export const GetProducts = async () => {
  try {
    const res = await client.fetch(`*[_type=='product']`);
    return res;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

const All: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const fetchedProducts: IProduct[] = await GetProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProductData();
  }, []);
  return (
    <div className="container mx-auto flex flex-wrap justify-center items-center py-12">
      {products?.map((prod, index) => (
        <div key={prod._id} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
          <AllProducts allproducts={prod} />
        </div>
      ))}
    </div>
  );
};

export default All;