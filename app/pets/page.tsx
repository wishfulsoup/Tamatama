"use client";

import React, { FC, useState } from "react";
import Header from "../components/Header";
import PetsCarousel from "../components/PetsCarousel";

const pets: FC = () => {
  return (
    <section className="text-theme-primary bg-theme m-0 p-0">
      <Header />
      <div className="w-[100%] h-[85vh] relative">
        <PetsCarousel />
        <div className="absolute right-[2rem] top-0 bg-transparent h-[10vh] w-[10%] text-[1.2rem] text-white text-theme-secondary">
          <div>
            재화 1 : 12345 <button>+</button>
          </div>
          <div>
            재화 2 : 12345 <button>+</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default pets;
