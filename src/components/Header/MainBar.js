"use client";

import Image from "next/image";
import styles from "./MainBar.module.css";
import { IconSearch, IconUser, IconHeart, IconBag } from "../icons/Icons";

function Badge({ children }) {
  return <span className={styles.badge}>{children}</span>;
}

export default function MainBar() {
  return (
    <div className={styles.mainBar}>
      <div className={styles.logoWrap}>
        <Image
          src="/assets/img/logo.png"
          alt="Ekka"
          width={170}
          height={54}
          priority
          className={styles.logoImg}
        />
      </div>

      <form className={styles.search} onSubmit={(e) => e.preventDefault()}>
        <input
          className={styles.searchInput}
          placeholder="Search products..."
        />
        <button className={styles.searchBtn} type="submit" aria-label="Search">
          <IconSearch className={styles.searchIcon} />
        </button>
      </form>

      <div className={styles.actions}>
        <button className={styles.iconBtn} aria-label="Account">
          <IconUser className={styles.actionIcon} />
        </button>

        <button className={styles.iconBtn} aria-label="Wishlist">
          <IconHeart className={styles.actionIcon} />
          <Badge>4</Badge>
        </button>

        <button className={styles.iconBtn} aria-label="Cart">
          <IconBag className={styles.actionIcon} />
          <Badge>3</Badge>
        </button>
      </div>
    </div>
  );
}
