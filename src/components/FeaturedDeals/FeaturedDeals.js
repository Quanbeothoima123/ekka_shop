"use client";

import React from "react";
import Image from "next/image";
import styles from "./FeaturedDeals.module.css";

const featuredItems = [
  {
    id: "f1",
    title: "Leather Purse For Women",
    reviewsText: "4 Review",
    rating: 4,
    oldPrice: 300,
    price: 250,
    img: "/assets/img/products/bag-1.jpg",
    desc: "Lorem Ipsum is simply dummy text\nthe printing and typesetting.",
    booking: 25,
    timer: { days: 699, hours: 23, min: 59, sec: 14 },
  },
  {
    id: "f2",
    title: "Baby Toy Teddybear",
    reviewsText: "4 Review",
    rating: 4,
    oldPrice: 549,
    price: 480,
    img: "/assets/img/products/teddy.jpg",
    desc: "Lorem Ipsum is simply dummy text\nthe printing and typesetting.",
    booking: 25,
    timer: { days: 365, hours: 23, min: 56, sec: 31 },
  },
];

const limitedOffers = [
  {
    id: "l1",
    title: "Smart watch Firebolt",
    reviewsText: "4 Review",
    rating: 4,
    oldPrice: 200,
    price: 180,
    img: "/assets/img/products/watch-1.jpg",
    desc: "Lorem Ipsum is simply dummy text\nthe printing and typesetting.",
    booking: 25,
    timer: { days: 669, hours: 23, min: 59, sec: 14 },
  },
  {
    id: "l2",
    title: "Casual Shoes Men",
    reviewsText: "4 Review",
    rating: 4,
    oldPrice: 120,
    price: 95,
    img: "/assets/img/products/shoes.jpg",
    desc: "Lorem Ipsum is simply dummy text\nthe printing and typesetting.",
    booking: 25,
    timer: { days: 120, hours: 12, min: 30, sec: 10 },
  },
];

function clampIndex(nextIndex, length) {
  if (length <= 0) return 0;
  return (nextIndex + length) % length;
}

function Stars({ value = 0 }) {
  return (
    <div className={styles.stars} aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < value;
        return (
          <span
            key={i}
            className={`${styles.star} ${filled ? styles.starFilled : ""}`}
            aria-hidden="true"
          >
            ★
          </span>
        );
      })}
    </div>
  );
}

function DealCard({ item }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.imageCol}>
          <Image
            src={item.img}
            alt={item.title}
            width={320}
            height={355}
            className={styles.productImg}
            priority={false}
          />
        </div>

        <div className={styles.contentCol}>
          <h3 className={styles.productTitle}>{item.title}</h3>

          <div className={styles.reviewRow}>
            <Stars value={item.rating} />
            <span className={styles.reviewText}>{item.reviewsText}</span>
          </div>

          <div className={styles.priceRow}>
            <span className={styles.oldPrice}>${item.oldPrice.toFixed(2)}</span>
            <span className={styles.price}>${item.price.toFixed(2)}</span>
          </div>

          <div className={styles.timerRow}>
            <div className={styles.timeBox}>
              <div className={styles.timeValue}>{item.timer.days}</div>
              <div className={styles.timeLabel}>Days</div>
            </div>
            <div className={styles.timeBox}>
              <div className={styles.timeValue}>{item.timer.hours}</div>
              <div className={styles.timeLabel}>Hours</div>
            </div>
            <div className={styles.timeBox}>
              <div className={styles.timeValue}>{item.timer.min}</div>
              <div className={styles.timeLabel}>Min</div>
            </div>
            <div className={styles.timeBox}>
              <div className={styles.timeValue}>{item.timer.sec}</div>
              <div className={styles.timeLabel}>Sec</div>
            </div>
          </div>

          <p className={styles.desc}>{item.desc}</p>

          <div className={styles.bookingRow}>
            <span className={styles.bookingLabel}>Total Booking:</span>
            <span className={styles.bookingValue}>{item.booking}</span>
          </div>

          <div className={styles.btnRow}>
            <button type="button" className={styles.btnGhost}>
              REMIND ME
            </button>
            <button type="button" className={styles.btnPrimary}>
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Panel({ title, items }) {
  const [index, setIndex] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const trackRef = React.useRef(null);
  const isResettingRef = React.useRef(false);

  const prevIndex = (index - 1 + items.length) % items.length;
  const nextIndex = (index + 1) % items.length;

  const STEP = 100 / 3; // 33.333% - mỗi slide chiếm 1/3 track

  const go = (direction) => {
    if (isAnimating || isResettingRef.current || !trackRef.current) return;

    setIsAnimating(true);
    const track = trackRef.current;

    // Bật transition
    track.classList.add(styles.transitioning);

    // Current slide đang ở -STEP (giữa)
    // Next: đi sang -2*STEP, Prev: đi về 0
    const targetX = direction === 1 ? -2 * STEP : 0;
    track.style.transform = `translateX(${targetX}%)`;
  };

  const handleTransitionEnd = (e) => {
    if (e.propertyName !== "transform") return;
    if (isResettingRef.current) return;

    const track = trackRef.current;
    if (!track) return;

    isResettingRef.current = true;

    // Tính index mới dựa vào transform hiện tại
    const currentTransform = track.style.transform;
    const direction = currentTransform.includes(`${-2 * STEP}`) ? 1 : -1;

    const nextIdx = (index + direction + items.length) % items.length;
    setIndex(nextIdx);

    // Reset về vị trí giữa (-STEP) không có transition
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!track) return;

        track.classList.remove(styles.transitioning);
        track.style.transform = `translateX(${-STEP}%)`;

        requestAnimationFrame(() => {
          isResettingRef.current = false;
          setIsAnimating(false);
        });
      });
    });
  };

  const onPrev = () => go(-1);
  const onNext = () => go(1);

  const STEP_PERCENT = 100 / 3;

  return (
    <div className={styles.panel}>
      <div className={styles.panelHead}>
        <h2 className={styles.panelTitle}>{title}</h2>

        <div className={styles.navBtns}>
          <button
            type="button"
            className={styles.navBtn}
            onClick={onPrev}
            aria-label="Previous"
            disabled={isAnimating}
          >
            ‹
          </button>
          <button
            type="button"
            className={styles.navBtn}
            onClick={onNext}
            aria-label="Next"
            disabled={isAnimating}
          >
            ›
          </button>
        </div>
      </div>

      <div className={styles.panelLine} />

      <div className={styles.sliderViewport}>
        {/* Track có 3 slides: prev | current | next */}
        <div
          ref={trackRef}
          className={styles.sliderTrack}
          style={{ transform: `translateX(${-STEP_PERCENT}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          <div className={styles.slideItem}>
            <DealCard item={items[prevIndex]} key={items[prevIndex].id} />
          </div>
          <div className={styles.slideItem}>
            <DealCard item={items[index]} key={items[index].id} />
          </div>
          <div className={styles.slideItem}>
            <DealCard item={items[nextIndex]} key={items[nextIndex].id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedDeals() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid2}>
          <Panel title="Feature Items" items={featuredItems} />
          <Panel title="Limited Time Offer" items={limitedOffers} />
        </div>
      </div>
    </section>
  );
}
