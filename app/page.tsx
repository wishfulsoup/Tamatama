"use client";

import { FC, useEffect } from "react";

const Home: FC = () => {
  useEffect(() => {
    const parallex = (e: MouseEvent) => {
      document.querySelectorAll(".object").forEach((move) => {
        const moveElement = move as HTMLElement;
        const movingValue = moveElement.getAttribute("data-value");
        const x = (e.clientX * parseFloat(movingValue!)) / 180;
        const y = (e.clientY * parseFloat(movingValue!)) / 180;

        moveElement.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener("mousemove", parallex);

    return () => {
      document.addEventListener("mousemove", parallex);
    };
  }, []);

  return (
    <section className="h-[100vh] text-white bg-theme w-[100%] flex items-center justify-center gap-[5rem] flex-col text-theme-primary slide-up overflow-hidden">
      <div className="relative w-[100%] h-[100%] flex flex-col justify-center items-center overflow-hidden">
        <h1 className="text-[7rem] object landing__title" data-value="1">
          たまごっち
          <br />
          <span className="">TAMAGOTCHI PROJECT</span>
        </h1>

        <img
          src="../img/tamago.png"
          className="landing__img-2 object w-[26rem]"
          data-value="-4"
          alt=""
        />
        <img
          src="../img/alien_gun.png"
          className="landing__img-3 object w-[35rem] "
          data-value="-1"
          alt=""
        />
        <img
          src="../img/tamagotchi.png"
          className="landing__img-1 object w-[35rem] slide-down"
          data-value="5"
          alt=""
        />
        <div className="text-[5rem] flex pt-12 gap-[3rem]">
          <a href="/pets" className="btn btn-line">
            PLAY
          </a>
          <a href="#" className="btn btn-line">
            LOGIN
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
