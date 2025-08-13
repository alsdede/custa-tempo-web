import HeroSection from "@/components/HeroSection";
import CarouselSection from "@/components/CarouselSection";
import HowItWorksSection from "@/components/HowItWorksSection";

export default function Home() {
  return (
 <main className="max-w-content mx-auto px-14 bg-white rounded-[64px]">
    <HeroSection/>
    <CarouselSection/>
    <HowItWorksSection/>
   </main>
  );
}
