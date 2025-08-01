'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiBehance } from 'react-icons/si';
import React from 'react';
import { motion } from 'framer-motion';

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#0a0a0a] flex justify-center items-center px-4">
        <motion.div
          className="flex flex-col w-full max-w-5xl items-center justify-start bg-[#111111] text-white py-14 px-6 md:px-12 rounded-2xl shadow-xl mt-8 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-10 text-center border-b border-gray-600 pb-4 w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.h2>

          {/* Aligned Column Items */}
          <div className="space-y-6 text-sm md:text-base w-full max-w-md text-left">
            {[
              { icon: <FaEnvelope className="text-gray-300 text-lg mt-1" />, text: 'gamestation@gmail.com' },
              { icon: <FaPhoneAlt className="text-gray-300 text-lg mt-1" />, text: '984-6499442' },
              { icon: <FaMapMarkerAlt className="text-gray-300 text-lg mt-1" />, text: 'Paknajol-16, Kathmandu' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              >
                {item.icon}
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Map */}
          <motion.div
            className="mt-10 w-full flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0782885879908!2d85.30602487580781!3d27.714868976178277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19000c2c6f43%3A0xc875900a43bb3ac8!2sGame%20Station%20by%20Vape%20Station!5e0!3m2!1sen!2snp!4v1754024992747!5m2!1sen!2snp"
                className="w-[320px] h-[300px] md:w-[600px] md:h-[400px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
