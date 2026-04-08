import { useState, useRef } from 'react'
import { Bell, Search, ChevronRight, Flame } from 'lucide-react'

type PageType = 'home' | 'credits' | 'matching'

interface HomepageProps {
  onNavigate?: (page: PageType) => void
}

interface RecommendedUser {
  id: string
  name: string
  avatar: string
  skillOffering: string
  rating: number
}

const mockCategories = [
  'Programming',
  'Academics',
  'Design',
  'Languages',
  'Music',
  'Writing',
  'Business',
]

const mockRecommendedUsers: RecommendedUser[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    skillOffering: 'Python & Data Processing',
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Alex Rivera',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    skillOffering: 'Information Assurance Tutoring',
    rating: 4.9,
  },
  {
    id: '3',
    name: 'Jamie Lee',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jamie',
    skillOffering: 'UI/UX Thesis Help',
    rating: 4.7,
  },
  {
    id: '4',
    name: 'Marcus Johnson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
    skillOffering: 'React Frontend Dev',
    rating: 4.6,
  },
]

export default function Homepage({ onNavigate }: HomepageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Programming')
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const handleCategoryScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 pb-24">
      {/* Header with greeting and notification */}
      <div className="px-4 pt-4 pb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-slate-400 text-sm font-medium">Welcome back</p>
            <h1 className="heading-lg mt-1">Hello, Student!</h1>
          </div>
          <button className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-800 hover:bg-slate-700 transition-all border border-slate-700">
            <Bell size={22} className="text-skwap-accent" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
          </button>
        </div>

        {/* Search bar */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
          />
          <input
            type="text"
            placeholder="What do you want to learn today?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-field pl-12 text-sm"
          />
        </div>
      </div>

      {/* Match Finder CTA */}
      <div className="px-4 mb-8">
        <button
          onClick={() => onNavigate?.('matching')}
          className="w-full card-interactive bg-gradient-to-r from-skwap-accent to-cyan-500 p-5 flex items-center justify-between group"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 bg-opacity-40 flex items-center justify-center">
              <Flame size={24} className="text-white" />
            </div>
            <div className="text-left">
              <p className="font-bold text-white">Find Your Match</p>
              <p className="text-sm text-cyan-100">Discover compatible skill-swap partners</p>
            </div>
          </div>
          <ChevronRight size={20} className="text-white group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Categories section */}
      <div className="mb-8">
        <div className="flex items-center justify-between px-4 mb-3">
          <h2 className="heading-sm">Categories</h2>
          <button className="text-skwap-accent font-semibold text-sm hover:text-opacity-80">
            See All
          </button>
        </div>

        {/* Scrollable category pills */}
        <style>{`
          .category-scroll-container {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .category-scroll-container::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="category-scroll-container flex gap-2 px-4 overflow-x-auto scroll-smooth"
          >
            {mockCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-shrink-0 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-skwap-accent text-slate-900 shadow-md shadow-cyan-500/50'
                    : 'bg-slate-800 text-skwap-accent hover:bg-slate-700 border border-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Scroll indicators (hidden on mobile in production, kept for UI clarity) */}
          <button
            onClick={() => handleCategoryScroll('left')}
            className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 shadow-md border border-slate-700"
          >
            <ChevronRight size={16} className="rotate-180 text-slate-50" />
          </button>
          <button
            onClick={() => handleCategoryScroll('right')}
            className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 shadow-md border border-slate-700"
          >
            <ChevronRight size={16} className="text-slate-50" />
          </button>
        </div>
      </div>

      {/* Recommended for You section */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="heading-sm">Recommended for You</h2>
          <button className="text-skwap-accent font-semibold text-sm hover:text-opacity-80 flex items-center gap-1">
            View All
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Vertical list of user cards */}
        <div className="space-y-3">
          {mockRecommendedUsers.map((user) => (
            <div key={user.id} className="card-interactive">
              <div className="flex items-center gap-3">
                {/* User avatar */}
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-14 h-14 rounded-full object-cover flex-shrink-0 ring-2 ring-slate-700"
                />

                {/* User info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-50 truncate">
                    {user.name}
                  </h3>
                  <p className="text-sm text-slate-400 truncate mb-1">
                    {user.skillOffering}
                  </p>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500 font-semibold text-sm">★</span>
                    <span className="text-xs font-semibold text-slate-50">
                      {user.rating}
                    </span>
                  </div>
                </div>

                {/* View Profile button */}
                <button className="flex-shrink-0 px-4 py-2 bg-skwap-accent text-white font-semibold text-sm rounded-xl transition-all duration-200 hover:shadow-md active:scale-95">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick stats section */}
      <div className="px-4 mt-8 mb-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="card text-center py-4">
            <p className="text-3xl font-bold text-skwap-accent mb-1">128</p>
            <p className="text-xs text-slate-400 font-semibold">Skills Available</p>
          </div>
          <div className="card text-center py-4">
            <p className="text-3xl font-bold text-skwap-accent mb-1">2.4K</p>
            <p className="text-xs text-slate-400 font-semibold">Active Students</p>
          </div>
        </div>
      </div>
    </div>
  )
}
