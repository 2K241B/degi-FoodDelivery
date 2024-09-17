import Image from "next/image";
import Picture from "../headerFoodPic.png";
import { HeaderOverlay } from "@/components/my components/headerOverlay";

export const MainHeaderSection = () => {
  return (
    <div className="w-full h-[788px] bg-[#18BA51] flex justify-center relative">
      <div className="w-[1440px] h-full flex px-[120px] items-center mx-auto justify-between absolute">
        <div className="w-[384px] flex flex-col gap-[23px]">
          <h1 className="text-white text-[55px] font-semibold leading-none">
            Pinecone Food delivery
          </h1>
          <div className="w-full h-[1px] bg-white" />
          <p className="text-white">
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <Image
          src={Picture}
          width={588}
          height={438}
          quality={100}
          alt="Picture of the author"
        />
      </div>
      <HeaderOverlay />
    </div>
  );
};
