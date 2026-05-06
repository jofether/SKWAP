// pages/Profile.tsx
import { useState } from "react";
import {
  ArrowLeft,
  Star,
  ShieldCheck,
  Award,
  MessageCircle,
  Settings,
  Share2,
  ExternalLink,
} from "lucide-react";
import type { PageType } from "../App";

interface ProfileProps {
  onNavigate: (page: PageType) => void;
  isOwnProfile?: boolean; // Prop to toggle between 'My Profile' and 'User View'
}

interface Review {
  id: string;
  user: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

const mockReviews: Review[] = [
  {
    id: "r1",
    user: "Sarah Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    rating: 5,
    comment:
      "Super helpful! Explained React Hooks better than my professor did.",
    date: "2 days ago",
  },
  {
    id: "r2",
    user: "Alex Rivera",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    rating: 4,
    comment: "Great session on Python. Very patient with beginners.",
    date: "1 week ago",
  },
];

export default function Profile({
  onNavigate,
  isOwnProfile = true,
}: ProfileProps) {
  const [activeTab, setActiveTab] = useState<"offerings" | "reviews">(
    "offerings",
  );

  return (
    <div className="pb-10 bg-slate-900">
      {/* Sticky Header */}
      <div className="sticky top-0 z-20 flex items-center justify-between px-4 py-4 border-b bg-slate-900/95 backdrop-blur-sm border-slate-800">
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center justify-center w-10 h-10 transition-colors border rounded-xl bg-slate-800 hover:bg-slate-700 border-slate-700"
        >
          <ArrowLeft size={20} className="text-slate-50" />
        </button>
        <h1 className="text-sm font-bold tracking-wide uppercase text-slate-400">
          {isOwnProfile ? "My Profile" : "Student Profile"}
        </h1>
        <button className="flex items-center justify-center w-10 h-10 transition-colors border rounded-xl bg-slate-800 hover:bg-slate-700 border-slate-700">
          {isOwnProfile ? (
            <Settings size={20} className="text-slate-50" />
          ) : (
            <Share2 size={20} className="text-slate-50" />
          )}
        </button>
      </div>

      {/* Profile Hero Section */}
      <div className="px-4 pt-6 pb-4">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-4">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jofether"
              alt="Profile"
              className="border-4 rounded-full shadow-xl w-28 h-28 border-slate-800 bg-slate-800"
            />
            <div className="absolute bottom-1 right-1 p-1.5 bg-skwap-accent rounded-full border-4 border-slate-900">
              <ShieldCheck size={16} className="text-slate-900" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-50">Jofether Mendoza</h2>
          <p className="mb-4 text-sm font-medium text-slate-400">
            Computer Science Major • Senior
          </p>

          {/* Achievement Badges */}
          <div className="flex gap-2 mb-6">
            <span className="flex items-center gap-1 px-3 py-1 text-xs font-bold text-orange-500 border rounded-lg bg-orange-500/10 border-orange-500/20">
              <Award size={14} />
              TOP TEACHER
            </span>
            <span className="flex items-center gap-1 px-3 py-1 text-xs font-bold border rounded-lg bg-skwap-accent/10 border-skwap-accent/20 text-skwap-accent">
              <Star size={14} />
              4.9 RATING
            </span>
          </div>

          {/* Stat Grid */}
          <div className="grid w-full grid-cols-3 gap-3 mb-6">
            <div className="p-3 border bg-slate-800/50 border-slate-800 rounded-2xl">
              <p className="text-xl font-bold text-slate-50">42</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Swaps
              </p>
            </div>
            <div className="p-3 border bg-slate-800/50 border-slate-800 rounded-2xl">
              <p className="text-xl font-bold text-slate-50">15</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Taught
              </p>
            </div>
            <div className="p-3 border bg-slate-800/50 border-slate-800 rounded-2xl">
              <p className="text-xl font-bold text-slate-50">2.4k</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Earned
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabbed Content Section */}
      <div className="px-4">
        {/* Toggle - Radius Math (Outer 2xl, Padding 1, Inner xl) */}
        <div className="flex w-full p-1 mb-6 rounded-full bg-slate-800">
          <button
            onClick={() => setActiveTab("offerings")}
            className={`flex-1 py-2.5 text-sm font-semibold rounded-full transition-all ${
              activeTab === "offerings"
                ? "bg-slate-700 text-white shadow-sm"
                : "text-slate-400"
            }`}
          >
            My Offerings
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`flex-1 py-2.5 text-sm font-semibold rounded-full transition-all ${
              activeTab === "reviews"
                ? "bg-slate-700 text-white shadow-sm"
                : "text-slate-400"
            }`}
          >
            Reviews ({mockReviews.length})
          </button>
        </div>

        {/* Tab Panels */}
        {activeTab === "offerings" ? (
          <div className="space-y-3">
            <div className="p-4 border border-slate-800 bg-slate-800/30 rounded-2xl">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-slate-50">
                  Python & Data Processing
                </h3>
                <span className="text-sm font-bold text-skwap-accent">
                  20 CR
                </span>
              </div>
              <p className="mb-4 text-sm text-slate-400">
                Helping students clean datasets and automate boring tasks with
                Python scripts.
              </p>
              <button className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-skwap-accent">
                Edit Listing <ExternalLink size={12} />
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {mockReviews.map((review) => (
              <div
                key={review.id}
                className="p-4 border border-slate-800 bg-slate-800/30 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={review.avatar}
                    alt=""
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-slate-50">
                      {review.user}
                    </h4>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={10}
                          className={
                            i < review.rating
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-slate-700"
                          }
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500 font-medium">
                    {review.date}
                  </span>
                </div>
                <p className="text-sm italic leading-relaxed text-slate-300">
                  "{review.comment}"
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Floating Action Bar (If viewing another user) */}
      {!isOwnProfile && (
        <div className="fixed left-0 right-0 px-4 bottom-20">
          <div className="flex max-w-md gap-3 mx-auto">
            <button className="flex items-center justify-center flex-1 font-bold border-2 h-14 bg-slate-800 border-slate-700 rounded-xl text-slate-50">
              <MessageCircle size={20} className="mr-2" />
              Message
            </button>
            <button className="flex items-center justify-center flex-1 font-bold shadow-lg h-14 bg-skwap-accent rounded-xl text-slate-900 shadow-cyan-500/20">
              Request Swap
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
