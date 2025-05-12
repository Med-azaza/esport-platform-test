import { Pin, MessageSquare, Bell, LayoutGrid } from "lucide-react";
import FinderPanel from "./Finder";
import Feed from "./Feed";

const RightSidebar = () => {
  return (
    <div className="flex flex-col gap-2 py-5 items-end w-[350px]">
      <div className="flex gap-2 items-center justify-end">
        <button className="relative w-10 h-10 rounded-full bg-black/40 hover:bg-white/10 flex items-center justify-center transition">
          <Pin size={18} className="text-white" />
        </button>
        <button className="relative w-10 h-10 rounded-full bg-black/40 hover:bg-white/10 flex items-center justify-center transition">
          <MessageSquare size={18} className="text-white" />
        </button>
        <button className="relative w-10 h-10 rounded-full bg-black/40 hover:bg-white/10 flex items-center justify-center transition">
          <Bell size={18} className="text-white" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        </button>
        <button className="w-10 h-10 rounded-full bg-cyan-300 hover:bg-cyan-400 flex items-center justify-center transition mr-2">
          <LayoutGrid size={18} className="text-black" />
        </button>
      </div>
      <FinderPanel />
      <Feed />
    </div>
  );
};

export default RightSidebar;
