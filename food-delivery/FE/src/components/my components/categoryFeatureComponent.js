import { SvgBook, SvgClock, SvgFood } from "./svg";

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

export const CategoryFeature = () => {
  return (
    <div className="flex gap-[47px]">
      {Data.map((e, i) => {
        return (
          <div className="w-[264px] h-[155px] flex flex-col border-[1px] border-solid border-[#D6D8DB] rounded-[16px] gap-[15px] p-4">
            <div>{e.svg}</div>
            <div>
              <p className="text-[18px] font-bold">{e.title}</p>
              <p className="text-[14px]">{e.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
