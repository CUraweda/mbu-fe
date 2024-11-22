import Breadcrumb from "../../Components/Breadcrumb";
import LayoutProject from "../../Layouts/layoutProject";

import PurchaseDetailLayout from "../../Layouts/PurchaseDetailLayout";

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Pembelian", link: "/pembelian" },
  { label: "List Pembelian", link: "/purchase-list" },
  { label: "Detail Pembelian" },
];

const ReceiptReturnPage = () => {
  return (
    <>
      <Breadcrumb title="Pembelian" items={breadcrumbItems} />
      <LayoutProject bgColor="bg-transparent">
        <PurchaseDetailLayout>
          <h1>Penerimaan/retur</h1>
        </PurchaseDetailLayout>
      </LayoutProject>
    </>
  );
};

export default ReceiptReturnPage;
