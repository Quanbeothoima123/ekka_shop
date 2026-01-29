import styles from "./PromoBillboard.module.css";

export default function PromoBillboard() {
  // ✅ đổi path theo ảnh của bạn
  const bgUrl = "/assets/img/promo/sunglasses-bg.jpg";
  const productImg = "/assets/img/promo/sunglasses.png";

  return (
    <section className={styles.section}>
      <div
        className={styles.billboard}
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        <div className={styles.inner}>
          <div className={styles.content}>
            <p className={styles.kicker}>SUNGLASSES</p>
            <p className={styles.subKicker}>SUPER OFFER</p>

            <div className={styles.product}>
              <img
                className={styles.productImg}
                src={productImg}
                alt="Sunglasses"
              />
            </div>

            <h3 className={styles.title}>Acetate Frame Sunglasses</h3>
            <p className={styles.price}>
              <span className={styles.money}>$40.00</span> only
            </p>

            <button className={styles.cta} type="button">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
