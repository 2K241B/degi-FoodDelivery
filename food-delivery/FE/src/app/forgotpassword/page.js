import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-[1440px] h-screen flex mx-auto items-center justify-center">
      <div className="w-[448px] h-[549px] ">
        <div className="flex flex-col p-8 gap-[48px]">
          <div className="w-full flex flex-col items-center">
            <h1 className="text-[28px]">Нууц үг сэргээх</h1>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <p>Имэйл </p>
              <Input placeholder="Имэйл хаягаа оруулна уу" />
            </div>
          </div>
          <div className="flex w-full flex-col gap-8  items-center">
            <Button className="w-full bg-[#EEEFF2] text-[#1C20243D] h-[48px]">
              Үргэлжлүүлэх
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
