'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { RiSearchLine, RiShoppingCartLine, RiMenuLine, RiCloseLine } from 'react-icons/ri';
import logo from '../../../public/images/Logo.webp';

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <div className="cursor-pointer" onClick={() => setToggleMenu(false)}>
            <Image src={logo} width={140} height={25} alt="logo" />
          </div>

          <div className="hidden md:flex space-x-4 flex-1 justify-center items-center">
            <div className="cursor-pointer" onClick={() => setToggleMenu(false)}>
              <span className="text-gray-700 hover:text-gray-900">Female</span>
            </div>
            <div className="cursor-pointer" onClick={() => setToggleMenu(false)}>
              <span className="text-gray-700 hover:text-gray-900">Male</span>
            </div>
            <div className="cursor-pointer" onClick={() => setToggleMenu(false)}>
              <span className="text-gray-700 hover:text-gray-900">Kids</span>
            </div>
            <div className="cursor-pointer" onClick={() => setToggleMenu(false)}>
              <span className="text-gray-700 hover:text-gray-900">All Products</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="What you're looking for"
                className="pl-8 py-1 pr-3 text-gray-700 border-b border-gray-300 focus:outline-none focus:border-gray-500 w-64"
              />
              <RiSearchLine className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-700" />
            </div>
            <div className="relative flex items-center">
              <div className="absolute flex items-center justify-center top-[-20px] right-[-10px] w-6 h-6 bg-red-500 rounded-full text-white text-xs">
                0
              </div>
              {showCart ? (
                <div className="flex items-center space-x-1 focus:outline-none cursor-pointer" onClick={() => setShowCart(false)}>
                  <RiShoppingCartLine size={22} className="text-gray-700" />
                </div>
              ) : (
                <button className="flex items-center space-x-1 focus:outline-none" onClick={() => setShowCart(true)}>
                  <RiShoppingCartLine size={22} className="text-gray-700" />
                </button>
              )}
            </div>
          </div>

          <div className="md:hidden">
            {toggleMenu ? (
              <RiCloseLine
                color="black"
                fontSize={27}
                className="cursor-pointer"
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenuLine
                color="black"
                fontSize={27}
                className="cursor-pointer"
                onClick={() => setToggleMenu(true)}
              />
            )}
          </div>
        </div>

        {toggleMenu && (
          <div className="md:hidden flex flex-col items-center justify-center bg-gray-100 py-4">
            <div className="relative flex items-center">
              <div className="absolute flex items-center justify-center top-[-20px] right-[-10px] w-6 h-6 bg-red-500 rounded-full text-white text-xs">
                0
              </div>
              {showCart ? (
                <div className="flex items-center space-x-1 focus:outline-none cursor-pointer" onClick={() => setShowCart(false)}>
                  <RiShoppingCartLine size={22} className="text-gray-700" />
                </div>
              ) : (
                <button className="flex items-center space-x-1 focus:outline-none" onClick={() => setShowCart(true)}>
                  <RiShoppingCartLine size={22} className="text-gray-700" />
                </button>
              )}
            </div>
            <div className="space-y-4 flex flex-col items-center">
              <div className="cursor-pointer" onClick={() => setToggleMenu(false)}>
                <span className="text-gray-700 hover:text-gray-900">Female</span>
              </div>
              <div className="cursor-pointer" onClick={() => setToggleMenu(false)}>
                <span className="text-gray-700 hover:text-gray-900">Male</span>
              </div>
              <div className="cursor-pointer" onClick={() => setToggleMenu(false)}>
                <span className="text-gray-700 hover:text-gray-900">Kids</span>
              </div>
              <div className="cursor-pointer" onClick={() => setToggleMenu(false)}>
                <span className="text-gray-700 hover:text-gray-900">All Products</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
