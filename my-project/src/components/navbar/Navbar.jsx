import React, { useEffect, useState } from "react";
import { BiMenu, BiPhoneCall } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import logo from '../../assets/logo.png'; 


const Navbar = () => {
  return (
    <header
      data-aos="fade"
      data-aos-duration="300"
      className="relative z-20 border-b-[1px]  border-primary/50 bg-gradient-to-l from-green-900 via-green-800 to-green-900 text-white shadow-lg"
    >
      <nav className="container  flex h-[70px] items-center justify-between py-2 ">
        <div className="text-2xl text-white md:text-3xl ">
          <a href="/#home" className="">
            <span className="inline-block font-bold text-primary dark:text-black">
            <img src={logo} className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"/>
            </span>
          </a>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center gap-10">
            <li className="cursor pointer group relative">
              <a href="/#home" className="flex h-[72px] items-center gap-[2px]">
                Home{" "}
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block  ">
                <ul className="space-y-3">
                  <li className="p-2 hover:bg-violet-200">Services</li>
                  <li className="p-2 hover:bg-violet-200">About us</li>
                  <li className="p-2 hover:bg-violet-200">Privacy policy</li>
                </ul>
              </div>
            </li>
            <li className="cursor pointer group">
              <a href="/#home" className="flex h-[72px] items-center gap-[2px]">
                Services{" "}
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute left-0 z-[9999] hidden w-full rounded-b-3xl bg-white p-2 text-black group-hover:block  ">
                <div className="grid grid-cols-3 gap-5 ">
                  <div className="overflow-hidden">
                    <img
                      className="max-h-[300px] w-full rounded-b-3xl object-fill"
                      src="https://picsum.photos/200"
                      alt="pics"
                    />
                  </div>
                  <div className="col-span-2">
                    <h1 className="pb-3 text-xl font-semibold">Best Selling</h1>
                    <p className="text-sm text-slate-600">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aspernatur exercitationem delectus iusto animi aperiam
                      deleniti reprehenderit doloribus, numquam corporis quae.
                    </p>
                    <div className="grid grid-cols-3 ">
                      <ul className="mt-3 flex flex-col gap-2">
                        <h1 className="pb-1 text-xl font-semibold">
                          Development
                        </h1>
                        <li className="cursor-pointer text-black/80 hover:text-primary">
                          Web development
                        </li>
                        <li className="cursor-pointer text-black/80 hover:text-primary">
                          IOS App Development
                        </li>
                        <li className="cursor-pointer text-black/80 hover:text-primary">
                          App Development
                        </li>
                      </ul>
                      <ul className="mt-3 flex flex-col gap-2">
                        <h1 className="pb-1 text-xl font-semibold">
                          Other Services
                        </h1>
                        <li className="cursor-pointer text-black/80 hover:text-primary">
                          Cloud Services
                        </li>
                        <li className="cursor-pointer text-black/80 hover:text-primary">
                          Mobile App
                        </li>
                        <li className="cursor-pointer text-black/80 hover:text-primary">
                          App Development
                        </li>
                      </ul>
                      <div>
                        <img src="https://picsum.photos/180" alt="no image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="cursor pointer">
              <a href="/#contact">Contact</a>
            </li>
            <div className="flex items-center gap-4">
              <li>
                <BiPhoneCall className="h-[40px] w-[40px] rounded-md bg-customGray p-2 text-2xl text-white hover:bg-customGray/90" />
              </li>
              <li>
                <div>
                  <p className="text-sm">Call us on</p>
                  <p className="text-lg">+91 123456789</p>
                </div>
              </li>
            </div>
          </ul>
        </div>
        <div className="block md:hidden ">
          <BiMenu className="text-2xl" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;