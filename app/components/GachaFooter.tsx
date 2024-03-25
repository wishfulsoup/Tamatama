import { FC } from "react";

const GachaFooter: FC = () => {
  return (
    <footer className="min-h-[8rem] h-[12vh] width text-[2rem] text-theme upper text-theme-primary fixed bottom-0">
      <div className="width flex items-center justify-center mx-auto text-center  ">
        <div className="w-[15%]">
          <a href="/marketplace/gacha" className="btn btn-line">
            Gacha
          </a>
        </div>
        <div className="w-[15%]">
          <a href="/marketplace/shop" className="btn btn-line">
            shop
          </a>
        </div>
        <div className="w-[15%]">
          <a href="#" className="btn btn-line">
            (PET)
          </a>
        </div>
        <div className="w-[15%]">
          <a href="#" className="btn btn-line">
            (ETC...)
          </a>
        </div>
      </div>
    </footer>
  );
};

export default GachaFooter;
