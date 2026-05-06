// pages/Homepage.tsx
import { useState, useRef } from "react";
import { Bell, Search, ChevronRight, Flame, Plus, Wallet } from "lucide-react";
import type { PageType } from "../App";

interface HomepageProps {
  onNavigate: (page: PageType) => void;
}

interface UserCard {
  id: string;
  name: string;
  avatar: string;
  skill: string;
  rating: number;
  ratingCount: number;
  creditAmount: number;
}

const mockCategories = [
  { name: "All", icon: "✨" },
  { name: "Programming", icon: "💻" },
  { name: "Academics", icon: "📚" },
  { name: "Design", icon: "🎨" },
  { name: "Languages", icon: "🗣️" },
  { name: "Music", icon: "🎵" },
  { name: "Writing", icon: "✍️" },
  { name: "Business", icon: "💼" },
];

// People offering services (You spend credits to request these)
const mockOfferings: UserCard[] = [
  {
    id: "1",
    name: "Sarah Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    skill: "Python & Data Processing",
    rating: 4.8,
    ratingCount: 56,
    creditAmount: 20,
  },
  {
    id: "2",
    name: "Alex Rivera",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    skill: "Information Assurance Tutoring",
    rating: 4.9,
    ratingCount: 128,
    creditAmount: 25,
  },
  {
    id: "3",
    name: "Sophie Dupont",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
    skill: "Figma UI/UX Mockups",
    rating: 4.7,
    ratingCount: 42,
    creditAmount: 35,
  },
  {
    id: "4",
    name: "David Kim",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    skill: "Resume & Cover Letter Review",
    rating: 5.0,
    ratingCount: 89,
    creditAmount: 15,
  },
  {
    id: "5",
    name: "Maya Patel",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maya",
    skill: "Guitar Fundamentals",
    rating: 4.6,
    ratingCount: 24,
    creditAmount: 20,
  },
];

// People requesting help (You earn credits by helping them)
const mockRequests: UserCard[] = [
  {
    id: "6",
    name: "Michael Scott",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    skill: "Need help with React Hooks",
    rating: 4.5,
    ratingCount: 12,
    creditAmount: 30,
  },
  {
    id: "7",
    name: "Jessica Wong",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica",
    skill: "Essay proofreading (History)",
    rating: 4.9,
    ratingCount: 8,
    creditAmount: 15,
  },
  {
    id: "8",
    name: "Liam Neeson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Liam",
    skill: "Video Editing for a Project",
    rating: 4.2,
    ratingCount: 5,
    creditAmount: 40,
  },
  {
    id: "9",
    name: "Chloe Zhang",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chloe",
    skill: "Calculus III Exam Prep",
    rating: 4.8,
    ratingCount: 33,
    creditAmount: 25,
  },
  {
    id: "10",
    name: "James Carter",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    skill: "Fixing my crashed laptop",
    rating: 4.7,
    ratingCount: 19,
    creditAmount: 50,
  },
];

export default function Homepage({ onNavigate }: HomepageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [feedType, setFeedType] = useState<"offerings" | "requests">(
    "offerings",
  );
  const [searchQuery, setSearchQuery] = useState("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const currentFeed = feedType === "offerings" ? mockOfferings : mockRequests;

  return (
    <div className="relative min-h-screen pb-10 bg-slate-900">
      {/* Header with greeting, balance, and notification */}
      <div className="px-4 pt-4 pb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm font-medium text-slate-400">Welcome back</p>
            <h1 className="mt-1 heading-lg">Hello, Jofether!</h1>
          </div>
          <div className="flex items-center gap-3">
            {/* Quick Balance Pill - Height and radius match the bell exactly */}
            <button
              onClick={() => onNavigate("credits")}
              className="flex items-center justify-center h-10 px-3 transition-colors border gap-1.5 rounded-xl bg-slate-800 border-skwap-accent/30 hover:bg-slate-700"
            >
              <Wallet size={16} className="text-skwap-accent" />
              <span className="text-sm font-bold text-slate-50">150</span>
            </button>
            <button
              onClick={() => onNavigate("notifications")}
              className="relative flex items-center justify-center w-10 h-10 transition-all border rounded-xl bg-slate-800 hover:bg-slate-700 border-slate-700"
            >
              <Bell size={20} className="text-slate-300" />
              <span className="absolute w-2 h-2 bg-red-500 rounded-full top-2 right-2" />
            </button>
          </div>
        </div>

        {/* Search bar */}
        <div className="relative">
          <Search
            size={18}
            className="absolute -translate-y-1/2 pointer-events-none left-4 top-1/2 text-slate-500"
          />
          <input
            type="text"
            placeholder="What do you want to learn today?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 text-sm input-field rounded-xl"
          />
        </div>
      </div>

      {/* Match Finder CTA */}
      <div className="px-4 mb-8">
        <button
          onClick={() => onNavigate("matching")}
          className="flex items-center justify-between w-full p-5 card-interactive bg-gradient-to-r from-skwap-accent to-cyan-500 group rounded-2xl"
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 bg-slate-900 bg-opacity-40 rounded-xl">
              <Flame size={24} className="text-white" />
            </div>
            <div className="text-left">
              <p className="font-bold text-white">Find Your Match</p>
              <p className="text-sm text-cyan-100">
                Discover compatible skill-swap partners
              </p>
            </div>
          </div>
          <ChevronRight
            size={20}
            className="text-white transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>

      {/* Categories section */}
      <div className="mb-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <h2 className="heading-sm">Categories</h2>
          <button className="text-sm font-semibold text-skwap-accent hover:text-opacity-80">
            See All
          </button>
        </div>

        <div
          className="flex gap-2 px-4 overflow-x-auto scroll-smooth category-scroll-container"
          ref={scrollContainerRef}
        >
          <style>{`
            .category-scroll-container {
              scrollbar-width: none;
              -ms-overflow-style: none;
            }
            .category-scroll-container::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {mockCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex-shrink-0 px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-200 whitespace-nowrap flex items-center gap-2 ${
                selectedCategory === category.name
                  ? "bg-skwap-accent text-slate-900 shadow-sm"
                  : "bg-slate-800 text-skwap-accent hover:bg-slate-700 border border-slate-700"
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Feed Toggle - Radius math applied (Outer 2xl -> padding -> Inner xl) */}
      <div className="px-4 mb-4">
        <div className="flex w-full p-1 rounded-full bg-slate-800">
          <button
            onClick={() => setFeedType("offerings")}
            className={`flex-1 py-2.5 text-sm font-semibold rounded-full transition-all duration-200 ${
              feedType === "offerings"
                ? "bg-slate-700 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Offerings
          </button>
          <button
            onClick={() => setFeedType("requests")}
            className={`flex-1 py-2.5 text-sm font-semibold rounded-full transition-all duration-200 ${
              feedType === "requests"
                ? "bg-skwap-accent text-slate-900 shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Requests
          </button>
        </div>
      </div>

      {/* Dynamic Feed Section */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="heading-sm">
            {feedType === "offerings"
              ? "Recommended for You"
              : "Community Requests"}
          </h2>
          <button className="text-sm font-semibold text-skwap-accent hover:text-opacity-80">
            View All
          </button>
        </div>

        {/* Vertical list of user cards */}
        <div className="space-y-3">
          {currentFeed.map((user) => (
            <div key={user.id} className="card-interactive rounded-2xl">
              <div className="flex items-center gap-3">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="flex-shrink-0 object-cover rounded-full w-14 h-14 ring-2 ring-slate-700"
                />

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate text-slate-50">
                    {user.name}
                  </h3>
                  <p className="mb-1 text-sm truncate text-slate-400">
                    {user.skill}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-semibold text-yellow-500">
                        ★
                      </span>
                      <span className="text-xs font-semibold text-slate-50">
                        {user.rating}
                      </span>
                      <span className="text-xs text-slate-400">
                        ({user.ratingCount})
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end flex-shrink-0 gap-2">
                  <span
                    className={`text-sm font-bold ${feedType === "requests" ? "text-green-400" : "text-slate-300"}`}
                  >
                    {feedType === "requests" ? "+" : ""}
                    {user.creditAmount} CR
                  </span>
                  <button className="px-4 py-1.5 text-xs font-semibold text-slate-900 transition-all duration-200 bg-skwap-accent rounded-xl hover:shadow-md active:scale-95">
                    {feedType === "offerings" ? "Request" : "Help"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Action Button for Posting - Cleaned up shadow */}
      <button
        onClick={() => onNavigate("wizard")}
        className="fixed z-40 flex items-center justify-center transition-all shadow-lg w-14 h-14 text-slate-900 rounded-2xl bg-skwap-accent right-4 bottom-20 hover:scale-105 active:scale-95"
        aria-label="Post a Skill or Request"
      >
        <Plus size={28} strokeWidth={2.5} />
      </button>
    </div>
  );
}
