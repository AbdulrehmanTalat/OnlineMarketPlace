import React from 'react';
import Image from 'next/image';
import { CgShoppingCart } from 'react-icons/cg';
import headerImg from '../../../public/images/header.png';
import featured1 from '../../../public/images/Featured1.png';
import featured2 from '../../../public/images/Featured2.png';
import featured3 from '../../../public/images/Featured3.png';
import featured4 from '../../../public/images/Featured4.png';
import Link from 'next/link';

const HeroBanner: React.FC = () => {
  return (
    <header className="header bg-white text-black">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-12">
        <div className="header-left-side flex flex-col md:justify-center md:w-1/2">
          <div className="header-content text-center md:text-left">
            <div className="sale-banner bg-blue-100 px-4 py-1 inline-block">
              <span className="text-xl font-bold uppercase text-blue-500">Sale 70%</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-4">An Industrial Take on Streetwear</h1>
            <p className="mt-4">Anyone can beat you, but no one can beat your outfit as long as you wear Dine outfits.</p>
            <div className="flex justify-center md:justify-start">
              <Link href="/products">
                <button className="btn mt-6 flex items-center space-x-1 bg-black text-white px-4 py-2">
                  <CgShoppingCart size={26} />
                  <span>Start Shopping</span>
                </button>
              </Link>
            </div>
          </div>

          <div className="header-featured flex mt-12 space-x-4 justify-center md:justify-start">
            <div className="w-20 sm:w-24 md:w-28 h-8 sm:h-10">
              <Image src={featured1} layout="responsive" width={100} height={35} alt="img" />
            </div>
            <div className="w-20 sm:w-24 md:w-28 h-8 sm:h-10">
              <Image src={featured2} layout="responsive" width={100} height={35} alt="img" />
            </div>
            <div className="w-20 sm:w-24 md:w-28 h-8 sm:h-10">
              <Image src={featured3} layout="responsive" width={100} height={35} alt="img" />
            </div>
            <div className="w-20 sm:w-24 md:w-28 h-8 sm:h-10">
              <Image src={featured4} layout="responsive" width={100} height={35} alt="img" />
            </div>
          </div>
        </div>

        <div className="header-right-side flex justify-center md:justify-end md:w-1/2">
          <div className="header-circle relative bg-[#ffece3] rounded-full">
            <div className="header-img rounded-full overflow-hidden w-72 h-72 md:w-96 md:h-96">
              <Image src={headerImg} layout="responsive" width={650} height={650} alt="header image" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroBanner;
