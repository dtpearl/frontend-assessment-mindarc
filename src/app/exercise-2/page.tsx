"use client";
import { useScreenWidth, MOBILE_SCREEN_WIDTH } from "@/hooks/useScreenWidth";
import data from "@/data/data.json";
import Tabs from "@/components/Tabs";
import Accordion from "@/components/Accordian";
import { useMemo } from "react";

export interface Data {
  title: string;
  content: string;
}

export default function Page() {
  const screenWidth = useScreenWidth();
  const isMobile = useMemo(
    () => Boolean(screenWidth && screenWidth < MOBILE_SCREEN_WIDTH),
    [screenWidth]
  );

  return (
    <div className="container mx-auto p-4">
      {isMobile ? <Accordion content={data} /> : <Tabs content={data} />}
    </div>
  );
}
