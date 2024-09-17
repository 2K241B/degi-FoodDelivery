export const CategoryFeature = ({ svg, title, text }) => {
  return (
    <div className="w-[264px] h-[155px] flex flex-col border-[1px] border-solid border-[#D6D8DB] rounded-[16px] gap-[15px] p-4">
      <div>{svg}</div>
      <div>
        <p className="text-[18px] font-bold">{title}</p>
        <p className="text-[14px]">{text}</p>
      </div>
    </div>
  );
};
