"use client";

import Sidebar from "@/components/Sidebar";
import ChannelPanel from "@/components/ChannelPanel";
import Chat from "@/components/Chat";
import RightSidebar from "@/components/RightSidebar";

export default function Home() {
  return (
    <div className="flex h-screen shrink-0">
      <Sidebar />
      <ChannelPanel />
      <Chat />
      <RightSidebar />
    </div>
  );
}
