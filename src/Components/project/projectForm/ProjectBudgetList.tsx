import ProjectBudgetForm from "./ProjectBudgetItem";

const ProjectBudgetList = () => {
  const budgetData = [{ id: 1 }, { id: 2 }];

  return (
    <div>
      <h3 className="m-5 text-lg md:text-2xl">Anggaran</h3>
      {budgetData.map((budget) => (
        <div
          key={budget.id}
          className="p-4 mx-5 my-6 border border-gray-200 rounded-md bg-base-200"
        >
          <ProjectBudgetForm />
        </div>
      ))}
    </div>
  );
};

export default ProjectBudgetList;
