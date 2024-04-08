"use client";

import React, { FC, useState } from "react";
import items from "./db/items.json";
import { FaSearch } from "react-icons/fa";

interface Item {
  name: string;
  value: string;
}

const DropBox: FC = () => {
  const [view, setView] = useState<boolean>(false);
  const [selectedValue, setSelectValue] = useState<string>("");
  const [result, setResult] = useState<Item[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const resultItems = items[selectedValue] || []; // Check if result exists
    setResult(resultItems);
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value);
  };

  return (
    <div className=" h-[64vh]">
      <div className="bg-gray-600 rounded-2xl h-[6rem] w-[26rem] pl-[1rem] flex items-center ">
        <form className="" onSubmit={handleSubmit}>
          <select
            className="text-[1.6rem] appearance-none w-[18rem] mr-[1.0rem] text-center font-bold bg-gray-600 mb-[2rem] mt-[2rem]"
            onChange={handleChange}
          >
            <option value="">Product types</option>
            <option value="head">Head</option>
            <option value="top">Top</option>
            <option value="pants">Pants</option>
            <option value="shoes">Shoes</option>
            <option value="accessories">Accessories</option>
          </select>
          <button
            type="submit"
            onClick={() => {
              setView(!view);
            }}
            className="w-[5rem] h-[3rem] bg-gray-600 relative"
          >
            <FaSearch className="absolute w-[3rem] h-[3rem] top-[-0.5rem] ml-[1rem]" />
          </button>
        </form>
      </div>
      <div>
        {result.length > 0 && (
          <div>
            <ul className="flex flex-col items-center overflow-scroll h-[48vh] shop-items-scroll">
              {result.map((item, index) => (
                <button
                  key={index}
                  className="bg-gray-500 rounded-2xl min-h-[5rem] min-w-[20rem] flex items-center justify-center mt-[5vh]"
                >
                  <div>{item.item}</div>
                </button>
              ))}
            </ul>
          </div>
        )}
      </div>
      {result.length > 0 && (
        <button className="bg-gray-600 rounded-2xl h-[6rem] w-[26rem] flex items-center justify-center mt-[1rem] hover:text-white active:text-white ">
          Resets
        </button>
      )}
    </div>
  );
};

export default DropBox;
