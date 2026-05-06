// pages/Credits.tsx
import { ArrowLeft, TrendingUp, TrendingDown, Clock } from "lucide-react";
import type { PageType } from "../App";

interface CreditsProps {
  onNavigate: (page: PageType) => void;
}

interface Transaction {
  id: string;
  type: "earned" | "spent" | "pending";
  amount: number;
  description: string;
  timestamp: string;
  icon: string;
}

const mockTransactions: Transaction[] = [
  {
    id: "8",
    type: "pending",
    amount: 25,
    description: "On Hold: Calculus III Prep",
    timestamp: "Just now",
    icon: "⏳",
  },
  {
    id: "1",
    type: "earned",
    amount: 20,
    description: "Taught Python",
    timestamp: "2 hours ago",
    icon: "📚",
  },
  {
    id: "2",
    type: "spent",
    amount: 15,
    description: "Learned Photoshop",
    timestamp: "5 hours ago",
    icon: "🎨",
  },
  {
    id: "3",
    type: "earned",
    amount: 35,
    description: "Taught Web Design",
    timestamp: "Yesterday",
    icon: "🌐",
  },
  {
    id: "4",
    type: "spent",
    amount: 25,
    description: "Learned Guitar",
    timestamp: "Yesterday",
    icon: "🎸",
  },
];

export default function Credits({ onNavigate }: CreditsProps) {
  const currentBalance = 150;
  const totalEarned = 145;
  const totalSpent = 45;
  const onHoldCredits = 25;

  const handleOfferSkill = () => {
    onNavigate("wizard");
  };

  const handleRequestSkill = () => {
    onNavigate("home");
  };

  return (
    <div className="min-h-screen pb-10 bg-slate-900">
      {/* Header */}
      <div className="sticky top-0 z-20 flex items-center gap-3 px-4 py-4 border-b bg-slate-800/95 backdrop-blur-sm border-slate-700">
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center justify-center w-10 h-10 transition-colors rounded-xl hover:bg-slate-700"
        >
          <ArrowLeft size={20} className="text-slate-50" />
        </button>
        <h1 className="heading-md">My Wallet</h1>
      </div>

      {/* Main content */}
      <div className="px-4 pt-6">
        {/* Balance Card with Gradient - Outer card is 2xl */}
        <div className="relative p-6 mb-6 overflow-hidden shadow-lg rounded-2xl bg-gradient-to-br from-skwap-accent via-skwap-accent to-cyan-700">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-40 h-40 -mt-20 -mr-20 bg-white rounded-full opacity-10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 -mb-16 -ml-16 bg-white rounded-full opacity-10" />

          {/* Balance content */}
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-semibold text-cyan-50">
                Available Balance
              </p>
              <div className="flex items-center gap-1 px-2 py-1 bg-black/20 rounded-xl">
                <Clock size={12} className="text-yellow-300" />
                <span className="text-xs font-medium text-yellow-100">
                  {onHoldCredits} CR On Hold
                </span>
              </div>
            </div>

            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-bold text-white">
                {currentBalance}
              </span>
              <span className="text-xl font-semibold text-cyan-100">CR</span>
            </div>

            {/* Balance summary - Inner elements are xl */}
            <div className="grid grid-cols-2 gap-3">
              <div className="px-3 py-2 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm">
                <p className="mb-1 text-xs font-semibold text-cyan-50">
                  Total Earned
                </p>
                <p className="text-lg font-bold text-white">+{totalEarned}</p>
              </div>
              <div className="px-3 py-2 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm">
                <p className="mb-1 text-xs font-semibold text-cyan-50">
                  Total Spent
                </p>
                <p className="text-lg font-bold text-slate-100">
                  -{totalSpent}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action buttons - Standardized to xl */}
        <div className="flex gap-3 mb-8">
          {/* Offer a Skill to Earn - Outlined */}
          <button
            onClick={handleOfferSkill}
            className="flex items-center justify-center flex-1 gap-2 px-4 py-3 font-semibold transition-all duration-200 border-2 rounded-xl border-skwap-accent text-skwap-accent hover:bg-cyan-500 hover:text-slate-900 active:scale-95"
          >
            <TrendingUp size={18} />
            <span>Offer a Skill</span>
          </button>

          {/* Request a Skill - Solid Cyan */}
          <button
            onClick={handleRequestSkill}
            className="flex items-center justify-center flex-1 gap-2 px-4 py-3 font-semibold transition-all duration-200 text-slate-900 rounded-xl bg-skwap-accent hover:shadow-lg active:scale-95"
          >
            <TrendingDown size={18} />
            <span>Request Help</span>
          </button>
        </div>

        {/* Recent Activity Section */}
        <div>
          <h2 className="mb-4 heading-sm">Recent Activity</h2>

          <div className="space-y-3">
            {mockTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center gap-3 py-3 card-interactive rounded-2xl"
              >
                {/* Icon */}
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-2xl bg-slate-700/50 rounded-xl">
                  {transaction.icon}
                </div>

                {/* Transaction details */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold truncate text-slate-50">
                    {transaction.description}
                  </p>
                  <p className="text-xs text-slate-400">
                    {transaction.timestamp}
                  </p>
                </div>

                {/* Amount */}
                <div className="flex-shrink-0 text-right">
                  <p
                    className={`font-bold text-lg ${
                      transaction.type === "earned"
                        ? "text-green-400"
                        : transaction.type === "pending"
                          ? "text-yellow-400"
                          : "text-slate-300"
                    }`}
                  >
                    {transaction.type === "earned"
                      ? `+${transaction.amount}`
                      : transaction.type === "pending"
                        ? `🔒 ${transaction.amount}`
                        : `-${transaction.amount}`}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Load more button - Standardized to xl */}
          <button className="w-full py-3 mt-4 font-semibold transition-all duration-200 border rounded-xl border-slate-700 text-slate-50 hover:bg-slate-800 active:scale-95">
            Load More Activity
          </button>
        </div>
      </div>
    </div>
  );
}
