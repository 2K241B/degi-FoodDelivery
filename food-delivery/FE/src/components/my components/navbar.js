import { Basket } from "../Logos/basket";
import { PineconeLogo } from "../Logos/pineconeLogo";
import { ProfieLogo } from "../Logos/profileLogo";

export const Navbar = () => {
  const data = ["НҮҮР", "ХООЛНЫ ЦЭС", "ХҮРГЭЛТИЙН БҮС"];

  return (
    <div className="w-[1440px] mx-auto flex justify-between px-6 py-2">
      <div className="flex items-center">
        <PineconeLogo />
        {data.map((e, i) => {
          <p className="text-black font-[16px] p-4">{e}</p>;
        })}
      </div>
      <div className="flex gap-2">
        <div className="flex gap-2 items-center px-4 py-2">
          <Basket />
          <p>Сагс</p>
        </div>
        <div className="flex gap-2 items-center px-4 py-2">
          <ProfieLogo />
          <p>Нэвтрэх</p>
        </div>
      </div>
    </div>
  );
};
