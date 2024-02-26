import { BsThreeDotsVertical } from "react-icons/bs";
import { FaComment, FaHeart, FaUser } from "react-icons/fa6";
import { FaShare } from "react-icons/fa";

const Posts = () => {
  const posts = [
    {
      img: "https://friendkit.cssninja.io/assets/img/demo/unsplash/8.jpg",
      text: "Today i visited this amazing little fashion store in Church street. Everything is handmade, from skirts to bags. Their products really have an outstanding quality. If you don't know them already, well it's time to make your move!",
    },
    {
      img: "https://friendkit.cssninja.io/assets/img/demo/unsplash/1.jpg",
      text: "Yesterday with @Karen Miller and @Marvin Stemperd at the #Rock'n'Rolla concert in LA. Was totally fantastic! People were really excited about this one!",
    },
    {
      img: "https://friendkit.cssninja.io/assets/img/demo/unsplash/8.jpg",
      text: "Today i visited this amazing little fashion store in Church street. Everything is handmade, from skirts to bags. Their products really have an outstanding quality. If you don't know them already, well it's time to make your move!",
    },
    {
      img: "https://friendkit.cssninja.io/assets/img/demo/unsplash/1.jpg",
      text: "Yesterday with @Karen Miller and @Marvin Stemperd at the #Rock'n'Rolla concert in LA. Was totally fantastic! People were really excited about this one!",
    },
    {
      img: "https://friendkit.cssninja.io/assets/img/demo/unsplash/8.jpg",
      text: "Today i visited this amazing little fashion store in Church street. Everything is handmade, from skirts to bags. Their products really have an outstanding quality. If you don't know them already, well it's time to make your move!",
    },
    {
      img: "https://friendkit.cssninja.io/assets/img/demo/unsplash/1.jpg",
      text: "Yesterday with @Karen Miller and @Marvin Stemperd at the #Rock'n'Rolla concert in LA. Was totally fantastic! People were really excited about this one!",
    },
  ];
  return (
    <div>
      <div className="bg-white p-3 mb-2 flex justify-between items-center rounded-xl">
        <h2 className="text-lg font-semibold mb-2">Posts</h2>
        <div className="flex items-center justify-end gap-3">
          <button className="p-3 border border-blue-500 text-blue-600 rounded-xl">
            Recent
          </button>
          <button className="p-3 border border-gray-400 rounded-xl">
            Popular
          </button>
        </div>
      </div>
      {posts.map((post, i) => (
        <div
          key={i}
          className="bg-white px-4 py-5 rounded-xl shadow mb-4 space-y-3 shadow-lg"
        >
          {/* card header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                className="h-14 w-14 md:h-16 md:w-16 rounded-full"
                src={post.img}
                alt="Profile"
              />
              <h4 className="font-bold">
                Monto Mia <br />{" "}
                <span className="font-light text-sm">
                  October 17 2018, 11:03am
                </span>
              </h4>
            </div>
            <BsThreeDotsVertical className="cursor-pointer" size={20} />
          </div>
          {/* card body */}
          <div className="space-y-3">
            <p>{post.text}</p>
            <img
              className="rounded-2xl"
              src="https://friendkit.cssninja.io/assets/img/demo/unsplash/8.jpg"
              alt=""
            />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-gray-500">
              <FaHeart />
              <span>509</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-500">
              <FaComment />
              <span>56</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-500">
              <FaShare />
              <span>20</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
