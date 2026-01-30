import BreadcrumbBar from "@/components/BreadcrumbBar/BreadcrumbBar";
import CheckoutPage from "@/components/Checkout/CheckoutPage";

export default function Checkout() {
  return (
    <>
      <BreadcrumbBar
        title="Checkout"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Checkout", href: "/checkout" },
        ]}
      />
      <CheckoutPage />
    </>
  );
}
