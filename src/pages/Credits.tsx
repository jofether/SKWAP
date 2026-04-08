import { ArrowLeft, TrendingUp, TrendingDown } from 'lucide-react'

type PageType = 'home' | 'credits' | 'matching'

interface CreditsProps {
  onNavigate?: (page: PageType) => void
}

interface Transaction {
  id: string
  type: 'earned' | 'spent'
  amount: number
  description: string
  timestamp: string
  icon: string
}

const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'earned',
    amount: 20,
    description: 'Taught Python',
    timestamp: '2 hours ago',
    icon: '📚',
  },
  {
    id: '2',
    type: 'spent',
    amount: 15,
    description: 'Learned Photoshop',
    timestamp: '5 hours ago',
    icon: '🎨',
  },
  {
    id: '3',
    type: 'earned',
    amount: 35,
    description: 'Taught Web Design',
    timestamp: 'Yesterday',
    icon: '🌐',
  },
  {
    id: '4',
    type: 'spent',
    amount: 25,
    description: 'Learned Guitar',
    timestamp: 'Yesterday',
    icon: '🎸',
  },
  {
    id: '5',
    type: 'earned',
    amount: 50,
    description: 'Taught JavaScript',
    timestamp: '2 days ago',
    icon: '⚙️',
  },
  {
    id: '6',
    type: 'spent',
    amount: 10,
    description: 'Learned Photography',
    timestamp: '3 days ago',
    icon: '📷',
  },
  {
    id: '7',
    type: 'earned',
    amount: 40,
    description: 'Taught React',
    timestamp: '4 days ago',
    icon: '⚛️',
  },
]

export default function Credits({ onNavigate }: CreditsProps) {
  const currentBalance = 150
  const totalEarned = 145
  const totalSpent = -45

  const handleOfferSkill = () => {
    // Navigate to post skill page
    alert('Navigate to Post Skill page to start earning credits!')
  }

  const handleRequestSkill = () => {
    // Navigate to feed or search
    alert('Browse available skills to learn!')
  }

  return (
    <div className="min-h-screen bg-slate-900 pb-24">
      {/* Header */}
      <div className="sticky top-0 bg-slate-800 z-10 py-4 px-4 border-b border-slate-700 flex items-center gap-3">
        <button 
          onClick={() => onNavigate?.('home')}
          className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-700"
        >
          <ArrowLeft size={20} className="text-slate-50" />
        </button>
        <h1 className="heading-md">My Skwap Credits</h1>
      </div>

      {/* Main content */}
      <div className="px-4 py-6">
        {/* Balance Card with Gradient */}
        <div className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-skwap-accent via-skwap-accent to-cyan-700 p-6 shadow-lg">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -ml-16 -mb-16" />

          {/* Balance content */}
          <div className="relative z-10">
            <p className="text-cyan-50 text-sm font-semibold mb-2">Your Balance</p>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-bold text-white">{currentBalance}</span>
              <span className="text-xl text-cyan-100 font-semibold">Credits</span>
            </div>

            {/* Balance summary */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white bg-opacity-20 rounded-xl px-3 py-2 backdrop-blur-sm">
                <p className="text-cyan-50 text-xs font-semibold mb-1">Total Earned</p>
                <p className="text-white font-bold text-lg">+{totalEarned}</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl px-3 py-2 backdrop-blur-sm">
                <p className="text-cyan-50 text-xs font-semibold mb-1">Total Spent</p>
                <p className="text-white font-bold text-lg">{totalSpent}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mb-8">
          {/* Offer a Skill to Earn - Outlined */}
          <button
            onClick={handleOfferSkill}
            className="flex-1 py-3 px-4 rounded-2xl border-2 border-skwap-accent text-skwap-accent font-semibold transition-all duration-200 hover:bg-cyan-500 hover:text-slate-900 active:scale-95 flex items-center justify-center gap-2"
          >
            <TrendingUp size={18} />
            <span>Offer a Skill</span>
          </button>

          {/* Request a Skill - Solid Cyan */}
          <button
            onClick={handleRequestSkill}
            className="flex-1 py-3 px-4 rounded-2xl bg-skwap-accent text-white font-semibold transition-all duration-200 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
          >
            <TrendingDown size={18} />
            <span>Request a Skill</span>
          </button>
        </div>

        {/* Recent Activity Section */}
        <div>
          <h2 className="heading-sm mb-4">Recent Activity</h2>

          <div className="space-y-2">
            {mockTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="card-interactive flex items-center gap-3 py-3"
              >
                {/* Icon */}
                <div className="flex-shrink-0 text-2xl">{transaction.icon}</div>

                {/* Transaction details */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-50 truncate">
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
                      transaction.type === 'earned'
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}
                  >
                    {transaction.type === 'earned'
                      ? `+${transaction.amount}`
                      : `-${transaction.amount}`}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Load more button */}
          <button className="w-full mt-4 py-3 rounded-2xl border border-slate-700 text-slate-50 font-semibold hover:bg-slate-800 transition-all duration-200">
            Load More
          </button>
        </div>
      </div>
    </div>
  )
}
