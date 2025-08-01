"use client";
import Navbar from '@/components/Navbar';
import React from 'react';
import { motion, easeInOut, easeIn } from 'framer-motion';
import Footer from '@/components/Footer';

const consoles = [
  {
    name: 'PS4',
    price: 'Rs. 250 / hour',
    image: 'ps4.png',
    features: [
      '2 Controllers',
      'Popular Games Included',
      'Comfortable Seating',
      'Online Multiplayer',
      'Surround Sound',
    ],
  },
  {
    name: 'PS5',
    price: 'Rs. 350 / hour',
    image: 'ps5.png',
    features: [
      '2 DualSense Controllers',
      'Fast SSD Loading',
      'Latest Game Titles',
      'Haptic Feedback',
      'Online Access',
    ],
  },
  {
    name: 'Logitech G29',
    price: 'Rs. 300 / hour',
    image: 'car.png',
    features: [
      'Racing Wheel Setup',
      'Pedals + Gear Shifter',
      'Racing Simulation Games',
      'Comfortable Seat Support',
      'Manual & Drift Modes',
    ],
  },
];

const page = () => {
  return (
    <div>
      <Navbar />

      <div className="bg-[#0a0a0a] px-4 py-5 text-white min-h-screen">
        <h1 className="text-4xl font-bold mb-10 text-center text-white">Our Consoles</h1>

        <div className="flex flex-wrap justify-center gap-10 pointer">
          {consoles.map((console, idx) => (
            <motion.div
              key={idx}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay:idx*0.2}}

  viewport={{ once: true, amount: 0.3 }}
              className="p-[2px] rounded-2xl bg-gradient-to-r from-[#242880] via-[#8d7dca] to-[#212121] shadow-xl w-[300px] md:w-[350px]"
            >
              <div className="bg-[#0a0a0a] rounded-2xl flex flex-col gap-4 justify-center items-center px-5 py-6 h-full">
                {/* Image */}
                <img className="w-[65%] h-[150px] object-contain" src={console.image} alt={console.name} />

                {/* Title & Price */}
                <div className="text-center">
                  <h2 className="text-[26px] font-extrabold text-[#e2e2ff]">{console.name}</h2>
                  <p className="text-[30px] font-semibold text-[#c9c9ff] mt-1">{console.price}</p>
                </div>

                {/* Features */}
                <ul className="mt-4 space-y-2 w-full px-2">
                  {console.features.map((feature, i) => (
                    <li
                      key={i}
                      className="bg-[#1c1c2b] text-white text-[15px] px-3 py-2 rounded-md shadow-sm text-center"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Button */}
               <a
  className="hidden sm:flex gap-2 cursor-pointer px-4 py-3 dark:hover:bg-black bg-black hover:bg-white hover:text-black text-white border-black dark:hover:text-white transition-all border-2 dark:border-white dark:bg-white dark:text-black rounded-full font-semibold"
  href="/Booknow"
>
  Book Now
</a>

              </div>
            </motion.div>
          ))}
         

        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default page;
