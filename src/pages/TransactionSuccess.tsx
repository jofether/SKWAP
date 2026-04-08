import { CheckCircle } from 'lucide-react'

type PageType = 'home' | 'credits' | 'matching' | 'success'

interface TransactionSuccessProps {
  onNavigate?: (page: PageType) => void
}

export default function TransactionSuccess({ onNavigate }: TransactionSuccessProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 flex flex-col items-center justify-center pb-24 px-4">
      {/* Success Icon */}
      <div className="mb-8 animate-bounce">
        <div className="relative">
          <div className="absolute inset-0 bg-skwap-accent blur-3xl opacity-40 rounded-full" />
          <div className="relative bg-gradient-to-br from-skwap-accent to-cyan-500 p-6 rounded-full">
            <CheckCircle size={64} className="text-slate-900" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/* Success Text */}
      <h1 className="heading-lg text-center mb-3">Swap Successful!</h1>
      <p className="text-center text-slate-300 text-base max-w-sm mb-8 leading-relaxed">
        You successfully taught <span className="font-semibold text-skwap-accent">Python & Data Processing</span> to <span className="font-semibold text-slate-50">Emma Rodriguez</span>.
      </p>

      {/* Credits Card */}
      <div className="w-full max-w-sm mb-12">
        <div className="card bg-gradient-to-br from-cyan-900/30 via-slate-800 to-slate-800 border border-cyan-500/30 rounded-3xl p-8 text-center">
          <p className="text-slate-400 text-sm font-semibold mb-2 uppercase tracking-widest">Credits Earned</p>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-skwap-accent to-cyan-400">
              +20
            </span>
            <span className="text-2xl font-bold text-skwap-accent">Credits</span>
          </div>
          <p className="text-xs text-slate-500 mt-4">Added to your wallet</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full max-w-sm space-y-3 mb-4">
        {/* View Wallet Button */}
        <button
          onClick={() => onNavigate?.('credits')}
          className="w-full btn-primary py-4 rounded-2xl flex items-center justify-center font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30 active:scale-95"
        >
          View Wallet
        </button>

        {/* Back to Home Button */}
        <button
          onClick={() => onNavigate?.('home')}
          className="w-full py-4 rounded-2xl border-2 border-slate-700 text-slate-50 font-semibold text-lg transition-all duration-200 hover:bg-slate-700 active:scale-95"
        >
          Back to Home
        </button>
      </div>

      {/* Celebration emoji trail */}
      <div className="mt-8 flex justify-center gap-4 text-4xl">
        <span className="animate-pulse">🎉</span>
        <span className="animate-pulse" style={{ animationDelay: '0.1s' }}>
          ⭐
        </span>
        <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>
          🎉
        </span>
      </div>
    </div>
  )
}
