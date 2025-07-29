"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

// Helper for animated number
const useAnimatedCounter = (end) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, end, {
      duration: 2,
      ease: "easeOut",
    });

    const unsubscribe = rounded.on("change", (v) => {
      setDisplay(v);
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, rounded, end]);

  return display;
};

const Page = () => {
  const happyUsers = useAnimatedCounter(1000);
  const outlets = useAnimatedCounter(2);
  const reviews = useAnimatedCounter(5);

  return (
    <>
      <Navbar />
      <div className="bg-[#0a0a0a] px-6 md:px-[100px] text-amber-50 flex flex-col gap-10 py-10">

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/home_3.jpeg"
            alt="Gaming Lounge Overview"
            width={1890}
            height={1890}
            className="w-[300px] h-[400px] md:w-[400px] md:h-[600px] mx-auto rounded-xl"
            style={{ objectFit: "cover" }}
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-[32px] md:text-[40px] font-light text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We don’t just create spaces — we build culture.
        </motion.h1>

        {/* Counters */}
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Happy Users */}
          <div className="flex flex-col justify-center items-center bg-[#1a1a1a] text-white px-6 py-4 rounded-xl shadow-md w-[200px]">
            <div className="text-2xl font-bold">{happyUsers}+</div>
            <div className="text-sm mt-1 text-gray-300">Happy Users</div>
          </div>

          {/* Outlets */}
          <div className="flex flex-col justify-center items-center bg-[#1a1a1a] text-white px-6 py-4 rounded-xl shadow-md w-[200px]">
            <div className="text-2xl font-bold">{outlets}</div>
            <div className="text-sm mt-1 text-gray-300">Outlets</div>
          </div>

          {/* Google Reviews */}
          <div className="flex flex-col justify-center items-center bg-[#1a1a1a] text-white px-6 py-4 rounded-xl shadow-md w-[200px]">
            <div className="text-2xl font-bold">{reviews}</div>
            <div className="text-sm mt-1 text-gray-300">Google Reviews</div>
          </div>
        </motion.div>

        {/* Paragraph Content */}
        <motion.p
          className="font-extralight text-[18px] md:text-[20px] leading-relaxed text-justify max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <span className="text-[26px] md:text-[30px] font-semibold  text-white">
            The Game Station
          </span>{" "}
          is where competitive energy, modern aesthetics, and digital lifestyle
          collide. Designed for today’s generation of gamers, we provide a
          premium space to play, relax, and connect — from console battles to
          casual sessions on the couch. But this is only part of the story.
          <br />
         
         
    
          <br />
          Before the controllers, we pioneered the vape scene — launching one
          of the first vape businesses in the region. What started with clouds
          and flavor became a community. And now, with two unique outlets,
          we’ve expanded our vision to fuse gaming and chill into something
          much more than a hangout — it’s a lifestyle zone.
        </motion.p>
      </div>
    </>
  );
};

export default Page;
