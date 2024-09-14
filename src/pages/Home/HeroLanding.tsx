"use client";
import Image from "next/image";
import bgSVG from "@/assets/herobg.svg";
import doctorSVg from "@/assets/doctor.png";
import pillSVG from "@/assets/pill.png";
import kitSVG from "@/assets/healthShield.png";
import { motion } from "framer-motion";
import Button from "../../components/Button";

const HeroLanding = () => {
  return (
    <div className="main-hero relative flex w-full h-auto lg:h-[90vh] xl:h-[90vh] items-center justify-around flex-col lg:flex-row">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeInOut" }}
        className="absolute top-0 right-0 lg:right-48 xl:right-48"
      >
        <Image src={pillSVG} alt="pill-svg" width={100} priority={true} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeInOut" }}
        className="absolute bottom-50 left-0 lg:bottom-10 xl:bottom-10"
      >
        <Image src={kitSVG} alt="kit-svg" width={100} priority={true} />
      </motion.div>
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
      <div className="z-10 flex flex-col items-center lg:items-start gap-8 text-center lg:text-left p-6 lg:p-0">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-extrabold text-[32px] sm:text-[36px] lg:text-[40px] leading-snug"
        >
          Serving Your
          <br /> Health Needs <br /> Our Priority
        </motion.h1>

        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-gray-500 text-[13px] sm:text-[14px] lg:text-[16px] leading-relaxed"
        >
          There's nothing more important than our good health, cause
          <br /> that's our principle capital asset for our good future.
        </motion.p>

        <Button
          label="Book Appointment"
          className="py-3 px-6 rounded-full shadow-2xl shadow-blue-300"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          whileHover={{ scale: 1.08 }}
          href="/#"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="mt-8 lg:mt-0 bg-gray-200 rounded-full"
      >
        <Image
          src={doctorSVg}
          alt="Doctor Image"
          width={400}
          height={400}
          className="object-contain"
          priority={true}
        />
      </motion.div>
    </div>
  );
};

export default HeroLanding;
