import React, { useState, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

function MediaStart({ getUnitPrices }) {
  const [data, setData] = useState("");

  const childToParent = (data) => {
    console.log("what is changed: ", data);
    getUnitPrices(data);
  };

  return (
    <>
      <div className="flex flex-col bg-story w-full items-center justify-center mt-24">
        <div className="flex flex-col  justify-center items-center redirect-home our-story text-black">
          <div className="contact-title text-center lg:w-full w-4/5">
            <h2 className="md:text-[3.5rem] text-[2rem] text-[#1f1f1f] font-graphiksemibold">
              找一个适合你的女演员
            </h2>
          </div>
          <div className="flex flex-row text-center items-center justify-center">
            <span className="text-[#f80384] text-[1em]">单价变化</span>
            <div className="ml-2">
              <DropdownCurrency
                childToParent={childToParent}
              ></DropdownCurrency>
            </div>
            <div className="unit-money ml-2">
              <span>元</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const prices = [
  { value: "3000" },
  { value: "5000" },
  { value: "8000" },
  { value: "12000" },
];

function DropdownCurrency({ childToParent }) {
  const [selected, setSelected] = useState(prices[0]);
  useEffect(() => {
    childToParent(selected);
  }, [selected]);

  return (
    <div className="top-16 w-24">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.value}</span>
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
              {prices.map((price, priceIdx) => (
                <Listbox.Option
                  key={priceIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={price}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {price.value}
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
export default MediaStart;
