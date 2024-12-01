import React from "react";

type Props = {
  children?: React.ReactNode;
  bgColor?: string;
};
const LayoutProject: React.FC<Props> = ({ children, bgColor = "bg-white" }) => {
  return (
    <>
      <div
        className={`justify-between w-full overflow-x-auto rounded-lg min-h-96 card text-slate-800 ${bgColor}`}
      >
        {children}
      </div>
    </>
  );
};
export default LayoutProject;
