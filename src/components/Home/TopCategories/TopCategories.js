"use client";

import { useMemo, useState } from "react";
import styles from "./TopCategories.module.css";
import CategoryListItem from "./components/CategoryListItem/CategoryListItem";

export default function TopCategories() {
  // ✅ bạn thay các path bg này theo ảnh bạn có
  const categories = useMemo(
    () => [
      {
        id: "clothes",
        name: "Clothes",
        count: 440,
        icon: "/assets/img/icons/cat-clothes.png",
        bg: "/assets/img/categories/bg-clothes.jpg",
      },
      {
        id: "watches",
        name: "Watches",
        count: 510,
        icon: "/assets/img/icons/cat-watch.png",
        bg: "/assets/img/categories/bg-watches.jpg",
      },
      {
        id: "bags",
        name: "Bags",
        count: 620,
        icon: "/assets/img/icons/cat-bag.png",
        bg: "/assets/img/categories/bg-bags.jpg",
      },
      {
        id: "shoes",
        name: "Shoes",
        count: 320,
        icon: "/assets/img/icons/cat-shoes.png",
        bg: "/assets/img/categories/bg-shoes.jpg",
      },
    ],
    [],
  );

  const [activeId, setActiveId] = useState(categories[0].id);

  const activeCategory =
    categories.find((c) => c.id === activeId) || categories[0];

  return (
    <section className={styles.section} aria-label="Top Categories">
      <div className={styles.container}>
        <header className={styles.heading}>
          <h2 className={styles.title}>Top Categories</h2>
          <p className={styles.subTitle}>
            Browse The Collection of Top Categories
          </p>
        </header>

        <div className={styles.grid}>
          {/* LEFT */}
          <aside className={styles.left}>
            <div className={styles.list} role="tablist" aria-label="Categories">
              {categories.map((c) => (
                <CategoryListItem
                  key={c.id}
                  item={c}
                  active={c.id === activeId}
                  onClick={() => setActiveId(c.id)}
                />
              ))}
            </div>
          </aside>

          {/* RIGHT */}
          <div className={styles.right}>
            <div
              className={styles.hero}
              style={{ backgroundImage: `url(${activeCategory.bg})` }}
              role="img"
              aria-label={`Category background: ${activeCategory.name}`}
            >
              {/* overlay đen 915x315 */}
              <div className={styles.overlay} aria-hidden="true" />

              <button className={styles.viewAllBtn} type="button">
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
