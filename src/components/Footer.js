import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { TelegramIcon, DiscordIcon, LinkedInICon } from "../icons";
function Footer() {
  const [top, setTop] = useState(true);
  const goTelegram = () => {
    alert("how are u?")
  }
  return (
    <>
      <footer className="footer_wrap relative footer_default scheme_dark">
        <div className="absolute grass-section w-full h-20 -z-10 top-[-20px] md:top-[-30px]"></div>
        <div className="footer_logo_wrap w-full">
          <div className="footer_logo_inner bg-[#2AABEE] text-center w-full h-full">
            <div className="footer-content pt-[70px] pb-[30px]">
              <div className="px-5 sm:px-6 mx-auto max-w-6xl">
                <div className="flex flex-row clearfix w-full">
                  <div className="col-md-6 col-sm-12 col-xs-12 w-1/3">
                    <div className="flex flex-row clearfix">
                      <div className="w-full relative mb-[30px] flex flex-col text-[#E4EEF5]">
                        <div className="heading-panel text-left mb-[10px] relative overflow-hidden">
                          <div className="main-title text-left mt-[20px] leading-10 text-[20px] font-bold inline-block">
                            服务
                          </div>
                        </div>
                        <div className="footer-widget links-widget">
                          <ul className="p-0 m-0">
                            <li className="relative mb-[15px]">
                              <a
                                className="block text-[18px] relative text-left"
                                href="#"
                              >
                                放置广告
                              </a>
                            </li>
                            <li className="relative mb-[15px]">
                              <a
                                className="block text-[18px] relative text-left"
                                href="#"
                              >
                                广告指南
                              </a>
                            </li>
                            <li className="relative mb-[15px]">
                              <a
                                className="block text-[18px] relative text-left"
                                href="#"
                              >
                                使用条款
                              </a>
                            </li>
                            <li className="relative mb-[15px]">
                              <a
                                className="block text-[18px] relative text-left"
                                href="#"
                              >
                                隐私政策
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 col-xs-12 w-1/3">
                    <div className="flex flex-row clearfix">
                      <div className="w-[40%] relative mb-[30px] flex flex-col text-[#E4EEF5]">
                        <div className="heading-panel text-left mb-[10px] relative overflow-hidden">
                          <div className="main-title text-left mt-[20px] leading-10 text-[20px] font-bold text-[#E4EEF5] inline-block">
                            有用的链接
                          </div>
                        </div>
                        <div className="footer-widget links-widget">
                          <ul className="p-0 m-0">
                            <li className="relative mb-[15px]">
                              <a
                                className="block text-[18px] relative text-left"
                                href="#"
                              >
                                搜索
                              </a>
                            </li>
                            <li className="relative mb-[15px]">
                              <a
                                className="block text-[18px] relative text-left"
                                href="#"
                              >
                                创建账户
                              </a>
                            </li>
                            <li className="relative mb-[15px]">
                              <a
                                className="block text-[18px] relative text-left"
                                href="#"
                              >
                                登记
                              </a>
                            </li>
                            <li className="relative mb-[15px]">
                              <a
                                className="block text-[18px] relative text-left"
                                href="#"
                              >
                                联系我们
                              </a>
                            </li>
                            <li className="relative mb-[15px]">
                              <a
                                className="block text-[18px] relative text-left"
                                href="#"
                              >
                                得到帮助
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* -- Newsletter -- */}
                  <div className="col-md-6 col-sm-12 flex flex-col col-xs-12 w-1/3 mt-[22px]">
                    <div className="newletter-title text-left">
                      <span className="text-[#E4EEF5] text-[20px] font-bold">订阅我们的新闻</span>
                    </div>
                    <div className="newletter-input text-left mt-[10px]">
                      <input type="text" className="w-[265px] h-[34px] rounded-[15px] w-full bg-white" />
                    </div>
                    <div className="subscribe-btn text-left mt-[10px]">
                      <button className="text-[#55ACEE] w-[133px] h-[41px] bg-white rounded-[15px] pt-[3px] pr-[20px] pb-[4px] pl-[13px] text-[20px] font-bold leading-[24px]">订阅</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex footer_copyright_wrap scheme_ bg-[#55ACEE] w-full h-[69px] text-white">
          <div className="footer_copyright_inner flex justify-between w-full">
            <div className="flex content_wrap justify-between w-full px-5 sm:px-6 mx-auto max-w-6xl">
              <div className="flex items-center justify-center copyright_text text-center align-center">
                <span className="text-[#E4EEF5] text-[18px] leading-[21.78px font-bold]">
                  &nbsp;© 文案 2022 版权所有
                  <span>&nbsp;</span>
                </span>
                {/* <a href="http://rosewood.ancorathemes.com/privacy-policy/">
                  {" "}
                  隐私政策
                </a> */}
              </div>
              <div className="flex flex-row items-center social-section space-x-2">
                <TelegramIcon className="transition duration-0" onClick={() => window.open('https://t.me/LET66666', '_blank')}>
                </TelegramIcon>
                <DiscordIcon className="ml-[17px] transition duration-0" onClick={() => window.open('https://discord.gg/bgX5EKSG', '_blank')} style={{ marginLeft: "17px" }}></DiscordIcon>
                <LinkedInICon className="ml-[17px] transition duration-0" onClick={() => window.open('https://linkedin.com/#', '_blank')} style={{ marginLeft: "17px" }}></LinkedInICon>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
