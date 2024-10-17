import React from "react";

type BreadcrumbProps = {
  items: { label: string; link?: string }[];
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className="breadcrumbs text-xl w-full m-5 flex gap-5">
      <div>Project Form</div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.link ? (
              <a href={item.link}>{item.label}</a>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;
