import { useState } from 'react'
import { X, Check, Flame } from 'lucide-react'

type PageType = 'home' | 'credits' | 'matching'

interface MatchingProps {
  onNavigate?: (page: PageType) => void
}

interface MatchProfile {
  id: string
  name: string
  major: string
  avatar: string
  offering: string
  lookingFor: string
  synergy: number
  bio: string
}

const mockMatches: MatchProfile[] = [
  {
    id: '1',
    name: 'Emma Rodriguez',
    major: 'Computer Science',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    offering: 'Advanced Python Scripting',
    lookingFor: 'Figma Mockups for Prototype',
    synergy: 95,
    bio: 'Final year CS student working on thesis project',
  },
  {
    id: '2',
    name: 'David Chen',
    major: 'Information Technology',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    offering: 'Information Assurance & Security',
    lookingFor: 'ReactJS Fundamentals',
    synergy: 82,
    bio: 'Security specialist helping peers with cybersecurity concepts',
  },
  {
    id: '3',
    name: 'Sophie Dupont',
    major: 'Graphic Design',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie',
    offering: 'Poster & UI Design',
    lookingFor: 'Social Issues Course Reviewer',
    synergy: 88,
    bio: 'Creative designer passionate about impactful visual communication',
  },
]

export default function Matching({ onNavigate: _onNavigate }: MatchingProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [matches, setMatches] = useState(mockMatches)
  const [isAnimating, setIsAnimating] = useState(false)

  const currentMatch = matches[currentIndex]

  const handlePass = () => {
    if (isAnimating) return
    setIsAnimating(true)
    
    setTimeout(() => {
      if (currentIndex < matches.length - 1) {
        setCurrentIndex(currentIndex + 1)
      } else {
        // Reset or show no more matches
        setCurrentIndex(0)
        setMatches(mockMatches)
      }
      setIsAnimating(false)
    }, 300)
  }

  const handleConnect = () => {
    if (isAnimating) return
    setIsAnimating(true)
    
    setTimeout(() => {
      alert(`You matched with ${currentMatch.name}! 🎉`)
      handlePass()
    }, 300)
  }

  if (!currentMatch) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center pb-24 px-4">
        <div className="text-center">
          <div className="w-20 h-20 rounded-full bg-skwap-accent-light flex items-center justify-center mb-4 mx-auto">
            <Flame size={40} className="text-skwap-accent" />
          </div>
          <h2 className="heading-md mb-2">No More Matches Today</h2>
          <p className="text-text-secondary mb-6">
            Come back later to find more skill-swap partners!
          </p>
          <button className="btn-primary">
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-skwap-accent-light flex flex-col pb-24">
      {/* Header */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-sm z-10 py-4 px-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h1 className="heading-md">New Match!</h1>
          <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-skwap-accent-light">
            <Flame size={16} className="text-skwap-accent" />
            <span className="text-sm font-semibold text-skwap-accent">
              {currentIndex + 1}/{matches.length}
            </span>
          </div>
        </div>
      </div>

      {/* Main matching card area */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div
          className={`w-full max-w-sm transition-all duration-300 transform ${
            isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
          }`}
        >
          {/* Profile Card */}
          <div className="card bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Profile Picture */}
            <div className="relative w-full h-64 bg-gradient-to-br from-skwap-accent-light to-cyan-100 flex items-center justify-center overflow-hidden">
              <img
                src={currentMatch.avatar}
                alt={currentMatch.name}
                className="w-full h-full object-cover"
              />
              {/* Synergy badge */}
              <div className="absolute top-4 right-4 bg-white rounded-full shadow-lg px-4 py-2 flex items-center gap-2">
                <Flame size={18} className="text-orange-500" />
                <span className="font-bold text-skwap-primary">
                  {currentMatch.synergy}%
                </span>
              </div>
            </div>

            {/* Profile Info */}
            <div className="p-5">
              {/* Name and Major */}
              <div className="mb-4">
                <h2 className="heading-sm mb-1">{currentMatch.name}</h2>
                <p className="text-sm text-text-secondary font-medium">
                  📚 {currentMatch.major}
                </p>
                <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                  {currentMatch.bio}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-200 my-4" />

              {/* Skills sections */}
              <div className="space-y-4">
                {/* Offering */}
                <div className="bg-skwap-accent-light rounded-2xl p-4">
                  <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-2">
                    ✨ Offering
                  </p>
                  <p className="font-bold text-skwap-primary text-lg">
                    {currentMatch.offering}
                  </p>
                </div>

                {/* Looking For */}
                <div className="bg-green-50 rounded-2xl p-4 border border-green-200">
                  <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2">
                    🎯 Looking For
                  </p>
                  <p className="font-bold text-green-700 text-lg">
                    {currentMatch.lookingFor}
                  </p>
                </div>
              </div>

              {/* Match Synergy Info */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-semibold text-text-secondary">
                    Match Synergy
                  </p>
                  <p className="text-xs font-bold text-skwap-accent">
                    {currentMatch.synergy}% Compatible
                  </p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-skwap-accent to-cyan-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${currentMatch.synergy}%` }}
                  />
                </div>
                <p className="text-xs text-text-secondary mt-2">
                  Your skills align great with {currentMatch.name.split(' ')[0]}'s needs!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="fixed bottom-24 left-0 right-0 flex justify-center gap-8 px-4 max-w-sm mx-auto">
        {/* Pass Button */}
        <button
          onClick={handlePass}
          disabled={isAnimating}
          className="w-16 h-16 rounded-full bg-red-500 text-white shadow-lg flex items-center justify-center transition-all duration-200 hover:shadow-xl hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          title="Pass"
        >
          <X size={32} strokeWidth={3} />
        </button>

        {/* Connect Button */}
        <button
          onClick={handleConnect}
          disabled={isAnimating}
          className="w-16 h-16 rounded-full bg-skwap-accent text-white shadow-lg flex items-center justify-center transition-all duration-200 hover:shadow-xl hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          title="Connect"
        >
          <Check size={32} strokeWidth={3} />
        </button>
      </div>
    </div>
  )
}
