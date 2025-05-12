import { useState } from "react";
import Image from "next/image";

const navItems = [
  {
    icon: <Image src="/Dashboard.svg" alt="Logo" width={20} height={20} />,
    tooltip: "Dashboard",
  },
  {
    icon: <Image src="/Players.svg" alt="Logo" width={20} height={20} />,
    tooltip: "Players",
  },
  {
    icon: <Image src="/Clubs.png" alt="Logo" width={20} height={20} />,
    tooltip: "Clubs",
  },
  {
    icon: <Image src="/Federations.svg" alt="Logo" width={20} height={20} />,
    tooltip: "Federations",
  },
  {
    icon: <Image src="/Tournament.png" alt="Logo" width={20} height={20} />,
    tooltip: "Tournament",
    active: true,
  },
  {
    icon: <Image src="/League.svg" alt="Logo" width={20} height={20} />,
    tooltip: "League",
  },
  {
    icon: <Image src="/Group Finder.svg" alt="Logo" width={20} height={20} />,
    tooltip: "Group finder",
  },
  {
    icon: <Image src="/Games.svg" alt="Logo" width={20} height={20} />,
    tooltip: "Games",
  },
];

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(4);

  return (
    <aside className="h-screen w-[80px] bg-[#242832] flex flex-col items-center justify-between py-10 border-r border-gray-800 rounded-r-2xl">
      <div className="mb-4 border-b-1 pb-5 px-3 border-[#33383e]">
        <Image src="/Rize logo.svg" alt="Logo" width={25} height={25} />
      </div>
      <nav className="flex-1 flex flex-col gap-4">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex flex-col items-center w-auto h-12 rounded-sm gap-3 cursor-pointer text-[#6D6E6E] ${
              activeIndex === index ? " text-[#99F9EA]" : ""
            }`}
          >
            <div>{item.icon}</div>
            <span className="text-[12px]">{item.tooltip}</span>
          </button>
        ))}
      </nav>
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/Settings.svg"
          alt="Logo"
          width={20}
          height={20}
          className="cursor-pointer"
        />
        <div className="rounded-full border-1 border-[#99F9EA] w-[50px] h-[50px] flex p-[3px] relative cursor-pointer">
          <Image
            src="/avatar.jpg"
            alt="User Avatar"
            width={50}
            height={50}
            className="object-cover rounded-full"
          />
          <div className="absolute w-[11px] h-[11px] bg-[#99F9EA] border-2 border-[#161D22] rounded-full bottom-0 right-1"></div>
        </div>
      </div>
    </aside>
  );
}
