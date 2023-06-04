import React from 'react';
import Image from 'next/image';
import logo from '../../../public/images/Logo.webp';
import { GrFacebookOption, GrTwitter, GrLinkedinOption } from 'react-icons/gr';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-6 lg:mb-0">
            <div className="flex items-start mb-4">
              <Image src={logo} width={180} height={30} alt="logo" />
            </div>
            <p className="text-sm text-gray-700">
              Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
            </p>
            <div className="flex space-x-4 mt-4">
              <div><GrTwitter size={20} /></div>
              <div><GrFacebookOption size={20} /></div>
              <div><GrLinkedinOption size={20} /></div>
            </div>
          </div>

          <div className="mb-6 lg:mb-0">
            <h3 className="text-gray-800 font-semibold mb-3">Company</h3>
            <ul className="text-sm text-gray-700">
              <li>About</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>How it Works</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="mb-6 lg:mb-0">
            <h3 className="text-gray-800 font-semibold mb-3">Support</h3>
            <ul className="text-sm text-gray-700">
              <li>Support Carrer</li>
              <li>24h Service</li>
              <li>Quick Chat</li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-800 font-semibold mb-3">Contact</h3>
            <ul className="text-sm text-gray-700">
              <li>Whatsapp</li>
              <li>Support 24h</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-300 my-8" />

        <div className="flex flex-col md:flex-row justify-between">
          <p className="text-sm text-gray-700 mb-4 md:mb-0">
            Copyright © 2022 E Store
          </p>
          <p className="text-sm text-gray-700 mb-4 md:mb-0">
            Design by. <span className="font-semibold">ART</span>
          </p>
          <p className="text-sm text-gray-700">
            Code by. <span className="font-semibold">AbdulrehmanTalat on GitHub</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
