import { Data } from "@/app/exercise-2/page";
import { useState } from "react";

interface TabsProps {
  content: Data[];
}

export default function Tabs({ content }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const tabTitle = content[activeTab].title;
  const tabContent = content[activeTab].content;

  return (
    <div>
      <div className="flex border-b relative">
        {content.map((item, index) => (
          <div className="flex flex-col flex-1">
            <button
              key={`tab-${index}`}
              className={`mt-auto py-2 px-4 ${
                activeTab === index
                  ? "h-[50px] bg-white border-l border-t border-r rounded-t-lg"
                  : "h-[40px] bg-gray-200"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {item.title}
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">{tabTitle}</h2>
        <div dangerouslySetInnerHTML={{ __html: tabContent }} />
      </div>
    </div>
  );
}
