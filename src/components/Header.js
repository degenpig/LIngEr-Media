import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { ethers } from "ethers";
// get our fontawesome imports
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Header() {
  const [top, setTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });
  // request event for metamask
  const connectwallet = () => {
    // Asking if metamask is already present or not
    console.log("hhhh", window.ethereum);
    if (window.ethereum) {
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert("install metamask extension!!");
    }
  };

  // getbalance function for getting a balance in
  // a right format with help of ethers
  const getbalance = (address) => {
    // Requesting balance method
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((balance) => {
        // Setting balance
        setdata({
          Balance: ethers.utils.formatEther(balance),
        });
      });
  };

  // Function for getting handling all events
  const accountChangeHandler = (account) => {
    // Setting an address data
    setdata({
      address: account,
    });
    console.log("consoel:", account);
    // Setting a balance
    getbalance(account);
  };


  // Scroll Event
  const [scrollY, setScrollY] = useState(0);
  const [bgColor, setBgColor] = useState('transparent')
  const [headTop, setHeadTop] = useState(92);
  const [navTop, setNavTop] = useState(0)
  function logit() {
    setScrollY(window.pageYOffset);
    if (scrollY < 80) {
      setHeadTop(92);
      setBgColor("transparent");
    } else {
      setHeadTop(20);
      setBgColor("white");
      setNavTop(5);
    }
  }

  useEffect(() => {
    if (window.pageYOffset > 80) {
      setHeadTop(20);
      setBgColor("white");
      setNavTop(5);
    }
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });
  return (
    <>
      <header
        className={`fixed bg-[${bgColor}] top-0 w-full z-30 pt-[${headTop}px]`} style={{ backgroundColor: bgColor }}
      >
        <div className={`max-w-7xl mx-auto px-5 sm:px-6 flex justify-between`} style={{ marginTop: headTop + "px" }}>
          {/* <!-- Mobile todoist --> */}
          <div className="-mr-2 flex justify-end btn-mobile-menu md:hidden">
            <div className="w-full logo-section float-left">
              {/* <Link
                to="/home"
                className="text-gray-700 hover:text-[#b4a77a] px-5 py-3 flex items-center transition duration-150 ease-in-out"
              >
                <img
                  src="images/landing/logo.png"
                  className="linger-logo"
                  alt="logo"
                />
              </Link> */}
            </div>
            <div className="mt-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-white-900 collapse-btn inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="flex logo-section">
            <Link
              to="/"
              className="sm:block hidden text-gray-700 ml-[-40px] hover:text-[#b4a77a] px-5 py-0 mt-[-20px] flex items-center transition duration-150 ease-in-out"
            >
              <img
                src="images/landing/logo4.png"
                className="linger-logo w-[80px] h-[80px]"
                alt="logo"
              />
            </Link>
            <div className="linger-name inline text-[#6F6D6D]">
              <span className="text-lg">LingEr</span><br />
              <span className="text-[12px] float-right">Media</span>
            </div>
          </div>
          <div className="flex items-center justify-between h-auto pr-10 py-0 hidden md:block">
            {/* Site navigation */}
            <nav className="flex nav-items md:flex-grow md:flex-row justify-between flex-col" style={{ marginTop: navTop }}>
              <div className="btn-login flex md:flex-row flex-col space-x-4">
                {/* <button className="text-gray-700 hover:text-[#b4a77a]">
                  Media
                </button>
                <button className="text-gray-700 mr-[4px] hover:text-[#b4a77a]">
                  Sign In
                </button>
                <div className="sign-slash m-auto">
                  <span>/</span>
                </div>
                <button className="text-gray-700 ml-[2px] hover:text-[#b4a77a]">
                  Sign Up
                </button> */}
                <ul className="nav-btns flex md:flex-row flex-col pl-5 gap-3 ml-[80px] flex-wrap items-center text-[13px] font-medium">
                  <li>
                    <div className="search-input flex items-center">
                      <FontAwesomeIcon icon={faSearch} className="w-[20px] h-[20px] mr-3" />
                      <input type="search" id="default-search" className="block p-3 pl-10 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="搜索..." required />
                    </div>
                  </li>
                  <li>
                    <Link
                      to="/media"
                      className="btn-sm text-gray-700 hover:text-[#b4a77a] ml-3"
                    >
                      <span className="uppercase nav-item text-lg">
                        媒体
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="btn-sm text-gray-700 hover:text-[#b4a77a] ml-3"
                    >
                      <span className="uppercase nav-item text-lg">
                        登入
                      </span>
                    </Link>
                  </li>
                  <span className="text-lg">/</span>
                  <li>
                    <Link
                      to="#"
                      className="btn-sm text-gray-700 hover:text-[#b4a77a] ml-3"
                    >
                      <span className="uppercase nav-item text-lg">
                        报名
                      </span>
                    </Link>
                  </li>
                </ul>
                {/* <button
                  className="bg-[#f31694] text-white px-4 py-3 border rounded-lg text-white"
                  onClick={connectwallet}
                >
                  钱包连接
                </button> */}
              </div>
            </nav>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden" id="mobile-menu">
                <div
                  ref={ref}
                  className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col"
                >
                  <ul className="flex md:flex-row flex-col pl-5 gap-3 flex-wrap items-center text-[13px] w-full font-medium">
                    <li className="w-full text-center">
                      <Link
                        to="/"
                        className="text-gray-700 hover:text-[#b4a77a] px-5 flex justify-center items-center transition duration-150 ease-in-out"
                      >
                        <span className="uppercase nav-item text-center">
                          主页
                        </span>
                      </Link>
                      <hr className="mt-3"></hr>
                    </li>
                    <li className="w-full text-center">
                      <Link
                        to="/media"
                        className="btn-sm text-gray-700 hover:text-[#b4a77a] ml-3 justify-center items-center transition duration-150 ease-in-out"
                      >
                        <span className="uppercase nav-item">媒体</span>
                      </Link>
                      <hr className="mt-3"></hr>
                    </li>
                    <div className="flex md:flex-row flex-col w-full space-y-4 mt-5">
                      <button className="bg-white-500 text-white px-4 py-3 border rounded-lg text-gray-700">
                        登入
                      </button>
                      <button className="bg-[#f31694] text-white px-4 py-3 border rounded-lg text-white">
                        钱包连接
                      </button>
                    </div>
                  </ul>
                </div>
              </div>
            )}
          </Transition>
        </div>
      </header>
    </>
  );
}

export default Header;
