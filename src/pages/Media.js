import React, { useState, useEffect } from "react";

import Header from "../components/Header.js";
import MediaStart from "../components/media/MediaStart.js";
import MediaService from "../components/media/MediaService.js";
import MediaContract from "../components/media/MediaContract.js";
import Footer from "../components/Footer";
import Web3 from "web3";
import abi from "../contract/LingErSwapV1.json";
import response from "../utils/demo/prices";
import MoveToTop from "../components/MoveToTop";

function Media() {
  // const RPCURL = "https://bsc-dataseed1.binance.org/";
  const RPCURL = "https://data-seed-prebsc-1-s1.binance.org:8545";
  const ContractAddress = "0x53c9B7973BfAA80b8C99771ba8a8363DCfa673A2";

  // useEffect(() => {
  const [data, setData] = useState({});
  const web3 = new Web3(RPCURL);
  const contract = new web3.eth.Contract(abi, ContractAddress);
  const init = async () => {
    // const TOKEN_5000 = await contract.methods.getBalance().call();
    const bnb_usd_price = await contract.methods.getBNBUSDPrice().call();
    const payment_amount_3k = await contract.methods
      .getPaymentAmount3K()
      .call();
    const exRate_CNY_USD = await contract.methods.exRateCNYUSD().call();
    const payment_amount_5k = await contract.methods
      .getPaymentAmount5K()
      .call();
    setData({
      bnb_to_usd: (bnb_usd_price / Math.pow(10, 8)).toFixed(3),
      CnyUsd: (exRate_CNY_USD / Math.pow(10, 8)).toFixed(3),
      amount3k: (payment_amount_3k / Math.pow(10, 18)).toFixed(3),
      amount5k: (payment_amount_5k / Math.pow(10, 18)).toFixed(3),
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      init();
    }, 1000);
  }, []);
  const [price, setPrice] = useState(3000);
  const [modelInfo, setModelInfo] = useState([]);
  // Get the data from child componet
  const getUnitPrices = (data) => {
    console.log("Parent catched the data ", data);
    setPrice(data);
    var modelInfoArry = [];
    response.map((item, i) => {
      console.log("item:", item.price, data);
      if (Number(item.price) == Number(data.value)) {
        modelInfoArry.push(item);
      }
    });
    setModelInfo(modelInfoArry);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen overflow-unset font-graphikregular">
        {/* Site Header */}
        <Header />
        {/* Main Content*/}
        <div className="flex-grow align-center">
          <MediaStart getUnitPrices={getUnitPrices}></MediaStart>
          <MediaContract data={data}></MediaContract>
          <MediaService
            data={data}
            price={price}
            modelinfo={modelInfo}
          ></MediaService>
        </div>
        {/* Site Footer */}
        <Footer />
        <MoveToTop></MoveToTop>
      </div>
    </>
  );
}

export default Media;
