import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="w-[1440px]3 flex mx-auto items-center justify-center">
      <div className="w-[448px] ">
        <div className="flex flex-col p-8 gap-[48px]">
          <div className="w-full flex flex-col items-center">
            <h1 className="text-[28px]">Бүртгүүлэх</h1>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <p className="text-[14px]">Нэр </p>
              <Input className="h-[48px]" placeholder="Нэрээ оруулна уу" />
            </div>
            <div>
              <p className="text-[14px]">И-мэйл </p>
              <Input
                className="h-[48px]"
                placeholder="И-мэйл хаягаа оруулна уу"
              />
            </div>
            <div>
              <p className="text-[14px]">Хаяг </p>
              <Input className="h-[48px]" placeholder="Та хаягаа оруулна уу" />
            </div>
            <div>
              <p className="text-[14px]">Нууц үг </p>
              <Input
                className="h-[48px]"
                type="password"
                placeholder="Нууц үгээ оруулна уу"
              />
            </div>
            <div>
              <p className="text-[14px]">Нууц үг давтах </p>
              <Input
                className="h-[48px]"
                type="password"
                placeholder="Нууц үгээ оруулна уу"
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox />
              <p className="text-[14px] text-[#3F4145] ">
                Үйлчилгээний нөхцөо зөвшөөрөх
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-8  items-center">
            <Button className="w-full bg-[#EEEFF2] text-[#1C20243D] h-[48px]">
              Бүртгүүлэх
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
