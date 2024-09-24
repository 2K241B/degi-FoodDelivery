"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CldUploadButton } from "next-cloudinary";

export const AddFoodDialog = () => {
  return (
    <Dialog modal={false}>
      <DialogTrigger asChild>
        <Button variant="outline">Add new food</Button>
      </DialogTrigger>
      <DialogContent onInteractOutside={(event) => event.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Create Food</DialogTitle>
        </DialogHeader>
        <div className="border-solid border-[1px] border-[#E0E0E0] w-full" />
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-2 px-4">
            <Label htmlFor="food-name" className="text-[14px] font-medium">
              Хоолны нэр
            </Label>
            <Input
              placeholder="Enter food name"
              id="food-name"
              className="bg-[#F4F4F4] h-[56px]"
            />
          </div>
          <div className="flex flex-col gap-2 px-4">
            <Label htmlFor="food-category" className="text-[14px] font-medium">
              Хоолны ангилал
            </Label>
            <Select>
              <SelectTrigger className="bg-[#F4F4F4] h-[56px] w-full">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="soup">Soup</SelectItem>
                <SelectItem value="salad">Salad</SelectItem>
                <SelectItem value="dessert">Dessert</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2 px-4">
            <Label
              htmlFor="food-ingredients"
              className="text-[14px] font-medium"
            >
              Хоолны орц
            </Label>
            <Input
              placeholder="Enter ingredients"
              id="food-ingredients"
              className="bg-[#F4F4F4] h-[56px]"
            />
          </div>
          <div className="flex flex-col gap-2 px-4">
            <Label htmlFor="food-price" className="text-[14px] font-medium">
              Хоолны үнэ
            </Label>
            <Input
              placeholder="Enter price"
              id="food-price"
              className="bg-[#F4F4F4] h-[56px]"
            />
          </div>
          <div className="flex flex-col gap-2 px-4">
            <Label className="flex items-center text-[14px] gap-2 font-medium">
              <Switch id="food-discount" />
              Хямдралтай эсэх
            </Label>
            <Input
              placeholder="Enter discount (if any)"
              id="food-discount-amount"
              className="bg-[#F4F4F4] h-[56px]"
            />
          </div>
          <div className="flex flex-col gap-2 px-4">
            <Label htmlFor="food-image" className="text-[14px] font-medium">
              Хоолны зураг
            </Label>
            <div className="flex flex-col p-2 items-center justify-center w-[248px] h-[122px] bg-[#1C20240A] rounded-[8px] border-dashed border-[1px] border-[#B6B8BD] gap-2">
              <p className="font-bold text-[#525252]">Add image for the food</p>
              <CldUploadButton
                className="z-50"
                uploadPreset="Food-delivery-images"
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button className="bg-white text-[#3F4145] shadow-none" type="clear">
            Clear
          </Button>
          <Button type="submit">Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
