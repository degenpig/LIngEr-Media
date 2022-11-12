import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import response from "../../utils/demo/prices";
import { CheckIcon, CloseIcon, UpArrowIcon, DownArrowIcon } from "../../icons";
import { Collapse } from "react-collapse";
import {
  price,
  usage,
  features,
  collaboration,
  adminsecurity,
} from "../../utils/demo/compareplan";

import Web3 from "web3";
import abi from "../../../src/contract/LingErSwapV1.json";
import { Web3Provider } from "@ethersproject/providers";
import { isCompositeComponent } from "react-dom/test-utils";
// import { css } from "emotion";

const DropdownItem = (props) => {
  const [state, setState] = useState({
    isDropdownOpen: false,
    dropdownToggleIcon: "+",
  });

  const onDropdownClicked = () => {
    setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen,
      dropdownToggleIcon: prevState.dropdownToggleIcon === "+" ? "x" : "+",
    }));
  };

  return (
    <div
      className="p-5 w-full bg-white shadow-xl border rounded-b-lg"
      id={props.id}
    >
      <Collapse isOpened={state.isDropdownOpen}>
        <div className="mt-6 text-gray-700 text-base w-full flex flex-col mb-4">
          <div className="flex flex-col">
            <div className="py-2 text-[#202020] text-[1.125em] font-semibold">
              Price
            </div>
            <table className="border-collapse border border-slate-500 border-x-0">
              {price.map((item, i) => (
                <tr key={i}>
                  <td className="border border-x-0 border-gray-300 w-1/4">
                    {item.type}
                  </td>
                  <td className="border border-gray-300 w-1/4 text-center">
                    {item.free}
                  </td>
                  <td className="border border-gray-300 w-1/4 text-center">
                    {item.pro}
                  </td>
                  <td className="border border-x-0 border-gray-300 w-1/4 text-center">
                    {item.business}
                  </td>
                </tr>
              ))}
            </table>
          </div>
          <div className="flex flex-col">
            <div className="py-2 text-[#202020] text-[1.125em] font-semibold">
              Usage
            </div>
            <table className="border-collapse border border-x-0 border-slate-500">
              {usage.map((item, i) => (
                <tr key={i}>
                  <td className="border border-x-0 border-gray-300 w-1/4">
                    {item.type}
                  </td>
                  <td className="border border-gray-300 w-1/4 text-center">
                    {item.free}
                  </td>
                  <td className="border border-gray-300 w-1/4 text-center">
                    {item.pro}
                  </td>
                  <td className="border border-x-0 border-gray-300 w-1/4 text-center">
                    {item.business}
                  </td>
                </tr>
              ))}
            </table>
          </div>
          <div className="flex flex-col">
            <div className="py-2 text-[#202020] text-[1.125em] font-semibold">
              Features
            </div>
            <table className="border-collapse border-x-0 border border-slate-500">
              {features.map((item, i) => (
                <tr key={i}>
                  <td className="border border-x-0 border-gray-300 w-1/4">
                    {item.type}
                  </td>
                  <td className="border border-gray-300 w-1/4">
                    {item.free ? (
                      <CheckIcon className="text-center ml-auto mr-auto"></CheckIcon>
                    ) : (
                      <CloseIcon className="rotate-45 text-center ml-auto mr-auto"></CloseIcon>
                    )}
                  </td>
                  <td className="border border-gray-300 w-1/4">
                    {item.pro ? (
                      <CheckIcon className="text-center ml-auto mr-auto"></CheckIcon>
                    ) : (
                      <CloseIcon className="rotate-45 text-center ml-auto mr-auto"></CloseIcon>
                    )}
                  </td>
                  <td className="border border-x-0 border-gray-300 w-1/4">
                    {item.business ? (
                      <CheckIcon className="text-center ml-auto mr-auto"></CheckIcon>
                    ) : (
                      <CloseIcon className="rotate-45 text-center ml-auto mr-auto"></CloseIcon>
                    )}
                  </td>
                </tr>
              ))}
            </table>
          </div>
          <div className="flex flex-col">
            <div className="py-2 text-[#202020] text-[1.125em] font-semibold">
              Collaboration
            </div>
            <table className="border-collapse border-x-0 border border-slate-500">
              {collaboration.map((item, i) => (
                <tr key={i}>
                  <td className="border border-x-0 border-gray-300 w-1/4">
                    {item.type}
                  </td>
                  <td className="border border-gray-300 w-1/4">
                    {item.free ? (
                      <CheckIcon className="text-center ml-auto mr-auto"></CheckIcon>
                    ) : (
                      <CloseIcon className="rotate-45 text-center ml-auto mr-auto"></CloseIcon>
                    )}
                  </td>
                  <td className="border border-gray-300 w-1/4">
                    {item.pro ? (
                      <CheckIcon className="text-center ml-auto mr-auto"></CheckIcon>
                    ) : (
                      <CloseIcon className="rotate-45 text-center ml-auto mr-auto"></CloseIcon>
                    )}
                  </td>
                  <td className="border border-x-0 border-gray-300 w-1/4">
                    {item.business ? (
                      <CheckIcon className="text-center ml-auto mr-auto"></CheckIcon>
                    ) : (
                      <CloseIcon className="rotate-45 text-center ml-auto mr-auto"></CloseIcon>
                    )}
                  </td>
                </tr>
              ))}
            </table>
          </div>
          <div className="flex flex-col">
            <div className="py-2 text-[#202020] text-[1.125em] font-semibold">
              Admin & security
            </div>
            <table className="border-collapse border-x-0 border border-slate-500">
              {adminsecurity.map((item, i) => (
                <tr key={i}>
                  <td className="border border-x-0 border-gray-300 w-1/4">
                    {item.type}
                  </td>
                  <td className="border border-gray-300 w-1/4">
                    {item.free ? (
                      <CheckIcon className="text-center ml-auto mr-auto"></CheckIcon>
                    ) : (
                      <CloseIcon className="rotate-45 text-center ml-auto mr-auto"></CloseIcon>
                    )}
                  </td>
                  <td className="border border-gray-300 w-1/4">
                    {item.pro ? (
                      <CheckIcon className="text-center ml-auto mr-auto"></CheckIcon>
                    ) : (
                      <CloseIcon className="rotate-45 text-center ml-auto mr-auto"></CloseIcon>
                    )}
                  </td>
                  <td className="border border-x-0 border-gray-300 w-1/4">
                    {item.business ? (
                      <CheckIcon className="text-center ml-auto mr-auto"></CheckIcon>
                    ) : (
                      <CloseIcon className="rotate-45 text-center ml-auto mr-auto"></CloseIcon>
                    )}
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </Collapse>
      <div
        className="flex flex-row justify-center space-x-2"
        onClick={onDropdownClicked}
      >
        <div className="text-gray-800 text-xl font-graphiksemibold hover:text-red-600 ">
          {props.title}
        </div>
        <button className="text-gray-800 text-2xl">
          {state.isDropdownOpen ? (
            <UpArrowIcon></UpArrowIcon>
          ) : (
            <DownArrowIcon className="rotate-180 transition duration-0"></DownArrowIcon>
          )}
        </button>
      </div>
    </div>
  );
};

function MediaService(props) {
  const [tokenPrice, setTokenPrice] = useState(props.price);
  const [accounts, setAccounts] = React.useState([]);
  // web3 section
  const RPCURL = "https://data-seed-prebsc-1-s1.binance.org:8545";
  const ContractAddress = "0x53c9B7973BfAA80b8C99771ba8a8363DCfa673A2";
  // useEffect(() => {
  const [data, setData] = useState({});
  // const web3 = new Web3(RPCURL);
  const web3 = new Web3(window.web3.currentProvider);
  const contract = new web3.eth.Contract(abi, ContractAddress);
  // End web3

  const buyAndPay = async () => {
    const accounts = await web3.eth.getAccounts();
    const amount = (
      (Number(props.price.value) / Number(props.data.bnb_to_usd)).toFixed(3) *
      Number(props.data.CnyUsd)
    ).toFixed(3);
    // console.log("Amount.........", amount);
    const value = web3.utils.toWei(amount, "ether");
    await contract.methods.buyAndPay3K().send({
      from: accounts[0],
      value,
      gas: 250000,
    });
    setAccounts(accounts);
  };

  useEffect(() => {
    // response.map((data, i) => {
    //   if (data.price == tokenPrice) {
    //     modelInfoArry.push(data);
    //   }
    // })
    // console.log(">>>>>>>>>>>>>>>>>model:", modelInfoArry);
    console.log(">>>>>>>>>>>>>>>>>model:");
  }, [tokenPrice]);

  const [modelInfo, setModelInfo] = useState(response);
  return (
    <>
      <div className="flex flex-col bg-story lg:w-full w-11/12 ml-auto mr-auto max-w-5xl justify-center items-center my-24">
        <div className="flex flex-col md:flex-row sm:w-3/5 lg:w-2/5 w-4/5 bg-white shadow-2xl border rounded-t-lg">
          {props.modelinfo.map((data, i) => (
            <div
              className={`flex-1 flex-col border-r px-4 py-8 justify-center items-center ${
                data.type == "Free"
                  ? "border-t-4 border-t-green-600"
                  : data.type == "Pro"
                  ? "border-t-4 border-t-yellow-600"
                  : "border-t-4 border-t-[#c01644]"
              }`}
            >
              <div className="">
                <img
                  className="mr-auto ml-auto h-[250px] object-cover visible img-fluid"
                  src={data.img}
                  width="227"
                  alt=""
                ></img>
              </div>
              <div className="mt-3 text-center text-3xl text-gray-800 font-graphikmedium">
                <span>{data.type}</span>
              </div>
              <div className="mt-2 text-center">
                <span>{data.fituser}</span>
              </div>
              <div className="text-center">
                <span>{props.price.value}</span>
                <span>元</span>
              </div>
              <div className="w-full flex justify-center items-center">
                <button
                  className="mt-8 bg-[#c01644] px-4 py-3 border rounded-lg text-white"
                  onClick={buyAndPay}
                >
                  {data.type == "free"
                    ? "Get Started"
                    : data.type == "Pro"
                    ? "Upgrade now"
                    : "联系"}
                </button>
              </div>
              <hr className="my-8"></hr>
              <div className="flex flex-col md:w-full w-11/12 ml-auto mr-auto">
                {data.features.map((el, i) => (
                  <div className="flex flex-row my-2 space-x-2">
                    <CheckIcon></CheckIcon>
                    <div className="text-gray-700">{el}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* <DropdownItem title="Compare plans" theme="dark"></DropdownItem> */}
      </div>
    </>
  );
}

export default MediaService;
