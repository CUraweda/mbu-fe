import React, { FC } from "react";
import IconMap from "../Data/IconMap";

interface PaginationBottomProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const PaginationBottom: FC<PaginationBottomProps> = ({
  currentPage,
  setCurrentPage,
}) => {
  return (
    <div className="flex items-center justify-center md:justify-end">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        className="flex items-center gap-5 mx-2 text-primary hover:bg-transparent"
      >
        <IconMap.FaArrowLeft size={18} className="text-primary" />
        <div className="flex text-center">Prev</div>
      </button>
      <span className="mx-2 text-primary">1 of 2</span>
      <button
        onClick={() => setCurrentPage((prev) => prev + 1)}
        className="flex items-center gap-5 mx-2 text-primary hover:bg-transparent"
      >
        <div className="flex text-center">Next</div>
        <IconMap.FaArrowRight size={18} className="text-primary" />
      </button>
    </div>
  );
};

export default PaginationBottom;
