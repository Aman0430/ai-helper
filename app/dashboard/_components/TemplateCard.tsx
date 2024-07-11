"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { TEMPLATE } from "./TemplateListSection";
import Link from "next/link";

export function TemplateCard(item: TEMPLATE) {
  return (
    <Link href={"/dashboard/content/" + item.slug}>
      <div className="mt-2">
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-primary-foreground min-h-[300px] lg:min-h-[350px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-gray-900">
              {item.name}
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-700">
              {item.desc}
            </p>
          </div>
          <Image
            src={item.icon}
            width={50}
            height={50}
            alt="items"
            className="absolute -right-85 md:-right-[3%] lg:-right-[1%] -bottom-70 object-contain"
          />
        </WobbleCard>
      </div>
    </Link>
  );
}
