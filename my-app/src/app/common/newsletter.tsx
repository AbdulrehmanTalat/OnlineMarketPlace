'use client'
import React, { FormEvent } from 'react';

export default function Newsletter () {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <section className="newsletter relative flex flex-col items-center justify-center leading-4 mt-16">
      <div className="newsletter-background absolute inset-0 flex items-center justify-center">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-4 text-gray-100 font-bold relative -z-40">
          Newsletter
        </h2>
      </div>
      <h1 className="text-center font-bold text-4x1 sm:text-4xl md:text-4xl lg:text-4xl leading-10">
        Subscribe to Our Newsletter
      </h1>
      <p className="text-center mb-4 leading-6">Get the latest information and promo offers directly</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-screen-lg">
        <input
          type="email"
          placeholder="Input email address"
          className="p-2 border border-gray-300 mb-2 sm:mr-2"
        />
        <button
          type="submit"
          className="bg-black hover:bg-gray-700 text-white py-2 px-4 rounded"
        >
          Get Started
        </button>
      </form>
    </section>
  );
};

