"use client";
import CategorySection from "@/components/Category/CategorySection";
import HeroSection from "@/components/Hero/HeroSection";
import TeamSection from "@/components/Team/TeamSection";

export default function Home() {
  return (
    <div className="text-center">
      <HeroSection />
      <CategorySection />
      <TeamSection />
    </div>
  );
}
