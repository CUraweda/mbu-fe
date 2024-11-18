import Breadcrumb from "../../Components/Breadcrumb";
import LayoutProject from "../../Layouts/layoutProject";
import PurchaseSidebarLayout from "../../Layouts/PurchaseSidebarLayout";
import PurchaseDetailLayout from "../../Layouts/PurchaseDetailLayout";

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Pembelian", link: "/pembelian" },
  { label: "List Pembelian", link: "/purchase-list" },
  { label: "Detail Pembelian" },
];

const PurchaseDetailPage = () => {
  return (
    <div>
      <Breadcrumb title="Pembelian" items={breadcrumbItems} />
      <LayoutProject>
        <PurchaseSidebarLayout>
          <PurchaseDetailLayout>
            <h1>detail pembelian</h1>
          </PurchaseDetailLayout>
        </PurchaseSidebarLayout>
      </LayoutProject>
    </div>
  );
};

export default PurchaseDetailPage;
