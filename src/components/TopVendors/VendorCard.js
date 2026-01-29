import Image from "next/image";
import styles from "./VendorCard.module.css";

function Stars({ value = 0 }) {
  const full = Math.max(0, Math.min(5, value));
  return (
    <div className={styles.stars} aria-label={`${full} stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`${styles.star} ${i < full ? styles.starOn : ""}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function VendorCard({ vendor }) {
  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <div className={styles.logoWrap}>
          <Image
            src={vendor.logo}
            alt={`${vendor.name} logo`}
            width={70}
            height={70}
            className={styles.logo}
            priority={false}
          />
        </div>
        <div className={styles.meta}>
          <h3 className={styles.name}>{vendor.name}</h3>
          <div className={styles.products}>{vendor.products} Products</div>
          <div className={styles.ratingRow}>
            <Stars value={vendor.rating} />
            <div className={styles.sales}>
              <span className={styles.salesLabel}>Sales</span>{" "}
              <span className={styles.salesValue}>{vendor.sales}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.thumbGrid}>
        {vendor.thumbs.slice(0, 4).map((src, idx) => (
          <div key={idx} className={styles.thumbCell}>
            <div className={styles.thumbMedia}>
              <Image
                src={src}
                alt={`${vendor.name} product ${idx + 1}`}
                width={138}
                height={153}
                className={styles.thumbImg}
              />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
