export const Category = ({ categoryName }) => {
  const Data = ["Breakfast", "Soup", "Main course"];

  return (
    <div className="flex flex-col p-6 gap-10 w-1/4">
      <h1 className="text-[22px] font-bold">Food menu</h1>
      <div className="flex flex-col gap-6">
        {Data.map((e, i) => {
          return (
            <div className="py-2 px-[18px] border-[1px] border-solid border-[#D6D8DB] rounded-[8px]">
              {e}
            </div>
          );
        })}
      </div>
    </div>
  );
};
