import { Cards } from "@/components/my components/cardComponent";
import { CategoryFeature } from "@/components/my components/categoryFeatureComponent";
import { MainHeaderSection } from "@/components/my components/mainHeaderSection";

export default function Home() {
  return (
    <div>
      <MainHeaderSection />
      <div className="flex w-[1440px] mx-auto px-[120px] py-[122px] justify-between">
        <CategoryFeature />
      </div>
      <Cards />
    </div>
  );
}
