import Image from "next/image";
import Picture from "../pizza.png";
import { SvgStar } from "./svg";

const CardData = [
  {
    image: Picture,
    price: "100000",
    name: "guriltai shol",
  },
  {
    image: Picture,
    price: "100000",
    name: "guriltai shol",
  },
  {
    image: Picture,
    price: "100000",
    name: "guriltai shol",
  },
  {
    image: Picture,
    price: "100000",
    name: "guriltai shol",
  },
];

const TitleData = ["Хямдралтай", "Үндсэн хоол", "Салад ба зууш", "Амттан"];

export const Cards = () => {
  return (
    <div className="flex flex-col w-[1440px] mx-auto px-[120px] py-[122px] gap-[80px]">
      {TitleData.map((e, i) => {
        return (
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 p-4">
              <SvgStar />
              <h1 className="text-[22px] font-bold">{e}</h1>
            </div>
            <div className="flex w-full gap-[24px]">
              {CardData.map((e, i) => {
                return (
                  <div className="flex flex-col gap-[14px]">
                    <Image
                      src={e.image}
                      width={282}
                      height={186}
                      quality={100}
                      alt="Picture"
                      className="shadow-none"
                    />
                    <div className="px-2">
                      <p>{e.name}</p>
                      <p className="text-[#18BA51]">{e.price}₮</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
