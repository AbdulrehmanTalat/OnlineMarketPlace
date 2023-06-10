'use client'
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { RiSearchLine, RiShoppingCartLine, RiMenuLine, RiCloseLine } from 'react-icons/ri';
import logo from '../../../public/images/Logo.webp';
import Link from 'next/link';
import { getUserIdentifier, setUserIdentifier } from '@/lib/cookie';
import { v4 as uuidv4 } from 'uuid';
import { DineMarketContext } from '../../app/context/DineMarketContext';
import { usePathname } from 'next/navigation';
import { useUser } from 'sanity';
const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [loading, setLoading] = useState(true);
  // to reftch from db
  const [reFetch, setReFetch] = useState(false);

  const dmContext = useContext(DineMarketContext);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const pathname = usePathname()

  async function getNumCartItems(userId: string) {
    fetch(`${baseUrl}api/numCartItems?userId=${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${userId}`,
      },
      cache: 'no-store',
    })
      .then((response) => response.json())
      .then((response) => {
        if (response[0].numItems) {
          if (typeof dmContext?.setCartItems === 'function') {
            dmContext?.setCartItems(response[0].numItems);
          }
        } else {
          if (typeof dmContext?.setCartItems === 'function') {
            dmContext?.setCartItems(0);
          }
        }
      })
      .catch(() => {
        if (typeof dmContext?.setCartItems === 'function') {
          dmContext?.setCartItems(0);
        }
      })
      .finally(() => {
        setLoading(false);
        if (typeof dmContext?.setNbFetchCompleted === 'function') {
          dmContext.setNbFetchCompleted(true);
        }
      });
  }

  useEffect(() => {
    const identifier = getUserIdentifier();
    if (!identifier) {
      const newIdentifier = uuidv4();
      setUserIdentifier(newIdentifier);
      setReFetch(!reFetch);
    } else {
      getNumCartItems(identifier);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reFetch]);
  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <div className="cursor-pointer" onClick={() => setToggleMenu(false)}>
            <Image src={logo} width={140} height={25} alt="logo" />
          </div>

          <div className="hidden md:flex space-x-4 flex-1 justify-center items-center">
            <div className="cursor-pointer" onClick={() => setToggleMenu(false)}>
              <Link href={'Female'}>
                <div className="text-gray-700 hover:text-gray-900">Female</div>
              </Link>
            </div>
            <div className="cursor-pointer" onClick={() => setToggleMenu(false)}>
              <Link href={'Male'}>
                <div className="text-gray-700 hover:text-gray-900">Male</div>
              </Link>
            </div>
            <div className="cursor-pointer" onClick={() => setToggleMenu(false)}>
              <Link href={'Kids'}>
                <div className="text-gray-700 hover:text-gray-900">Kids</div>
              </Link>
            </div>
            <div className="cursor-pointer" onClick={() => setToggleMenu(false)}>
              <Link href={'All'}>
                <div className="text-gray-700 hover:text-gray-900">All Products</div>
              </Link>
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
                {dmContext?.cartItems}
              </div>
              {showCart ? (
                <div className="flex items-center space-x-1 focus:outline-none cursor-pointer" onClick={() => setShowCart(false)}>
                  <Link href={'CartPage'}>
                    <RiShoppingCartLine size={22} className="text-gray-700" />
                  </Link>
                </div>
              ) : (
                <button className="flex items-center space-x-1 focus:outline-none" onClick={() => setShowCart(true)}>
                  <Link href={'CartPage'}>
                    <RiShoppingCartLine size={22} className="text-gray-700" />
                  </Link>
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
                {dmContext?.cartItems}
              </div>
              {showCart ? (
                <div className="flex items-center space-x-1 focus:outline-none cursor-pointer" onClick={() => setShowCart(false)}>
                  <Link href={'CartPage'}><RiShoppingCartLine size={22} className="text-gray-700" /></Link>
                </div>
              ) : (
                <button className="flex items-center space-x-1 focus:outline-none" onClick={() => setShowCart(true)}>
                  <Link href={'CartPage'}><RiShoppingCartLine size={22} className="text-gray-700" /></Link>
                </button>
              )}
            </div>
            <div className="space-y-4 flex flex-col items-center">
              <Link href={'Female'}>
                <div className="text-gray-700 hover:text-gray-900">Female</div>
              </Link>
              <Link href={'Male'}>
                <div className="text-gray-700 hover:text-gray-900">Male</div>
              </Link>
              <Link href={'Kids'}>
                <div className="text-gray-700 hover:text-gray-900">Kids</div>
              </Link>
              <div className="cursor-pointer" onClick={() => setToggleMenu(false)}>
                <Link href={'All'}>
                  <div className="text-gray-700 hover:text-gray-900">All Products</div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
