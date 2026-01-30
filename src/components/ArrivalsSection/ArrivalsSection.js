import styles from "./ArrivalsSection.module.css";
import ProductCard from "@/components/Product/ProductCard";

/**
 * Component dùng chung cho mọi section kiểu "Arrivals"
 * - Home: New Arrivals
 * - Product detail: Related Products
 * - Các trang khác: chỉ cần đổi title/subtitle/products/footer
 */
export default function ArrivalsSection({
  title,
  subtitle,
  products = [],
  footer, // { label, href }
  id,
  gap = 30,
  paddingTop = 60,
  paddingBottom = 55,
}) {
  return (
    <section
      id={id}
      className={styles.section}
      style={{
        ["--pt"]: `${paddingTop}px`,
        ["--pb"]: `${paddingBottom}px`,
        ["--gap"]: `${gap}px`,
      }}
    >
      <div className={styles.container}>
        <header className={styles.heading}>
          <h2 className={styles.title}>{title}</h2>
          {subtitle ? <p className={styles.subTitle}>{subtitle}</p> : null}
        </header>

        <div className={styles.grid}>
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {footer?.label ? (
          <div className={styles.footer}>
            <a className={styles.footerLink} href={footer.href || "#"}>
              {footer.label}
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
