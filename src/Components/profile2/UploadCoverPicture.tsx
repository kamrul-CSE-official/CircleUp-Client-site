"use client";
import React, { useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";

const UploadCoverPicture = () => {
  const [mediaVisibality, setMediaVisibality] = useState(false);

  return (
    <div>
      <div
        onMouseEnter={() => setMediaVisibality(true)}
        onMouseLeave={() => setMediaVisibality(false)}
        className="bg-cover bg-center h-80 relative hover:bg-opacity-50"
        style={{
          backgroundImage:
            "url('https://gousfbulls.com/images/2014/12/12/CQQMBTJQBVBKPBU.20141212192359.jpg')",
        }}
      >
        {mediaVisibality && (
          <div className="absolute top-0 right-0 hover:scale-90 bg-slate-100 bg-opacity-50 rounded-xl">
            <div className="flex justify-center items-center gap-3 p-2">
              <h5 className="text-lg font-bold text-white">Update</h5>
              <div>
                <label htmlFor="cover-photo" className="cursor-pointer">
                  <BsFillCameraFill className="text-gray-100 text-3xl mr-2 mt-2" />
                </label>
                <input type="file" id="cover-photo" className="hidden" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadCoverPicture;
