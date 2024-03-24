import { FC } from "react";

const GachaFooter: FC = () => {
  return (
    <footer className="min-h-[8rem] h-[12vh] text-[4rem] flex items-center justify-center gap-[5vw] bg-gray-600">
      <button className="btn btn-line">Gacha</button>
      <button className="btn btn-line">shop</button>
      <button className="btn btn-line">(PET)</button>
      <button className="btn btn-line">(ETC...)</button>
    </footer>
  );
};

export default GachaFooter;
