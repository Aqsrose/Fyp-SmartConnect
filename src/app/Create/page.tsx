import React from "react";
import Layoutpage from "@/components/Navbar/Layout";
function Create() {
  return (
    <Layoutpage>
      <section id="Home">
        <div className=" p-8 bg-white rounded-lg shadow-sm border border-gray-200 pb-52 md:pb-80 w-90 md:ml-60 tb:ml-40 tb:mr-10">
          <div className="bg-whitep-4">
            <div className=" h-32 rounded-md mb-4 border border-gray-200"></div>
            <div className="text-center mt-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                 create posts
              </button>
            </div>
            <div className="text-center mt-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                 create NFT
              </button>
            </div>
          </div>
        </div>
        <div className=" md:mt-[-35px] tb:mt-[-35px] lg:mt-[-25px]"></div>
      </section>
    </Layoutpage>
  );
}

export default Create;
