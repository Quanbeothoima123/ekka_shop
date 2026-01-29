import styles from "./NewArrivalsSection.module.css";
import ProductCard from "@/components/Product/ProductCard";

const PRODUCTS = [
  {
    id: "na-1",
    name: "Full Sleeve Cap T-shirt",
    img: "/assets/img/products/p1.jpg", // bạn thay ảnh đúng path của bạn
    rating: 4,
    oldPrice: 20,
    price: 15,
    badgeRight: { text: "SALE", color: "green" },
    colors: ["#7ec8ff", "#72f0ff", "#79ffd8"],
    sizes: ["S", "M", "X", "XL"],
  },
  {
    id: "na-2",
    name: "Classic Leather purse",
    img: "/assets/img/products/p2.jpg",
    rating: 4,
    oldPrice: 100,
    price: 80,
    badgeRight: { text: "NEW", color: "blue" },
    colors: ["#caa9ff", "#ff7aa2", "#d6ff59", "#ffd463"],
    sizes: [], // card của bạn đang render sizes; để [] để giống hình (không bắt buộc)
  },
  {
    id: "na-3",
    name: "Fancy Ladies Sandal",
    img: "/assets/img/products/p3.jpg",
    rating: 4,
    oldPrice: 100,
    price: 80,
    badgeLeft: { text: "5%", color: "pink" },
    colors: ["#caa9ff", "#72f0ff", "#ff7aa2", "#79ffd8"],
    sizes: ["6", "7", "8", "9"],
  },
  {
    id: "na-4",
    name: "Womens Leather Backpack",
    img: "/assets/img/products/p4.jpg",
    rating: 4,
    oldPrice: 100,
    price: 80,
    colors: ["#d6ff59", "#ffd4c6", "#ff7aa2", "#caa9ff"],
    sizes: [],
  },
];

export default function NewArrivalsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.heading}>
          <h2 className={styles.title}>New Arrivals</h2>
          <p className={styles.subTitle}>
            Browse The Collection of Top Products
          </p>
        </header>

        <div className={styles.grid}>
          {PRODUCTS.map((p) => (
            <div key={p.id} className={styles.col}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <a className={styles.shopAll} href="#">
            Shop All Collection
          </a>
        </div>
      </div>
    </section>
  );
}
