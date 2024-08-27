"use client";
import { Article } from "@/components/Article";
import { useScreenWidth, MOBILE_SCREEN_WIDTH } from "@/hooks/useScreenWidth";
import { useMemo } from "react";

export default function Home() {
  const screenWidth = useScreenWidth();
  const isMobile = useMemo(
    () => Boolean(screenWidth && screenWidth < MOBILE_SCREEN_WIDTH),
    [screenWidth]
  );

  return (
    <div className="bg-white">
      <header
        className={`flex flex-col justify-center items-center h-[650px] ${
          isMobile ? "bg-hero-background-mobile" : "bg-hero-background-desktop"
        } bg-cover bg-center text-white py-20 text-center`}
      >
        <h1 className="text-6xl font-bold mb-4">Hello Developer!</h1>
        <p className="text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </header>

      <main className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Article />
          <Article />
          <Article />
        </div>
      </main>
    </div>
  );
}
