import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Loyalty = () => {
  return (
    <>
      <div className="bg-[#0a0a0a] px-[20px] md:px-[70px]">
        <motion.p 
         whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{once:true}}
        className=" text-[40px] md:text-[70px] p-0 m-0 font-bold leading-[1.1] bg-gradient-to-r from-[#242880] via-[#8d7dca] to-[#212121] text-transparent bg-clip-text">
          Introducing <br />Our Loyalty Card System!
        </motion.p>

        <motion.p
         whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          viewport={{once:true}}
        className="text-white text-[20px] md:text-[35px] mt-[10px] text-justify italic">
          Loyal Gamers Deserve Rewards!
          <br />
          Every 1 hour of gameplay gets you a stamp. Stack up 8, and the next hour is on us!
          
          Don’t miss out—grab your loyalty card today and keep leveling up.
        </motion.p>

        <div className="flex flex-col md:flex-row gap-[30px] items-center w-full mt-[30px]">
          <motion.div
           whileInView={{ opacity: 1,y:0}}
          initial={{ opacity: 0,y:20 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{once:true}}
          className="w-[300px] md:w-[500px] border-1 md:border-2  border-white overflow-hidden rounded-2xl ">
            <Image
              className="object-contain w-full "
              src="/back.jpeg"
              alt="Back side of loyalty card"
              width={1890}
              height={1890}
            />
          </motion.div>
          <motion.div
          whileInView={{ opacity: 1,y:0}}
          initial={{ opacity: 0,y:20 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{once:true}} className="w-[300px] md:w-[500px] border-1 md:border-2  border-white rounded-2xl overflow-hidden">
            <Image
              className="object-contain w-full h-auto"
              src="/front.jpeg"
              alt="Front side of loyalty card"
              width={1890}
              height={1890}
            />
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Loyalty
