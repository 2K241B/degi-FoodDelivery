import { Button } from "../ui/button";
import Picture from "../pizza.png";
import Image from "next/image";

export const FoodMenu = () => {
  const Data = ["Breakfast", "Soup", "Main Course", "Dessert"];

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

  return (
    <div>
      <div className="flex justify-between py-8 gap-[26px]">
        {Data.map((e, i) => {
          return <Button className="w-1/4 bg-white text-black">{e}</Button>;
        })}
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
};
