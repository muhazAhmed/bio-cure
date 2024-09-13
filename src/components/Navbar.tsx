"use client";
import { navItems } from "@/lib/data";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [selectedPage, setSelectedPage] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handlePageClick = (index: number) => {
    setSelectedPage(index);
    setIsOpen(false);
  };

  return (
    <div className="sticky top-0 flex w-full h-[10vh] justify-around p-5 z-[999] bg-white">
      <Link href={"/"}>
        <h1 className="text-[25px] font-extrabold cursor-pointer">
          <span className="text-csBlue font-extrabold">Bio</span>Cure
        </h1>
      </Link>

      <div className="block lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineClose size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      <ul
        className={`flex flex-col lg:flex-row gap-4 lg:gap-6 lg:items-center absolute lg:static top-[10vh] left-0 w-full lg:w-auto bg-white lg:bg-transparent transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {navItems?.map((item: any, index: number) => (
          <Link href={item?.link} key={index}>
            <li
              className={`text-[16px] font-bold cursor-pointer px-4 py-2 lg:px-0 lg:py-0 ${
                selectedPage === index
                  ? "text-csBlue border-b-4 border-csBlue rounded-md"
                  : ""
              }`}
              onClick={() => handlePageClick(index)}
            >
              {item?.label}
            </li>
          </Link>
        ))}
      </ul>

      <div className="hidden lg:flex gap-3 items-center">
        <button className="p-1 px-4 rounded-full border-2 border-csBlue text-csBlue font-semibold">
          Login
        </button>
        <button className="p-1 px-4 border-2 border-transparent rounded-full bg-csBlue text-white font-semibold">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
