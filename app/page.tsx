"use client";

import { FC, useEffect } from "react";
import TopButton from "./components/Topbutton";
import Image from "next/image";

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="h-[100vh] text-white bg-theme w-[100%] flex items-center justify-center gap-[5rem] flex-col text-theme-primary slide-up overflow-hidden">
        <div className="relative w-[150rem] h-[100rem] flex flex-col justify-center items-center overflow-hidden">
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
            className="landing__img-1 object w-[35rem]"
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
      <section className="h-[100vh] w-[100%] flex justify-center items-center">
        <div className="bg-orange-500 h-[80vh] w-[80%] ">CHARACTER</div>
      </section>
      <section className="h-[100vh] w-[100%]  flex justify-center items-center">
        <div className="h-[90vh] w-[90%]  game-info">
          <div className="game-info__card bg-orange-500 m-[1rem] ml-[2rem]">
            INFO
          </div>
          <div className="game-info__card bg-orange-500 ml-auto m-[1rem] mr-[3rem]">
            INFO
          </div>
          <div className="game-info__card bg-orange-500 m-[1rem] ml-[2rem]">
            INFO
          </div>
        </div>
      </section>
      <section className="bg-black h-[35vh] px-[10vw] text-white text-[2rem] text-theme-primary">
        <div className="h-[90%] flex items-center justify-between">
          <div className="h-full w-[40%] text-[1.8rem] pt-[3%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            vero aut iusto sed repellat, voluptate laboriosam quae minima qui
            animi maxime libero dicta consequuntur nisi adipisci officia rerum
            eligendi rem.
          </div>
          <div className="flex items-center gap-[2vw] ">
            <div>
              <Image
                src="/img/tamagotchi.png"
                width={160}
                height={160}
                alt="tamagotchi image"
              />
            </div>
            <h1 className="font-bold text-[3rem]">
              たまごっち
              <br />
              <span>TAMAGOTCHI PROJECT</span>
            </h1>
          </div>
        </div>
        <div className="text-[1.5rem] font-sans">
          © Copyright 2024 &quot;Heago&quot; All rights reserved.
          <br />
          Contact us for business purposes : abcd@heago.com
        </div>
      </section>
      <section className="fixed right-[5%] bottom-[5%]">
        <TopButton />
      </section>
    </>
  );
};

export default Home;
