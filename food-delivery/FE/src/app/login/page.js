"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { axiosInstance } from "../../lib/utils";
import { EyeIcon, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import _ from "lodash";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  const [isHidePassword, setIsHidePassword] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const togglePasswordVisibility = () => setIsHidePassword((prev) => !prev);
  const Icon = isHidePassword ? EyeOff : EyeIcon;

  const handleOnChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const debounceFn = useMemo(() => _.debounce(handleOnChange, 500), []);

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
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col max-w-[448px] p-8 rounded-2xl gap-12 m-auto">
        <Label className="text-center text-[#0D1118] font-bold text-[28px]">
          Нэвтрэх
        </Label>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1 mb-2">
            <Label htmlFor="email">Имэйл</Label>
            <Input
              name="email"
              type="email"
              onChange={debounceFn}
              className="bg-[#F7F7F8] text-[#8B8E95]"
              placeholder="Имэйл хаягаа оруулна уу"
              required
            />
            <div className="flex flex-col gap-4">
              <div>
                <p>Имэйл </p>
                <Input placeholder="Имэйл хаягаа оруулна уу" />
              </div>
              <div>
                <p>Нууц үг </p>
                <Input placeholder="Нууц үгээ оруулна уу" type="password" />
              </div>
              <Link
                href="/forgotpassword"
                className="text-[14px] text-[#3F4145] text-end "
              >
                Нууц үг сэргээх
              </Link>
            </div>
            <div>
              <Label htmlFor="password">Нууц үг</Label>
              <Input
                name="password"
                type={isHidePassword ? "password" : "text"}
                onChange={debounceFn}
                className="bg-[#F7F7F8] text-[#8B8E95]"
                placeholder="Нууц үг"
                required
                endIcon={
                  <Icon
                    onClick={togglePasswordVisibility}
                    className="cursor-pointer"
                  />
                }
              />
            </div>
            <Label className="text-end">Нууц үг сэргээх</Label>
          </div>
          <div className="flex flex-col gap-8 text-center">
            <Button
              disabled={
                formData.email.length > 0 && formData.password.length > 0
                  ? false
                  : true
              }
              type="submit"
            >
              Нэвтрэх
            </Button>
            <Label>Эсвэл</Label>
            <Button className="bg-transparent border border-[#18BA51] text-[#272727]">
              Бүртгүүлэх
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
