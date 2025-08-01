import Image from "next/image";
import React from "react";
import Link from "next/link";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/price" },
    { name: "Booking", href: "/Booknow" },
    
  ];

  return (
    <footer className="px-[10px] py-[20px] pt-[40px] bg-black text-white">
      <div className="flex flex-col items-center justify-center gap-[10px] md:gap-[20px]">
        {/* Social Icons */}
        <div className="flex items-center justify-center gap-[10px]">
          <Link href="/" aria-label="Email">
            <img
              src="/gamil.png"
              alt="Gmail"
              width={50}
              height={50}
              className="w-[40px] md:w-[50px] hover:scale-105 transition-transform duration-200 object-contain"
            />
          </Link>
          <Link href="https://www.tiktok.com/@gamestation2025?_t=ZS-8yVNZ0rHloo&_r=1" aria-label="TikTok">
            <img
              src="/tt.png"
              alt="TikTok"
              width={50}
              height={50}
              className="w-[40px] md:w-[50px] hover:scale-105 transition-transform duration-200 object-contain"
            />
          </Link>
          <Link href="https://www.instagram.com/game_station_2025/" aria-label="Instagram">
            <img
              src="/instagram.png"
              alt="Instagram"
              width={50}
              height={50}
              className="w-[40px] md:w-[50px] hover:scale-105 transition-transform duration-200 object-contain"
            />
          </Link>
        </div>

       

        {/* Navigation Links */}
        <div className="flex gap-[10px] md:gap-[40px] font-extralight font-mono">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className="text-white hover:text-orange-300 transition-colors duration-200"
              style={{ textShadow: "0 0 8px rgba(255, 165, 0, 0.7)" }}
            >
              {name}
            </Link>
          ))}
        </div>
        

        {/* Horizontal line */}
        <hr className="w-full border-gray-700 my-1" />

        {/* Copyright */}
        <p className="text-sm font-extralight font-mono text-gray-400 text-center">
          © GameStation 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
