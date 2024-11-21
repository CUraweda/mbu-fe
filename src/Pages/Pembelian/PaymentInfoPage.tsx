import Breadcrumb from "../../Components/Breadcrumb";
import LayoutProject from "../../Layouts/layoutProject";
import PurchaseDetailLayout from "../../Layouts/PurchaseDetailLayout";

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Pembelian", link: "/pembelian" },
  { label: "List Pembelian", link: "/purchase-list" },
  { label: "Detail Pembelian" },
];

const PaymentInfoPage = () => {
  return (
    <div>
      <Breadcrumb title="Pembelian" items={breadcrumbItems} />
      <LayoutProject>
        
          <PurchaseDetailLayout>
            <h1>info pembayaran</h1>
          </PurchaseDetailLayout>
      </LayoutProject>
    </div>
  );
};

export default PaymentInfoPage;
