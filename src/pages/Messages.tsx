// pages/Messages.tsx
import { useState } from "react";
import {
  Search,
  ArrowLeft,
  Send,
  MoreVertical,
  Phone,
  Video,
  Image as ImageIcon,
} from "lucide-react";
import type { PageType } from "../App";

interface MessagesProps {
  onNavigate: (page: PageType) => void;
}

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  isOnline: boolean;
}

interface Message {
  id: string;
  text: string;
  sender: "me" | "them";
  timestamp: string;
}

// Mock Data
const mockConversations: Conversation[] = [
  {
    id: "1",
    name: "Emma Rodriguez",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    lastMessage: "Awesome, see you at the library at 4!",
    timestamp: "2m ago",
    unread: 1,
    isOnline: true,
  },
  {
    id: "2",
    name: "David Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    lastMessage: "Could you send me the repo link?",
    timestamp: "1h ago",
    unread: 0,
    isOnline: false,
  },
  {
    id: "3",
    name: "Sophie Dupont",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
    lastMessage: "Thanks for the feedback on my essay.",
    timestamp: "Yesterday",
    unread: 0,
    isOnline: true,
  },
];

const mockChatHistory: Record<string, Message[]> = {
  "1": [
    {
      id: "m1",
      text: "Hey! Thanks for accepting my request.",
      sender: "them",
      timestamp: "10:00 AM",
    },
    {
      id: "m2",
      text: "No problem! When are you free to go over that Python script?",
      sender: "me",
      timestamp: "10:05 AM",
    },
    {
      id: "m3",
      text: "I am free this afternoon. Does 4 PM work for you?",
      sender: "them",
      timestamp: "10:12 AM",
    },
    {
      id: "m4",
      text: "Perfect. Main library, second floor?",
      sender: "me",
      timestamp: "10:15 AM",
    },
    {
      id: "m5",
      text: "Awesome, see you at the library at 4!",
      sender: "them",
      timestamp: "10:16 AM",
    },
  ],
  "2": [
    {
      id: "m2-1",
      text: "Hey David, I can help you with React State Management.",
      sender: "me",
      timestamp: "Yesterday",
    },
    {
      id: "m2-2",
      text: "That would be a lifesaver. I am struggling with Context API.",
      sender: "them",
      timestamp: "Yesterday",
    },
    {
      id: "m2-3",
      text: "I have a great example project we can look at.",
      sender: "me",
      timestamp: "1h ago",
    },
    {
      id: "m2-4",
      text: "Could you send me the repo link?",
      sender: "them",
      timestamp: "1h ago",
    },
  ],
  "3": [
    {
      id: "m3-1",
      text: "Hi Sophie, here are my notes on your history essay.",
      sender: "me",
      timestamp: "Tuesday",
    },
    {
      id: "m3-2",
      text: "I attached the marked-up PDF in the drive folder.",
      sender: "me",
      timestamp: "Tuesday",
    },
    {
      id: "m3-3",
      text: "Thanks for the feedback on my essay.",
      sender: "them",
      timestamp: "Yesterday",
    },
  ],
};

export default function Messages({}: MessagesProps) {
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [messageInput, setMessageInput] = useState("");

  // The active chat data
  const activeConversation = mockConversations.find(
    (c) => c.id === activeChatId,
  );
  const chatMessages = activeChatId ? mockChatHistory[activeChatId] || [] : [];
  const totalUnread = mockConversations.reduce(
    (sum, chat) => sum + chat.unread,
    0,
  );

  // --- RENDER: INBOX VIEW ---
  if (!activeChatId) {
    return (
      <div className="pb-24 bg-slate-900">
        <div className="sticky top-0 z-10 px-4 pt-4 pb-4 bg-slate-900/95 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-4">
            <h1 className="heading-md text-slate-50">Messages</h1>
            {totalUnread > 0 && (
              <span className="flex items-center justify-center h-6 px-2.5 text-xs font-bold text-slate-900 rounded-full bg-skwap-accent">
                {totalUnread}
              </span>
            )}
          </div>

          {/* Search bar */}
          <div className="relative">
            <Search
              size={18}
              className="absolute -translate-y-1/2 pointer-events-none left-4 top-1/2 text-slate-500"
            />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 text-sm input-field rounded-xl"
            />
          </div>
        </div>

        {/* Conversation List */}
        <div className="px-4 mt-2 space-y-2">
          {mockConversations.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setActiveChatId(chat.id)}
              className="w-full p-3 text-left transition-all duration-200 border border-transparent card-interactive rounded-2xl hover:border-slate-700"
            >
              <div className="flex items-center gap-4">
                {/* Avatar with Online Indicator */}
                <div className="relative flex-shrink-0">
                  <img
                    src={chat.avatar}
                    alt={chat.name}
                    className="object-cover rounded-full w-14 h-14 bg-slate-800"
                  />
                  {chat.isOnline && (
                    <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-slate-800 rounded-full" />
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3
                      className={`text-base font-bold truncate ${chat.unread > 0 ? "text-slate-50" : "text-slate-200"}`}
                    >
                      {chat.name}
                    </h3>
                    <span
                      className={`text-xs whitespace-nowrap ${chat.unread > 0 ? "text-skwap-accent font-semibold" : "text-slate-500"}`}
                    >
                      {chat.timestamp}
                    </span>
                  </div>
                  <p
                    className={`text-sm truncate ${chat.unread > 0 ? "text-slate-300 font-medium" : "text-slate-400"}`}
                  >
                    {chat.lastMessage}
                  </p>
                </div>

                {/* Unread Badge */}
                {chat.unread > 0 && (
                  <div className="flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full text-slate-900 bg-skwap-accent shrink-0">
                    {chat.unread}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // --- RENDER: ACTIVE CHAT VIEW ---
  return (
    // Fixed inset-0 locks view. pb-16 leaves space for App.tsx global bottom nav.
    <div className="fixed inset-0 z-10 flex flex-col pb-16 bg-slate-900">
      {/* Chat Header - flex-shrink-0 to never collapse */}
      {/* Don't forget to import { Phone, Video } from 'lucide-react' */}
      <div className="flex items-center justify-between flex-shrink-0 px-4 py-3 border-b bg-slate-800/95 backdrop-blur-sm border-slate-700">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveChatId(null)}
            className="flex items-center justify-center w-10 h-10 transition-colors rounded-xl hover:bg-slate-700"
          >
            <ArrowLeft size={20} className="text-slate-50" />
          </button>

          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={activeConversation?.avatar}
                alt={activeConversation?.name}
                className="w-10 h-10 rounded-full bg-slate-900"
              />
              {activeConversation?.isOnline && (
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-slate-800 rounded-full" />
              )}
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-50">
                {activeConversation?.name}
              </h2>
              <p className="text-xs text-skwap-accent">
                {activeConversation?.isOnline ? "Online now" : "Offline"}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            className="flex items-center justify-center w-10 h-10 transition-colors rounded-xl text-slate-400 hover:text-slate-50 hover:bg-slate-700"
            title="Voice Call"
          >
            <Phone size={18} />
          </button>
          <button
            className="flex items-center justify-center w-10 h-10 transition-colors rounded-xl text-slate-400 hover:text-slate-50 hover:bg-slate-700"
            title="Video Call"
          >
            <Video size={18} />
          </button>
          <button className="flex items-center justify-center w-10 h-10 transition-colors rounded-xl text-slate-400 hover:text-slate-50 hover:bg-slate-700">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      {/* Trust Reminder Banner - flex-shrink-0 to never collapse */}
      <div className="flex-shrink-0 px-4 py-2 text-xs font-medium text-center border-b bg-cyan-900/20 text-cyan-400 border-cyan-900/50">
        Stay safe! Never share personal passwords or financial info.
      </div>

      {/* Messages Area - flex-1 takes exact remaining space, overflow-y-auto handles scroll */}
      <div className="flex flex-col flex-1 px-4 py-4 overflow-y-auto">
        <div className="flex flex-col gap-4 mt-auto">
          {chatMessages.map((msg) => {
            const isMe = msg.sender === "me";
            return (
              <div
                key={msg.id}
                className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2.5 ${
                    isMe
                      ? "bg-skwap-accent text-slate-900 rounded-2xl rounded-br-sm"
                      : "bg-slate-800 text-slate-50 border border-slate-700 rounded-2xl rounded-bl-sm"
                  }`}
                >
                  <p className="text-sm font-medium">{msg.text}</p>
                </div>
                <span className="mt-1 text-[10px] font-medium text-slate-500 mx-1">
                  {msg.timestamp}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Chat Input - flex-shrink-0 naturally sits at bottom of the flex column */}
      <div className="flex-shrink-0 p-3 border-t bg-slate-900 border-slate-800">
        <div className="flex items-center max-w-md gap-2 mx-auto">
          <button className="flex items-center justify-center flex-shrink-0 w-10 h-10 transition-colors border text-slate-400 rounded-xl bg-slate-800 border-slate-700 hover:bg-slate-700 hover:text-slate-300">
            <ImageIcon size={20} />
          </button>

          <input
            type="text"
            placeholder="Type a message..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            className="flex-1 px-4 py-2.5 text-sm text-white border bg-slate-800 border-slate-700 rounded-xl focus:outline-none focus:border-skwap-accent"
          />

          <button
            disabled={!messageInput.trim()}
            className="flex items-center justify-center flex-shrink-0 w-10 h-10 transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-skwap-accent text-slate-900 rounded-xl active:scale-95"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
