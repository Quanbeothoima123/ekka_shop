import styles from "./PromoBannerCard.module.css";

export default function PromoBannerCard({ item }) {
  return (
    <a className={styles.card} href={item.href} aria-label={item.kicker}>
      <div
        className={styles.bg}
        style={{ backgroundImage: `url(${item.bg})` }}
        aria-hidden="true"
      />

      {/* content chữ bên trái */}
      <div className={styles.content}>
        <div className={styles.kicker}>{item.kicker}</div>

        <div className={styles.title}>
          {item.titleLines.map((t, idx) => (
            <div key={idx} className={styles.titleLine}>
              {t}
            </div>
          ))}
        </div>

        <div className={styles.desc}>
          {item.desc.split("\n").map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </div>
      </div>

      {/* CTA nằm giữa khi hover */}
      {item.cta ? <span className={styles.ctaCenter}>{item.cta}</span> : null}
    </a>
  );
}
