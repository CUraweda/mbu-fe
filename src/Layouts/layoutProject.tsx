type Props = {
  children?: React.ReactNode;
};
const layoutProject: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="justify-between w-full overflow-x-auto bg-white rounded-lg min-h-96 card text-slate-800">
        {children}
      </div>
    </>
  );
};
export default layoutProject;
