import Breadcrumb from "../../Components/Breadcrumb";
import LayoutProject from "../../Layouts/layoutProject";

import PurchaseDetailLayout from "../../Layouts/PurchaseDetailLayout";

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Pembelian", link: "/pembelian" },
  { label: "List Pembelian", link: "/purchase-list" },
  { label: "Detail Pembelian" },
];

const OtherCostDetailPage = () => {
  return (
    <>
      <Breadcrumb title="Pembelian" items={breadcrumbItems} />
      <LayoutProject bgColor="bg-transparent">
        <PurchaseDetailLayout>
          <h1>rincian biaya lainnya</h1>
        </PurchaseDetailLayout>
      </LayoutProject>
    </>
  );
};

export default OtherCostDetailPage;
