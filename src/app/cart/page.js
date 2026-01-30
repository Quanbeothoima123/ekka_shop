import BreadcrumbBar from "@/components/BreadcrumbBar/BreadcrumbBar";
import CartPage from "@/components/Cart/CartPage";

export default function Cart() {
  return (
    <>
      <BreadcrumbBar
        title="Cart"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Cart", href: "/cart" },
        ]}
      />

      <CartPage />
    </>
  );
}
