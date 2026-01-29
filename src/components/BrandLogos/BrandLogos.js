import styles from "./BrandLogos.module.css";

const BRANDS = [
  { id: "b1", src: "/assets/img/brands/brand-1.png", alt: "Brand 1" },
  { id: "b2", src: "/assets/img/brands/brand-2.png", alt: "Brand 2" },
  { id: "b3", src: "/assets/img/brands/brand-3.png", alt: "Brand 3" },
  { id: "b4", src: "/assets/img/brands/brand-4.png", alt: "Brand 4" },
  { id: "b5", src: "/assets/img/brands/brand-5.png", alt: "Brand 5" },
  { id: "b6", src: "/assets/img/brands/brand-6.png", alt: "Brand 6" },
  { id: "b7", src: "/assets/img/brands/brand-7.png", alt: "Brand 7" },
];

export default function BrandLogos({ items = BRANDS }) {
  return (
    <section className={styles.section} aria-label="Brand logos">
      <div className={styles.container}>
        <div className={styles.row}>
          {items.map((b) => (
            <div key={b.id} className={styles.col}>
              <div className={styles.card}>
                <img
                  className={styles.logo}
                  src={b.src}
                  alt={b.alt}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
