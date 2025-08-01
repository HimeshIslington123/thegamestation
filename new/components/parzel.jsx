"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const Parzel = () => {
  // ✅ 1. Setup Lenis with faster easing
  

  // ✅ 2. Track scroll progress
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // ✅ 3. Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]); // slightly less for faster feel
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);



  // ✅ 5. Game image data
  const games = {
    fifa2025: { image: "/fifa2025.jpg" },
    god: { image: "/godofwar.avif" },
    spider: { image: "/spider1.avif" },
    tek: { image: "/tek.jpeg" },
    uncharter: { image: "/uncharted.jpeg" },
    wrestling: { image: "/w2k25.avif" },
      four: { image: "/4.jpg" },
        aoao: { image: "/aoao.jpg" },
          ho: { image: "/ho.jpg" },
            spider2: { image: "/newspider.avif" },
    
  };

  const row1Images = [
    games.fifa2025.image,
    games.god.image,
    games.spider.image,
    games.tek.image,
     games.fifa2025.image,
    games.god.image,
   
  ];

  const row2Images = [
    games.uncharter.image,
    games.wrestling.image,
    games.four.image,
    games.aoao.image,
     games.uncharter.image,
    games.wrestling.image,
  ];

  const row3Images = [
    games.ho.image,
    games.spider2.image,
    games.ho.image,
    games.god.image,
     games.tek.image,
    games.spider2.image,
  ];

  

 const imageClass =
  "w-[110px] h-[110px] object-cover aspect-square border sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]";

  return (
    <>

   <p style={{
  textShadow:
    "0 0 25px rgba(144,150,237,1), 0 0 55px rgba(255,0,0,0.8), 0 0 80px rgba(255,255,255,0.3)",
}}
 className="bg-[#0a0a0a] text-[20px] md:text-[30px] font-mono text-center pb-[4px]   text-amber-50">Top Games You Can Play</p>
    <section
      ref={ref}
      className="relative flex flex-col  justify-center items-center gap-8 overflow-hidden bg-[#0a0a0a] "
    >
         
      {/* First Row - Scrolls Up */}
      <motion.div style={{ x: y1 }}   transition={{ type: "tween", duration: 7 }} className="flex gap-4 justify-center">
        {row1Images.map((src, i) => (
          <img key={i} src={src} alt={`img-${i}`} className={imageClass} />
        ))}
      </motion.div>
     

      {/* 3 Row - Scrolls Down */}
      <motion.div   transition={{ type: "tween", duration: 7}} style={{ x: y2 }} className="flex gap-4 justify-center">
        {row2Images.map((src, i) => (
          <img key={i} src={src} alt={`img-${i + 10}`} className={imageClass} />
        ))}
      </motion.div>
      <motion.div   transition={{ type: "tween", duration: 2 }} style={{ x: y1 }} className="md:hidden flex gap-4 justify-center">
        {row3Images.map((src, i) => (
          <img key={i} src={src} alt={`img-${i + 10}`} className={imageClass} />
        ))}
      </motion.div>
    </section>
    </>
  );
};

export default Parzel;
