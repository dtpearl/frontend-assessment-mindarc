"use client";
import data from "../data/data.json";
import { useState, useEffect } from "react";

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
}

export default function Home() {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768;
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((element) => {
            const elementContent = element.content;
            return (
              <div
                key={element.title}
                className="flex flex-col justify-space-between bg-white p-6 rounded shadow"
              >
                <div className="flex-grow flex-col">
                  <img
                    src="https://via.placeholder.com/400x300"
                    alt="Placeholder"
                    className="w-[400px] h-[300px] mb-4"
                  />
                  <div
                    dangerouslySetInnerHTML={{ __html: elementContent }}
                    className="text-black"
                  />
                </div>
                <button className="w[150px] border-2 border-gray-700 rounded-full text-gray-700 font-bold mt-4 mx-auto px-4 py-2 rounded">
                  READ MORE
                </button>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
