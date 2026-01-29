"use client";

import styles from "./InstagramFeed.module.css";

const DEFAULT_ITEMS = [
  { id: "i1", src: "/assets/img/insta/insta-1.jpg", alt: "Instagram 1" },
  { id: "i2", src: "/assets/img/insta/insta-2.jpg", alt: "Instagram 2" },
  { id: "i3", src: "/assets/img/insta/insta-3.jpg", alt: "Instagram 3" },
  { id: "i4", src: "/assets/img/insta/insta-4.jpg", alt: "Instagram 4" },
  { id: "i5", src: "/assets/img/insta/insta-5.jpg", alt: "Instagram 5" },
  { id: "i6", src: "/assets/img/insta/insta-1.jpg", alt: "Instagram 6" },
];

function InstagramIcon() {
  return (
    <svg
      className={styles.igIcon}
      width="54"
      height="54"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 8.2a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M17.3 6.7h.01"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function InstagramFeed({ items = DEFAULT_ITEMS }) {
  // lặp 2 lần để chạy loop mượt
  const loopItems = [...items, ...items];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.heading}>
          <h2 className={styles.title}>Instagram Feed</h2>
          <p className={styles.subTitle}>Share your store with us</p>
        </header>

        <div className={styles.marquee} aria-label="Instagram images">
          <div className={styles.track}>
            {loopItems.map((it, idx) => (
              <a
                // bạn có thể đổi href theo ý, hoặc để "#"
                href="#"
                key={`${it.id}-${idx}`}
                className={styles.item}
                aria-label={`Open ${it.alt}`}
              >
                <img className={styles.img} src={it.src} alt={it.alt} />

                <span className={styles.overlay} aria-hidden="true">
                  <InstagramIcon />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
