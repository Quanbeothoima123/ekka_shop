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
      <TopCollection />
      <CollectionBanners />
      <TopCategories />
      <FeaturedDeals />
      <TopVendors />
      <ServiceHighlights />
      <PromoBillboard />
      <NewArrivalsSection />
      <ClientReview />
      <BrandLogos />
      <InstagramFeed />
    </>
  );
}
