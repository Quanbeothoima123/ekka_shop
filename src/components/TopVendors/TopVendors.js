import styles from "./TopVendors.module.css";
import VendorCard from "./VendorCard";

const VENDORS = [
  {
    id: "marvelus",
    name: "Marvelus",
    products: 154,
    rating: 4,
    sales: 954,
    logo: "/assets/img/vendors/vendor-1.jpg",
    thumbs: [
      "/assets/img/products/p1.jpg",
      "/assets/img/products/p2.jpg",
      "/assets/img/products/p3.jpg",
      "/assets/img/products/p4.jpg",
    ],
  },
  {
    id: "oreva",
    name: "Oreva Fashion",
    products: 546,
    rating: 5,
    sales: 785,
    logo: "/assets/img/vendors/vendor-2.jpg",
    thumbs: [
      "/assets/img/products/p5.jpg",
      "/assets/img/products/p6.jpg",
      "/assets/img/products/p7.jpg",
      "/assets/img/products/p8.jpg",
    ],
  },
  {
    id: "cenvart",
    name: "Cenv Art",
    products: 854,
    rating: 3,
    sales: 587,
    logo: "/assets/img/vendors/vendor-3.jpg",
    thumbs: [
      "/assets/img/products/p1.jpg",
      "/assets/img/products/p2.jpg",
      "/assets/img/products/p3.jpg",
      "/assets/img/products/p4.jpg",
    ],
  },
  {
    id: "neon",
    name: "Neon Fashion",
    products: 154,
    rating: 5,
    sales: 354,
    logo: "/assets/img/vendors/vendor-4.jpg",
    thumbs: [
      "/assets/img/products/p5.jpg",
      "/assets/img/products/p6.jpg",
      "/assets/img/products/p7.jpg",
      "/assets/img/products/p8.jpg",
    ],
  },
];

export default function TopVendors() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.heading}>
          <h2 className={styles.title}>Top Vendor</h2>
          <p className={styles.subTitle}>
            Browse The Collection of{" "}
            <a className={styles.link} href="#">
              All Vendors.
            </a>
          </p>
        </header>

        <div className={styles.grid}>
          {VENDORS.map((v) => (
            <VendorCard key={v.id} vendor={v} />
          ))}
        </div>
      </div>
    </section>
  );
}
