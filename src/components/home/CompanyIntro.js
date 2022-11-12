import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import response from "../../utils/demo/prices";
import { CompFirstIcon } from "../../icons";

function CompanyIntro() {
  return (
    <>
      <div className="flex flex-col bg-gray-50 w-full px-[104px] mt-0 mb-0 sm:pt-[30px] sm:pb-[50px]">
        <div className="relative flex flex-col justify-center mt-[133px] md:space-y-8 space-y-2">
          <div className="company flex flex-col">
            <div className="flex flex-row">
              <div className="w-1/2">
                <div className="about-right-side relative inline-block before:border before:border-l-0 before:border-solid before:border-[#6F6D6D] before:absolute before:inline-block before:top-0 before:right-0 before:left-0 before:bottom-0 before:rounded-[4px] before:content-[''] before:-translate-y-[61px] before:translate-x-[-104px]">
                  {/* <img
                    className="relative inline-block rounded-[4px] max-w-full h-auto align-middle border-0"
                    src="images/landing/about3.png"
                    alt=""
                  /> */}
                  <div className="relative inline-block rounded-[4px] max-w-full h-auto align-middle rect-1 w-[508px] h-[308px] border border-solid border-[#6F6D6D] absolute inline-block top-0 right-0 left-0 bottom-0 rounded-[4px] content-['fff'] ">
                    <span className="absolute top-[50px] left-[50px] text-[36px] leading-[43.2px] text-[#6F6D6D] font-normal font-monumentregular">
                      <p>Linger</p>
                      <p>Media</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-1/2 ml-[50px] text-[#6F6D6D]">
                <h3 className="title-about text-[28px] mb-[10px] mt-0 leading-6 uppercase">
                  为什么是我们？
                </h3>
                <span className="text-[14px] leading-[1.8] font-normal mb-[15px] mt-0">
                  <p>灵儿传媒是国内拥有10年历史的</p>
                  <p>高端陪游服务商史的高端陪游服务商。</p>
                  <p>该品牌旨在通过采用 web3 技术彻底改变</p>
                  <p>中国的陪游服务市场</p>
                </span>
                {/* Tabs Heading Ends */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyIntro;
