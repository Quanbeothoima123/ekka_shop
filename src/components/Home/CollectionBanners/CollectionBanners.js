import styles from "./CollectionBanners.module.css";
import PromoBannerCard from "@/components/Promo/PromoBannerCard";

export default function CollectionBanners() {
  const items = [
    {
      id: "banner-1",
      bg: "/assets/img/banners/banner-1.jpg",
      kicker: "New Arrivals",
      titleLines: ["MENS", "SPORT SHOES"],
      desc: "30% Discount",
      cta: "ORDER NOW", // hover mới hiện
      href: "#",
    },
    {
      id: "banner-2",
      bg: "/assets/img/banners/banner-2.jpg",
      kicker: "New Trending",
      titleLines: ["SMART", "WATCHES"],
      desc: "Buy any 3 Items & get\n20% Discount",
      cta: "ORDER NOW", // hover mới hiện
      href: "#",
    },
  ];

  return (
    <section className={styles.section} aria-label="Collection banners">
      <div className={styles.container}>
        <div className={styles.topLinkWrap}>
          <a className={styles.topLink} href="#">
            Shop All Collection
          </a>
        </div>

        <div className={styles.grid}>
          {items.map((it) => (
            <div key={it.id} className={styles.col}>
              <PromoBannerCard item={it} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
