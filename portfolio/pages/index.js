import React from "react";
import HeroSection from "@/Components/HeroSection";
import Project from "@/Components/Project";


export default function Home(){
  return(
    <div calssName="flex min-h-screen flex-col">
      <HeroSection />
      <Project />

    </div>
  );
}