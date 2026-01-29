"use client";

import { useMemo, useState } from "react";
import styles from "./ShopPage.module.css";
import BreadcrumbBar from "../BreadcrumbBar/BreadcrumbBar";
import ShopSidebarFilters from "../ShopSidebarFilters/ShopSidebarFilters";
import ShopToolbar from "../ShopToolbar/ShopToolbar";
import ShopPagination from "../ShopPagination/ShopPagination";

import ProductCard from "@/components/Product/ProductCard";
import ProductListItem from "@/components/Product/ProductListItem";

const ALL_PRODUCTS = [
  {
    id: "p1",
    name: "Round Neck T-Shirt",
    img: "/assets/img/products/p1.jpg",
    rating: 4,
    oldPrice: 27,
    price: 22,
    badgeLeft: { text: "20%", color: "pink" },
    colors: ["#cdb7ff", "#aaf5d7"],
    sizes: ["S", "M", "X", "XL"],
    category: "Clothes",
  },
  {
    id: "p2",
    name: "Full Sleeve Shirt",
    img: "/assets/img/products/p2.jpg",
    rating: 4,
    oldPrice: 12,
    price: 10,
    badgeRight: { text: "SALE", color: "green" },
    colors: ["#64e5ff", "#93a7ff"],
    sizes: ["S", "M"],
    category: "Clothes",
  },
  {
    id: "p3",
    name: "Cute Baby Toy's",
    img: "/assets/img/products/p3.jpg",
    rating: 4,
    oldPrice: 40,
    price: 30,
    colors: ["#a9d9ff", "#ff8aa4"],
    sizes: ["S", "M"],
    category: "Toys",
  },
  {
    id: "p4",
    name: "Jumbo Carry Bag",
    img: "/assets/img/products/p4.jpg",
    rating: 4,
    price: 40,
    colors: ["#f4d06f"],
    category: "Bags",
  },
  {
    id: "p5",
    name: "Designer Leather Purses",
    img: "/assets/img/products/p5.jpg",
    rating: 4,
    price: 30,
    colors: ["#69e7ff", "#55ffbf", "#b8ff63"],
    category: "Bags",
  },
  {
    id: "p6",
    name: "Canvas Cowboy Hat",
    img: "/assets/img/products/p6.jpg",
    rating: 4,
    oldPrice: 12,
    price: 10,
    colors: ["#e7c27b", "#b8ff63", "#62b7ff"],
    category: "Clothes",
  },
  {
    id: "p7",
    name: "Leather Belt for Men",
    img: "/assets/img/products/p7.jpg",
    rating: 4,
    price: 10,
    colors: ["#bdbdbd", "#f2a083"],
    category: "Accessories",
  },
  {
    id: "p8",
    name: "Digital Smart Watches",
    img: "/assets/img/products/p8.jpg",
    rating: 4,
    oldPrice: 100,
    price: 80,
    badgeLeft: { text: "20%", color: "pink" },
    badgeRight: { text: "NEW", color: "blue" },
    colors: ["#ddd", "#f3b0b0", "#97dfff"],
    category: "Watches",
  },
];

const CATEGORIES = [
  "Clothes",
  "Bags",
  "Shoes",
  "Cosmetics",
  "Electrics",
  "Phone",
];
const SIZES = ["S", "M", "L", "XL", "XXL"];
const COLORS = [
  "#a9c7ff",
  "#ff6a7a",
  "#000000",
  "#33e84a",
  "#ff7a52",
  "#c94bff",
  "#ffe200",
  "#9d7dff",
  "#63f4ff",
  "#55ffbf",
];

const SORTS = [
  { value: "position", label: "Position" },
  { value: "relevance", label: "Relevance" },
  { value: "name-asc", label: "Name, A to Z" },
  { value: "name-desc", label: "Name, Z to A" },
  { value: "price-asc", label: "Price, low to high" },
  { value: "price-desc", label: "Price, high to low" },
];

function normalizeSet(set) {
  return new Set(Array.from(set));
}

export default function ShopPage() {
  const [view, setView] = useState("grid"); // grid | list
  const [sort, setSort] = useState("price-desc");

  const [pickedCategories, setPickedCategories] = useState(
    () => new Set(["Clothes"]),
  );
  const [pickedSizes, setPickedSizes] = useState(() => new Set(["S"]));
  const [pickedColors, setPickedColors] = useState(() => new Set());
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(250);

  const pageSize = 12;
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const cat = normalizeSet(pickedCategories);
    const sizes = normalizeSet(pickedSizes);
    const colors = normalizeSet(pickedColors);

    const res = ALL_PRODUCTS.filter((p) => {
      if (cat.size > 0 && !cat.has(p.category)) return false;

      if (sizes.size > 0) {
        const ps = new Set(p.sizes || []);
        if ((p.sizes || []).length > 0) {
          let ok = false;
          sizes.forEach((s) => {
            if (ps.has(s)) ok = true;
          });
          if (!ok) return false;
        }
      }

      if (colors.size > 0) {
        const pc = new Set(p.colors || []);
        let ok = false;
        colors.forEach((c) => {
          if (pc.has(c)) ok = true;
        });
        if (!ok) return false;
      }

      if (typeof p.price === "number") {
        if (p.price < priceMin) return false;
        if (p.price > priceMax) return false;
      }

      return true;
    });

    const sorted = [...res];
    sorted.sort((a, b) => {
      if (sort === "name-asc") return a.name.localeCompare(b.name);
      if (sort === "name-desc") return b.name.localeCompare(a.name);
      if (sort === "price-asc") return (a.price ?? 0) - (b.price ?? 0);
      if (sort === "price-desc") return (b.price ?? 0) - (a.price ?? 0);
      return 0;
    });

    return sorted;
  }, [pickedCategories, pickedSizes, pickedColors, priceMin, priceMax, sort]);

  const totalItems = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  const pageItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

  const resetPage = () => setPage(1);

  return (
    <div className={styles.page}>
      <BreadcrumbBar
        title="Shop"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
        ]}
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* ===== TOP ROW (đúng thiết kế) ===== */}
            <div className={styles.leftTop}>
              <div className={styles.filterHead}>Filter Products By</div>
            </div>

            <div className={styles.rightTop}>
              <ShopToolbar
                view={view}
                sort={sort}
                sorts={SORTS}
                onViewChange={(v) => setView(v)}
                onSortChange={(v) => {
                  setSort(v);
                  resetPage();
                }}
              />
            </div>

            {/* ===== MAIN ROW ===== */}
            <aside className={styles.leftMain}>
              <ShopSidebarFilters
                categories={CATEGORIES}
                sizes={SIZES}
                colors={COLORS}
                pickedCategories={pickedCategories}
                pickedSizes={pickedSizes}
                pickedColors={pickedColors}
                priceMin={priceMin}
                priceMax={priceMax}
                onToggleCategory={(v) => {
                  setPickedCategories((prev) => {
                    const next = new Set(prev);
                    if (next.has(v)) next.delete(v);
                    else next.add(v);
                    return next;
                  });
                  resetPage();
                }}
                onToggleSize={(v) => {
                  setPickedSizes((prev) => {
                    const next = new Set(prev);
                    if (next.has(v)) next.delete(v);
                    else next.add(v);
                    return next;
                  });
                  resetPage();
                }}
                onToggleColor={(v) => {
                  setPickedColors((prev) => {
                    const next = new Set(prev);
                    if (next.has(v)) next.delete(v);
                    else next.add(v);
                    return next;
                  });
                  resetPage();
                }}
                onPriceChange={(min, max) => {
                  setPriceMin(min);
                  setPriceMax(max);
                  resetPage();
                }}
              />
            </aside>

            <div className={styles.rightMain}>
              <div
                className={`${styles.products} ${view === "list" ? styles.listMode : ""}`}
              >
                {view === "grid"
                  ? pageItems.map((p) => <ProductCard key={p.id} product={p} />)
                  : pageItems.map((p) => (
                      <ProductListItem key={p.id} product={p} />
                    ))}
              </div>

              <div className={styles.bottomBar}>
                <div className={styles.showing}>
                  Showing {Math.min((page - 1) * pageSize + 1, totalItems)}-
                  {Math.min(page * pageSize, totalItems)} of {totalItems}{" "}
                  item(s)
                </div>

                <ShopPagination
                  page={page}
                  totalPages={totalPages}
                  onPageChange={(p) => setPage(p)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
