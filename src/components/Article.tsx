export const Article = () => {
  return (
    <article className="flex flex-col items-center bg-white p-6 rounded shadow">
      <div className="flex flex-grow flex-col items-center">
        <img
          src="https://via.placeholder.com/400x300"
          alt="Placeholder"
          className="w-[400px] h-[300px] mb-4 rounded"
        />
        <div className="text-black text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eligendi
          magni molestias, eaque officia in sint blanditiis, quia odit
          laboriosam ut, corrupti eum sit soluta incidunt labore repellat iure
          quas.
        </div>
      </div>
      <button className="w-[150px] border-2 border-gray-700 rounded-full text-gray-700 font-bold mt-4 mx-auto px-4 py-2">
        READ MORE
      </button>
    </article>
  );
};
