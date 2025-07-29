"use client"
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Parzel from "@/components/parzel";
import Locations from "@/components/Typescrpit";
import Footer from "@/components/Footer";
import Loyalty from "@/components/Loyalty";


const AboutUs = () => {
  // State to keep track of selected game
  const [selectedGame, setSelectedGame] = useState("ps4");

  // Data for games info - image, title, and price
  const games = {
    ps4: {
      title: "PS4",
      price: "250 PER HOUR",
      image: "/ps4.png",
      desc:"Play. Compete. Relive the classics — PS4 delivers timeless gaming."
    },
    ps5: {
      title: "PS5",
      price: "300 PER HOUR",
      image: "/ps5.png",
      desc:"Experience lightning-fast gameplay — where power meets innovation."
    },
    logichet: {
      title: "Logichet",
      price: "200 PER HOUR",
      image: "/car.png",
    desc:"Strap in, hit the throttle — feel every turn with Logitech racing!"
    },
  };

  // Handle image click to update selected game state
  const handleClick = (game) => {
    setSelectedGame(game);
  };

  return (
    <>
      {/* Navbar with fixed height 14vh */}
      <Navbar />

      {/* Body container with height calc 100vh - 14vh (nav height) */}
      <div
        className="p-5 h-[calc(100vh-14vh)]"
        style={{ backgroundColor: "#0a0a0a", color: "#4361ee" }}
      >
        <div className="h-[60vh] md:h-[70vh] md:flex-[0.6] flex flex-col md:flex-row  justify-between items-start md:items-center md:justify-center gap-4 overflow-hidden">
  {/* Image container */}
  <motion.div
    key={selectedGame + "-image"} // key for animation to re-trigger
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className="flex-[0.5] md:flex-[0.6] md:h-full"
  >
    <Image
      className="object-contain h-[30vh]  md:h-[70vh]"
      src={games[selectedGame].image}
      alt={games[selectedGame].title}
      width={1890}
      height={1890}
    />
  </motion.div>

  {/* Text container */}
  <motion.div
    key={selectedGame + "-text"} // key to reset animation
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className="flex-[0.4]   flex justify-end gap-[5px] md:gap-0 flex-col text-left"
  >
    <p className="text-[70px] p-0 m-0 md:text-[120px]  font-bold leading-[1.1] bg-gradient-to-r from-[#242880] via-[#8d7dca] to-[#212121] text-transparent bg-clip-text">
      {games[selectedGame].title}
    </p>
    <p className="text-[30px] md:text-[32px] lg:text-[40px] bg-gradient-to-r from-[#242880] via-[#8d7dca] to-[#212121] text-transparent bg-clip-text">
      {games[selectedGame].price}
    </p>
<p
  className=" text-[14px] md:text-[18px] font-mono italic font-medium text-white md:mt-6  "
  style={{ textShadow: "0px 0px 20px rgba(240,242,255,0.7), 0px 0px 40px rgba(255,0,0,0.5)" }}
>
  {games[selectedGame].desc}
</p>




  </motion.div>
</div>

        {/* Other images section - clickable to change selected game */}
        <div className="flex gap-2 mt-4">
          <Image
            onClick={() => handleClick("ps4")}
            className="rounded-full w-[70px] h-[70px] border-2 dark:border-[#656fe2] border-[#394481] cursor-pointer"
            src="/ps4.png"
            alt="PS4"
            width={80}
            height={80}
          />
          <Image
            onClick={() => handleClick("ps5")}
            className="rounded-full w-[70px] h-[70px]  border-2 dark:border-[#656fe2] border-[#394481] cursor-pointer"
            src="/ps5.png"
            alt="PS5"
            width={80}
            height={80}
          />
          <Image
            onClick={() => handleClick("logichet")}
            className="rounded-full w-[70px] h-[70px]  border-2 dark:border-[#656fe2] border-[#394481] cursor-pointer"
            src="/car.png"
            alt="Logichet"
            width={80}
            height={80}
          />
        </div>
      </div>
      <Parzel></Parzel>
     <Locations></Locations>
        <Loyalty></Loyalty>
   <Footer></Footer>

    
     
    </>
  );
};

export default AboutUs;
