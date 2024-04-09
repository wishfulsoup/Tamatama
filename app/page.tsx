"use client";

import { FC, useEffect } from "react";
import LoginPage from "./components/LoginPage";
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
    <div className="overflow-hidden">
      <section className="h-[95vh] text-white bg-theme w-[100%] flex items-center justify-center gap-[5rem] flex-col text-theme-primary mt-[5rem] slide-up overflow-hidden">
        <div className="relative w-[150rem] h-[100rem] flex flex-col justify-center items-center overflow-hidden">
          <h1 className="text-[7rem] object landing__title" data-value="1">
            たまごっち
            <br />
            <span className="title">TAMAGOTCHI PROJECT</span>
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
            <a href="#popup" className="btn btn-line">
              LOGIN
            </a>
            <LoginPage />
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
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__content-desc">
            <ul>
              <h5 className="footer__title">TAMAGOTCHI</h5>
              <li>About</li>
              <li>Press</li>
              <li>Governance</li>
            </ul>
          </div>

          <div className="footer__content-desc">
            <Image
              src="/img/tamagotchi.png"
              width={160}
              height={160}
              alt="tamagotchi image"
            />
          </div>
          <div className="footer__content-desc">
            <ul>
              <h5 className="footer__title">TAMAGOTCHI</h5>
              <li>About</li>
              <li>Press</li>
              <li>Governance</li>
            </ul>
          </div>
        </div>
        <div className="footer__contact">
          <div className="footer__contact-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </div>
          <div className="footer__contact-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
        </div>
        <div className="footer__copyright">
          Copyright &copy; 2024 Tamagotchi
          <span className="footer__copyright-span"> All Rights Reserved</span>
        </div>
      </footer>
      <section className="fixed right-[5%] bottom-[5%]">
        <TopButton />
      </section>
    </div>
  );
};

export default Home;
