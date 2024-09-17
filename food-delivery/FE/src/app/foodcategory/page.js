import { AddFoodDialog } from "@/components/my components/addFoodDialog";
import { FoodMenu } from "@/components/my components/foodMenu";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-[1440px] flex mx-auto items-center justify-center">
      <FoodMenu />
      <AddFoodDialog />
    </div>
  );
}
