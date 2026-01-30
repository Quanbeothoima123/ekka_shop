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

function BestSellersCarousel({ pages, baseLen }) {
  // Clone nhiều hơn (5 lần) để tạo buffer zone
  const loopPages = useMemo(() => {
    if (baseLen <= 1) return pages;
    return [...pages, ...pages, ...pages, ...pages, ...pages];
  }, [pages, baseLen]);

  // Bắt đầu ở vị trí giữa (lần thứ 3 trong 5 lần clone)
  const startPos = baseLen <= 1 ? 0 : baseLen * 2;

  const [currentIndex, setCurrentIndex] = useState(startPos);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef(null);

  const prev = () => {
    if (baseLen <= 1 || isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const next = () => {
    if (baseLen <= 1 || isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    if (baseLen <= 1) return;

    setIsTransitioning(false);

    // Tính vị trí thực trong vòng lặp (0 -> baseLen-1)
    const realIndex = ((currentIndex % baseLen) + baseLen) % baseLen;

    // Nếu đang ở ngoài "vùng an toàn giữa", reset về giữa
    // Vùng an toàn: từ baseLen đến baseLen*3
    if (currentIndex < baseLen || currentIndex >= baseLen * 4) {
      // Reset về vị trí tương ứng ở giữa (không có animation)
      const newIndex = baseLen * 2 + realIndex;
      setCurrentIndex(newIndex);
    }
  };

  const translate = `translateX(-${currentIndex * 100}%)`;

  return (
    <>
      <div className={styles.head}>
        <div className={styles.title}>BEST SELLERS</div>
        <div className={styles.nav}>
          <button
            type="button"
            className={styles.navBtn}
            onClick={prev}
            disabled={baseLen <= 1}
          >
            <IconChevronLeft />
          </button>
          <button
            type="button"
            className={styles.navBtn}
            onClick={next}
            disabled={baseLen <= 1}
          >
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
            transition: isTransitioning ? "transform 320ms ease" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
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

  return (
    <div className={styles.wrap}>
      <BestSellersCarousel key={baseLen} pages={pages} baseLen={baseLen} />
    </div>
  );
}
