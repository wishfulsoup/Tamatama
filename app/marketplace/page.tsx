import React, { FC } from "react";
import Header from "../components/Header";
import GachaFooter from "../components/GachaFooter";

const Marketplace: FC = () => {
  return (
    <section className="bg-theme">
      <Header />
      <div className="h-[76.7vh] text-[1.6rem] text-white bg-header w-[100%] flex items-center justify-center"></div>
      <GachaFooter />
    </section>
  );
};

export default Marketplace;
