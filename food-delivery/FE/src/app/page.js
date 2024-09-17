import { CategoryFeature } from "@/components/my components/categoryFeatureComponent";
import { MainHeaderSection } from "@/components/my components/mainHeaderSection";
import { SvgBook, SvgClock, SvgFood } from "@/components/my components/svg";

export default function Home() {
  const Data = [
    {
      title: "Хүргэлтийн төлөв хянах",
      text: "Захиалга бэлтгэлийн явцыг хянах",
      svg: <SvgBook />,
    },
    {
      title: "Шуурхай хүргэлт",
      text: "Захиалга бэлтгэлийн явцыг хянах",
      svg: <SvgClock />,
    },
    {
      title: "Эрүүл, баталгаат орц",
      text: "Захиалга бэлтгэлийн явцыг хянах",
      svg: <SvgFood />,
    },
    {
      title: "Хоолны өргөн сонголт",
      text: "Захиалга бэлтгэлийн явцыг хянах",
      svg: <SvgBook />,
    },
  ];

  return (
    <div>
      <MainHeaderSection />
      <div className="flex w-[1440px] mx-auto px-[120px] py-[122px] justify-between">
        {Data.map((e, i) => {
          return (
            <CategoryFeature
              title={Data[i].title}
              text={Data[i].text}
              svg={Data[i].svg}
            />
          );
        })}
      </div>
    </div>
  );
}
