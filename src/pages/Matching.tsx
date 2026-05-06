// pages/Matching.tsx
import { useState } from "react";
import { X, Check, Flame, RotateCcw, Star } from "lucide-react";
import type { PageType } from "../App";

interface MatchingProps {
  onNavigate: (page: PageType) => void;
}

interface MatchProfile {
  id: string;
  name: string;
  major: string;
  avatar: string;
  offering: string[];
  lookingFor: string[];
  synergy: number;
  bio: string;
  rating: number;
  swapsCompleted: number;
}

const mockMatches: MatchProfile[] = [
  {
    id: "1",
    name: "Emma Rodriguez",
    major: "Computer Science",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    offering: [
      "Advanced Python Scripting",
      "Data Processing",
      "API Integration",
    ],
    lookingFor: ["Figma UI Mockups", "Prototype Design", "Design Systems"],
    synergy: 95,
    bio: "Final year CS student working on thesis project. I am usually at the main library on Tuesdays and Thursdays. Happy to help debug your code! Looking for someone to help me make my app look decent before presentations next month.",
    rating: 4.9,
    swapsCompleted: 24,
  },
  {
    id: "2",
    name: "David Chen",
    major: "Information Technology",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    offering: ["Cybersecurity Fundamentals", "Network Security"],
    lookingFor: ["ReactJS Fundamentals", "State Management"],
    synergy: 82,
    bio: "Security specialist helping peers with cybersecurity concepts. I explain things with lots of visual diagrams.",
    rating: 4.7,
    swapsCompleted: 15,
  },
  {
    id: "3",
    name: "Sophie Dupont",
    major: "Graphic Design",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
    offering: ["Poster & UI Design", "Visual Storytelling"],
    lookingFor: ["Academic Writing", "Proofreading"],
    synergy: 88,
    bio: "Creative designer passionate about impactful visual communication. Let us swap skills over coffee!",
    rating: 5.0,
    swapsCompleted: 42,
  },
];

export default function Matching({ onNavigate }: MatchingProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matches] = useState(mockMatches);
  const [isAnimating, setIsAnimating] = useState(false);
  const [history, setHistory] = useState<number[]>([]);

  const currentMatch = matches[currentIndex];

  const handlePass = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setHistory((prev) => [...prev, currentIndex]);
      if (currentIndex < matches.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(matches.length); // No more matches
      }
      setIsAnimating(false);
    }, 300);
  };

  const handleConnect = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      alert(
        `Request sent to ${currentMatch.name}! You will be notified when they accept.`,
      );
      setHistory((prev) => [...prev, currentIndex]);

      if (currentIndex < matches.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(matches.length);
      }
      setIsAnimating(false);
    }, 300);
  };

  const handleUndo = () => {
    if (history.length === 0 || isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      const previousIndex = history[history.length - 1];
      setHistory((prev) => prev.slice(0, -1));
      setCurrentIndex(previousIndex);
      setIsAnimating(false);
    }, 300);
  };

  // Empty state - Locked to viewport
  if (currentIndex >= matches.length || !currentMatch) {
    return (
      <div className="fixed inset-0 z-0 flex flex-col items-center justify-center px-4 pb-16 bg-slate-900">
        <div className="text-center">
          <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-slate-800 rounded-2xl">
            <Flame size={40} className="text-skwap-accent" />
          </div>
          <h2 className="mb-2 heading-md">No More Matches</h2>
          <p className="mb-6 text-slate-400">
            Check back later to find more skill-swap partners!
          </p>
          <button
            onClick={() => onNavigate("home")}
            className="btn-primary rounded-xl"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    // Fixed inset-0 locks the screen to exactly 100vh. pb-16 leaves room for the bottom nav.
    <div className="fixed inset-0 z-0 flex flex-col pb-16 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      {/* Header - Fixed Height */}
      <div className="flex-shrink-0 px-4 py-4 border-b bg-slate-800/80 backdrop-blur-sm border-slate-700">
        <div className="flex items-center justify-between">
          <h1 className="heading-md text-slate-50">Find a Match</h1>
          <div className="flex items-center gap-1 px-3 py-1.5 border bg-slate-800 rounded-xl border-slate-700">
            <Flame size={16} className="text-skwap-accent" />
            <span className="text-sm font-bold text-skwap-accent">
              {currentIndex + 1}/{matches.length}
            </span>
          </div>
        </div>
      </div>

      {/* Main matching card area */}
      <div className="flex flex-col flex-1 min-h-0 px-4 pt-6 pb-2">
        <div
          className={`flex flex-col h-full w-full max-w-sm mx-auto transition-all duration-300 transform ${
            isAnimating ? "scale-95 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          {/* Outer Card Wrapper */}
          <div className="relative flex flex-col flex-1 min-h-0 overflow-hidden border shadow-xl bg-slate-800 rounded-2xl border-slate-700">
            {/* FIXED Profile Header (Social Media Style) */}
            <div className="z-10 flex-shrink-0 p-5 border-b border-slate-700 bg-slate-800/90">
              <div className="flex items-center gap-4">
                {/* Avatar Container */}
                <div className="flex-shrink-0">
                  <img
                    src={currentMatch.avatar}
                    alt={currentMatch.name}
                    className="object-cover w-24 h-24 border-2 rounded-full shadow-md border-slate-700 bg-slate-900"
                  />
                </div>

                {/* Name and Info Stack */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-2xl font-bold truncate text-slate-50">
                      {currentMatch.name}
                    </h2>
                  </div>
                  <p className="mb-2 text-base font-medium truncate text-slate-400">
                    📚 {currentMatch.major}
                  </p>
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 border rounded-lg bg-orange-500/10 border-orange-500/20">
                    <Flame size={14} className="text-orange-500" />
                    <span className="text-xs font-bold text-orange-500">
                      {currentMatch.synergy}% Match
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* SCROLLABLE Inner Content */}
            <div className="flex-1 overflow-y-auto">
              {/* pb-12 ensures bottom content clears the scroll shadow */}
              <div className="px-5 pt-5 pb-12">
                {/* Skills sections */}
                <div className="mb-5 space-y-3">
                  {/* Offering */}
                  <div className="p-3 border bg-cyan-900/10 border-slate-700 rounded-xl">
                    <p className="mb-2 text-xs font-semibold tracking-wide uppercase text-cyan-400">
                      ✨ Offering
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {currentMatch.offering.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs font-medium border rounded-md bg-slate-800 border-slate-600 text-slate-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Looking For */}
                  <div className="p-3 border border-green-800/50 bg-green-900/10 rounded-xl">
                    <p className="mb-2 text-xs font-semibold tracking-wide text-green-400 uppercase">
                      🎯 Looking For
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {currentMatch.lookingFor.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs font-medium text-green-100 border border-green-800 rounded-md bg-slate-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex gap-2 mb-5">
                  <div className="flex-1 p-3 text-center border bg-slate-900/50 border-slate-700 rounded-xl">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Star
                        size={16}
                        className="text-yellow-500 fill-yellow-500"
                      />
                      <span className="text-lg font-bold text-slate-50">
                        {currentMatch.rating}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-slate-400">
                      Avg Rating
                    </p>
                  </div>
                  <div className="flex-1 p-3 text-center border bg-slate-900/50 border-slate-700 rounded-xl">
                    <p className="mb-1 text-lg font-bold text-slate-50">
                      {currentMatch.swapsCompleted}
                    </p>
                    <p className="text-xs font-medium text-slate-400">
                      Completed
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <h3 className="mb-2 text-sm font-semibold text-slate-300">
                    About
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {currentMatch.bio}
                  </p>
                </div>
              </div>
            </div>

            {/* Scroll Indicator Overlay - Fixed to the bottom of the outer card */}
            <div className="absolute bottom-0 left-0 right-0 z-10 h-16 pointer-events-none bg-gradient-to-t from-slate-800 to-transparent rounded-b-2xl" />
          </div>
        </div>
      </div>

      {/* Action Buttons - Fixed Height at Bottom */}
      <div className="flex items-center justify-center flex-shrink-0 w-full max-w-sm gap-4 px-4 pt-2 pb-6 mx-auto">
        {/* Pass Button */}
        <button
          onClick={handlePass}
          disabled={isAnimating}
          className="flex items-center justify-center flex-1 h-16 text-white transition-all duration-200 border-2 shadow-lg bg-slate-800 border-slate-700 rounded-xl hover:bg-slate-700 active:scale-95 disabled:opacity-50"
        >
          <X size={32} className="text-red-400" strokeWidth={2.5} />
        </button>

        {/* Undo Button (Smaller) */}
        <button
          onClick={handleUndo}
          disabled={history.length === 0 || isAnimating}
          className="flex items-center justify-center text-white transition-all duration-200 border shadow-md w-14 h-14 bg-slate-800 border-slate-700 rounded-xl hover:bg-slate-700 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
          title="Undo Last Swipe"
        >
          <RotateCcw size={22} className="text-yellow-500" strokeWidth={2.5} />
        </button>

        {/* Connect Button */}
        <button
          onClick={handleConnect}
          disabled={isAnimating}
          className="flex items-center justify-center flex-1 h-16 transition-all duration-200 shadow-lg text-slate-900 shadow-cyan-500/20 bg-skwap-accent rounded-xl hover:shadow-cyan-500/40 active:scale-95 disabled:opacity-50"
        >
          <Check size={32} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}
