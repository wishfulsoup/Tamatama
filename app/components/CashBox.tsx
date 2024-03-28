import { FC } from "react";

const CashBox: FC = () => {
  return (
    <div className="h-[5vh] w-[12rem] text-[1.2rem] text-white text-theme-secondary">
      <div className="block">
        <div>
          재화 1 : 12345 <button>+</button>
        </div>
        <div>
          재화 2 : 12345 <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default CashBox;
