import React from "react";
import HeroSection from "@/Components/HeroSection";
import Project from "@/Components/Project";
import AchievementsSection from "@/Components/Achievements";
import AboutMe from "@/Components/AboutMe";
import EmailSection from "@/Components/Email";
import Footer from "@/Components/Footer";


export default function Home(){
  return(
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