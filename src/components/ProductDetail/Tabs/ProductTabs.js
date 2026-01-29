"use client";

import { useMemo } from "react";
import styles from "./ProductTabs.module.css";
import RatingStars from "@/components/Product/RatingStars";

function ReviewItem({ name, img, rating, text }) {
  return (
    <div className={styles.reviewItem}>
      <div className={styles.avatar}>
        <img src={img} alt={name} width={70} height={70} />
      </div>
      <div className={styles.reviewBody}>
        <div className={styles.reviewName}>{name}</div>
        <div className={styles.reviewStars}>
          <RatingStars value={rating} />
        </div>
        <div className={styles.reviewText}>{text}</div>
      </div>
    </div>
  );
}

export default function ProductTabs({ activeTab, onTabChange }) {
  const reviews = useMemo(
    () => [
      {
        name: "Jeny Doe",
        img: "/assets/img/blog/b1.jpg",
        rating: 4,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.",
      },
      {
        name: "Linda Morgus",
        img: "/assets/img/blog/b2.jpg",
        rating: 3,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.",
      },
    ],
    [],
  );

  return (
    <div className={styles.wrap}>
      <div className={styles.tabs}>
        <button
          type="button"
          className={`${styles.tabBtn} ${activeTab === "detail" ? styles.active : ""}`}
          onClick={() => onTabChange("detail")}
        >
          Detail
        </button>
        <button
          type="button"
          className={`${styles.tabBtn} ${activeTab === "more" ? styles.active : ""}`}
          onClick={() => onTabChange("more")}
        >
          More Information
        </button>
        <button
          type="button"
          className={`${styles.tabBtn} ${activeTab === "reviews" ? styles.active : ""}`}
          onClick={() => onTabChange("reviews")}
        >
          Reviews
        </button>
      </div>

      <div className={styles.panel}>
        {activeTab === "detail" ? (
          <div className={styles.padded}>
            <p className={styles.p}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <ul className={styles.ul}>
              <li>Any Product types that You want - Simple, Configurable</li>
              <li>Downloadable/Digital Products, Virtual Products</li>
              <li>Inventory Management with Backordered items</li>
              <li>Flatlock seams throughout.</li>
            </ul>
          </div>
        ) : null}

        {activeTab === "more" ? (
          <div className={styles.padded}>
            <div className={styles.kv}>
              <div className={styles.kvRow}>
                <span className={styles.k}>Weight</span>
                <span className={styles.v}>1000 g</span>
              </div>
              <div className={styles.kvRow}>
                <span className={styles.k}>Dimensions</span>
                <span className={styles.v}>35 × 30 × 7 cm</span>
              </div>
              <div className={styles.kvRow}>
                <span className={styles.k}>Color</span>
                <span className={styles.v}>Black, Pink, Red, White</span>
              </div>
            </div>
          </div>
        ) : null}

        {activeTab === "reviews" ? (
          <div className={styles.padded}>
            <div className={styles.reviewList}>
              {reviews.map((r, idx) => (
                <ReviewItem key={`${r.name}-${idx}`} {...r} />
              ))}
            </div>

            <div className={styles.addReview}>
              <h3 className={styles.addTitle}>Add a Review</h3>

              <div className={styles.yourRating}>
                <span className={styles.yourRatingText}>Your rating:</span>
                <RatingStars value={3} />
              </div>

              <div className={styles.form}>
                <input className={styles.input} placeholder="Name" />
                <input className={styles.input} placeholder="Email*" />
                <textarea
                  className={styles.textarea}
                  placeholder="Enter Your Comment"
                  rows={6}
                />
                <button type="button" className={styles.submit}>
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
