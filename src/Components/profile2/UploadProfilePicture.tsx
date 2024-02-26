"use client";
import React, { useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";

const UploadProfilePicture = () => {
  const [mediaVisibality, setMediaVisibality] = useState(false);

  return (
    <div className="h-full flex items-center justify-center">
      <div className="relative">
        <img
          onMouseEnter={() => setMediaVisibality(true)}
          onMouseLeave={() => setMediaVisibality(false)}
          className="h-24 w-24 md:h-28 md:w-28 rounded-full mx-auto mb-4"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKcv_mm-AnXWxl4pll56AJ-tExiZiUQI1H5THlGlMzJhJbqT8c_JgkZ9Vfcv3vb_4ezG4&usqp=CAU"
          alt="Profile"
        />
        {mediaVisibality && (
          <div className="absolute bottom-20 right-[3.5rem] duration-150">
            <label htmlFor="profile-photo" className="cursor-pointer">
              <BsFillCameraFill className="text-gray-100 text-3xl mr-2 mt-2" />
            </label>
            <input type="file" id="profile-photo" className="hidden" />
          </div>
        )}
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-lg md:text-xl font-extrabold">Monto Mia</h3>
          <p className="text-sm text-wrap">
            Department of <span className="font-bold">English</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UploadProfilePicture;
