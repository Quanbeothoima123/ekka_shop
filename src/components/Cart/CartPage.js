"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import styles from "./CartPage.module.css";

import ArrivalsSection from "@/components/ArrivalsSection/ArrivalsSection";
import { IconTrash } from "../icons/Icons";

// Demo data (bạn thay bằng cart state thật)
const initialCart = [
  {
    id: "1",
    title: "Stylish Baby Shoes",
    price: 56,
    qty: 1,
    image: "/assets/img/products/p1.jpg",
  },
  {
    id: "2",
    title: "Unisex Fully Solid Hoodie",
    price: 75,
    qty: 1,
    image: "/assets/img/products/p2.jpg",
  },
  {
    id: "3",
    title: "Beautiful T-shirt For Women",
    price: 48,
    qty: 1,
    image: "/assets/img/products/p3.jpg",
  },
  {
    id: "4",
    title: "Wool Hat For Men",
    price: 95,
    qty: 1,
    image: "/assets/img/products/p4.jpg",
  },
];

const newArrivalsDemo = [
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

function money(n) {
  return `$${Number(n || 0).toFixed(2)}`;
}

function clampQty(v) {
  const n = Number(v || 1);
  if (Number.isNaN(n)) return 1;
  return Math.max(1, Math.min(99, n));
}

export default function CartPage() {
  const [items, setItems] = useState(initialCart);

  // coupon UI
  const [couponOpen, setCouponOpen] = useState(false);
  const [couponCode, setCouponCode] = useState("");

  const subTotal = useMemo(
    () => items.reduce((sum, it) => sum + it.price * it.qty, 0),
    [items],
  );

  // demo delivery/discount
  const delivery = 0;
  const discount = 0;
  const total = subTotal + delivery - discount;

  function setQty(id, nextQty) {
    const qty = clampQty(nextQty);
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, qty } : it)));
  }

  function incQty(id) {
    setItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, qty: clampQty(it.qty + 1) } : it,
      ),
    );
  }

  function decQty(id) {
    setItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, qty: clampQty(it.qty - 1) } : it,
      ),
    );
  }

  function removeItem(id) {
    setItems((prev) => prev.filter((it) => it.id !== id));
  }

  function toggleCoupon() {
    setCouponOpen((v) => !v);
  }

  function applyCoupon() {
    // demo only
    // bạn gắn logic thật ở đây
    if (!couponCode.trim()) return;
    alert(`Applied coupon: ${couponCode}`);
  }

  return (
    <>
      <main className={styles.page}>
        <div className={styles.container}>
          <div className={styles.layout}>
            {/* LEFT */}
            <section className={styles.left}>
              <div className={styles.tableWrap} role="region" aria-label="Cart">
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th className={styles.thProduct}>Product</th>
                      <th className={styles.thPrice}>Price</th>
                      <th className={styles.thQty}>Quantity</th>
                      <th className={styles.thTotal}>Total</th>
                      <th className={styles.thAction} aria-label="Remove" />
                    </tr>
                  </thead>

                  <tbody>
                    {items.map((it) => (
                      <tr key={it.id} className={styles.row}>
                        <td className={styles.productCell}>
                          <div className={styles.product}>
                            <div className={styles.thumb}>
                              <img src={it.image} alt={it.title} />
                            </div>
                            <div className={styles.pTitle}>{it.title}</div>
                          </div>
                        </td>

                        <td className={styles.priceCell}>{money(it.price)}</td>

                        {/* Quantity giống ảnh */}
                        <td className={styles.qtyCell}>
                          <div className={styles.qtyBox}>
                            <input
                              className={styles.qtyValue}
                              type="text"
                              inputMode="numeric"
                              value={it.qty}
                              onChange={(e) => setQty(it.id, e.target.value)}
                              aria-label={`Quantity for ${it.title}`}
                            />
                            <div className={styles.qtyBtns}>
                              <button
                                type="button"
                                className={styles.qtyBtn}
                                onClick={() => incQty(it.id)}
                                aria-label={`Increase quantity for ${it.title}`}
                              >
                                <span className={styles.arrowUp} />
                              </button>
                              <button
                                type="button"
                                className={styles.qtyBtn}
                                onClick={() => decQty(it.id)}
                                aria-label={`Decrease quantity for ${it.title}`}
                              >
                                <span className={styles.arrowDown} />
                              </button>
                            </div>
                          </div>
                        </td>

                        <td className={styles.totalCell}>
                          {money(it.price * it.qty)}
                        </td>

                        {/* Trash icon đẹp */}
                        <td className={styles.actionCell}>
                          <button
                            className={styles.removeBtn}
                            type="button"
                            onClick={() => removeItem(it.id)}
                            aria-label={`Remove ${it.title}`}
                          >
                            <IconTrash className={styles.trashIcon} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className={styles.bottomBar}>
                  <Link className={styles.continue} href="/shop">
                    Continue Shopping
                  </Link>

                  <button className={styles.checkoutBtn} type="button">
                    CHECK OUT
                  </button>
                </div>
              </div>
            </section>

            {/* RIGHT */}
            <aside className={styles.right}>
              <div className={styles.summaryCard}>
                <div className={styles.summaryTitle}>Summary</div>

                <details className={styles.accordion} open>
                  <summary className={styles.accordionHead}>
                    Estimate Shipping
                    <span className={styles.chev} aria-hidden="true">
                      ▾
                    </span>
                  </summary>

                  <div className={styles.summaryBody}>
                    <p className={styles.hint}>
                      Enter your destination to get a shipping estimate
                    </p>

                    <label className={styles.label}>
                      Country <span className={styles.req}>*</span>
                      <select
                        className={styles.select}
                        defaultValue="United States"
                      >
                        <option>United States</option>
                        <option>Vietnam</option>
                        <option>Japan</option>
                      </select>
                    </label>

                    <label className={styles.label}>
                      State/Province
                      <select className={styles.select} defaultValue="">
                        <option value="" disabled>
                          Please Select a region, state
                        </option>
                        <option>California</option>
                        <option>New York</option>
                        <option>Texas</option>
                      </select>
                    </label>

                    <label className={styles.label}>
                      Zip/Postal Code
                      <input
                        className={styles.input}
                        placeholder="Zip/Postal Code"
                      />
                    </label>
                  </div>
                </details>

                <div className={styles.summaryLines}>
                  <div className={styles.line}>
                    <span className={styles.lineLabel}>Sub-Total</span>
                    <span className={styles.lineValue}>{money(subTotal)}</span>
                  </div>

                  <div className={styles.line}>
                    <span className={styles.lineLabel}>Delivery Charges</span>
                    <span className={styles.lineValue}>{money(delivery)}</span>
                  </div>

                  {/* Coupon row + expand */}
                  <div className={styles.line}>
                    <span className={styles.lineLabel}>Coupon Discount</span>
                    <button
                      className={styles.applyCoupon}
                      type="button"
                      onClick={toggleCoupon}
                      aria-expanded={couponOpen}
                    >
                      Apply Coupon
                    </button>
                  </div>

                  {couponOpen ? (
                    <div className={styles.couponBox}>
                      <input
                        className={styles.couponInput}
                        placeholder="Enter Your Coupon Code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                      />
                      <button
                        className={styles.couponBtn}
                        type="button"
                        onClick={applyCoupon}
                      >
                        Apply
                      </button>
                    </div>
                  ) : null}

                  <div className={styles.totalLine}>
                    <span className={styles.totalLabel}>Total Amount</span>
                    <span className={styles.totalValue}>{money(total)}</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <ArrivalsSection
        title="New Arrivals"
        subtitle="Browse The Collection of Top Products"
        products={newArrivalsDemo}
        footer={{ label: "Shop All Collection", href: "/shop" }}
        paddingTop={40}
        paddingBottom={60}
        gap={30}
      />
    </>
  );
}
