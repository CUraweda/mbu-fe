import React from "react";

type Props = {
  children?: React.ReactNode;
  bgColor?: string;
};
const LayoutProject: React.FC<Props> = ({ children, bgColor = "bg-white" }) => {
  return (
    <>
      <div
        className={`justify-between w-full overflow-hidden rounded-lg min-h-96 card text-slate-800 p-5 ${bgColor}`}
      >
        {children}
      </div>
    </>
  );
};
export default LayoutProject;
