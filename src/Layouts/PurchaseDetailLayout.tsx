type Props = {
  children?: React.ReactNode;
};

const PurchaseDetailLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div className="justify-between w-full overflow-x-auto bg-white rounded-md min-h-96 card text-slate-800">
        {children}
      </div>
    </div>
  );
};

export default PurchaseDetailLayout;
