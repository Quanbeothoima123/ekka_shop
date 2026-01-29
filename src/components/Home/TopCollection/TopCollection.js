"use client";

import { useMemo, useState } from "react";
import styles from "./TopCollection.module.css";
import ProductCard from "@/components/Product/ProductCard";

const TABS = [
  { key: "all", label: "FOR ALL" },
  { key: "men", label: "FOR MEN" },
  { key: "women", label: "FOR WOMEN" },
  { key: "children", label: "FOR CHILDREN" },
];

export default function TopCollection() {
  const [tab, setTab] = useState("all");

  // hardcode data (bạn chỉ cần thay img path)
  const products = useMemo(
    () => [
      {
        id: 1,
        category: "women",
        name: "Round Neck T-Shirt",
        img: "/assets/img/products/p1.jpg",
        badgeLeft: { text: "20%", color: "pink" },
        badgeRight: null,
        rating: 4,
        oldPrice: 27,
        price: 22,
        colors: ["#d9b7ff", "#a6ffd7"],
        sizes: ["S", "M", "X", "XL"],
      },
      {
        id: 2,
        category: "men",
        name: "Full Sleeve Shirt",
        img: "/assets/img/products/p2.jpg",
        badgeLeft: null,
        badgeRight: { text: "SALE", color: "green" },
        rating: 4,
        oldPrice: 12,
        price: 10,
        colors: ["#2fe6e6", "#b8a7ff"],
        sizes: ["S", "M", "X", "XL"],
      },
      {
        id: 3,
        category: "children",
        name: "Cute Baby Toy's",
        img: "/assets/img/products/p3.jpg",
        badgeLeft: null,
        badgeRight: null,
        rating: 4,
        oldPrice: 40,
        price: 30,
        colors: ["#a9d7ff", "#ff5c7a", "#ffcc7a", "#42f0c8"],
        sizes: ["S", "M", "X", "XL"],
      },
      {
        id: 4,
        category: "women",
        name: "Jumbo Carry Bag",
        img: "/assets/img/products/p4.jpg",
        badgeLeft: null,
        badgeRight: { text: "NEW", color: "blue" },
        rating: 4,
        oldPrice: 50,
        price: 40,
        colors: ["#f4c23a"],
        sizes: ["S", "M"],
      },
      // dòng 2 demo (bạn thêm tiếp)
      {
        id: 5,
        category: "women",
        name: "Women Bag",
        img: "/assets/img/products/p5.jpg",
        badgeLeft: { text: "15%", color: "pink" },
        badgeRight: null,
        rating: 4,
        oldPrice: 70,
        price: 55,
        colors: ["#a6ffd7", "#d9b7ff"],
        sizes: ["S", "M", "X", "XL"],
      },
      {
        id: 6,
        category: "men",
        name: "Classic Hat",
        img: "/assets/img/products/p6.jpg",
        badgeLeft: null,
        badgeRight: null,
        rating: 4,
        oldPrice: 28,
        price: 22,
        colors: ["#c9c9c9"],
        sizes: ["S", "M", "X", "XL"],
      },
      {
        id: 7,
        category: "men",
        name: "Leather Belt",
        img: "/assets/img/products/p7.jpg",
        badgeLeft: null,
        badgeRight: { text: "NEW", color: "blue" },
        rating: 4,
        oldPrice: 35,
        price: 28,
        colors: ["#c9c9c9"],
        sizes: ["S", "M", "X", "XL"],
      },
      {
        id: 8,
        category: "women",
        name: "Smart Watch",
        img: "/assets/img/products/p8.jpg",
        badgeLeft: { text: "35%", color: "pink" },
        badgeRight: { text: "NEW", color: "blue" },
        rating: 4,
        oldPrice: 120,
        price: 80,
        colors: ["#a9d7ff", "#ff5c7a", "#ffcc7a", "#42f0c8"],
        sizes: ["S", "M"],
      },
    ],
    [],
  );

  const filtered =
    tab === "all" ? products : products.filter((p) => p.category === tab);

  return (
    <section className={styles.section} aria-label="Our Top Collection">
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Our Top Collection</h2>
          <p className={styles.subTitle}>
            Browse The Collection of Top Products
          </p>

          <nav className={styles.tabs} aria-label="Collection filters">
            {TABS.map((t) => (
              <button
                key={t.key}
                type="button"
                className={`${styles.tab} ${
                  tab === t.key ? styles.activeTab : ""
                }`}
                onClick={() => setTab(t.key)}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </header>

        <div className={styles.grid}>
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
