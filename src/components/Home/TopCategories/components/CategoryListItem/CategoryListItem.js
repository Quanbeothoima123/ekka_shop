import styles from "./CategoryListItem.module.css";

export default function CategoryListItem({ item, active, onClick }) {
  return (
    <button
      type="button"
      className={`${styles.item} ${active ? styles.active : ""}`}
      onClick={onClick}
      role="tab"
      aria-selected={active}
    >
      <span className={styles.iconWrap} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.icon} src={item.icon} alt="" />
      </span>

      <span className={styles.text}>
        <span className={styles.name}>{item.name}</span>
        <span className={styles.count}>{item.count} Products</span>
      </span>
    </button>
  );
}
