import { HeroSection } from "@/components/hero-section";
import { StatsRow } from "@/components/stats-row";
import { FeaturedCars } from "@/components/featured-cars";
import { BrandMarquee } from "@/components/brand-marquee";
import { HowWeWork } from "@/components/how-we-work";
import { BentoGrid } from "@/components/bento-grid";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { FinalCta } from "@/components/final-cta";
import { getAllTestimonials } from "@/db/queries";

export default async function HomePage() {
  const testimonials = await getAllTestimonials();
  return (
    <>
      <HeroSection />
      <StatsRow />
      <FeaturedCars />
      <BrandMarquee />
      <HowWeWork />
      <BentoGrid />
      <TestimonialsCarousel items={testimonials} />
      <FinalCta />
    </>
  );
}
