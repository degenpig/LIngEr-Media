import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import response from "../../utils/demo/prices";
import { CompFirstIcon } from "../../icons";

function HomeSlider() {
  return (
    <>
      <div className="flex flex-col bg-story w-full">
        <div className="relative flex flex-col items-center md:space-y-8 space-y-2 -z-10">
          <div
            className="slider-section w-full h-[783px]"
            style={{
              background: `url('images/landing/bg1.png') no-repeat`,
              backgroundSize: `cover`
            }}
          ></div>
          <div className="absolute left-[135px] top-[150px] flex flex-col space-y-2 slider-content  max-w-7xl mx-auto w-full">
            <div className="flex flex-row justify-between">
              <div className="slider-content">
                <div className="content-text text-left leading-[76.8px] text-[#6F6D6D] font-monumentregular">
                  <p className="text-[40px]">神秘而欢乐的世界</p>
                  <p className="text-gray-700 text-[64px] font-bold">欢迎您！</p>
                </div>
                <div className="flex flex-row items-center space-x-4 buttons mt-[62px]">
                  <div className="search-ads-btn">
                    <button className="text-white upper py-2 px-3 bg-[#6F6D6D] text-[18px] leading-5 rounded-[15px] px-[15px] py-[7px] border-white border">
                      开始使用
                    </button>
                  </div>
                </div>
              </div>
              <div className="slider-subimg">
                <img src="images/landing/model1.png" className="w-[669px] h-[602px]" alt="model-img"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSlider;
