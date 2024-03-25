import React, { FC } from "react";
import Header from "../components/Header";

const Dressroom: FC = () => {
  return (
    <section className="bg-theme h-[100vh] width m-0 p-0">
      <Header />
      <div className="w-[100%] h-[85vh] relative">
        <div className="absolute right-[2rem] top-0 bg-transparent h-[10vh] w-[10%] text-[1.2rem] text-white text-theme-secondary">
          <div>
            <div>
              재화 1 : 12345 <button>+</button>
            </div>
            <div>
              재화 2 : 12345 <button>+</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dressroom;
