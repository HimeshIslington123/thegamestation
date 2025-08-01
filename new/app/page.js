'use client';

import Footer from '@/components/Footer';
import Loyalty from '@/components/Loyalty';
import Navbar from '@/components/Navbar';
import Parzel from '@/components/parzel';
import Slider from '@/components/Slider';
import Locations from '@/components/Typescrpit';
import React from 'react';
import { motion } from 'framer-motion';

const page = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Parzel />

      {/* What We Offer Section */}
      <section
        className="py-12 px-4 sm:px-6 md:px-20 bg-[#0a0a0a] text-white"
      
      >
        <motion.p
          className="text-[28px] sm:text-[35px] md:text-[50px] mb-10 text-center font-bold leading-[1.1] bg-gradient-to-r from-[#242880] via-[#8d7dca] to-[#212121] text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          What We Offer
        </motion.p>

        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
          {[
            { label: 'Free Parking' },
            { label: 'High-Speed Wi-Fi' },
            { label: 'Air Conditioning' },
            { label: 'Premium Consoles' },
            { label: 'Comfortable Seating' },
            { label: 'Power Backup' },
            { label: 'HD Displays' },
            { label: 'Snacks & Beverages' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#111] cursor-pointer flex items-center justify-center border border-[#2c2c2c] rounded-xl p-4 sm:p-5 md:p-6 hover:scale-105 transition-all duration-300 shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <p className="text-[15px] sm:text-[17px] md:text-[20px] font-semibold cursor-pointer">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

     
        <Locations />
     

        <Loyalty />
     

      <Footer />
    </>
  );
};

export default page;
