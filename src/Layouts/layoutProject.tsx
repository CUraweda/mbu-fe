type Props = {
  children?: React.ReactNode;
};
const layoutProject: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="card bg-white text-slate-800 rounded-lg justify-between py-5 w-full overflow-x-auto h-fit">
        {children}
      </div>
    </>
  );
};
export default layoutProject;
