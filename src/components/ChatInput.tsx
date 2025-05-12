import { useState } from "react";
import { Smile, Paperclip, Send, File } from "lucide-react";
import Image from "next/image";

type Props = {
  onSend: (text: string) => void;
};

const ChatInput = ({ onSend }: Props) => {
  const [text, setText] = useState("");
  const handleSend = () => {
    if (text.trim()) {
      onSend(text);
      setText("");
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="flex items-center px-4 py-5 bg-[#161D22] rounded-2xl gap-2">
      <button className="text-white/40 hover:text-white  bg-[#32383D] p-3 rounded-full cursor-pointer">
        <Paperclip size={20} />
      </button>
      <div className="border p-2 border-white/20 rounded-lg w-full flex items-center gap-2">
        <input
          value={text}
          type="text"
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none text-white "
        />
        <Image
          src="/GIF.png"
          alt="gif"
          width={20}
          height={20}
          className="cursor-pointer"
        />
        <File size={20} className="cursor-pointer" color="#6D6E6E" />
        <Smile size={20} className="cursor-pointer" color="#6D6E6E" />
      </div>
      <button
        onClick={handleSend}
        className="bg-[#99F9EA] p-3 rounded-full cursor-pointer"
      >
        <Send size={16} color="black" />
      </button>
    </div>
  );
};

export default ChatInput;
