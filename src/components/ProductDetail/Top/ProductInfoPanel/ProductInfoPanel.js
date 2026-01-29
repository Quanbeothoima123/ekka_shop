"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./ProductInfoPanel.module.css";

import RatingStars from "@/components/Product/RatingStars";
import {
  IconFacebook,
  IconTwitter,
  IconInstagram,
  IconLinkedIn,
  IconYoutube,
  IconBehance,
  IconWhatsapp,
} from "@/components/icons/Icons";

function IconTrash(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
      <path
        d="M6 7h12M10 7V5.5h4V7M8 7l1 14h6l1-14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconEyeOutline(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
      <path
        d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

export default function ProductInfoPanel({ product, onOpenReviews }) {
  const [size, setSize] = useState(product.sizes?.[0] || "S");
  const [color, setColor] = useState(product.colors?.[0] || "#000");
  const [qty, setQty] = useState(1);

  // Countdown mock (để giống layout)
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick((x) => x + 1), 1000);
    return () => clearInterval(t);
  }, []);

  const timer = useMemo(() => {
    // fake: 365 days + 23:59:59 đếm ngược theo tick
    const base = 365 * 24 * 3600 + 23 * 3600 + 59 * 60 + 59;
    const left = Math.max(0, base - tick);
    const days = Math.floor(left / (24 * 3600));
    const hours = Math.floor((left % (24 * 3600)) / 3600);
    const mins = Math.floor((left % 3600) / 60);
    const secs = left % 60;
    return { days, hours, mins, secs };
  }, [tick]);

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>{product.name}</h1>

      <div className={styles.ratingLine}>
        <RatingStars value={product.rating} />
        <button
          type="button"
          className={styles.reviewLink}
          onClick={onOpenReviews}
        >
          Be the first to review this product
        </button>
      </div>

      <p className={styles.desc}>{product.shortDesc}</p>

      <div className={styles.rtBox}>
        <div className={styles.rtHead}>
          <span className={styles.rtText}>Real Time</span>
          <span className={styles.rtBadge}>24</span>
          <span className={styles.rtText}>Visitor Right Now!</span>
        </div>

        <div className={styles.stockNote}>
          Hurry up! left {product.stockLeft} in stock
        </div>

        <div className={styles.progress}>
          <span className={styles.progressBar} style={{ width: "58%" }} />
        </div>

        <div className={styles.timerRow}>
          <div className={styles.timeBox}>
            <div className={styles.timeNum}>{timer.days}</div>
            <div className={styles.timeLbl}>Days</div>
          </div>
          <div className={styles.timeBox}>
            <div className={styles.timeNum}>{timer.hours}</div>
            <div className={styles.timeLbl}>Hours</div>
          </div>
          <div className={styles.timeBox}>
            <div className={styles.timeNum}>{timer.mins}</div>
            <div className={styles.timeLbl}>Min</div>
          </div>
          <div className={styles.timeBox}>
            <div className={styles.timeNum}>{timer.secs}</div>
            <div className={styles.timeLbl}>Sec</div>
          </div>

          <div className={styles.timeWarn}>Time is Running Out!</div>
        </div>
      </div>

      <div className={styles.priceRow}>
        <div className={styles.priceLeft}>
          <div className={styles.asLow}>As low as</div>
          <div className={styles.price}>${product.price}.00</div>
        </div>

        <div className={styles.priceRight}>
          <div className={styles.stock}>
            {product.inStock ? "IN STOCK" : "OUT OF STOCK"}
          </div>
          <div className={styles.sku}>SKU#: {product.sku}</div>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.optionBlock}>
        <div className={styles.optTitle}>SIZE</div>
        <div className={styles.sizes}>
          {(product.sizes || []).map((s) => (
            <button
              key={s}
              type="button"
              className={`${styles.sizeBtn} ${s === size ? styles.sizeActive : ""}`}
              onClick={() => setSize(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.optionBlock}>
        <div className={styles.optTitle}>COLOR</div>
        <div className={styles.colors}>
          {(product.colors || []).map((c, idx) => (
            <button
              key={`${c}-${idx}`}
              type="button"
              className={`${styles.colorDot} ${c === color ? styles.colorActive : ""}`}
              style={{ background: c }}
              onClick={() => setColor(c)}
              aria-label={`Color ${c}`}
            />
          ))}
        </div>
      </div>

      <div className={styles.actionRow}>
        <div className={styles.qty}>
          <button
            type="button"
            className={styles.qtyBtn}
            onClick={() => setQty((q) => clamp(q - 1, 1, 99))}
            aria-label="Decrease"
          >
            -
          </button>
          <div className={styles.qtyNum}>{qty}</div>
          <button
            type="button"
            className={styles.qtyBtn}
            onClick={() => setQty((q) => clamp(q + 1, 1, 99))}
            aria-label="Increase"
          >
            +
          </button>
        </div>

        <button type="button" className={styles.addBtn}>
          ADD TO CART
        </button>

        <button type="button" className={styles.iconBtn} aria-label="Delete">
          <IconTrash />
        </button>

        <button type="button" className={styles.iconBtn} aria-label="Preview">
          <IconEyeOutline />
        </button>
      </div>

      <div className={styles.socialRow}>
        <a className={styles.socialBtn} href="#" aria-label="Facebook">
          <IconFacebook className={styles.socialIcon} />
        </a>
        <a className={styles.socialBtn} href="#" aria-label="Twitter">
          <IconTwitter className={styles.socialIcon} />
        </a>
        <a className={styles.socialBtn} href="#" aria-label="Instagram">
          <IconInstagram className={styles.socialIcon} />
        </a>

        <a className={styles.socialBtn} href="#" aria-label="YouTube">
          <IconYoutube className={styles.socialIcon} />
        </a>
        <a className={styles.socialBtn} href="#" aria-label="Behance">
          <IconBehance className={styles.socialIcon} />
        </a>
        <a className={styles.socialBtn} href="#" aria-label="WhatsApp">
          <IconWhatsapp className={styles.socialIcon} />
        </a>

        {/* nếu bạn vẫn muốn có LinkedIn thì add thêm ở đây */}
        {/* <a className={styles.socialBtn} href="#" aria-label="LinkedIn">
    <IconLinkedIn className={styles.socialIcon} />
  </a> */}

        <a className={styles.socialBtn} href="#" aria-label="More">
          <span className={styles.plus}>+</span>
        </a>
      </div>
    </div>
  );
}
