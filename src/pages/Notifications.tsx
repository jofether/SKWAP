// pages/Notifications.tsx
import { useState } from "react";
import {
  ArrowLeft,
  Check,
  X,
  Star,
  Wallet,
  MessageCircle,
  Flame,
  CheckCircle2,
} from "lucide-react";
import type { PageType } from "../App";

interface NotificationsProps {
  onNavigate: (page: PageType) => void;
}

type NotificationType = "request" | "message" | "credit" | "review" | "system";

interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  avatar?: string;
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "request",
    title: "New Swap Request",
    message:
      'Marcus Johnson wants to swap for your "Python & Data Processing" skill.',
    timestamp: "10m ago",
    isRead: false,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
  },
  {
    id: "2",
    type: "message",
    title: "New Message",
    message: 'Emma Rodriguez: "Awesome, see you at the library at 4!"',
    timestamp: "2h ago",
    isRead: false,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
  },
  {
    id: "3",
    type: "credit",
    title: "Credits Earned!",
    message: "You earned 20 CR for completing a swap with Sophie.",
    timestamp: "Yesterday",
    isRead: true,
  },
  {
    id: "4",
    type: "review",
    title: "New 5-Star Review",
    message:
      'David Chen left a review: "Super helpful! Explained things perfectly."',
    timestamp: "2 days ago",
    isRead: true,
  },
];

export default function Notifications({ onNavigate }: NotificationsProps) {
  const [notifications, setNotifications] = useState(mockNotifications);

  const handleMarkAllRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, isRead: true })));
  };

  const handleAction = (id: string, action: "accept" | "decline") => {
    // In a real app, this would trigger an API call
    alert(`Swap ${action}ed!`);
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const getIcon = (type: NotificationType) => {
    switch (type) {
      case "request":
        return <Flame size={20} className="text-orange-500" />;
      case "message":
        return <MessageCircle size={20} className="text-blue-400" />;
      case "credit":
        return <Wallet size={20} className="text-green-400" />;
      case "review":
        return <Star size={20} className="text-yellow-400 fill-yellow-400" />;
      default:
        return <CheckCircle2 size={20} className="text-slate-400" />;
    }
  };

  return (
    <div className="pb-10 bg-slate-900">
      {/* Header */}
      <div className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 border-b bg-slate-800/95 backdrop-blur-sm border-slate-700">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center justify-center w-10 h-10 transition-colors border rounded-xl bg-slate-800 hover:bg-slate-700 border-slate-700"
          >
            <ArrowLeft size={20} className="text-slate-50" />
          </button>
          <h1 className="heading-md text-slate-50">Notifications</h1>
        </div>

        {/* Mark All as Read */}
        <button
          onClick={handleMarkAllRead}
          className="text-xs font-bold tracking-wide uppercase transition-colors text-skwap-accent hover:text-cyan-400"
        >
          Mark Read
        </button>
      </div>

      {/* Notifications List */}
      <div className="px-4 py-4 space-y-3">
        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-slate-800">
              <CheckCircle2 size={32} className="text-slate-500" />
            </div>
            <p className="font-medium text-slate-400">You're all caught up!</p>
          </div>
        ) : (
          notifications.map((notif) => (
            <div
              key={notif.id}
              className={`relative p-4 transition-all duration-200 border rounded-2xl ${
                notif.isRead
                  ? "bg-slate-800/50 border-slate-800"
                  : "bg-slate-800 border-skwap-accent/30 shadow-lg shadow-cyan-900/10"
              }`}
            >
              {/* Unread Indicator Dot */}
              {!notif.isRead && (
                <div className="absolute top-4 right-4 w-2 h-2 bg-skwap-accent rounded-full shadow-[0_0_8px_rgba(0,188,212,0.8)]" />
              )}

              <div className="flex items-start gap-3">
                {/* Icon or Avatar */}
                <div className="flex-shrink-0 mt-0.5">
                  {notif.avatar ? (
                    <img
                      src={notif.avatar}
                      alt=""
                      className="w-10 h-10 border rounded-full border-slate-700 bg-slate-900"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full bg-slate-900 border-slate-700">
                      {getIcon(notif.type)}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pr-4">
                  <p className="text-sm font-bold text-slate-50 mb-0.5">
                    {notif.title}
                  </p>
                  <p
                    className={`text-sm leading-relaxed mb-2 ${notif.isRead ? "text-slate-400" : "text-slate-300"}`}
                  >
                    {notif.message}
                  </p>
                  <p className="text-xs font-semibold text-slate-500">
                    {notif.timestamp}
                  </p>

                  {/* Action Buttons for Requests */}
                  {notif.type === "request" && (
                    <div className="flex gap-2 mt-3">
                      <button
                        onClick={() => handleAction(notif.id, "accept")}
                        className="flex items-center justify-center flex-1 py-2 text-xs font-bold transition-colors text-slate-900 bg-skwap-accent rounded-xl hover:bg-cyan-400 active:scale-95"
                      >
                        <Check size={16} className="mr-1" strokeWidth={3} />
                        Accept
                      </button>
                      <button
                        onClick={() => handleAction(notif.id, "decline")}
                        className="flex items-center justify-center flex-1 py-2 text-xs font-bold transition-colors border text-slate-300 border-slate-600 bg-slate-700 rounded-xl hover:bg-slate-600 active:scale-95"
                      >
                        <X size={16} className="mr-1" strokeWidth={3} />
                        Decline
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
