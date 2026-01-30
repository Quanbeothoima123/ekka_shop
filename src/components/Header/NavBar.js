"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./NavBar.module.css";
import { IconGrid, IconFilter } from "../icons/Icons";

const links = [
  { label: "HOME", href: "/", active: true },
  { label: "CATEGORIES", href: "/categories" },
  { label: "PRODUCTS", href: "/product/wh12" },
  { label: "PAGES", href: "/pages" },
  { label: "OTHERS", href: "/others" },
  { label: "BLOG", href: "/blog" },
  { label: "ELEMENTS", href: "/elements" },
  { label: "HOT OFFERS", href: "/hot-offers", hot: true },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  // ✅ map dropdown -> section id trên Home
  const scrollItems = useMemo(
    () => [
      { label: "Top Collection", id: "top-collection" },
      { label: "Categories", id: "top-categories" },
      { label: "Offers", id: "featured-deals" },
      { label: "Top Vendors", id: "top-vendors" },
      { label: "Services", id: "service-highlights" },
      { label: "New Arrivals", id: "new-arrivals" },
      { label: "Client Review", id: "client-review" },
      { label: "Instagram Feed", id: "instagram-feed" },
    ],
    [],
  );

  function scrollToSection(id) {
    // đóng dropdown trước cho gọn UI
    setOpen(false);

    // đợi 1 tick để dropdown đóng xong rồi scroll
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (!el) return;

      // ✅ smooth scroll
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  // ✅ click outside để đóng
  useEffect(() => {
    function onDocDown(e) {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocDown);
    return () => document.removeEventListener("mousedown", onDocDown);
  }, []);

  // ✅ ESC để đóng
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

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

      {/* ✅ Filter dropdown */}
      <div className={styles.filterWrap} ref={wrapRef}>
        <button
          className={styles.rightIconBtn}
          type="button"
          aria-label="Scroll to section"
          aria-expanded={open}
          aria-haspopup="menu"
          onClick={() => setOpen((v) => !v)}
        >
          <IconFilter className={styles.navIcon} />
        </button>

        <div
          className={[styles.dropdown, open ? styles.dropdownOpen : ""].join(
            " ",
          )}
          role="menu"
          aria-label="Scroll To Section"
        >
          <div className={styles.dropdownTitle}>Scroll To Section</div>

          <ul className={styles.dropdownList}>
            {scrollItems.map((it) => (
              <li key={it.id} className={styles.dropdownItem}>
                <button
                  type="button"
                  className={styles.dropdownBtn}
                  role="menuitem"
                  onClick={() => scrollToSection(it.id)}
                >
                  {it.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
