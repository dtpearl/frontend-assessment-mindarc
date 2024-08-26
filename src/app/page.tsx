import data from "../data/data.json";

export default function Home() {
  return (
    <body>
      <header className="flex flex-col justify-center items-center h-[650px] bg-hero-background-desktop bg-cover bg-center text-white py-20 text-center ">
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
              <div className="bg-white p-6 rounded shadow">
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="Placeholder"
                  className="w-[400px] h-[300px] mb-4"
                />
                {elementContent}
                <button className="border border-gray-700 text-gray-700 px-4 py-2 rounded">
                  READ MORE
                </button>
              </div>
            );
          })}
        </div>
      </main>
    </body>
  );
}
