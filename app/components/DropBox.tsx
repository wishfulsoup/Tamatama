"use client";

import { FC, useState } from "react";

const DropBox: FC = () => {
  const [view, setView] = useState(false);

  return (
    <div className="bg-gray-500 rounded-2xl h-[5rem] w-[24rem] flex justify-between items-center px-[2rem]">
      <div>
        <select className="text-[1.4rem] appearance-none bg-gray-500">
          <option value="모자">원하는 부위를 선택하세요</option>
          <option value="상의">모자</option>
          <option value="상의">상의</option>
          <option value="하의">하의</option>
          <option value="신발">신발</option>
          <option value="장신구">장신구</option>
        </select>
      </div>
      <button
        onClick={() => {
          setView(!view);
        }}
        className="border-l-2 border-gray-300 ml-[0.5] w-[15%] text-2xl"
      >
        {view ? "⌃" : "⌄"}
      </button>
    </div>
  );
};

export default DropBox;
