import { Search } from "lucide-react";

const ChatHeader = () => (
  <div className="flex items-center justify-between px-4 py-3">
    <h2 className="text-white font-semibold text-lg"># Valorant</h2>
    <Search className="text-white/50 hover:text-white w-5 h-5 cursor-pointer" />
  </div>
);

export default ChatHeader;
