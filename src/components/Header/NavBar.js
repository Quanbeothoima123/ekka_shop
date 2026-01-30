import Link from "next/link";
import styles from "./NavBar.module.css";
import { IconGrid, IconFilter } from "../icons/Icons";

const links = [
  { label: "HOME", href: "/", active: true },
  { label: "CATEGORIES", href: "/categories" },
  { label: "PRODUCTS", href: "/products" },
  { label: "PAGES", href: "/pages" },
  { label: "OTHERS", href: "/others" },
  { label: "BLOG", href: "/blog" },
  { label: "ELEMENTS", href: "/elements" },
  { label: "HOT OFFERS", href: "/hot-offers", hot: true },
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
            <Link
              href={l.href}
              className={[
                styles.navLink,
                l.active ? styles.active : "",
                l.hot ? styles.hot : "",
              ].join(" ")}
              aria-current={l.active ? "page" : undefined}
            >
              {l.label}
            </Link>
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
