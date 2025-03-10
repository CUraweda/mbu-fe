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
    <div className="overflow-x-auto">
      <table className="table table-zebra bg-white border">
        <thead>
          <tr className="text-center bg-blue-100">
            <th className="w-10">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-info"
                checked={isAllSelected}
                onChange={handleSelectAll}
              />
            </th>
            <th className="font-semibold">Id Project</th>
            <th className="font-semibold">Unit Bisnis</th>
            <th className="font-semibold">Produk</th>
            <th className="font-semibold">Area</th>
            <th className="font-semibold">Lokasi</th>
            <th className="font-semibold">Kandang</th>
            <th className="font-semibold">Kapasitas</th>
            <th className="font-semibold">Periode</th>
            <th className="font-semibold">Status Chick in</th>
            <th className="font-semibold">Status Project</th>
            <th className="font-semibold">Aksi</th>
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
