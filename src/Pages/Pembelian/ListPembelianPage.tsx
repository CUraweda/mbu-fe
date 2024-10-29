import Breadcrumb from "../../Components/bread";
import LayoutProject from "../../Layouts/layoutProject";
const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Pembelian", link: "/pembelian" },
  { label: "List Pembelian" },
];

const ListPembelianPage = () => {
  return (
    <div>
      <Breadcrumb title="Pembelian" items={breadcrumbItems} />
      <LayoutProject>
        <h1>test</h1>
      </LayoutProject>
    </div>
  );
};

export default ListPembelianPage;
