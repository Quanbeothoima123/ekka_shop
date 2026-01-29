"use client";

import { useMemo, useRef, useState } from "react";
import styles from "./BestSellers.module.css";
import RatingStars from "@/components/Product/RatingStars";

function IconChevronLeft(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" {...props}>
      <path
        d="M14.5 5.5 8.5 12l6 6.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconChevronRight(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
      <path
        d="M9.5 5.5 15.5 12l-6 6.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BestSellerItem({ item }) {
  return (
    <article className={styles.item}>
      <div className={styles.thumb}>
        <img src={item.img} alt={item.name} width={110} height={110} />
      </div>

      <div className={styles.meta}>
        <h4 className={styles.name}>{item.name}</h4>
        <div className={styles.rating}>
          <RatingStars value={item.rating} />
        </div>
        <div className={styles.priceRow}>
          {item.oldPrice ? (
            <span className={styles.old}>${item.oldPrice}.00</span>
          ) : null}
          <span className={styles.price}>${item.price}.00</span>
        </div>
      </div>
    </article>
  );
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

function BestSellersCarousel({ pages, baseLen }) {
  // 3 lần để tạo loop mượt
  const loopPages = useMemo(() => {
    if (baseLen <= 1) return pages;
    return [...pages, ...pages, ...pages];
  }, [pages, baseLen]);

  // start ở "giữa" để có thể next/prev vô hạn
  const startPos = baseLen <= 1 ? 0 : baseLen;

  const [pos, setPos] = useState(startPos);
  const [animate, setAnimate] = useState(true);
  const trackRef = useRef(null);

  const prev = () => {
    if (baseLen <= 1) return;
    setPos((p) => p - 1);
  };

  const next = () => {
    if (baseLen <= 1) return;
    setPos((p) => p + 1);
  };

  const onTransitionEnd = () => {
    if (baseLen <= 1) return;

    // nếu chạy ra khỏi "đoạn giữa" thì nhảy về giữa (không animation)
    if (pos < baseLen || pos >= baseLen * 2) {
      const normalized = baseLen + mod(pos, baseLen);
      setAnimate(false);
      setPos(normalized);
      requestAnimationFrame(() => setAnimate(true));
    }
  };

  const translate = `translateX(-${pos * 100}%)`;

  return (
    <>
      <div className={styles.head}>
        <div className={styles.title}>BEST SELLERS</div>
        <div className={styles.nav}>
          <button type="button" className={styles.navBtn} onClick={prev}>
            <IconChevronLeft />
          </button>
          <button type="button" className={styles.navBtn} onClick={next}>
            <IconChevronRight />
          </button>
        </div>
      </div>

      <div className={styles.viewport}>
        <div
          ref={trackRef}
          className={styles.track}
          style={{
            transform: translate,
            transition: animate ? "transform 320ms ease" : "none",
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {loopPages.map((group, idx) => (
            <div key={`bs-page-${idx}`} className={styles.slide}>
              <div className={styles.list}>
                {group.map((it) => (
                  <BestSellerItem key={it.id} item={it} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default function BestSellers({ items = [] }) {
  const perPage = 4;

  const pages = useMemo(() => {
    const out = [];
    for (let i = 0; i < items.length; i += perPage) {
      out.push(items.slice(i, i + perPage));
    }
    return out.length ? out : [[]];
  }, [items]);

  const baseLen = pages.length;

  // Dùng key để force reset component khi baseLen thay đổi
  return (
    <div className={styles.wrap}>
      <BestSellersCarousel key={baseLen} pages={pages} baseLen={baseLen} />
    </div>
  );
}
