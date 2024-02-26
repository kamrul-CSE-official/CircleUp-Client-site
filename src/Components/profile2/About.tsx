import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GiGraduateCap, GiShadowFollower } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { GrHome } from "react-icons/gr";
import { FaCity } from "react-icons/fa";

const About = () => {
  const infos = {
    Studied: "Brac University BD",
    Married: "Married",
    From: "Pakistan",
    Lives: "Dhaka",
    Followers: 390,
  };
  return (
    <div>
      <div className="bg-white p-3 mb-2 flex justify-between items-center rounded-xl">
        <h2 className="text-lg font-semibold mb-2">Basic Infos</h2>
        <BsThreeDotsVertical className="cursor-pointer" size={20} />
      </div>
      <div className="bg-white p-4 shadow mb-4 rounded-xl">
        {/* 1 */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col justify-center">
            <h4 className="font-bold">Studied at</h4>
            <p>{infos.Studied}</p>
          </div>
          <div>
            <GiGraduateCap size={20} />
          </div>
        </div>
        {/* 2 */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col justify-center">
            <h4 className="font-bold">Is Married</h4>
            <p>{infos.Married}</p>
          </div>
          <div>
            <CiHeart size={20} />
          </div>
        </div>
        {/* 3 */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col justify-center">
            <h4 className="font-bold">From</h4>
            <p>{infos.From}</p>
          </div>
          <div>
            <GrHome size={20} />
          </div>
        </div>
        {/* 4 */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col justify-center">
            <h4 className="font-bold">Lives</h4>
            <p>{infos.Lives}</p>
          </div>
          <div>
            <FaCity size={20} />
          </div>
        </div>
        {/* 5 */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col justify-center">
            <h4 className="font-bold">Followers</h4>
            <p>{infos.Followers} k</p>
          </div>
          <div>
            <GiShadowFollower size={20} />
          </div>
        </div>
        <a href="#">See all</a>
      </div>
    </div>
  );
};

export default About;
