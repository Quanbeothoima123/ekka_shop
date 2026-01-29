import styles from "./ProductCard.module.css";
import RatingStars from "./RatingStars";

function IconCart(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
      <path
        d="M6 6h15l-2 8H7L6 6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M6 6 5 3H2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7 14l-1 4h13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="9" cy="20" r="1.6" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="18" cy="20" r="1.6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function IconHeart(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
      <path
        d="M12 20s-7-4.4-9.2-8.7C1.2 8.2 3 5.5 6.1 5.1c1.8-.2 3.3.7 3.9 1.8.6-1.1 2.1-2 3.9-1.8 3.1.4 4.9 3.1 3.3 6.2C19 15.6 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconRefresh(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
      <path
        d="M20 12a8 8 0 1 1-2.3-5.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M20 4v6h-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconEye(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
      <path
        d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export default function ProductCard({ product }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageBox}>
        {/* badges */}
        {product.badgeLeft ? (
          <span
            className={`${styles.badge} ${styles.badgeLeft} ${
              product.badgeLeft.color === "pink" ? styles.badgePink : ""
            }`}
          >
            {product.badgeLeft.text}
          </span>
        ) : null}

        {product.badgeRight ? (
          <span
            className={`${styles.badge} ${styles.badgeRight} ${
              product.badgeRight.color === "blue"
                ? styles.badgeBlue
                : product.badgeRight.color === "green"
                  ? styles.badgeGreen
                  : ""
            }`}
          >
            {product.badgeRight.text}
          </span>
        ) : null}

        {/* ✅ hover action icons (right side) */}
        <div className={styles.actions} aria-hidden="true">
          <button type="button" className={`${styles.actionBtn} ${styles.a1}`}>
            <IconCart />
          </button>
          <button type="button" className={`${styles.actionBtn} ${styles.a2}`}>
            <IconHeart />
          </button>
          <button type="button" className={`${styles.actionBtn} ${styles.a3}`}>
            <IconRefresh />
          </button>
          <button type="button" className={`${styles.actionBtn} ${styles.a4}`}>
            <IconEye />
          </button>
        </div>

        <img
          className={styles.image}
          src={product.img}
          alt={product.name}
          width={320}
          height={355}
          loading="lazy"
        />
      </div>

      <div className={styles.info}>
        <h3 className={styles.name}>{product.name}</h3>

        <div className={styles.ratingRow}>
          <RatingStars value={product.rating} />
        </div>

        <div className={styles.priceRow}>
          {product.oldPrice ? (
            <span className={styles.oldPrice}>${product.oldPrice}.00</span>
          ) : null}
          <span className={styles.price}>${product.price}.00</span>
        </div>

        <div className={styles.metaRow}>
          {/* colors left */}
          <div className={styles.colors}>
            {(product.colors || []).map((c, idx) => (
              <span
                key={`${product.id}-c-${idx}`}
                className={styles.colorDot}
                style={{ background: c }}
                aria-hidden="true"
              />
            ))}
          </div>

          {/* sizes right */}
          <div className={styles.sizes}>
            {(product.sizes || []).map((s) => (
              <span key={`${product.id}-s-${s}`} className={styles.sizePill}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
