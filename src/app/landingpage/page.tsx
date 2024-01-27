import React from "react";
import Landingpage_nav from "@/components/landingpage/Landingpage_nav";
import HomeSection from "@/components/landingpage/HomeSection";
import FeaturesSection from "@/components/landingpage/FeaturesSection";
import AboutSection from "@/components/landingpage/AboutSection";
import GetStarted from "@/components/landingpage/GetStarted";
function Landingpage() {
  return (
    // <div class="font-[Poppins] bg-[#030b0a] from-[#baf0ed]">
    <section>
      <div className=" min-w-screen min-h-screen bg-white">
        <Landingpage_nav />
        <GetStarted />
      </div>
      <div className="min-w-screen min-h-screen ">
        <HomeSection />
      </div>

      <div className=" min-w-screen min-h-screen">
        <FeaturesSection />
      </div>
      <div className=" min-w-screen min-h-screen">
        <AboutSection />
      </div>
    </section>
  );
}

export default Landingpage;
