"use client";
import React, { useState, useRef } from "react";
import { Camera,Lock } from "lucide-react";
import Layoutpage from "@/components/Navbar/Layout";

function CreatedGroup(){
    const [coverPhoto, setCoverPhoto] = useState(null);
    const coverPhotoInputRef = useRef(null);
    const handleCoverPhotoChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setCoverPhoto(URL.createObjectURL(file));
      }
    };
    const triggerFileInput = (inputRef) => {
      if (inputRef && inputRef.current) {
        inputRef.current.click();
      }
    };

    return(
        <Layoutpage>
        <div className="bg-white -mt-6 pt-0 p-4 pl-2 tb:pl-32 pr-3 md:pl-64 md:pr-20">
        <div className="w-full h-72 rounded-md  relative bg-gray-100">
          {coverPhoto && (
            <img
              src={coverPhoto}
              alt="Cover"
              className="w-full h-72 object-cover rounded-md"
            />
          )}
          <div className="absolute right-0 bottom-0 p-1 border-4 border-white rounded-full bg-gray-50">
            <Camera
              className="cursor-pointer"
              onClick={() => triggerFileInput(coverPhotoInputRef)}
            />
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleCoverPhotoChange}
            ref={coverPhotoInputRef}
            className="hidden"
          />
        </div>

        <div className="-mt-14">
          <p className="text-xl text-gray-700 mt-16 ml-5 text-bold-xl ">
           Explore Nature
          </p>
          <div className="">
          <Lock className="w-4 h-4 text-gray-400  ml-5 "/>
          <p className="text-sm text-gray-400 -mt-4 ml-10">
            Private Group
          </p>
          <p className="text-sm text-gray-400 -mt-5 ml-[135px]">
            .0 members
          </p>
          </div>
          <div className="flex">
          <div className="w-10 h-10 bg-gray-100 rounded-full ml-5  border-2 border-white relative ">
            <img
              src=''
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
     </div>
          <div className="w-10 h-10 bg-gray-100 rounded-full -ml-2 border-2 border-white relative">
         <img
              src=''
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
         </div>
          <div className="w-10 h-10 bg-gray-100 rounded-full -ml-2 border-2 border-white relative">
        <img
              src=''
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
       </div>
          </div>
        </div>
        <div className="absolute right-0 mr-2 sbb:-mt-9 mt-3  tb:mt-1 tbb:-mt-9 mdd:-mt-16 md:mr-20 tbb:mr-4 xd:-mt-20 xd:mr-20 ">
              <button
                onClick={() => handlePost()}
                className="bg-gradient-to-r  bg-blue-500 hover:from-blue-600 hover:to-blue-500 px-4 py-2  text-white rounded transition duration-200 mr-2"
              >
                + invite
              </button>
              <button
                onClick={() => handlePost(true)}
                className="bg-gradient-to-r bg-[#349E8D] hover:from-[#488f84] hover:to-[#349E8D]  text-white px-4 py-2 rounded transition duration-200"
              >
                Share
              </button>
            </div>
      </div>
      </Layoutpage>
    )
}
export default CreatedGroup;