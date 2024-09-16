import { CategoryFeature } from "@/components/my components/categoryFeatureComponent";
import { MainHeaderSection } from "@/components/my components/mainHeaderSection";

export default function Home() {
  const Data = [
    {
      title: "Хүргэлтийн төлөв хянах",
      text: "Захиалга бэлтгэлийн явцыг хянах",
    },
  ];

  return (
    <div>
      <MainHeaderSection />
      <CategoryFeature />
    </div>
  );
}
