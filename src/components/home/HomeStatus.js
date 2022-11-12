import React, { useState, useEffect } from "react";

function HomeStatus() {
    return (
        <>
            <div className="flex flex-col px-5 sm:px-6 w-full h-[175px] bg-[#F5F5F5]">
                <div className="flex flex-row my-auto px-[125px]">
                    <div className="global-users w-1/4 flex flex-col items-center justify-center">
                        <span className="text-[48px] text-[#6F6D6D] leading-[58.09px] font-bold">1500</span>
                        <span className="text-[18px] text-[#6F6D6D] leading-[21.78px] font-bold">全球用户</span>
                    </div>
                    <div className="global-users w-1/4 flex flex-col items-center justify-center">
                        <span className="text-[48px] text-[#6F6D6D] leading-[58.09px] font-bold">400</span>
                        <span className="text-[18px] text-[#6F6D6D] leading-[21.78px] font-bold">活跃用户</span>
                    </div>
                    <div className="global-users w-1/4 flex flex-col items-center justify-center">
                        <span className="text-[48px] text-[#6F6D6D] leading-[58.09px] font-bold">60</span>
                        <span className="text-[18px] text-[#6F6D6D] leading-[21.78px] font-bold">状态</span>
                    </div>
                    <div className="global-users w-1/4 flex flex-col items-center justify-center">
                        <span className="text-[48px] text-[#6F6D6D] leading-[58.09px] font-bold">10</span>
                        <span className="text-[18px] text-[#6F6D6D] leading-[21.78px] font-bold">存在年限</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeStatus;
