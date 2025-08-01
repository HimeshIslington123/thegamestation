"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { Volume2, VolumeX } from "lucide-react"; // ✅ Icons for mute/unmute

// Helper for animated number
const useAnimatedCounter = (end, shouldStart) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

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
  }, [shouldStart]);

  return display;
};

const Page = () => {
  const counterRef = useRef(null);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  const isInView = useInView(counterRef, { once: true });

  const happyUsers = useAnimatedCounter(1000, isInView);
  const outlets = useAnimatedCounter(2, isInView);
  const reviews = useAnimatedCounter(5, isInView);

  return (
    <>
      <Navbar />
      <div className="bg-[#0a0a0a] px-6 md:px-[100px] text-amber-50 flex flex-col items-center justify-center gap-10 py-10">
        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-fit mx-auto"
        >
          <video
            ref={videoRef}
            src="/videohome.mp4"
            autoPlay
            muted={isMuted}
            loop
            playsInline
            className="w-[300px] h-[400px] md:w-[400px] md:h-[600px] mx-auto rounded-[10px] object-cover"
          />

          {/* Sound Button */}
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full backdrop-blur-md"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-[25px] md:text-[40px] font-light text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We don’t just create spaces — we build culture.
        </motion.h1>

        {/* Counters */}
        <motion.div
          ref={counterRef}
          className="flex flex-wrap  md:flex-row justify-center items-center gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col justify-center items-center bg-[#1a1a1a] text-white px-2 py-2 md:px-6 md:py-4  rounded-xl shadow-md w-[150px]">
            <div className="text-2xl font-bold">{happyUsers}+</div>
            <div className="text-sm mt-1 text-gray-300">Happy Users</div>
          </div>
          <div className="flex flex-col justify-center items-center bg-[#1a1a1a] text-white px-2 py-2 md:px-6 md:py-4  rounded-xl shadow-md w-[150px]">
            <div className="text-2xl font-bold">{outlets}</div>
            <div className="text-sm mt-1 text-gray-300">Outlets</div>
          </div>
          <div className="flex flex-col justify-center items-center bg-[#1a1a1a] text-white px-2 py-2 md:px-4 md:py-4  rounded-xl shadow-md w-[150px]">
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
          <span className="text-[26px] md:text-[30px] font-semibold text-white">
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
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0782885879908!2d85.30602487580781!3d27.714868976178277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19000c2c6f43%3A0xc875900a43bb3ac8!2sGame%20Station%20by%20Vape%20Station!5e0!3m2!1sen!2snp!4v1754024992747!5m2!1sen!2snp"
className="w-[320px] h-[300px] md:w-[600px] md:h-[400px]"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
      </div>
   
      <Footer />
    </>
  );
};

export default Page;
