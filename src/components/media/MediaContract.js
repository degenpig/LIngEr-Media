import React, { useState, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

function MediaContract(props) {
  const [date, setDate] = useState(new Date());
  function refreshClock() {
    setDate(new Date());
  }
  // The function that get the real prices(BNB Unit Price, CNY Unit Price, Amount3K, Amount5K)
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <>
      <div className="flex flex-col bg-story w-full items-center justify-center mt-16 mb-24">
        <div className="flex flex-col  justify-center items-center redirect-home our-story text-black">
          {/* <div className="contact-title text-center lg:w-full w-4/5">
            <h2 className="md:text-[3.5rem] text-[2rem] text-[#1f1f1f] font-graphiksemibold">
              合同部分
            </h2>
          </div> */}
          {/* <div className="mt-6 mb-6 text-[1.5rem] text-red-500">
            <span>{date.toLocaleTimeString()}</span>
          </div> */}
          <div className="flex flex-col w-[400px]">
            <div className="flex flex-row text-center items-center justify-center">
              <div className="text-[#592f5e] w-1/2 text-right text-[1.5em]">
                BNB单价:<span>&nbsp;</span>
              </div>
              <div className="data w-1/2 text-left text-[1.5em] text-[#da9e0b]">
                ${props.data.bnb_to_usd}
              </div>
            </div>
            <div className="flex flex-row text-center items-center justify-center">
              <div className="text-[#592f5e] w-1/2 text-right text-[1.5em]">
                人民币单价:<span>&nbsp;</span>
              </div>
              <div className="data w-1/2 text-left text-[1.5em] text-[#da9e0b]">
                ${props.data.CnyUsd}
              </div>
            </div>
            <div className="flex flex-row text-center items-center justify-center">
              <div className="text-[#592f5e] w-1/2 text-right text-[1.5em]">
                数量（3000元):<span>&nbsp;</span>
              </div>
              <div className="data w-1/2 text-left text-[1.5em] text-[#da9e0b]">
                {props.data.amount3k}
              </div>
            </div>
            <div className="flex flex-row text-center items-center justify-center">
              <div className="text-[#592f5e] w-1/2 text-right text-[1.5em]">
                数量（5000元):<span>&nbsp;</span>
              </div>
              <div className="data w-1/2 text-left text-[1.5em] text-[#da9e0b]">
                {props.data.amount5k}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const people = [
  { name: "3000" },
  { name: "5000" },
  { name: "8000" },
  { name: "12000" },
];

function DropdownCurrency() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className="top-16 w-24">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 w-36 right-0 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
export default MediaContract;
