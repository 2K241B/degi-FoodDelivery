import { FacebookLogo } from "@/components/my components/facebookLogo";
import { FooterOverlay } from "@/components/my components/footerOverlay";
import { InstagramLogo } from "@/components/my components/instagramLogo";
import { PineconeLogoWhite } from "@/components/my components/pinoconeLogoWhite";
import { TwitterLogo } from "@/components/my components/twitterLogo";

export const Footer = () => {
  return (
    <div className="w-full relative flex items-end ">
      <div className="bg-[#18BA51] w-full flex top-0 items-end absolute">
        <div className="h-[545px] w-[1440px] mx-auto">
          <div className="w-full h-full flex flex-col gap-10 px-[120px] mt-[114px]">
            <div className="flex items-center gap-2 justify-center">
              <PineconeLogoWhite />
              <p className="text-[20px] text-white">Food Delivery</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Нүүр</p>
              <p>Холбоо барих</p>
              <p>Хоолны цэс</p>
              <p>Үйлчилгээний нөхцөл</p>
              <p>Хүргэлтийн бүс</p>
              <p>Нууцлалын бодлого</p>
            </div>
            <div className="flex items-center gap-[18px] justify-center">
              <FacebookLogo />
              <InstagramLogo />
              <TwitterLogo />
            </div>
            <span className="w-full h-[1px] bg-white" />
            <div className="w-full flex items-center flex-col gap-2 text-white ">
              <p>© 2024 Pinecone Foods LLC </p>
              <p>Зохиогчийн эрх хуулиар хамгаалагдсан.</p>
            </div>
          </div>
        </div>
        <div className="w-full h-full absolute">
          <FooterOverlay />
        </div>
      </div>
    </div>
  );
};
