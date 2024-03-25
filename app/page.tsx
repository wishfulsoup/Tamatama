import { FC } from "react";

const Home: FC = () => {
  return (
    <section className="h-[100vh] text-white bg-theme w-[100%] flex items-center justify-center gap-[5rem] flex-col root-fontstyle">
      <div>
        <h1 className="text-[7rem] ">TAMAGOCHI PROJECT</h1>
      </div>
      <div className="text-[5rem] flex gap-[3rem]">
        <a href="/pets" className="btn btn-line">
          PLAY
        </a>
        <a href="#" className="btn btn-line">
          LOGIN
        </a>
      </div>
    </section>
  );
};

export default Home;
