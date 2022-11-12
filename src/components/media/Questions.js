import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import response from "../../utils/demo/questions";
import ReactDOM from "react-dom";
import { Collapse } from "react-collapse";
import { CloseIcon } from "../../icons";

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
    <div className="m-5" id={props.id}>
      <div
        className="flex flex-row justify-between"
        onClick={onDropdownClicked}
      >
        <div className="text-gray-800 md:text-xl text-lg font-semibold hover:text-red-600 font-['Graphik Web']">
          {props.title}
        </div>
        <button className="text-gray-800 text-2xl">
          {state.isDropdownOpen ? (
            <CloseIcon className="rotate-45 transition duration-0"></CloseIcon>
          ) : (
            <CloseIcon className="transition duration-0"></CloseIcon>
          )}
        </button>
      </div>
      <Collapse isOpened={state.isDropdownOpen}>
        <div className="mt-6 text-gray-700 text-base w-9/12">
          {props.children}
        </div>
      </Collapse>
    </div>
  );
};

function Questions() {
  return (
    <>
      <div className="flex flex-col bg-story w-full ml-auto mr-auto max-w-5xl my-24">
        <div className="font-graphiksemibold m-5 text-gray-800 md:text-3xl text-[1.375rem]">
          Frequently asked questions
        </div>
        <div className="flex flex-col md:w-9/12 w-full mr-8">
          {response.map((data, index) => (
            <DropdownItem title={data.title} theme="dark">
              {data.answer}
            </DropdownItem>
          ))}
        </div>
      </div>
    </>
  );
}

export default Questions;
