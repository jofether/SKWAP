import { useState } from 'react'
import { Home, Flame, Wallet } from 'lucide-react'
import Homepage from './pages/Homepage'
import Credits from './pages/Credits'
import Matching from './pages/Matching'
import TransactionSuccess from './pages/TransactionSuccess'

type PageType = 'home' | 'credits' | 'matching' | 'success'

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('success')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Homepage onNavigate={setCurrentPage} />
      case 'credits':
        return <Credits onNavigate={setCurrentPage} />
      case 'matching':
        return <Matching onNavigate={setCurrentPage} />
      case 'success':
        return <TransactionSuccess onNavigate={setCurrentPage} />
      default:
        return <Homepage onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 pb-20">
      {renderPage()}

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-700 z-50">
        <div className="flex justify-around items-center h-16 max-w-md mx-auto w-full">
          {/* Home Button */}
          <button
            onClick={() => setCurrentPage('home')}
            className="flex flex-col items-center justify-center gap-1 transition-colors duration-200"
          >
            <Home
              size={24}
              className={currentPage === 'home' ? 'text-skwap-accent' : 'text-slate-500'}
              strokeWidth={currentPage === 'home' ? 2 : 1.5}
            />
            <span
              className={`text-xs font-medium ${
                currentPage === 'home' ? 'text-skwap-accent' : 'text-slate-500'
              }`}
            >
              Home
            </span>
          </button>

          {/* Match Button */}
          <button
            onClick={() => setCurrentPage('matching')}
            className="flex flex-col items-center justify-center gap-1 transition-colors duration-200"
          >
            <Flame
              size={24}
              className={currentPage === 'matching' ? 'text-skwap-accent' : 'text-slate-500'}
              strokeWidth={currentPage === 'matching' ? 2 : 1.5}
            />
            <span
              className={`text-xs font-medium ${
                currentPage === 'matching' ? 'text-skwap-accent' : 'text-slate-500'
              }`}
            >
              Match
            </span>
          </button>

          {/* Credits Button */}
          <button
            onClick={() => setCurrentPage('credits')}
            className="flex flex-col items-center justify-center gap-1 transition-colors duration-200"
          >
            <Wallet
              size={24}
              className={currentPage === 'credits' ? 'text-skwap-accent' : 'text-slate-500'}
              strokeWidth={currentPage === 'credits' ? 2 : 1.5}
            />
            <span
              className={`text-xs font-medium ${
                currentPage === 'credits' ? 'text-skwap-accent' : 'text-slate-500'
              }`}
            >
              Credits
            </span>
          </button>
        </div>
      </nav>
    </div>
  )
}
