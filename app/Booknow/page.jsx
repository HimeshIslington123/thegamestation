'use client';

import React, { useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import emailjs from '@emailjs/browser';
import Footer from '@/components/Footer';

const BookingPage = () => {
  const form = useRef();

  const [name, setName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [platform, setPlatform] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');

  const SERVICE_ID = 'service_gyo79fv';
  const TEMPLATE_ID = 'template_b9jtucs';
  const PUBLIC_KEY = '-1ZoSoVEMIOY-HC9U';

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
      console.log(result.text);
      alert('Booking submitted! Check your email for confirmation.');

      // Clear form
      setName('');
      setStartTime('');
      setEndTime('');
      setPlatform('');
      setPhone('');
      setDate('');
      setEmail('');
    } catch (error) {
      console.error(error);
      alert('Error sending booking. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen text-white p-6 flex justify-center items-center" style={{ backgroundColor: '#0a0a0a' }}>
        <form ref={form} onSubmit={handleSubmit} className="w-full max-w-md bg-[#111] p-6 rounded-xl shadow-lg space-y-4">
          <h1 className="text-3xl font-bold mb-4 text-center">Booking</h1>

          <div className="flex flex-col">
            <label className="mb-1">Name of user:</label>
            <input
              name="from_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 rounded bg-[#1a1a1a] border border-amber-50 placeholder-gray-400"
              placeholder="Enter the name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1">Start Time</label>
            <input
              name="starttime"
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="p-2 rounded bg-[#1a1a1a] border border-gray-600 text-white"
              required
            />
            <label className="mb-1 mt-4">End Time</label>
            <input
              name="endtime"
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="p-2 rounded bg-[#1a1a1a] border border-gray-600 text-white"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 mt-2">Select Game Platform</label>
            <select
              name="platform"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="p-2 rounded bg-[#1a1a1a] border border-gray-600 text-white"
              required
            >
              <option value="">-- Choose a Platform --</option>
              <option>PS4</option>
              <option>PS5</option>
              <option>Xbox</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-1">Phone Number</label>
            <input
              name="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="p-2 rounded bg-[#1a1a1a] border border-amber-50 placeholder-gray-400"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1">Date</label>
            <input
              name="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="p-2 rounded bg-[#1a1a1a] border border-gray-600 text-white"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 rounded bg-[#1a1a1a] border border-amber-50 placeholder-gray-400"
              placeholder="Enter your email"
              required
            />
          </div>

          <p className="text-sm text-gray-400">You will receive a confirmation email after booking.</p>

          <button
            type="submit"
            className="relative inline-flex h-12 md:h-14 mt-[20px] overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a2aeff_0%,#3749be_50%,#a2aeff_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full dark:bg-[#070e41] bg-[#ffffff] px-8 py-1 lg:px-12 lg:py-2 text-sm lg:text-base font-medium dark:text-gray-50 text-black backdrop-blur-3xl">
              Submit Booking
            </span>
          </button>
        </form>
      </div>
       <Footer></Footer>
    </>
  );
};

export default BookingPage;