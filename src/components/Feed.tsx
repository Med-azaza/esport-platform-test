import FeedCard from "./FeedCard";

const clips = [
  {
    thumbnail: "/clip1.png",
    title: "Clutch or Kick?! INSANE Valorant Moments You Need to See!",
    description:
      "Jump into some of the most intense Valorant plays as I clutch...",
  },
  {
    thumbnail: "/clip2.png",
    title: "Valorant | Late Night Ranked Grind",
    description:
      "Locked in and climbing—let’s see how many dubs we can stack before dawn.",
  },
  {
    thumbnail: "/clip3.png",
    title: "Valorant | Duelist Only Mayhem",
    description:
      "This one’s all chaos — just Reyna, Phoenix, and Raze madness.",
  },
];

const Feed = () => {
  return (
    <div className="bg-[#161D22] p-4 rounded-l-2xl w-full max-w-sm space-y-4 flex-1">
      <h3 className="text-white text-lg font-semibold">Feed</h3>
      <div className="space-y-3">
        {clips.map((clip, index) => (
          <FeedCard key={index} {...clip} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
