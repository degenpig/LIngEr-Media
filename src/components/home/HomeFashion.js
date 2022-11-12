import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import response from "../../utils/demo/prices";
import { CompFirstIcon } from "../../icons";

function HomeFashion() {
  return (
    <>
      <div className="flex flex-col bg-story w-full my-24 px-5 sm:px-6 mx-auto max-w-6xl">
        <div className="flex flex-col justify-center items-center md:space-y-8 space-y-2">
          <div className="top-[150px] flex flex-col space-y-12 w-full slider-content">
            <div className="content-text text-center">
              <span className="text-[2rem] text-[#592f5e] font-bold">
                时尚&nbsp;<span className="text-[#c01644]">女孩</span>
              </span>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mt-24">
              <div className="flex flex-col border border-solid border-[#f5f5f5] relative overflow-hidden rounded-[10px] shadow-[0_0px_50px_10px_rgba(0,0,0,0.3)]">
                <div className="relative w-full h-[183px] overflow-visible ads-grid-style">
                  <div className="featured-ribbon h-[80px] overflow-hidden absolute top-0 right-0 text-align-right w-[80px] z-2">
                    <span className="absolute bg-[#c01644] text-white text-[10px] w-[100px] right-[-25px] text-center top-[10px] w-[100px] rotate-45 uppercase block">
                      精选
                    </span>
                  </div>
                  <a href="#">
                    <img
                      src="images/landing/images (3).jpg"
                      alt="Raphael"
                      className="aboslute top-0 left-0 object-cover visible h-full w-full img-fluid"
                      loading="lazy"
                      data-xblocker="passed"
                    />
                  </a>
                </div>
                <div className="ads-grid-content py-[5px] px-[15px]">
                  <ul className="flex space-x-2">
                    <li>
                      <a
                        href="#"
                        className="text-[12px] text-white bg-[#22d048] rounded-[0.5rem] px-[8px] py-[2px]"
                      >
                        淑女
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[12px] text-white bg-[#22d048] rounded-[0.5rem] px-[8px] py-[2px]"
                      >
                        惊人
                      </a>
                    </li>
                  </ul>
                  <a href="#">
                    <h3 className="autoHeights12 mt-5 text-[19px] text-[#c01644] font-bold">
                      拉斐尔
                    </h3>
                  </a>
                  {/* <p>
                    <i className="fa fa-map-marker"></i>Hastings, MI, USA
                  </p> */}
                </div>
                <div className="mt-12 border border-t-[1px] border-b-0"></div>
                <div className="ads-grid-price px-3 py-3">
                  <div className="flex flex-row justify-between">
                    <div className="model-price text-[#592f5e] text-lg font-bold">
                      3000元
                    </div>
                    <div className="icons">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col border border-solid border-[#f5f5f5] relative overflow-hidden rounded-[10px] shadow-[0_0px_50px_10px_rgba(0,0,0,0.3)]">
                <div className="relative w-full h-[183px] overflow-visible ads-grid-style">
                  <div className="featured-ribbon h-[80px] overflow-hidden absolute top-0 right-0 text-align-right w-[80px] z-2">
                    <span className="absolute bg-[#c01644] text-white text-[10px] w-[100px] right-[-25px] text-center top-[10px] w-[100px] rotate-45 uppercase block">
                      精选
                    </span>
                  </div>
                  <a href="#">
                    <img
                      src="images/landing/images (4).jpg"
                      alt="Raphael"
                      className="aboslute top-0 left-0 object-cover visible h-full w-full img-fluid"
                      loading="lazy"
                      data-xblocker="passed"
                    />
                  </a>
                </div>
                <div className="ads-grid-content py-[5px] px-[15px]">
                  <ul className="flex space-x-2">
                    <li>
                      <a
                        href="#"
                        className="text-[12px] text-white bg-[#22d048] rounded-[0.5rem] px-[8px] py-[2px]"
                      >
                        淑女
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[12px] text-white bg-[#22d048] rounded-[0.5rem] px-[8px] py-[2px]"
                      >
                        惊人
                      </a>
                    </li>
                  </ul>
                  <a href="#">
                    <h3 className="autoHeights12 mt-5 text-[19px] text-[#c01644] font-bold">
                      天使
                    </h3>
                  </a>
                  {/* <p>
                    <i className="fa fa-map-marker"></i>Hastings, MI, USA
                  </p> */}
                </div>
                <div className="mt-12 border border-t-[1px] border-b-0"></div>
                <div className="ads-grid-price px-3 py-3">
                  <div className="flex flex-row justify-between">
                    <div className="model-price text-[#592f5e] text-lg font-bold">
                      6000元
                    </div>
                    <div className="icons">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col border border-solid border-[#f5f5f5] relative overflow-hidden rounded-[10px] shadow-[0_0px_50px_10px_rgba(0,0,0,0.3)]">
                <div className="relative w-full h-[183px] overflow-visible ads-grid-style">
                  <div className="featured-ribbon h-[80px] overflow-hidden absolute top-0 right-0 text-align-right w-[80px] z-2">
                    <span className="absolute bg-[#c01644] text-white text-[10px] w-[100px] right-[-25px] text-center top-[10px] w-[100px] rotate-45 uppercase block">
                      精选
                    </span>
                  </div>
                  <a href="#">
                    <img
                      src="images/landing/images (12).jpg"
                      alt="Raphael"
                      className="aboslute top-0 left-0 object-cover visible h-full w-full img-fluid"
                      loading="lazy"
                      data-xblocker="passed"
                    />
                  </a>
                </div>
                <div className="ads-grid-content py-[5px] px-[15px]">
                  <ul className="flex space-x-2">
                    <li>
                      <a
                        href="#"
                        className="text-[12px] text-white bg-[#22d048] rounded-[0.5rem] px-[8px] py-[2px]"
                      >
                        淑女
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[12px] text-white bg-[#22d048] rounded-[0.5rem] px-[8px] py-[2px]"
                      >
                        光泽
                      </a>
                    </li>
                  </ul>
                  <a href="#">
                    <h3 className="autoHeights12 mt-5 text-[19px] text-[#c01644] font-bold">
                      琳达
                    </h3>
                  </a>
                  {/* <p>
                    <i className="fa fa-map-marker"></i>Hastings, MI, USA
                  </p> */}
                </div>
                <div className="mt-12 border border-t-[1px] border-b-0"></div>
                <div className="ads-grid-price px-3 py-3">
                  <div className="flex flex-row justify-between">
                    <div className="model-price text-[#592f5e] text-lg font-bold">
                      9000元
                    </div>
                    <div className="icons">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col border border-solid border-[#f5f5f5] relative overflow-hidden rounded-[10px] shadow-[0_0px_50px_10px_rgba(0,0,0,0.3)]">
                <div className="relative w-full h-[183px] overflow-visible ads-grid-style">
                  <div className="featured-ribbon h-[80px] overflow-hidden absolute top-0 right-0 text-align-right w-[80px] z-2">
                    <span className="absolute bg-[#c01644] text-white text-[10px] w-[100px] right-[-25px] text-center top-[10px] w-[100px] rotate-45 uppercase block">
                      精选
                    </span>
                  </div>
                  <a href="#">
                    <img
                      src="images/landing/images (8).jpg"
                      alt="Raphael"
                      className="aboslute top-0 left-0 object-cover visible h-full w-full img-fluid"
                      loading="lazy"
                      data-xblocker="passed"
                    />
                  </a>
                </div>
                <div className="ads-grid-content py-[5px] px-[15px]">
                  <ul className="flex space-x-2">
                    <li>
                      <a
                        href="#"
                        className="text-[12px] text-white bg-[#22d048] rounded-[0.5rem] px-[8px] py-[2px]"
                      >
                        淑女
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[12px] text-white bg-[#22d048] rounded-[0.5rem] px-[8px] py-[2px]"
                      >
                        瘦女
                      </a>
                    </li>
                  </ul>
                  <a href="#">
                    <h3 className="autoHeights12 mt-5 text-[19px] text-[#c01644] font-bold">
                      玛丽亚
                    </h3>
                  </a>
                  {/* <p>
                    <i className="fa fa-map-marker"></i>Hastings, MI, USA
                  </p> */}
                </div>
                <div className="mt-12 border border-t-[1px] border-b-0"></div>
                <div className="ads-grid-price px-3 py-3">
                  <div className="flex flex-row justify-between">
                    <div className="model-price text-[#592f5e] text-lg font-bold">
                      5000元
                    </div>
                    <div className="icons">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeFashion;
