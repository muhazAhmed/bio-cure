"use client";
import surgerySVG from "@/assets/surgery.png";
import bgSVG from "@/assets/reasonsBg.jpg";
import Image from "next/image";
import Button from "@/components/Button";
import { FaArrowRight } from "react-icons/fa";

const HeroReasons = () => {
  return (
    <div className="flex flex-col gap-5 lg:flex-row xl:flex-row lg:gap-0 xl:gap-0 items-center justify-evenly h-auto lg:h-[90vh] xl:h-[90vh] w-full relative p-4">
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
      <Image
        src={surgerySVG}
        alt="Hero Background"
        width={300}
        priority={true}
        className="z-10 rounded-2xl"
      />
      <div className="flex flex-col items-start gap-3">
        <h1 className="text-[24px] lg:text-[30px] xl:text-[30px] font-extrabold">
          Why Choose Us?
        </h1>
        <div className="flex flex-col items-start gap-1">
          <p className="text-xs lg:text-sm xl:text-sm text-gray-400">
            ✅ At Bio-Cure, we prioritize your health and well-being.
          </p>
          <p className="text-xs lg:text-sm xl:text-sm text-gray-400">
            ✅ Our team of expert surgeons and nurses are committed to providing
            the best care possible.
          </p>
          <p className="text-xs lg:text-sm xl:text-sm text-gray-400">
            ✅ We are committed to providing excellent patient care and
            follow-up services.
          </p>
          <p className="text-xs lg:text-sm xl:text-sm text-gray-400">
            ✅ We strive to create a safe, comfortable, and personalized
            environment for your patients.
          </p>
        </div>
        <Button
          label="Learn more"
          variant="plain"
          Icon={<FaArrowRight />}
          iconPosition="right"
        />
      </div>
    </div>
  );
};

export default HeroReasons;
