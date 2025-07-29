"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";


const Locations = () => {
  const ref=useRef(null);
  const{scrollYProgress}=useScroll({
    target:ref,
    offset:["40% end","end start"]
  })
  const y=useTransform(scrollYProgress,[0,1],[0,100])
   const y1=useTransform(scrollYProgress,[0,1],[0,-100])
  return (
    <div className="bg-[#0a0a0a] px-5 py-10 flex flex-col items-center overflow-hidden">
      {/* Heading */}
      <div
        className="text-[20px] md:text-[30px] text-center font-light font-mono text-white leading-tight mb-10"
        style={{
          textShadow:
            "0px 0px 20px rgba(240,242,255,0.7), 0px 0px 40px rgba(255,0,0,0.5)",
        }}
      >
        Game, Chill, and Play at Our Station
      </div>

      {/* Image Row with 10px gap */}
      <div className="flex flex-col md:flex-row items-center gap-[50px]">
        {/* Image 1 */}
        <motion.div ref={ref} className="hidden lg:block "
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.9,delay:0.5 }}
           viewport={{once:true}}
           style={{y}}
        >
          <Image
            src="/home_3.jpeg"
            alt="Gaming Lounge Overview"
            width={1890}
            height={1890}
            className="w-[300px] h-[400px] md:w-[300px] md:h-[400px]  "
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        </motion.div>

        {/* Image 2 */}
        <motion.div className="z-10"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.9, delay: 0.5 }}
           viewport={{once:true}}
        >
          <Image
            src="/home_4.jpeg"
            alt="Gaming Lounge Overview"
            width={500}
            height={500}
           
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        </motion.div>

        {/* Image 3 */}
        <motion.div ref={ref} className="hidden lg:block "
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          viewport={{once:true}}
          style={{y:y1}}
        >
          <Image
            src="/home2.jpg"
            alt="Gaming Lounge Overview"
            width={1890}
            height={1890}
            className="w-[300px] h-[400px]"
            style={{ objectFit: "cover", borderRadius: "10px"  }}
          />
        </motion.div>
      </div>
      
      <div className="flex gap-[10px] md:gap-[20px] md;mt-[20px]">
 <button className='relative inline-flex h-12 md:h-16 mt-[20px] overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
  <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a2aeff_0%,#3749be_50%,#a2aeff_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
  
  <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full dark:bg-[#070e41] bg-[#ffffff] px-8 py-1 lg:px-12 lg:py-2 text-sm lg:text-base font-medium dark:text-gray-50 text-black backdrop-blur-3xl'>
    Book Now
  </span>
</button>

<button className='relative inline-flex h-12 md:h-16 mt-[20px] overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
  <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a2aeff_0%,#3749be_50%,#a2aeff_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
  
  <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full dark:bg-[#070e41] bg-[#ffffff] px-8 py-1 lg:px-12 lg:py-2 text-sm lg:text-base font-medium dark:text-gray-50 text-black backdrop-blur-3xl'>
    Contact Us
  </span>
</button>


</div>
     
      
    </div>
  );
};

export default Locations;
