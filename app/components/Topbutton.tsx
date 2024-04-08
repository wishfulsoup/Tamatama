"use client";

import { FC, useEffect, useState } from "react";

const TopButton: FC = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);
  return (
    showButton && (
      <>
        <button
          className=" h-[6rem] w-[6rem] border-2 rounded-full border-whitetext-[3rem] text-[2.0rem] text-white"
          onClick={scrollToTop}
          type="button"
        >
          TOP
        </button>
      </>
    )
  );
};

export default TopButton;
