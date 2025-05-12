import {
  Volume2,
  Plus,
  Hash,
  BookOpen,
  Search,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const ChannelPanel = () => {
  const [roomsOpen, setRoomsOpen] = useState(true);
  return (
    <div className="w-[300px] bg-[#161D22] text-white flex flex-col h-full overflow-y-auto rounded-tr-xl rounded-r-2xl items-center">
      <div
        className="h-35  bg-cover bg-center rounded-tr-xl w-full "
        style={{ backgroundImage: "url('/valo bg.png')" }}
      >
        <div className="bg-white/10 backdrop-blur-xs border-white/20 p-2 flex justify-between items-center">
          <Image
            src="/valorant logo.png"
            alt="Logo"
            width={25}
            height={25}
            className="rounded-full"
          />
          <span className="text-[16px] font-[600]">Valorant</span>
          <Image
            src="/two players.png"
            alt="Logo"
            width={20}
            height={20}
            className="object-contain"
          />
          <span className="text-[12px]">259</span>
          <Image
            src="/Club.png"
            alt="Logo"
            width={20}
            height={20}
            className="object-contain"
          />
          <span className="text-[12px]">8</span>
          <ChevronDown size={25} />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4 px-4 w-full">
        <button className="flex items-center gap-4 text-[#88898A] text-s cursor-pointer">
          <Search size={16} />
          Browse Channels
        </button>
        <div className="mt-4 mb-2 border-t-2 border-white/10 w-full" />

        <button className="flex items-center gap-4 text-[#88898A] text-s cursor-pointer">
          <BookOpen size={16} />
          Rules
        </button>

        <button className="flex items-center gap-4 text-[#88898A] text-s cursor-pointer">
          <Volume2 size={16} />
          Announcements
        </button>
      </div>
      <div className="mt-4 mb-2 border-t-2 border-white/10 w-[90%]" />

      <div className="px-4 text-white font-semibold flex items-center justify-between w-full">
        Channels
        <Plus size={14} />
      </div>

      <div className="mt-2 px-4 text-sm w-full">
        <button
          onClick={() => setRoomsOpen(!roomsOpen)}
          className="flex items-center gap-2 font-semibold mb-4 justify-between cursor-pointer w-full"
        >
          ⭐ Gaming Rooms{" "}
          {roomsOpen ? <ChevronDown size={15} /> : <ChevronUp size={15} />}
        </button>

        {roomsOpen && (
          <ul className="flex flex-col gap-4 text-white/70">
            <li className="flex items-center gap-2 text-white font-medium">
              <Hash size={14} />
              Valorant Mena
            </li>
            <li className="flex items-center gap-2">
              <Hash size={14} />
              Valorant Saudi
            </li>
            <li className="flex items-center gap-2">
              <Hash size={14} />
              Valorant Egypt
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ChannelPanel;
