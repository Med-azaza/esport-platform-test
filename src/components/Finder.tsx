"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import ClubCard from "./ClubCard";

const TABS = ["Group", "Club", "Tournament"];

const clubs = [
  {
    name: "Angry EA Sharks",
    timezone: "UTC/GMT +2",
    logo: "/sharks.png",
    tag: "SAF",
  },
  {
    name: "We Scale Late",
    timezone: "UTC/GMT +2",
    logo: "/wescale.png",
    tag: "SAF",
  },
  {
    name: "Baron Thieves",
    timezone: "UTC/GMT +2",
    logo: "/baron.png",
    tag: "SAF",
  },
];

const FinderPanel = () => {
  const [activeTab, setActiveTab] = useState("Club");

  return (
    <div className="bg-[#161D22] p-4 rounded-l-2xl w-full max-w-sm space-y-4 flex-1">
      <h3 className="text-white text-lg font-semibold">Finder</h3>
      <div className="flex gap-2">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1 rounded-full text-sm border border-white/20 ${
              activeTab === tab
                ? "bg-[#99F9EA] text-[#081212]"
                : "bg-white/5 text-white/60 hover:bg-white/10"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search by club name"
          className="w-full  text-white placeholder-white/40 text-sm px-10 py-2 rounded-lg outline-none focus:ring-1 focus:ring-[#00ffc3]"
        />
        <Search className="absolute left-3 top-2.5 w-4 h-4 text-white/40" />
      </div>
      <div className="space-y-3">
        {clubs.map((club, index) => (
          <ClubCard key={index} {...club} />
        ))}
      </div>
    </div>
  );
};

export default FinderPanel;
