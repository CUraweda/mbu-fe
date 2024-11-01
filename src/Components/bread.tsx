import React from "react";

type BreadcrumbProps = {
  title: string;
  items: { label: string; link?: string }[];
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, items }) => {
  return (
    <div className="flex items-center w-full gap-3 pl-4 mb-3 text-xl breadcrumbs">
      <h1 className="text-base md:text-2xl">{title}</h1>
      <span className="mx-1 text-gray-300">|</span>
      <ul className="flex gap-2 text-sm md:text-lg">
        {items.map((item, index) => (
          <li key={index}>
            {item.link ? (
              <a
                href={item.link}
                className={
                  index === items.length - 1
                    ? "text-slate-600"
                    : "text-[#76A8D8]"
                }
              >
                {item.label}
              </a>
            ) : (
              <span
                className={
                  index === items.length - 1
                    ? "text-slate-600"
                    : "text-[#76A8D8]"
                }
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;
