"use client";

import { useMemo, useRef, useState } from "react";
import styles from "./ProductDetailPage.module.css";

import BreadcrumbBar from "@/components/Shop/BreadcrumbBar/BreadcrumbBar";
import CategoryAccordion from "./Sidebar/CategoryAccordion/CategoryAccordion";
import BestSellers from "./Sidebar/BestSellers/BestSellers";

import ProductGallery from "./Top/ProductGallery/ProductGallery";
import ProductInfoPanel from "./Top/ProductInfoPanel/ProductInfoPanel";
import ProductTabs from "./Tabs/ProductTabs";

import RelatedProducts from "./Related/RelatedProducts";

const PRODUCT = {
  id: "wh12",
  name: "Unisex Cotton Neck Hoodie",
  rating: 4,
  shortDesc:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1990",
  price: 97,
  sku: "WH12",
  inStock: true,
  stockLeft: 29,
  images: [
    "/assets/img/products/p1.jpg",
    "/assets/img/products/p2.jpg",
    "/assets/img/products/p3.jpg",
    "/assets/img/products/p4.jpg",
  ],
  sizes: ["S", "M", "L", "XL"],
  colors: ["#4d6a8e", "#9cc0ff", "#a7d7cf", "#d9b6a0"],
};

const CATEGORY_TREE = [
  {
    title: "Clothes",
    children: [
      { label: "Men", count: 25 },
      { label: "Women", count: 52 },
      { label: "Boy", count: 40 },
      { label: "Girl", count: 35 },
    ],
  },
  { title: "Shoes", children: [] },
  { title: "Bag", children: [] },
  { title: "Cosmetics", children: [] },
  { title: "Electronics", children: [] },
  { title: "Phone", children: [] },
  { title: "Accessories", children: [] },
];

const BEST_SELLERS = [
  {
    id: "bs1",
    name: "Beautiful Teddy Bear",
    img: "/assets/img/products/p3.jpg",
    rating: 4,
    oldPrice: 100,
    price: 80,
  },
  {
    id: "bs2",
    name: "Gym Backpack",
    img: "/assets/img/products/p4.jpg",
    rating: 4,
    oldPrice: 100,
    price: 80,
  },
  {
    id: "bs3",
    name: "Beautiful Purse for Women",
    img: "/assets/img/products/p5.jpg",
    rating: 4,
    oldPrice: 100,
    price: 80,
  },
  {
    id: "bs4",
    name: "Wool Felt Long Brim Hat",
    img: "/assets/img/products/p6.jpg",
    rating: 4,
    oldPrice: 100,
    price: 80,
  },
  // page 2
  {
    id: "bs5",
    name: "Leather Belt for Men",
    img: "/assets/img/products/p7.jpg",
    rating: 4,
    oldPrice: 45,
    price: 35,
  },
  {
    id: "bs6",
    name: "Digital Smart Watches",
    img: "/assets/img/products/p8.jpg",
    rating: 4,
    oldPrice: 100,
    price: 80,
  },
  {
    id: "bs7",
    name: "Round Neck T-Shirt",
    img: "/assets/img/products/p1.jpg",
    rating: 4,
    oldPrice: 27,
    price: 22,
  },
  {
    id: "bs8",
    name: "Full Sleeve Shirt",
    img: "/assets/img/products/p2.jpg",
    rating: 4,
    oldPrice: 12,
    price: 10,
  },
];

const RELATED = [
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
  },
  {
    id: "p3",
    name: "Cute Baby Toy's",
    img: "/assets/img/products/p3.jpg",
    rating: 4,
    oldPrice: 40,
    price: 30,
    colors: ["#a9d9ff", "#ff8aa4", "#ffd36a", "#55ffbf"],
    sizes: ["S", "M"],
  },
  {
    id: "p4",
    name: "Jumbo Carry Bag",
    img: "/assets/img/products/p4.jpg",
    rating: 4,
    price: 40,
    badgeRight: { text: "NEW", color: "blue" },
    colors: ["#f4d06f"],
    sizes: ["S", "M"],
  },
];

export default function ProductDetailPage() {
  const [activeTab, setActiveTab] = useState("detail"); // detail | more | reviews
  const tabsRef = useRef(null);

  const crumbs = useMemo(
    () => [
      { label: "Home", href: "/" },
      { label: "Products", href: "/shop" },
      { label: PRODUCT.name, href: "/product/unisex-cotton-neck-hoodie" },
    ],
    [],
  );

  const openReviews = () => {
    setActiveTab("reviews");
    requestAnimationFrame(() => {
      tabsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <div className={styles.page}>
      <BreadcrumbBar title="Single Products" crumbs={crumbs} />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* LEFT SIDEBAR (2 khối riêng, KHÔNG scroll chung) */}
            <aside className={styles.left}>
              <div className={styles.card}>
                <CategoryAccordion data={CATEGORY_TREE} />
              </div>

              <div className={styles.bestWrap}>
                <div className={styles.card}>
                  <BestSellers items={BEST_SELLERS} />
                </div>
              </div>
            </aside>

            {/* RIGHT MAIN */}
            <div className={styles.right}>
              <div className={styles.topRow}>
                <div className={styles.galleryCol}>
                  <ProductGallery images={PRODUCT.images} />
                </div>

                <div className={styles.infoCol}>
                  <ProductInfoPanel
                    product={PRODUCT}
                    onOpenReviews={openReviews}
                  />
                </div>
              </div>

              <div ref={tabsRef} className={styles.tabsWrap}>
                <ProductTabs activeTab={activeTab} onTabChange={setActiveTab} />
              </div>
            </div>
          </div>

          {/* RELATED PRODUCTS: section riêng full-width */}
          <div className={styles.relatedSection}>
            <RelatedProducts products={RELATED} />
          </div>
        </div>
      </section>
    </div>
  );
}
