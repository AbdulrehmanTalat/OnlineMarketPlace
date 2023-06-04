import React from 'react';
import Image from 'next/image';
import event1 from '../../../public/images/event1.png';
import event2 from '../../../public/images/event2.png';
import event3 from '../../../public/images/event3.png';

const EventsBanner = () => {
    return (
        <div className="container mx-auto">
            <section className="event-container px-4 py-8 md:py-12">
                <div className="subtitle text-center">
                    <span className="text-blue-500 uppercase">PROMOTIONS</span>
                    <h2 className="text-2xl md:text-3xl font-bold">Our Promotions Events</h2>
                </div>

                <div className="event-banner mt-8 md:mt-12 flex flex-col md:flex-row">
                    <div className="event-banner-left md:w-1/2 md:pr-4 flex flex-col">
                        <div className="event-card bg-gray-200 rounded-lg shadow-md p-4 mb-4 md:mb-8 flex flex-col-reverse md:flex-row items-center h-full">
                            <div className="w-8/12 md:pr-4 order-2 md:order-1">
                                <div className="content text-center md:text-left">
                                    <h3 className="text-xl md:text-2xl font-bold">
                                        GET UP TO <span className="text-blue-600">60%</span>
                                    </h3>
                                    <p className="text-gray-500">For the summer season</p>
                                </div>
                            </div>
                            <div className="w-4/12 order-1 md:order-2">
                                <Image src={event1} alt="event" />
                            </div>
                        </div>
                        <div className="event-card bg-black text-white rounded-lg shadow-md p-4 text-center h-full flex flex-col justify-center items-center">
                            <h3 className="text-xl md:text-2xl font-bold">GET 30% Off</h3>
                            <p className="text-gray-500">USE PROMO CODE</p>
                            <button className="bg-gray-500 text-white rounded-md py-2 px-4 mt-2">
                                DINEWEEKENDSALE
                            </button>
                        </div>

                    </div>


                    <div className="event-banner-right md:w-1/2 md:pl-4 flex-grow grid md:grid-cols-2 gap-4">
                        <div className="event-banner-right-1 bg-[#efe1c7] rounded-lg shadow-md p-4">
                            <div className="details">
                                <p className="text-lg md:text-xl font-bold">Flex Sweatshirt</p>
                                <div className="price flex justify-between">
                                    <span className="text-gray-500 line-through">$100.00</span>
                                    <span className="text-blue-600">$75.00</span>
                                </div>
                            </div>
                            <Image src={event2} alt="event" />
                        </div>

                        <div className="event-banner-right-2 bg-[#d7d7d9] rounded-lg shadow-md p-4">
                            <div className="details">
                                <p className="text-lg md:text-xl font-bold">Flex Push Button Bomber</p>
                                <div className="price flex justify-between">
                                    <span className="text-gray-500 line-through">$225.00</span>
                                    <span className="text-blue-600">$190.00</span>
                                </div>
                            </div>
                            <Image src={event3} alt="event" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventsBanner;
