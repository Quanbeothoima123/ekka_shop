import HeroSlider from "@/components/Home/HeroSlider/HeroSlider";
import TopCollection from "@/components/Home/TopCollection/TopCollection";
import CollectionBanners from "@/components/Home/CollectionBanners/CollectionBanners";
import TopCategories from "@/components/Home/TopCategories/TopCategories";
import FeaturedDeals from "@/components/FeaturedDeals/FeaturedDeals";
import TopVendors from "@/components/TopVendors/TopVendors";
import ServiceHighlights from "@/components/ServiceHighlights/ServiceHighlights";
import PromoBillboard from "@/components/PromoBillboard/PromoBillboard";
import NewArrivalsSection from "@/components/NewArrivals/NewArrivalsSection";
import ClientReview from "@/components/ClientReview/ClientReview";
import BrandLogos from "@/components/BrandLogos/BrandLogos";
import InstagramFeed from "@/components/Home/InstagramFeed/InstagramFeed";

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <section id="top-collection">
        <TopCollection />
      </section>

      <CollectionBanners />

      <section id="top-categories">
        <TopCategories />
      </section>

      <section id="featured-deals">
        <FeaturedDeals />
      </section>

      <section id="top-vendors">
        <TopVendors />
      </section>

      <section id="service-highlights">
        <ServiceHighlights />
      </section>

      <PromoBillboard />

      <section id="new-arrivals">
        <NewArrivalsSection />
      </section>

      <section id="client-review">
        <ClientReview />
      </section>

      <BrandLogos />

      <section id="instagram-feed">
        <InstagramFeed />
      </section>
    </>
  );
}
