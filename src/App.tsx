import { useState } from 'react'
import Homepage from './pages/Homepage'
import Credits from './pages/Credits'
import Matching from './pages/Matching'

type PageType = 'home' | 'credits' | 'matching'

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Homepage onNavigate={setCurrentPage} />
      case 'credits':
        return <Credits onNavigate={setCurrentPage} />
      case 'matching':
        return <Matching onNavigate={setCurrentPage} />
      default:
        return <Homepage onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {renderPage()}
    </div>
  )
}
