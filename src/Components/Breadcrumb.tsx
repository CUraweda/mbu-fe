import React from "react";
import { Link } from "react-router-dom";

type BreadcrumbProps = {
  title: string;
  items: { label: string; link?: string }[];
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, items }) => {
  return (
    <div className="flex items-center w-full gap-3 pl-4 mb-3 breadcrumbs">
      <h1 className="text-base">{title}</h1>
      <span className="mx-1 text-gray-300">|</span>
      <ul className="flex gap-2 ">
        {items.map((item, index) => (
          <li key={index}>
            {item.link ? (
              <Link
                to={item.link}
                className={
                  index === items.length - 1
                    ? "text-slate-600"
                    : "text-primary-dark"
                }
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={
                  index === items.length - 1
                    ? "text-slate-600"
                    : "text-primary-dark"
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
