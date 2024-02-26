import { BsThreeDotsVertical } from "react-icons/bs";

const FriendsList = () => {
  const friends = [
    {
      name: "Masum Mia",
      img: "https://avatars.githubusercontent.com/u/108287611?v=4",
    },
    {
      name: "Kodom Mia",
      img: "https://avatars.githubusercontent.com/u/108287611?v=4",
    },
    {
      name: "Monto Mia",
      img: "https://avatars.githubusercontent.com/u/108287611?v=4",
    },
    {
      name: "Abul Mia",
      img: "https://avatars.githubusercontent.com/u/108287611?v=4",
    },
    {
      name: "Kasem Mia",
      img: "https://avatars.githubusercontent.com/u/108287611?v=4",
    },
    {
      name: "Arif Mia",
      img: "https://avatars.githubusercontent.com/u/108287611?v=4",
    },
  ];
  return (
    <div>
      <div className="bg-white p-3 mb-2 flex justify-between items-center rounded-xl">
        <h2 className="text-lg font-semibold mb-2">Friends</h2>
        <BsThreeDotsVertical className="cursor-pointer" size={20} />
      </div>
      <div className="bg-white p-4 shadow mb-4 rounded-xl">
        {/* Friends list */}
        <ul>
          {friends.map((friend, i) => (
            <li
              key={i}
              className="flex items-center mb-2 hover:shadow-md cursor-pointer"
            >
              <img
                className="h-8 w-8 rounded-full mr-2"
                src={friend.img}
                alt={friend.name}
              />
              <span>{friend.name}</span>
            </li>
          ))}
        </ul>
        <a href="#">See all</a>
      </div>
    </div>
  );
};

export default FriendsList;
