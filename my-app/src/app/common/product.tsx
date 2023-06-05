'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { client } from "../../lib/sanityClient";
import { urlForImage } from '../../../sanity/lib/image';
import { IProduct } from '@/lib/IProduct';

export const getProducts = async () => {
  try {
    const res = await client.fetch(`*[_type=='product'][0..2]`);
    return res;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

const Product: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const fetchedProducts: IProduct[] = await getProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProductData();
  }, []);
  return (
    <section className="mt-16">
      <div className="subtitle text-center">
        <span className="text-blue-500 uppercase">Products</span>
        <h2 className="text-2xl md:text-3xl font-bold">Check What We Have</h2>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-6rem py-8 px-1">
          {products.map((item) => (
            <div className="w-full">
              <div className="mx-11 transform hover:scale-110">
                <Link href="#">
                  <div className="product-card">
                    <div className="product-detail-container">
                      <div className="product-images">
                        <div className="big-image-container">
                          {item.images && (
                            <Image
                              src={urlForImage(item.images).url()}
                              width={380}
                              height={400}
                              className="product-image"
                              alt="Product Image"
                            />
                          )}
                        </div>
                        <div className="small-images-container">
                          {/* Render small images */}
                        </div>
                      </div>
                      <div className="product-details">
                        <h3 className="name-and-category">
                          <span>{item.title}</span>
                        </h3>
                        <div className="size">
                          <p className="price">$ {item.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;