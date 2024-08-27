"use client";
import useScreenWidth from "@/hooks/useScreenWidth";
import data from "@/data/data.json";
import Tabs from "@/components/Tabs";
import Accordion from "@/components/Accordian";

export interface Data {
  title: string;
  content: string;
}

export default function Page() {
  const screenWidth = useScreenWidth();
  const isMobile = screenWidth < 768;

  return (
    <div className="container mx-auto p-4">
      {isMobile ? <Accordion content={data} /> : <Tabs content={data} />}
    </div>
  );
}

// return (
//   <div>
//     {data.map((element) => {
//       const elementContent = element.content;
//       return (
//         <article
//           key={element.title}
//           className="flex flex-col items-center bg-white p-6 rounded shadow"
//         >
//           <div className="flex flex-grow flex-col items-center">
//             <img
//               src="https://via.placeholder.com/400x300"
//               alt="Placeholder"
//               className="w-[400px] h-[300px] mb-4 rounded"
//             />
//             <div
//               dangerouslySetInnerHTML={{ __html: elementContent }}
//               className="text-black text-center"
//             />
//           </div>
//           <button className="w-[150px] border-2 border-gray-700 rounded-full text-gray-700 font-bold mt-4 mx-auto px-4 py-2">
//             READ MORE
//           </button>
//         </article>
//       );
//     })}
//   </div>
// );
