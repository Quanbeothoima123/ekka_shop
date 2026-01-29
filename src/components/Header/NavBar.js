import styles from "./NavBar.module.css";
import { IconGrid, IconFilter } from "../icons/Icons";

const links = [
  { label: "HOME", active: true },
  { label: "CATEGORIES" },
  { label: "PRODUCTS" },
  { label: "PAGES" },
  { label: "OTHERS" },
  { label: "BLOG" },
  { label: "ELEMENTS" },
  { label: "HOT OFFERS", hot: true },
];

export default function NavBar() {
  return (
    <nav className={styles.navBar} aria-label="Primary">
      <button
        className={styles.leftIconBtn}
        type="button"
        aria-label="Open menu"
      >
        <IconGrid className={styles.navIcon} />
      </button>

      <ul className={styles.navList}>
        {links.map((l) => (
          <li key={l.label} className={styles.navItem}>
            <a
              href="#"
              className={[
                styles.navLink,
                l.active ? styles.active : "",
                l.hot ? styles.hot : "",
              ].join(" ")}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={styles.rightIconBtn}
        type="button"
        aria-label="Filters"
      >
        <IconFilter className={styles.navIcon} />
      </button>
    </nav>
  );
}
