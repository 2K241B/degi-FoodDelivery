"use client";

import React from "react";
import { SvgPinecone, SvgProfile, SvgSags, SvgSearch } from "./svg.js";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Input } from "../ui/input.jsx";

const Links = [
  {
    title: "НҮҮР",
    href: "/",
  },
  {
    title: "ХООЛНЫ ЦЭС",
    href: "menu",
  },
  {
    title: "ХҮРГЭЛТИЙН БҮС",
    href: "address",
  },
];
const LinksStyles = {
  isSelected: "px-4 py-3 font-bold text-[14px] text-[#18BA51]",
  notSelected: "px-4 py-3 font-bold text-[14px]",
};

const StyleSvg = "text-[14px] font-bold flex items-center gap-2 px-4 py-2";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="px-6 py-2 flex justify-between items-center min-w-[1258px] m-auto">
      <div className="flex items-center gap-6">
        <Link href="/">
          <SvgPinecone />
        </Link>
        <div>
          {Links.map((link, i) => (
            <Link
              key={link.title + i}
              href={`/${link.href}`}
              className={
                pathname === link.href
                  ? LinksStyles.isSelected
                  : LinksStyles.notSelected
              }
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex items-center border-[1px] px-4 py-2 gap-2 border-black rounded-[8px]">
          <SvgSearch />
          <Input
            placeholder="Хайх"
            className="text-[#8B8E95] border-none shadow-none px-1 py-0 min-w-[196px] max-h-[24px]"
          />
        </div>
        <div className={StyleSvg}>
          <SvgSags />
          <p>Сагс</p>
        </div>
        <div className={StyleSvg}>
          <SvgProfile />
          <p>Нэвтрэх</p>
        </div>
      </div>
    </div>
  );
};
