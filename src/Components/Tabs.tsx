import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface TabsProps {
  currentTab: number;
  setCurrentTab: (tab: number) => void;
  tabs: string[];
}

const Tabs: React.FC<TabsProps> = ({ currentTab, setCurrentTab, tabs }) => {
  return (
    <div className="flex m-5 space-x-4">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setCurrentTab(index + 1)}
          className={`py-2 flex text-sm md:text-2xl items-center gap-2 rounded-full transition-colors duration-200 ${
            currentTab === index + 1 ? "text-primary" : "text-grey-500"
          }`}
        >
          <div
            className={`flex items-center justify-center w-10 h-10 border rounded-md border-gray-300 ${
              currentTab === index + 1
                ? "bg-primary text-white shadow-md"
                : "bg-white"
            }`}
          >
            {index + 1}
          </div>
          {tab}
          {index < tabs.length - 1 && (
            <span>
              <MdOutlineKeyboardArrowRight size={20} />
            </span>
          )}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
