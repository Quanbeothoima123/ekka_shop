"use client";

import { useMemo, useRef, useState } from "react";
import styles from "./ProductGallery.module.css";

function IconChevronLeft(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
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

function mod(n, m) {
  return ((n % m) + m) % m;
}

function GalleryCore({ all, len }) {
  // main active image
  const [active, setActive] = useState(0);

  // thumbnails loop (show 4, move 1 slot each click)
  const perView = 4;
  const stepPx = 110; // (94px thumb + 16px gap) => giữ đúng layout cũ

  // dùng 3x list để loop
  const loopThumbs = useMemo(() => {
    if (len <= 1) return all;
    return [...all, ...all, ...all];
  }, [all, len]);

  const startPos = len <= 1 ? 0 : len; // middle
  const [thumbPos, setThumbPos] = useState(startPos);
  const [animate, setAnimate] = useState(true);
  const trackRef = useRef(null);

  const prev = () => {
    if (len <= 1) return;
    setActive((a) => mod(a - 1, len));
    setThumbPos((p) => p - 1);
  };

  const next = () => {
    if (len <= 1) return;
    setActive((a) => mod(a + 1, len));
    setThumbPos((p) => p + 1);
  };

  const ensureVisible = (idx) => {
    if (len <= 1) return;

    const baseStart = mod(thumbPos, len);

    // khoảng cách từ start hiện tại -> idx theo vòng tròn
    const forward = mod(idx - baseStart, len);

    // nếu idx nằm ngoài 4 ô đang hiển thị, kéo start để idx vào ô cuối
    if (forward >= perView) {
      const shift = forward - (perView - 1);
      setThumbPos((p) => p + shift);
    }
  };

  const select = (idx) => {
    setActive(idx);
    ensureVisible(idx);
  };

  const onTransitionEnd = () => {
    if (len <= 1) return;

    // nếu pos ra khỏi đoạn giữa => nhảy về giữa để loop vô hạn
    if (thumbPos < len || thumbPos >= len * 2) {
      const normalized = len + mod(thumbPos, len);
      setAnimate(false);
      setThumbPos(normalized);
      requestAnimationFrame(() => setAnimate(true));
    }
  };

  // zoom origin by cursor
  const [hover, setHover] = useState(false);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    });
  };

  const translateX = `translateX(-${thumbPos * stepPx}px)`;

  return (
    <>
      <div
        className={`${styles.main} ${hover ? styles.hover : ""}`}
        style={{
          ["--ox"]: `${origin.x}%`,
          ["--oy"]: `${origin.y}%`,
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseMove={onMove}
      >
        <img className={styles.mainImg} src={all[active]} alt="" />
      </div>

      <div className={styles.thumbsRow}>
        <button
          type="button"
          className={styles.arrow}
          onClick={prev}
          aria-label="Previous"
        >
          <IconChevronLeft />
        </button>

        <div className={styles.thumbsViewport}>
          <div
            ref={trackRef}
            className={styles.thumbsTrack}
            style={{
              transform: translateX,
              transition: animate ? "transform 280ms ease" : "none",
            }}
            onTransitionEnd={onTransitionEnd}
          >
            {loopThumbs.map((src, i) => {
              // map vị trí i -> index thực trong [0..len-1]
              const realIdx = len ? mod(i, len) : 0;
              const isActive = realIdx === active;

              return (
                <button
                  key={`${src}-${i}`}
                  type="button"
                  className={`${styles.thumbBtn} ${isActive ? styles.active : ""}`}
                  onClick={() => select(realIdx)}
                >
                  <img className={styles.thumbImg} src={src} alt="" />
                </button>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          className={styles.arrow}
          onClick={next}
          aria-label="Next"
        >
          <IconChevronRight />
        </button>
      </div>
    </>
  );
}

export default function ProductGallery({ images = [] }) {
  const all = useMemo(() => images.filter(Boolean), [images]);
  const len = all.length;

  // Dùng key để reset component khi images thay đổi
  // Tạo stable key từ images
  const galleryKey = useMemo(() => all.join(","), [all]);

  return (
    <div className={styles.wrap}>
      <GalleryCore key={galleryKey} all={all} len={len} />
    </div>
  );
}
