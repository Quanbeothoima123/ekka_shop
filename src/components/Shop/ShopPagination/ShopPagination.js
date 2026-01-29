import styles from "./ShopPagination.module.css";

export default function ShopPagination({ page, totalPages, onPageChange }) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);

  return (
    <div className={styles.pager} aria-label="Pagination">
      {pages.slice(0, 5).map((p) => (
        <button
          key={p}
          type="button"
          className={`${styles.pageBtn} ${p === page ? styles.active : ""}`}
          onClick={() => onPageChange(p)}
        >
          {p}
        </button>
      ))}

      {totalPages > 5 ? (
        <button type="button" className={styles.pageBtn} disabled>
          …
        </button>
      ) : null}

      <button
        type="button"
        className={styles.nextBtn}
        onClick={() => onPageChange(Math.min(totalPages, page + 1))}
        disabled={page >= totalPages}
      >
        Next <span aria-hidden="true">›</span>
      </button>
    </div>
  );
}
