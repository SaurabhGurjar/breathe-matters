"use client";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col 2xl:flex-row 2xl:w-[1503px]">
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-col justify-center 2xl:justify-start gap-[31px] 2xl:gap-[61px] 2xl:w-[738px] p-2.5"
      >
        <div className="w-[100px] 2xl:w-[298px] 2xl:h-[182px]">
          <Image src="/wind1.png" width={800} height={800} alt="wind" />
        </div>
        <div className="flex justify-center 2xl:items-start items-center flex-col gap-[33px]">
          <div className="2xl:w-[735px]">
            <h2 className="font-spectral text-[36px] 2xl:text-[48px] text-[#101010] font-semibold">
              Start Your new journey <br />
              with <span className="text-[#6BB5B5]">breathe matters</span>
            </h2>
            <p className="text-[#888888] text-[18px] 2xl:text-[24px] font-nunito font-normal">
              Elevating well-being through innovative solutions, where every
              breath unfolds a path to tranquility and vibrant living.
            </p>
          </div>
          <div className="flex flex-col-reverse 2xl:flex-row gap-[16px] 2xl:gap-[38px] 2xl:justify-start items-center">
            <Button className="w-[268px] h-[58px] bg-[#008080] text-white rounded-[8px] shadow-[0px_4px_4px_rgba(0,0,0,0.2)] font-semibold text-[24px] hover:bg-[#008080]">
              Join Us
            </Button> 
            <div className="flex flex-col justify-center items-center px-2 py-[5px] gap-[11px] text-[#101010]">
              <Image
                src="/trust.png"
                width={24}
                height={24}
                alt="Trustworthy"
              />
              <h4 className="text-[14px] font-normal">Trustworthy</h4>
            </div>
            <div className="flex flex-col justify-center items-center px-2 py-[5px] gap-[11px]">
              <Image
                src="/nature.png"
                width={24}
                height={24}
                alt="Inspired by nature"
              />
              <h4 className="text-[14px] font-normal">Inspired by nature</h4>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="hidden 2xl:block 2xl:w-[949px] 2xl:h-[888px] -ml-24 relative top-1"
      >
        <div
          className="
          overflow-hidden
          relative
        "
        >
          <Image
            src="/hero-animation.gif"
            width={1000}
            height={1000}
            alt="hero banner"
            className="2xl:w-[949px]"
          />
        </div>
        <Image
          src="/hero-banner.png"
          width={1000}
          height={1000}
          alt="hero banner"
          className="absolute top-12 right-28"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 3,
            ease: "linear",
          }}
          className="absolute top-[668px] left-[145px] w-[38px] h-[38px] rounded-full bg-[#008080]"
        ></motion.div>
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 6,
            ease: "linear",
          }}
          className="absolute top-[102px] left-[100px] w-[38px] h-[38px] rounded-full bg-[#008080]"
        ></motion.div>
        <motion.div
          animate={{ y: [0, 25, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 6,
            ease: "linear",
          }}
          className="absolute top-[23px] left-[725px] w-[38px] h-[38px] rounded-full bg-[#008080]"
        ></motion.div>
        <motion.div
          animate={{
            x: [60, 40, 20, 20, 40, 60, 80, 60],
            y: [-60, -40, -60, -20, -40, -60, -80, -60],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className="absolute top-[740px] left-[350px] w-[87px] h-[87px] rounded-full bg-[#008080]"
        ></motion.div>
      </motion.div>
    </section>
  );
}
