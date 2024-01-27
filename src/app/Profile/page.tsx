import React from "react";
import Headerpage from "../Headerpage/page";
import Navbar from "@/components/Navbar/Navbar";
function Profile() {
  return (
    <section id="Home">
      <Headerpage />
      <div className="bg-whitep-4 pl-2 tb:pl-32 pr-3 md:pl-44 pb-48">
        <div className="bg-blue-200 h-32 rounded-md mb-4"></div>

        <div className="flex items-center justify-center">
          <div className="w-20 h-20 bg-white rounded-full overflow-hidden">
            <img
              src="/Images/landing-image.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-center mt-4">
          <h2 className="text-xl font-bold">John Doe</h2>
          <p className="text-gray-500">@john_doe</p>
          <p className="text-sm text-gray-700 mt-2">
            Software Developer | React Enthusiast
          </p>
        </div>
      </div>
      <Navbar />
    </section>
  );
}

export default Profile;
