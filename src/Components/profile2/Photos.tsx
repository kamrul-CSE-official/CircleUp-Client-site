import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Photos = () => {
  const photos = [
    "https://friendkit.cssninja.io/assets/img/demo/widgets/photos/1.jpg",
    "https://friendkit.cssninja.io/assets/img/demo/widgets/photos/2.jpg",
    "https://friendkit.cssninja.io/assets/img/demo/widgets/photos/3.jpg",
    "https://friendkit.cssninja.io/assets/img/demo/widgets/photos/12.jpg",
    "https://friendkit.cssninja.io/assets/img/demo/widgets/photos/1.jpg",
    "https://friendkit.cssninja.io/assets/img/demo/widgets/photos/2.jpg",
    "https://friendkit.cssninja.io/assets/img/demo/widgets/photos/3.jpg",
    "https://friendkit.cssninja.io/assets/img/demo/widgets/photos/12.jpg",
    "https://friendkit.cssninja.io/assets/img/demo/widgets/photos/1.jpg",
    "https://friendkit.cssninja.io/assets/img/demo/widgets/photos/2.jpg",
    "https://friendkit.cssninja.io/assets/img/demo/widgets/photos/3.jpg",
    "https://friendkit.cssninja.io/assets/img/demo/widgets/photos/12.jpg",
  ];
  return (
    <div>
      <div className="bg-white p-3 mb-2 flex justify-between items-center rounded-xl">
        <h2 className="text-lg font-semibold mb-2">Photos</h2>
        <BsThreeDotsVertical className="cursor-pointer" size={20} />
      </div>

      <div className="bg-white p-4 shadow mb-4 rounded-xl grid grid-cols-3 gap-2">
        {photos.map((photo, i) => (
          <img
            className="w-full cursor-pointer"
            key={i}
            src={photo}
            alt="photo"
          />
        ))}
        <a href="#">See all</a>
      </div>
    </div>
  );
};

export default Photos;
