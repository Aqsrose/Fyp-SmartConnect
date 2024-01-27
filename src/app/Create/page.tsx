import React from "react";
import Headerpage from "../Headerpage/page";
import Navbar from "@/components/Navbar/Navbar";
function Create() {
  return (
    <section id="Home">
      <Headerpage />
      <div className=" p-8 bg-white rounded-lg shadow-sm border border-gray-200 pb-52 md:pb-80 w-90 md:ml-60 tb:ml-40 tb:mr-10">
        <div className="bg-whitep-4 pl-2 tb:pl-32 pr-3 md:pl-44">
          <div className=" h-32 rounded-md mb-4 border border-gray-200"></div>

          <div className="text-center mt-4">
            <button className="bg-red-500 text-white px-4 py-2 rounded">
              start creating posts
            </button>
          </div>
        </div>
      </div>
      <div className=" md:mt-[-35px] tb:mt-[-35px] lg:mt-[-25px]">
        <Navbar />
      </div>
    </section>
  );
}

export default Create;
