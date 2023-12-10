import React from "react";
import HeroSection from "@/components/HeroSection";
import Project from "@/components/Project";
import AchievementsSection from "@/components/Achievements";
import AboutMe from "@/components/AboutMe";
import EmailSection from "@/components/Email";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div calssName="flex min-h-screen flex-col">
      <main>
        <HeroSection />
        <AchievementsSection />
        <AboutMe />
        <Project />
        <EmailSection />
      </main>
      <Footer />
    </div>
  );
}
