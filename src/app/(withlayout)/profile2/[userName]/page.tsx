"use client";
import About from "@/Components/profile2/About";
import FriendsList from "@/Components/profile2/FriendsList";
import Photos from "@/Components/profile2/Photos";
import Posts from "@/Components/profile2/Posts";
import UploadCoverPicture from "@/Components/profile2/UploadCoverPicture";
import UploadProfilePicture from "@/Components/profile2/UploadProfilePicture";
import Videos from "@/Components/profile2/Videos";
import React from "react";
import { FaUser } from "react-icons/fa";

const ProfilePage: React.FC = () => {
  return (
    <div className="mt-5 bg-gray-200 w-full">
      <div className="container mx-auto pt-4 lg:pt-20 min-h-screen">
        {/* profile photo and cover photo */}
        <div className="relative mb-36">
          {/* Cover photo */}
          <UploadCoverPicture />
          <div className="flex items-center justify-between w-full absolute -bottom-[7.5rem]">
            <div className="flex flex-wrap items-center justify-start gap-2 relative">
              <button className="p-3 bg-white rounded-xl border">
                Timeline
              </button>
              <button className="p-3 bg-white rounded-xl border">About</button>
              <div className="absolute -bottom-16">
                <h3 className="text-2xl font-bold">3.4K</h3>
                <h5>FRIENDS</h5>
              </div>
            </div>
            {/* profile */}
            <UploadProfilePicture />
            <div className="flex flex-wrap items-center justify-end gap-2 relative">
              <button className="p-3 bg-white rounded-xl border">
                Friends
              </button>
              <button className="p-3 bg-white rounded-xl border">Photos</button>
              <div className="absolute -bottom-16">
                <h3 className="text-2xl font-bold">1.4K</h3>
                <h5>Followers</h5>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="w-full mx-auto mt-8">
          <div className="flex flex-col-reverse lg:flex-row justify-center">
            {/* Left column */}
            <div className="w-full lg:w-1/4 lg:pr-4">
              <About />
              <Photos />
              <FriendsList />
              <Videos />
              {/* Add more sections */}
            </div>

            {/* Right column */}
            <div className="w-full lg:w-3/4 lg:pl-4">
              <Posts />
              <div className="bg-white p-4 rounded shadow mb-4">
                <h2 className="text-lg font-semibold mb-2">Posts</h2>
                {/* Posts */}
                <div className="border border-gray-200 rounded-lg p-4 flex items-center">
                  <div className="mr-4">
                    <FaUser className="text-gray-500 text-xl" />
                  </div>
                  <div>
                    <p>This is a post.</p>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 flex items-center">
                  <div className="mr-4">
                    <FaUser className="text-gray-500 text-xl" />
                  </div>
                  <div>
                    <p>
                      This is a post. Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Animi hic, inventore mollitia tenetur
                      quis natus cum quos laborum accusantium laudantium facere,
                      facilis dolore aut quaerat deserunt corrupti nulla aliquam
                      consectetur. Lorem, ipsum dolor sit amet consectetur
                      adipisicing elit. Nemo expedita ipsa veritatis nam.
                      Laboriosam quam fugit, quisquam fugiat a cum eius. Quasi
                      ab, fugiat error maiores nobis a architecto iusto.
                    </p>
                  </div>
                </div>
                {/* Add more posts */}
              </div>
              {/* Add more sections */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
