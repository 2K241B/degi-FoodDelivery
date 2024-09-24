"use client";
import { EyeIcon, EyeOff } from "@/components/my components/svg";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [isHidePassword, setIsHidePassword] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    password: "",
  });
  const togglePasswordVisibility = () => setIsHidePassword((prev) => !prev);
  const Icon = isHidePassword ? EyeOff : EyeIcon;

  // const handleOnChange = (event) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     [event.target.name]: event.target.value,
  //   }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });
      if (response.status === 200) router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <from
      onSubmit={handleSubmit}
      className="w-[1440px] flex mx-auto items-center justify-center"
    >
      <div className="w-[448px] ">
        <div className="flex flex-col p-8 gap-[48px]">
          <div className="w-full flex flex-col items-center">
            <h1 className="text-[28px]">Бүртгүүлэх</h1>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <p className="text-[14px]">Нэр </p>
              <Input
                className="h-[48px]"
                placeholder="Нэрээ оруулна уу"
                required
              />
            </div>
            <div>
              <p className="text-[14px]">И-мэйл </p>
              <Input
                className="h-[48px]"
                placeholder="И-мэйл хаягаа оруулна уу"
                required
              />
            </div>
            <div>
              <p className="text-[14px]">Хаяг </p>
              <Input
                className="h-[48px]"
                placeholder="Та хаягаа оруулна уу"
                required
              />
            </div>
            <div>
              <p className="text-[14px]">Нууц үг </p>
              <Input
                className="h-[48px]"
                type="password"
                placeholder="Нууц үгээ оруулна уу"
                required
                endIcon={
                  <Icon
                    onClick={togglePasswordVisibility}
                    className="cursor-pointer"
                  />
                }
              />
            </div>
            <div>
              <p className="text-[14px]">Нууц үг давтах </p>
              <Input
                className="h-[48px]"
                type="password"
                placeholder="Нууц үгээ оруулна уу"
                required
                endIcon={
                  <Icon
                    onClick={togglePasswordVisibility}
                    className="cursor-pointer"
                  />
                }
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox />
              <p className="text-[14px] text-[#3F4145] ">
                Үйлчилгээний нөхцөл зөвшөөрөх
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-8  items-center">
            <Button
              className="w-full bg-[#EEEFF2] text-[#1C20243D] h-[48px]"
              disabled={
                formData.name.length > 0 &&
                formData.phoneNumber.length > 0 &&
                formData.email.length > 0 &&
                formData.password.length > 0
                  ? false
                  : true
              }
            >
              Бүртгүүлэх
            </Button>
          </div>
        </div>
      </div>
    </from>
  );
}
