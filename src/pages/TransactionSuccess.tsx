// pages/TransactionSuccess.tsx
import { useState } from "react";
import { Sparkles, Star } from "lucide-react";
import type { PageType } from "../App";

interface TransactionSuccessProps {
  onNavigate: (page: PageType) => void;
}

export default function TransactionSuccess({
  onNavigate,
}: TransactionSuccessProps) {
  const [rating, setRating] = useState(0);

  return (
    // fixed inset-0 and overflow-hidden completely lock the page from scrolling
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      {/* Success Icon */}
      <div className="mb-4 animate-bounce">
        <Sparkles size={56} className="text-skwap-accent" strokeWidth={1.5} />
      </div>

      {/* Success Text */}
      <div className="mb-6 text-center">
        <h1 className="mb-2 heading-lg">Swap Successful!</h1>
        <p className="max-w-sm text-sm leading-relaxed text-slate-300">
          You successfully taught{" "}
          <span className="font-semibold text-skwap-accent">
            Python & Data Processing
          </span>{" "}
          to <span className="font-semibold text-slate-50">Emma Rodriguez</span>
          .
        </p>
      </div>

      {/* Credits Card - Standardized to rounded-2xl */}
      <div className="w-full max-w-sm mb-6">
        <div className="p-6 text-center border shadow-lg bg-gradient-to-br from-cyan-900/30 via-slate-800 to-slate-800 border-cyan-500/30 rounded-2xl">
          <p className="mb-1 text-xs font-semibold tracking-widest uppercase text-slate-400">
            Credits Earned
          </p>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-skwap-accent to-cyan-400">
              +20
            </span>
            <span className="text-xl font-bold text-skwap-accent">CR</span>
          </div>
          <p className="mt-2 text-xs text-slate-500">Added to your wallet</p>
        </div>
      </div>

      {/* Rate Your Partner Section */}
      <div className="flex flex-col items-center justify-center w-full h-20 max-w-sm mb-8">
        <p className="mb-2 text-sm font-semibold text-center text-slate-300">
          How was your experience with Emma?
        </p>
        <div className="flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className="p-1 transition-transform hover:scale-110 active:scale-95"
            >
              <Star
                size={28}
                className={`transition-colors ${
                  rating >= star
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-slate-600"
                }`}
              />
            </button>
          ))}
        </div>
        {/* Fixed height placeholder for the thank you message so layout doesn't jump */}
        <div className="h-4 mt-1">
          {rating > 0 && (
            <p className="text-xs font-medium text-center text-skwap-accent animate-in fade-in">
              Thanks for your feedback!
            </p>
          )}
        </div>
      </div>

      {/* Action Buttons - Standardized to rounded-xl and exact heights */}
      <div className="w-full max-w-sm space-y-3">
        <button
          onClick={() => onNavigate("credits")}
          className="flex items-center justify-center w-full text-lg font-semibold transition-all duration-200 h-14 bg-skwap-accent text-slate-900 rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 active:scale-95"
        >
          View Wallet
        </button>

        <button
          onClick={() => onNavigate("home")}
          className="w-full text-lg font-semibold transition-all duration-200 border-2 h-14 bg-slate-800 rounded-xl border-slate-700 text-slate-50 hover:bg-slate-700 active:scale-95"
        >
          Back to Home
        </button>
      </div>

      {/* Celebration emoji trail */}
      <div className="flex justify-center gap-4 mt-4 text-3xl">
        <span className="animate-pulse">🎉</span>
        <span className="animate-pulse" style={{ animationDelay: "0.1s" }}>
          ⭐
        </span>
        <span className="animate-pulse" style={{ animationDelay: "0.2s" }}>
          🚀
        </span>
      </div>
    </div>
  );
}
