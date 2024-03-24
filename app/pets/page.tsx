"use client";

import React, { FC, useState } from "react";
import Header from "../components/Header";
import PetsCarousel from "../components/PetsCarousel";

const pets: FC = () => {
  return (
    <section className="root-fontstyle bg-theme m-0 p-0">
      <Header />
      <div className="w-[100%] h-[85vh] relative">
        <PetsCarousel />
      </div>
    </section>
  );
};

export default pets;
