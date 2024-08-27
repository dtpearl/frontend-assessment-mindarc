import { Data } from "@/app/exercise-2/page";
import { useState } from "react";
import "../app/globals.css";

interface AccordianProps {
  content: Data[];
}

export default function Accordion({ content }: AccordianProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div>
      {content.map((item, index) => {
        const accordianTitle = content[index].title;
        const accordianContent = content[index].content;
        return (
          <div
            key={index}
            className="mb-2 border rounded"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <button className="w-full p-4 text-left bg-gray-200 hover:bg-gray-300 flex justify-between items-center">
              <span>{accordianTitle}</span>
              <span
                className={`chevron transition-transform duration-200 ease-in-out ${
                  index === activeIndex ? "chevron-up" : "chevron-down"
                }`}
              ></span>
            </button>

            <div
              className={`${
                activeIndex === index
                  ? "max-h-[max-content] opacity-100 duration-300 p-4"
                  : "max-h-0 opacity-0 duration-0 pointer-events-none"
              } transition-all ease-in-out`}
            >
              <h2 className={`text-xl font-bold`}>{accordianTitle}</h2>
              <div dangerouslySetInnerHTML={{ __html: accordianContent }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
