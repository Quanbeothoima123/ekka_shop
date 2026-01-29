import styles from "./RelatedProducts.module.css";
import ProductCard from "@/components/Product/ProductCard";

export default function RelatedProducts({ products = [] }) {
  return (
    <section className={styles.wrap}>
      <div className={styles.head}>
        <h2 className={styles.title}>Related Products</h2>
        <div className={styles.sub}>Browse The Collection of Top Products</div>
      </div>

      <div className={styles.grid}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
