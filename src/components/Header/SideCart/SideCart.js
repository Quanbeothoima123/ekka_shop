"use client";

import { useEffect, useMemo } from "react";
import Image from "next/image";
import styles from "./SideCart.module.css";

function IconClose(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M6 6l12 12M18 6L6 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconRemove(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M7 7l10 10M17 7L7 17"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

const DEFAULT_ITEMS = [
  {
    id: "c1",
    name: "T-shirt For Women",
    img: "/assets/img/products/p1.jpg",
    price: 76,
    qty: 1,
  },
  {
    id: "c2",
    name: "Women Leather Shoes",
    img: "/assets/img/products/p2.jpg",
    price: 64,
    qty: 1,
  },
  {
    id: "c3",
    name: "Girls Nylon Purse",
    img: "/assets/img/products/p5.jpg",
    price: 59,
    qty: 1,
  },
];

export default function SideCart({ open, onClose, items: itemsProp }) {
  // ✅ FIX: Dùng derived state thay vì useEffect
  // Nếu parent truyền items → dùng itemsProp, nếu không → dùng default
  const items = useMemo(() => {
    return itemsProp && itemsProp.length > 0 ? itemsProp : DEFAULT_ITEMS;
  }, [itemsProp]);

  // ESC to close + lock body scroll
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  const subTotal = useMemo(
    () => items.reduce((sum, it) => sum + it.price * it.qty, 0),
    [items],
  );
  const vat = useMemo(() => Math.round(subTotal * 0.2 * 100) / 100, [subTotal]);
  const total = useMemo(
    () => Math.round((subTotal + vat) * 100) / 100,
    [subTotal, vat],
  );

  return (
    <div
      className={`${styles.root} ${open ? styles.open : ""}`}
      aria-hidden={!open}
    >
      {/* ✅ OVERLAY */}
      <button
        type="button"
        className={styles.overlay}
        onClick={onClose}
        aria-label="Close cart overlay"
        tabIndex={open ? 0 : -1}
      />

      {/* ✅ PANEL */}
      <aside
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-label="My Cart"
      >
        <div className={styles.head}>
          <div className={styles.title}>My Cart</div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close"
          >
            <IconClose />
          </button>
        </div>

        <div className={styles.divider} />

        {/* list scroll area */}
        <div className={styles.list}>
          {items.length === 0 ? (
            <div className={styles.empty}>Your cart is empty.</div>
          ) : (
            items.map((it) => (
              <div key={it.id} className={styles.item}>
                <div className={styles.thumb}>
                  <Image src={it.img} alt={it.name} width={64} height={64} />
                </div>

                <div className={styles.meta}>
                  <div className={styles.rowTop}>
                    <div className={styles.name} title={it.name}>
                      {it.name}
                    </div>

                    <button
                      type="button"
                      className={styles.removeBtn}
                      onClick={() => {
                        // ✅ Nếu cần xử lý remove, callback lên parent
                        console.log("Remove item:", it.id);
                      }}
                      aria-label={`Remove ${it.name}`}
                    >
                      <IconRemove />
                    </button>
                  </div>

                  <div className={styles.priceLine}>
                    <span className={styles.price}>${it.price.toFixed(2)}</span>
                    <span className={styles.mul}>x</span>
                    <span className={styles.qtyText}>{it.qty}</span>
                  </div>

                  <div className={styles.qtyBox} aria-label="Quantity controls">
                    <button
                      type="button"
                      className={styles.qtyBtn}
                      onClick={() => {
                        // ✅ Nếu cần update quantity, callback lên parent
                        console.log("Decrease qty:", it.id);
                      }}
                      aria-label="Decrease"
                    >
                      –
                    </button>
                    <div className={styles.qtyNum}>{it.qty}</div>
                    <button
                      type="button"
                      className={styles.qtyBtn}
                      onClick={() => {
                        // ✅ Nếu cần update quantity, callback lên parent
                        console.log("Increase qty:", it.id);
                      }}
                      aria-label="Increase"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* footer sticky */}
        <div className={styles.footer}>
          <div className={styles.divider} />

          <div className={styles.summary}>
            <div className={styles.sumRow}>
              <span>Sub-Total :</span>
              <b>${subTotal.toFixed(2)}</b>
            </div>
            <div className={styles.sumRow}>
              <span>VAT (20%) :</span>
              <b>${vat.toFixed(2)}</b>
            </div>
            <div className={styles.sumRow}>
              <span>Total :</span>
              <b>${total.toFixed(2)}</b>
            </div>
          </div>

          <div className={styles.actions}>
            <button type="button" className={styles.btnPrimary}>
              VIEW CART
            </button>
            <button type="button" className={styles.btnSecondary}>
              CHECKOUT
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
