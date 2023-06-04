import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import img1 from '../../../public/images/product1.png';
import img2 from '../../../public/images/product2.png';
import img3 from '../../../public/images/product3.png';


const Product = () => {
  return (
    <section className="mt-16">
    <div className="subtitle text-center">
      <span className="text-blue-500 uppercase">Products</span>
      <h2 className="text-2xl md:text-3xl font-bold">Check What We Have</h2>
    </div>
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-6rem py-8 px-1">
        <div className="w-full">
          <div className="mx-11 transform hover:scale-110">
            <Link href="#">
              <div className="product-card">
                <div className="product-detail-container">
                  <div className="product-images">
                    <div className="big-image-container">
                      <Image src={img1} width={380} height={400} className="product-image" alt="Product Image" />
                    </div>
                    <div className="small-images-container">
                      {/* Render small images */}
                    </div>
                  </div>
                  <div className="product-details">
                    <h3 className="name-and-category">
                      <span>Brushed Raglan Sweatshirt</span>
                    </h3>
                    <div className="size">
                      <p className="price">$195</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full">
          <div className="mx-11 transform hover:scale-110">
            <Link href="#">
              <div className="product-card">
                <div className="product-detail-container">
                  <div className="product-images">
                    <div className="big-image-container">
                      <Image src={img2} width={380} height={400} className="product-image" alt="Product Image" />
                    </div>
                    <div className="small-images-container">
                      {/* Render small images */}
                    </div>
                  </div>
                  <div className="product-details">
                    <h3 className="name-and-category">
                      <span>Cameryn Sash Tie Dress</span>
                    </h3>
                    <div className="size">
                      <p className="price">$545</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full">
          <div className="mx-11 transform hover:scale-110">
            <Link href="#">
              <div className="product-card">
                <div className="product-detail-container">
                  <div className="product-images">
                    <div className="big-image-container">
                      <Image src={img3} width={380} height={400} className="product-image" alt="Product Image" />
                    </div>
                    <div className="small-images-container">
                      {/* Render small images */}
                    </div>
                  </div>
                  <div className="product-details">
                    <h3 className="name-and-category">
                      <span>Flex Sweatpants</span>
                    </h3>
                    <div className="size">
                      <p className="price">$175</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Product;