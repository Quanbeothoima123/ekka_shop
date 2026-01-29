import styles from "./ServiceHighlights.module.css";

const items = [
  {
    title: "Free Shipping",
    desc: "Free shipping on all US order or order above $200",
    icon: "truck",
  },
  {
    title: "24X7 Support",
    desc: "Contact us 24 hours a day, 7 days a week",
    icon: "support",
  },
  {
    title: "30 Days Return",
    desc: "Simply return it within 30 days for an exchange",
    icon: "return",
  },
  {
    title: "Payment Secure",
    desc: "Contact us 24 hours a day, 7 days a week",
    icon: "payment",
  },
];

function Icon({ name }) {
  switch (name) {
    case "truck":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M3 6h11v10H3zM14 9h4l3 3v4h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M7 18.2a1.7 1.7 0 1 0 0 .1z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M17 18.2a1.7 1.7 0 1 0 0 .1z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      );
    case "support":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 3a7 7 0 0 0-7 7v3a3 3 0 0 0 3 3h1V9H8a4 4 0 0 1 8 0h-1v7h1a3 3 0 0 0 3-3v-3a7 7 0 0 0-7-7z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M9 19h6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "return":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 4a8 8 0 1 0 8 8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M20 4v6h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M20 10a8 8 0 0 0-8-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "payment":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M7 10a5 5 0 0 1 10 0v3a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4v-3z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M12 8v8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M10.7 10.3c.3-.6.8-1 1.6-1 1.1 0 1.8.7 1.8 1.5 0 2-3.7 1.1-3.7 3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function ServiceHighlights() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {items.map((it) => (
            <article key={it.title} className={styles.card}>
              <div className={styles.iconWrap}>
                <span className={styles.icon} aria-hidden="true">
                  <Icon name={it.icon} />
                </span>
              </div>
              <h3 className={styles.title}>{it.title}</h3>
              <p className={styles.desc}>{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
