import React from "react";
import Headerpage from "../Headerpage/page";
import Navbar from "@/components/Navbar/Navbar";
function Home() {
  return (
    <section id="Home">
      <Headerpage />
      <div className=" bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="pl-2 pt-4 tb:pl-32 pr-3 md:pl-44 md:pt-3">
          <div className="h-24 pl-3 pt-2 pb-3 rounded-md mb-4 border border-gray-200">
            <div className="w-16 h-16 bg-white rounded-full overflow-hidden">
              <img
                src="/Images/landing-image.png"
                alt="Profile"
                className="w-full h-full object-cover "
              />
            </div>
            <p className="text-gray-500 text-[10px] pl-5">story...</p>
          </div>

          <div className="flex items-center justify-center"></div>

          <div className="text-center mt-4">
            <h2 className="text-xl font-bold">John Doe</h2>
            <p className="text-gray-500">@john_doe</p>
            <p className="text-sm text-gray-700 mt-2">
              Software Developer | React Enthusiast
            </p>
          </div>
        </div>
      </div>

      <Navbar />
    </section>
  );
}

export default Home;
