import { AddFoodDialog } from "@/components/my components/addFoodDialog";
import { Category } from "@/components/my components/category";

export default function Home() {
  return (
    <div className="w-[1280px] flex mx-auto justify-center">
      <Category />
      <div className="w-3/4">
        <AddFoodDialog />
      </div>
    </div>
  );
}
