import { useEffect, useRef, useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      name: "Alexandra Tillman",
      time: "05/06/2023 12:50 PM",
      message: "yo anyone on for comp tonight? need 1 for full 5-stack 🔥",
      avatar: "/user1.png",
      reactions: [{ emoji: "❤️", count: 2 }],
    },
    {
      name: "Alexandra Tillman",
      time: "05/06/2023 12:50 PM",
      message: "serious. trying to hit plat this act 😤",
      avatar: "/user1.png",
    },
    {
      name: "Sam McDermott",
      time: "05/06/2023 12:50 PM",
      message:
        "count me in! i'll lock Jett as usual 😏\nalso anyone seen the new bundle?? the finisher is insane 🔥",
      avatar: "/user2.png",
      reactions: [{ emoji: "👍", count: 1 }],
      color: "text-red-400",
    },
    {
      name: "Alexandra Tillman",
      time: "05/06/2023 12:50 PM",
      message: "YES the sound effects are sooo clean but 7k VP is wild 💀",
      avatar: "/user1.png",
    },
    {
      name: "Sam McDermott",
      time: "05/06/2023 12:50 PM",
      message: "i’ll join if i don’t have to play smokes again pls 😩",
      avatar: "/user2.png",
      reactions: [{ emoji: "❤️", count: 2 }],
      color: "text-red-400",
    },
    {
      name: "Alexandra Tillman",
      time: "05/06/2023 12:50 PM",
      message:
        "fine fine, i’ll smoke 😤 just don’t wall me off again like last game",
      avatar: "/user1.png",
    },
    {
      name: "Sam McDermott",
      time: "05/06/2023 12:50 PM",
      message: "that was ONCE 😅",
      avatar: "/user2.png",
      color: "text-red-400",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const newMessage = {
      name: "You",
      time: new Date().toLocaleTimeString(),
      message: text,
      avatar: "/valorant logo.png",
    };

    setMessages([...messages, newMessage]);
  };

  const handleReact = (index: number, emoji: string) => {
    setMessages((prev) =>
      prev.map((msg, i) => {
        if (i !== index) return msg;

        const existing = msg.reactions?.find((r) => r.emoji === emoji);
        let updatedReactions;

        if (existing) {
          updatedReactions = msg.reactions?.map((r) =>
            r.emoji === emoji ? { ...r, count: r.count + 1 } : r
          );
        } else {
          updatedReactions = [...(msg.reactions || []), { emoji, count: 1 }];
        }

        return { ...msg, reactions: updatedReactions };
      })
    );
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-full p-5 overflow-hidden flex-1">
      <ChatHeader />
      <div className="flex-1 overflow-y-auto">
        <div className="py-4 space-y-2">
          {messages.map((msg, i) => (
            <ChatMessage
              key={i}
              {...msg}
              onReact={(emoji) => handleReact(i, emoji)}
            />
          ))}
          <div ref={bottomRef} />
        </div>
      </div>
      <ChatInput onSend={handleSendMessage} />
    </div>
  );
};

export default Chat;
