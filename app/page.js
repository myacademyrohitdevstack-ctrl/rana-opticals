import Hero from "@/components/Hero";
import CollectionGrid from "@/components/CollectionGrid";
import FeaturedFrames from "@/components/FeaturedFrames";
import StoreStory from "@/components/StoreStory";
import Reviews from "@/components/Reviews";
import StoreLocation from "@/components/StoreLocation";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CollectionGrid />
      <FeaturedFrames />
      <StoreStory />
      <Reviews />
      <StoreLocation />
    </>
  );
}
