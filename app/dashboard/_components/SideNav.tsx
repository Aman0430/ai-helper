"use client";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { History, LucideHome, Settings2, Wallet2Icon } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const SideNav = (props: Props) => {
  const pathname = usePathname();
  const MenuList = [
    {
      name: "Dashboard",
      icon: LucideHome,
      path: "/dashboard",
      color: "text-pink-800",
      colorHover: "hover:text-pink-900 hover:bg-pink-100",
      index: 1,
    },
    {
      name: "History",
      icon: History,
      path: "/dashboard/history",
      color: "text-blue-800",
      colorHover: "hover:text-blue-900 hover:bg-blue-100",
      index: 2,
    },
    {
      name: "Billing",
      icon: Wallet2Icon,
      path: "/dashboard/billing",
      color: "text-green-800",
      colorHover: "hover:text-green-900 hover:bg-green-100",
      index: 3,
    },
    {
      name: "Settings",
      icon: Settings2,
      path: "/setting",
      color: "text-emerald-800",
      colorHover: "hover:text-emerald-900 hover:bg-emerald-100",
      index: 4,
    },
  ];

  return (
    <div className="h-screen p-5 shadow-sm border flex flex-col justify-between bg-emerald-50">
      <div className="flex flex-col gap-5">
        <div className="flex justify-start items-end gap-1">
          <Image src={"/logo.svg"} height={40} width={40} alt="logo" />
          <h2 className="text-gray-700 text-2xl font-semibold">NEXUS</h2>
        </div>
        <Separator className="border-b-2 border-primary/40" />

        <div>
          {MenuList.map((menu, index) => (
            <div
              className={cn(
                menu.colorHover,
                "flex gap-2 mb-3 p-3 rounded-md transition cursor-pointer",
                pathname === menu.path && "text-gray-900 bg-rose-100"
              )}
              key={index}
            >
              <menu.icon className={cn(menu.color)} />
              <h2>{menu.name}</h2>
            </div>
          ))}
        </div>
      </div>
      <div>Progress bar</div>
    </div>
  );
};

export default SideNav;
