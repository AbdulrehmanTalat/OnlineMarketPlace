import Image from 'next/image';
import Link from 'next/link';
import img from '../../../public/images/feature.png';

const FeaturesBanner = () => {
    return (
        <section className="mt-16">
        <div className="container mx-auto flex flex-col md:flex-row justify-end items-center py-12">
          <div className="title py-8 px-8 bg-gradient-to-b from-white to-[#FBFCFF] text-right w-[65%]">
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-6xl leading-10 tracking-wide text-gray-800">
              Unique and Authentic Vintage Designer Jewellery
            </h1>
          </div>
        </div>
  
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-12">
          <div className="content grid grid-cols-1 md:grid-cols-2 gap-x-8 py-8 px-8">
            <div className="left relative flex items-center">
              <div className="feature-background absolute font-extrabold -z-40 text-6xl md:text-7xl lg:text-9xl leading-14 md:leading-20 text-gray-800 opacity-7">
                <span className="text-[#ECEDEF]">Different from others</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-8">
                <div>
                  <h3 className="font-semibold text-xl md:text-xl lg:text-xl leading-8 md:leading-10 tracking-wide text-gray-800 mb-4">
                    Using Good Quality Materials
                  </h3>
                  <p className="font-light text-xl md:text-xl lg:text-xl leading-7 md:leading-8 tracking-wider text-gray-800 mb-4">
                    Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl md:text-xl lg:text-xl leading-8 md:leading-10 tracking-wide text-gray-800 mb-4">
                    100% Handmade Products
                  </h3>
                  <p className="font-light text-xl md:text-xl lg:text-xl leading-7 md:leading-8 tracking-wider text-gray-800 mb-4">
                    Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl md:text-xl lg:text-xl leading-8 md:leading-10 tracking-wide text-gray-800 mb-4">
                    Modern Fashion Design
                  </h3>
                  <p className="font-light text-xl md:text-xl lg:text-xl leading-7 md:leading-8 tracking-wider text-gray-800 mb-4">
                    Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl md:text-xl lg:text-xl leading-8 md:leading-10 tracking-wide text-gray-800 mb-4">
                    Discount for Bulk Orders
                  </h3>
                  <p className="font-light text-xl md:text-xl lg:text-xl leading-7 md:leading-8 tracking-wider text-gray-800 mb-4">
                    Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
  
            <div className="right flex flex-col md:flex-row justify-center items-center gap-10 ml-8">
              <div className="custom-image-container">
                <Image className="custom-image" src={img} width={300} height={350} alt="img" />
              </div>
              <div className="flex flex-col gap-8">
                <p className="font-light text-xl md:text-xl lg:text-xl leading-8 md:leading-10 text-justify text-gray-800">
                  This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
                </p>
                <Link href="/products">
                  <button className="btn text-base md:text-xl lg:text-xl w-50% bg-black text-white py-2 px-4">
                    See All Products
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default FeaturesBanner;
