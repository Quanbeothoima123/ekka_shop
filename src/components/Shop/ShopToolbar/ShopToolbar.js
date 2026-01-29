import styles from "./ShopToolbar.module.css";

export default function ShopToolbar({
  view,
  sort,
  sorts,
  onViewChange,
  onSortChange,
}) {
  return (
    <div className={styles.toolbar}>
      <div className={styles.left}>
        <button
          type="button"
          className={`${styles.iconBtn} ${view === "grid" ? styles.active : ""}`}
          onClick={() => onViewChange("grid")}
          aria-label="Grid view"
        >
          <span className={styles.gridIcon} aria-hidden="true" />
        </button>

        <button
          type="button"
          className={`${styles.iconBtn} ${view === "list" ? styles.active : ""}`}
          onClick={() => onViewChange("list")}
          aria-label="List view"
        >
          <span className={styles.listIcon} aria-hidden="true" />
        </button>
      </div>

      <div className={styles.right}>
        <label className={styles.label} htmlFor="sort">
          Sort by
        </label>
        <div className={styles.selectWrap}>
          <select
            id="sort"
            className={styles.select}
            value={sort}
            onChange={(e) => onSortChange(e.target.value)}
          >
            {sorts.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
          <span className={styles.caret} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
