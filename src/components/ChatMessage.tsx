import Image from "next/image";
import { useState } from "react";
import { Smile } from "lucide-react";

type Props = {
  name: string;
  time: string;
  message: string;
  avatar: string;
  reactions?: { emoji: string; count: number }[];
  color?: string;
  onReact?: (emoji: string) => void;
};

const emojiOptions = ["🔥", "❤️", "👍", "😅", "😤", "💀"];

const ChatMessage = ({
  name,
  time,
  message,
  avatar,
  reactions = [],
  color,
  onReact,
}: Props) => {
  const [showReactions, setShowReactions] = useState(false);

  return (
    <div className=" relative px-4 py-2 flex gap-3 hover:bg-white/5 transition">
      <Image
        src={avatar}
        alt={name}
        width={50}
        height={50}
        className="rounded-full object-cover h-[50px] w-[50px]"
      />

      <div>
        <div className="text-sm text-white">
          <span className={color ?? "text-white font-semibold"}>{name}</span>{" "}
          <span className="text-xs text-white/50 ml-2">{time}</span>
        </div>
        <p className="text-sm text-white/90">{message}</p>
        <div className="flex gap-2 items-center">
          {reactions.length > 0 && (
            <div className="flex gap-2">
              {reactions.map((r, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1 text-xs bg-[#99F9EA1A] text-white px-2 py-1 rounded-md border border-[#99F9EA]"
                >
                  <span>{r.emoji}</span>
                  <span>{r.count}</span>
                </div>
              ))}
            </div>
          )}
          <div>
            <button
              onClick={() => setShowReactions(!showReactions)}
              className="flex items-center bg-[#99F9EA1A] px-2 py-1 group-hover:text-white border border-[#99F9EA] rounded-md"
            >
              <Smile size={17} />
            </button>
          </div>
        </div>
      </div>

      {showReactions && (
        <div className="absolute top-20 left-20 z-20 bg-black border border-white/10 rounded-md p-1 flex gap-1">
          {emojiOptions.map((emoji) => (
            <button
              key={emoji}
              onClick={() => {
                onReact?.(emoji);
                setShowReactions(false);
              }}
              className="hover:bg-white/10 rounded p-1 text-lg"
            >
              {emoji}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
