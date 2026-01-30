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

function GalleryCore({ all, len }) {
  // Ảnh đang hiển thị ở main
  const [activeIndex, setActiveIndex] = useState(0);

  // Thumbnail carousel setup
  const perView = 4;
  const stepPx = 110; // 94px thumb width + 16px gap

  // Clone 5 lần để tạo vòng lặp mượt
  const loopThumbs = useMemo(() => {
    if (len <= 1) return all;
    return [...all, ...all, ...all, ...all, ...all];
  }, [all, len]);

  // Bắt đầu ở giữa (lần thứ 3 trong 5 lần clone)
  const startPos = len <= 1 ? 0 : len * 2;
  const [thumbPos, setThumbPos] = useState(startPos);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef(null);

  // ✅ Prev = đi từ PHẢI sang TRÁI (chiều thuận)
  const prev = () => {
    if (len <= 1 || isTransitioning) return;
    setIsTransitioning(true);

    // Lùi 1 ảnh trong mảng gốc
    setActiveIndex((prev) => (prev - 1 + len) % len);
    // Dịch sang trái
    setThumbPos((p) => p - 1);
  };

  // ✅ Next = tiếp tục đi từ PHẢI sang TRÁI (vòng lặp)
  const next = () => {
    if (len <= 1 || isTransitioning) return;
    setIsTransitioning(true);

    // Tiến 1 ảnh trong mảng gốc
    setActiveIndex((prev) => (prev + 1) % len);
    // Dịch sang trái
    setThumbPos((p) => p + 1);
  };

  const handleTransitionEnd = () => {
    if (len <= 1) return;

    setIsTransitioning(false);

    // Tính vị trí thực trong vòng lặp
    const realPos = ((thumbPos % len) + len) % len;

    // Nếu ra ngoài vùng an toàn (len -> len*4), reset về giữa
    if (thumbPos < len || thumbPos >= len * 4) {
      const newPos = len * 2 + realPos;
      setThumbPos(newPos);
    }
  };

  // ✅ Khi click vào ảnh con → LUÔN ĐI THEO CHIỀU THUẬN (phải -> trái)
  const selectImage = (clickedRealIndex) => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    // Set ảnh này làm active
    setActiveIndex(clickedRealIndex);

    // Tính ảnh nào đang ở vị trí đầu tiên (bên trái nhất)
    const currentFirstImageIndex = ((thumbPos % len) + len) % len;

    // ✅ LUÔN ĐI THEO CHIỀU THUẬN (0->1->2->...->n->0)
    // Tính khoảng cách đi thuận từ currentFirst đến clicked
    let forwardSteps = (clickedRealIndex - currentFirstImageIndex + len) % len;

    // Nếu click vào chính ảnh đầu tiên (forwardSteps = 0)
    // → Đi vòng cả vòng (len steps) để quay lại
    if (forwardSteps === 0 && clickedRealIndex === currentFirstImageIndex) {
      forwardSteps = len;
    }

    // Dịch chuyển theo chiều thuận
    setThumbPos((p) => p + forwardSteps);
  };

  // Zoom origin by cursor
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
        <img className={styles.mainImg} src={all[activeIndex]} alt="" />
      </div>

      <div className={styles.thumbsRow}>
        <button
          type="button"
          className={styles.arrow}
          onClick={prev}
          disabled={len <= 1}
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
              transition: isTransitioning ? "transform 280ms ease" : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {loopThumbs.map((src, i) => {
              // Map vị trí i trong loop -> index thực trong [0..len-1]
              const realIdx = len ? ((i % len) + len) % len : 0;
              const isActive = realIdx === activeIndex;

              return (
                <button
                  key={`thumb-${i}`}
                  type="button"
                  className={`${styles.thumbBtn} ${isActive ? styles.active : ""}`}
                  onClick={() => selectImage(realIdx)}
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
          disabled={len <= 1}
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

  const galleryKey = useMemo(() => all.join(","), [all]);

  return (
    <div className={styles.wrap}>
      <GalleryCore key={galleryKey} all={all} len={len} />
    </div>
  );
}
