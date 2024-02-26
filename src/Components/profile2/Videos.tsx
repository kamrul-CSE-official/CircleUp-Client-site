import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Videos = () => {
  return (
    <div>
      <div className="bg-white p-3 mb-2 flex justify-between items-center rounded-xl">
        <h2 className="text-lg font-semibold mb-2">Videos</h2>
        <BsThreeDotsVertical className="cursor-pointer" size={20} />
      </div>
      <div className="bg-white p-4 shadow mb-4 rounded-xl grid grid-cols-3 items-center justify-center">
        {/* 1 */}
        <iframe
          width="80"
          height="80"
          src="https://www.youtube.com/embed/6vNifPyqlL0?si=xU_IJJodb5UcKDrN"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        {/* 2 */}
        <iframe
          width="80"
          height="80"
          src="https://www.youtube.com/embed/6vNifPyqlL0?si=xU_IJJodb5UcKDrN"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        {/* 3 */}
        <iframe
          width="80"
          height="80"
          src="https://www.youtube.com/embed/6vNifPyqlL0?si=xU_IJJodb5UcKDrN"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <a href="#">See all</a>
      </div>
    </div>
  );
};

export default Videos;
