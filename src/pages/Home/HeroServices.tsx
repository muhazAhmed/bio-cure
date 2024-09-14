"use client";
import Image from "next/image";
import bgSVG from "@/assets/heroService.jpg";
import { heroServices } from "@/lib/data";
import { motion } from "framer-motion";

const HeroServices = () => {
  return (
    <div className="pt-4 lg:pt-0 xl:pt-0 flex flex-col items-center justify-evenly h-auto lg:h-[90vh] xl:h-[90vh] w-full relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={bgSVG}
          alt="Hero Background"
          fill
          style={{ objectFit: "cover" }}
          priority={true}
          className="absolute z-[-1]"
        />
      </div>
      <div className="flex w-full flex-col items-center gap-2">
        <h1 className="text-[25px] lg:text-[30px] xl:text-[30px] font-extrabold">
          Health Services For You
        </h1>
        <p className="text-gray-400 text-[14px]">
          We are always here to listen and understand
        </p>
      </div>
      <div className="w-full flex flex-wrap items-center justify-evenly gap-8 sm:gap-12 lg:gap-20 mt-8">
        {heroServices?.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.07,
              backgroundColor: "rgba(229, 231, 235, 0.5)",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex items-start flex-col gap-2 cursor-pointer rounded-xl p-4 z-10"
          >
            <div className="image rounded-lg bg-slate-200 shadow-2xl shadow-slate-600 mb-3 p-2">
              <Image src={service.img} alt="svg" width={50} priority={true} />
            </div>
            <h3 className="text-[15px] font-bold">{service.title}</h3>
            <p className="text-[13px] text-gray-400 w-52 sm:w-60">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HeroServices;
