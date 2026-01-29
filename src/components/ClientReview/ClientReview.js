"use client";

import { useState } from "react";
import styles from "./ClientReview.module.css";

const REVIEWS = [
  {
    id: "r1",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen",
    name: "John Doe",
    role: "General Manager",
    rating: 5,
    avatar: "/assets/img/review-1.jpg",
  },
  {
    id: "r2",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen",
    name: "Jane Smith",
    role: "Marketing Lead",
    rating: 5,
    avatar: "/assets/img/review-2.jpg",
  },
  {
    id: "r3",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen",
    name: "Alex Brown",
    role: "Product Owner",
    rating: 4,
    avatar: "/assets/img/review-3.jpg",
  },
];

function Stars({ value = 0 }) {
  return (
    <div className={styles.stars} aria-label={`Rating ${value}/5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`${styles.star} ${i < value ? styles.starOn : ""}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

// ✅ Quote SVG icon custom
function QuoteLeft() {
  return (
    <svg
      className={styles.quoteLeft}
      width="60"
      height="50"
      viewBox="0 0 60 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 28C12 21.4 14.4 16.6 19.2 13.6C24 10.4 30.4 8.8 38.4 8.8V0C28.8 0 20.8 2.2 14.4 6.6C8 11 4.8 18 4.8 27.6C4.8 32.8 6.4 37.2 9.6 40.8C12.8 44.4 16.8 46.2 21.6 46.2C25.6 46.2 28.8 44.8 31.2 42C33.6 39.2 34.8 35.6 34.8 31.2C34.8 26.8 33.6 23.2 31.2 20.4C28.8 17.6 25.6 16.2 21.6 16.2C18.4 16.2 15.6 17.2 13.2 19.2C12.4 21.6 12 24.6 12 28Z"
        fill="currentColor"
      />
      <path
        d="M0 28C0 21.4 2.4 16.6 7.2 13.6C12 10.4 18.4 8.8 26.4 8.8V0C16.8 0 8.8 2.2 2.4 6.6C-4 11 -7.2 18 -7.2 27.6C-7.2 32.8 -5.6 37.2 -2.4 40.8C0.8 44.4 4.8 46.2 9.6 46.2C13.6 46.2 16.8 44.8 19.2 42C21.6 39.2 22.8 35.6 22.8 31.2C22.8 26.8 21.6 23.2 19.2 20.4C16.8 17.6 13.6 16.2 9.6 16.2C6.4 16.2 3.6 17.2 1.2 19.2C0.4 21.6 0 24.6 0 28Z"
        fill="currentColor"
        transform="translate(30, 0)"
      />
    </svg>
  );
}

function QuoteRight() {
  return (
    <svg
      className={styles.quoteRight}
      width="60"
      height="50"
      viewBox="0 0 60 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M48 22C48 28.6 45.6 33.4 40.8 36.4C36 39.6 29.6 41.2 21.6 41.2V50C31.2 50 39.2 47.8 45.6 43.4C52 39 55.2 32 55.2 22.4C55.2 17.2 53.6 12.8 50.4 9.2C47.2 5.6 43.2 3.8 38.4 3.8C34.4 3.8 31.2 5.2 28.8 8C26.4 10.8 25.2 14.4 25.2 18.8C25.2 23.2 26.4 26.8 28.8 29.6C31.2 32.4 34.4 33.8 38.4 33.8C41.6 33.8 44.4 32.8 46.8 30.8C47.6 28.4 48 25.4 48 22Z"
        fill="currentColor"
      />
      <path
        d="M60 22C60 28.6 57.6 33.4 52.8 36.4C48 39.6 41.6 41.2 33.6 41.2V50C43.2 50 51.2 47.8 57.6 43.4C64 39 67.2 32 67.2 22.4C67.2 17.2 65.6 12.8 62.4 9.2C59.2 5.6 55.2 3.8 50.4 3.8C46.4 3.8 43.2 5.2 40.8 8C38.4 10.8 37.2 14.4 37.2 18.8C37.2 23.2 38.4 26.8 40.8 29.6C43.2 32.4 46.4 33.8 50.4 33.8C53.6 33.8 56.4 32.8 58.8 30.8C59.6 28.4 60 25.4 60 22Z"
        fill="currentColor"
        transform="translate(-30, 0)"
      />
    </svg>
  );
}

export default function ClientReview() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.heading}>
          <h2 className={styles.title}>Client Review</h2>
          <p className={styles.subTitle}>What say client about us</p>
        </header>

        <div className={styles.wrap}>
          <div className={styles.stage}>
            <div className={styles.viewport}>
              <div
                className={styles.track}
                style={{ transform: `translateX(-${active * 100}%)` }}
              >
                {REVIEWS.map((review) => (
                  <div className={styles.slide} key={review.id}>
                    <article className={styles.card}>
                      {/* ✅ SVG Quote icons */}
                      <QuoteLeft />
                      <QuoteRight />

                      <p className={styles.text}>{review.text}</p>

                      <div className={styles.meta}>
                        <div className={styles.name}>{review.name}</div>
                        <div className={styles.role}>{review.role}</div>
                        <Stars value={review.rating} />
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* avatars */}
          <div className={styles.avatars} role="tablist" aria-label="Reviews">
            {REVIEWS.map((r, idx) => {
              const isActive = idx === active;
              return (
                <button
                  key={r.id}
                  type="button"
                  className={styles.avatarBtn}
                  onClick={() => setActive(idx)}
                  role="tab"
                  aria-selected={isActive}
                >
                  <span
                    className={`${styles.avatarCircle} ${
                      isActive ? styles.avatarActive : ""
                    }`}
                  >
                    <img
                      className={styles.avatarImg}
                      src={r.avatar}
                      alt={r.name}
                      loading="lazy"
                    />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
