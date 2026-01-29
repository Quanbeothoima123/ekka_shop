"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import styles from "./HeroSlider.module.css";

const STEP = 100 / 3;
const AUTO_PLAY_DELAY = 5000;

export default function HeroSlider() {
  const slides = useMemo(
    () => [
      {
        id: "hero-1",
        bg: "/assets/img/hero/hero-1.jpg",
        title: "Boat Headphone Sets",
        subtitle: "SALE OFFER",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
        cta: "Order Now",
      },
      {
        id: "hero-2",
        bg: "/assets/img/hero/hero-2.jpg",
        title: "New Fashion Collection",
        subtitle: "SALE OFFER",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
        cta: "Order Now",
      },
    ],
    [],
  );

  const trackRef = useRef(null);
  const lockRef = useRef(false);
  const pendingDirRef = useRef(null);
  const autoPlayTimerRef = useRef(null);
  const isResettingRef = useRef(false);

  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const prevIndex = (index - 1 + slides.length) % slides.length;
  const nextIndex = (index + 1) % slides.length;

  const go = (dir) => {
    if (lockRef.current || isResettingRef.current) return;

    const track = trackRef.current;
    if (!track) return;

    lockRef.current = true;
    pendingDirRef.current = dir;
    setIsTransitioning(true);

    // Clear auto-play timer
    if (autoPlayTimerRef.current) {
      clearTimeout(autoPlayTimerRef.current);
      autoPlayTimerRef.current = null;
    }

    // Bật transition
    track.classList.add(styles.transition);

    const target = dir === "next" ? -2 * STEP : 0;
    track.style.transform = `translate3d(${target}%, 0, 0)`;
  };

  const onTrackTransitionEnd = (e) => {
    if (e.propertyName !== "transform") return;
    if (isResettingRef.current) return;

    const track = trackRef.current;
    if (!track) return;

    const dir = pendingDirRef.current;
    if (!dir) return;

    isResettingRef.current = true;

    // Update index
    setIndex((current) => {
      const newIndex =
        dir === "next"
          ? (current + 1) % slides.length
          : (current - 1 + slides.length) % slides.length;
      return newIndex;
    });

    // ✅ FIX NHÁY: Đợi React render xong DOM mới reset position
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!track) return;

        // Tắt transition
        track.classList.remove(styles.transition);

        // Reset về vị trí giữa
        track.style.transform = `translate3d(${-STEP}%, 0, 0)`;

        // Đợi 1 frame nữa để đảm bảo
        requestAnimationFrame(() => {
          pendingDirRef.current = null;
          lockRef.current = false;
          isResettingRef.current = false;
          setIsTransitioning(false);
        });
      });
    });
  };

  // Auto-play
  useEffect(() => {
    const startAutoPlay = () => {
      if (autoPlayTimerRef.current) {
        clearTimeout(autoPlayTimerRef.current);
      }

      autoPlayTimerRef.current = setTimeout(() => {
        go("next");
      }, AUTO_PLAY_DELAY);
    };

    if (!isTransitioning && !isResettingRef.current) {
      startAutoPlay();
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearTimeout(autoPlayTimerRef.current);
      }
    };
  }, [index, isTransitioning]);

  return (
    <section className={styles.wrap} aria-label="Hero slider">
      <div className={styles.viewport}>
        <div
          ref={trackRef}
          className={styles.track}
          onTransitionEnd={onTrackTransitionEnd}
          style={{ transform: `translate3d(${-STEP}%, 0, 0)` }}
        >
          {/* ✅ Không dùng animKey nữa để tránh re-mount */}
          <Slide slide={slides[prevIndex]} showText={false} />
          <Slide slide={slides[index]} showText={true} slideKey={index} />
          <Slide slide={slides[nextIndex]} showText={false} />
        </div>

        <button
          className={`${styles.navBtn} ${styles.prev}`}
          onClick={() => go("prev")}
          aria-label="Previous slide"
          type="button"
          disabled={isTransitioning}
        >
          <span className={styles.navIcon} aria-hidden="true">
            ‹
          </span>
        </button>

        <button
          className={`${styles.navBtn} ${styles.next}`}
          onClick={() => go("next")}
          aria-label="Next slide"
          type="button"
          disabled={isTransitioning}
        >
          <span className={styles.navIcon} aria-hidden="true">
            ›
          </span>
        </button>
      </div>
    </section>
  );
}

function Slide({ slide, showText, slideKey }) {
  return (
    <div className={styles.slide}>
      <div
        className={styles.bg}
        style={{ backgroundImage: `url(${slide.bg})` }}
        aria-hidden="true"
      />
      <div className={styles.inner}>
        {showText ? (
          // ✅ Key theo slide.id để trigger animation khi slide thay đổi
          <div className={styles.content} key={slide.id}>
            <span className={styles.bar} aria-hidden="true" />
            <h1 className={styles.title}>{slide.title}</h1>
            <h2 className={styles.subtitle}>{slide.subtitle}</h2>
            <p className={styles.desc}>{slide.desc}</p>
            <a className={styles.cta} href="#">
              {slide.cta}
            </a>
          </div>
        ) : (
          <div className={styles.contentGhost} aria-hidden="true" />
        )}
      </div>
    </div>
  );
}
