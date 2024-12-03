import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import { ProjectsResponse } from "@/Data/types/response.type";

interface ProjectListProps {
  projects: ProjectsResponse[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const [selectedRows, setSelectedRows] = useState<boolean[]>(
    Array(projects.length).fill(false),
  );
  const [isAllSelected, setIsAllSelected] = useState(false);

  const handleRowSelect = (index: number) => {
    const updatedSelectedRows = [...selectedRows];
    updatedSelectedRows[index] = !updatedSelectedRows[index];
    setSelectedRows(updatedSelectedRows);

    // Update isAllSelected status
    setIsAllSelected(updatedSelectedRows.every((selected) => selected));
  };

  const handleSelectAll = () => {
    const newIsAllSelected = !isAllSelected;
    setIsAllSelected(newIsAllSelected);
    setSelectedRows(Array(projects.length).fill(newIsAllSelected));
  };

  return (
    <div>
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="text-center bg-blue-100">
            <th className="w-10">
              <input
                type="checkbox"
                checked={isAllSelected}
                onChange={handleSelectAll}
              />
            </th>
            <th className="px-4 py-2 font-semibold">Id Project</th>
            <th className="px-4 py-2 font-semibold">Unit Bisnis</th>
            <th className="px-4 py-2 font-semibold">Produk</th>
            <th className="px-4 py-2 font-semibold">Area</th>
            <th className="px-4 py-2 font-semibold">Lokasi</th>
            <th className="px-4 py-2 font-semibold">Kandang</th>
            <th className="px-4 py-2 font-semibold">Kapasitas</th>
            <th className="px-4 py-2 font-semibold">Periode</th>
            <th className="px-4 py-2 font-semibold">Status Chick in</th>
            <th className="px-4 py-2 font-semibold">Status Project</th>
            <th className="px-4 py-2 font-semibold">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <ProjectItem
              {...project}
              key={project.id}
              isChecked={selectedRows[index]}
              onCheckboxChange={() => handleRowSelect(index)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;
