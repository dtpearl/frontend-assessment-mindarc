"use client";
import useScreenWidth from "@/hooks/useScreenWidth";
import data from "@/data/data.json";

export default function Home() {
  const screenWidth = useScreenWidth();
  const isMobile = screenWidth < 768;

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
          {data.map((element) => {
            const elementContent = element.content;
            return (
              <article
                key={element.title}
                className="flex flex-col items-center bg-white p-6 rounded shadow"
              >
                <div className="flex flex-grow flex-col items-center">
                  <img
                    src="https://via.placeholder.com/400x300"
                    alt="Placeholder"
                    className="w-[400px] h-[300px] mb-4 rounded"
                  />
                  <div
                    dangerouslySetInnerHTML={{ __html: elementContent }}
                    className="text-black text-center"
                  />
                </div>
                <button className="w-[150px] border-2 border-gray-700 rounded-full text-gray-700 font-bold mt-4 mx-auto px-4 py-2">
                  READ MORE
                </button>
              </article>
            );
          })}
        </div>
      </main>
    </div>
  );
}
