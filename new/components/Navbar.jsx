"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black min-h-[14vh]   px-5 lg:px-8 xl:px-[8%] text-white py-4 shadow-md z-50 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold hover:text-orange-300 transition-colors duration-200"
        >
         <img src="/vape1.png" className="w-[60px] md:w-[90px] object-contain" alt="Vape Logo" width={80} height={80} />

        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-lg font-mono font-medium items-center">
          <li>
            <Link
              href="/"
              className="text-white hover:text-orange-300 hover:scale-105 transition-transform duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/price"
              className="text-white hover:text-orange-300 hover:scale-105 transition-transform duration-200"
            >
              Price
            </Link>
          </li>
          <li>
            <Link
              href="/aboutus"
              className="text-white hover:text-orange-300 hover:rotate-6 transition-transform duration-200"
            >
              About us
            </Link>
          </li>

           <li>
            <Link
              href="/Contactus"
              className="text-white hover:text-orange-300 hover:rotate-6 transition-transform duration-200"
            >
              Contact us
            </Link>
          </li>
        </ul>

<a
  className="hidden sm:flex gap-2 cursor-pointer px-4 py-3 dark:hover:bg-black bg-black hover:bg-white hover:text-black text-white border-black dark:hover:text-white transition-all border-2 dark:border-white dark:bg-white dark:text-black rounded-full font-semibold"
  href="/Booknow"
>
  Book Now
</a>





        {/* Hamburger Icon (Mobile only) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden px-4 py-4 mt-3 z-50 bg-black"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
           
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col font-mono text-lg font-medium gap-4">
              <li>
                <Link href="/" className="text-white no-underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/price" className="text-white no-underline">
                  Price
                </Link>
              </li>
              <li>
                <Link href="/aboutus" className="text-white no-underline">
                  Aboutus
                </Link>
              </li>
              <li>
                <Link href="/Booknow" className="text-white no-underline">
                  Book now
                </Link>
              </li>

               <li>
                <Link href="/Contactus" className="text-white no-underline">
                  Contact us
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
