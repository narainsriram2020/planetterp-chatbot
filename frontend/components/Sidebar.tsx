import { useState, useEffect } from 'react'
import { Lightbulb, BookOpen, Users, Calendar, ExternalLink, RefreshCw } from 'lucide-react'
import { getFunFact } from '@/lib/api'

export default function Sidebar() {
  const [funFact, setFunFact] = useState<string>('')
  const [isLoadingFact, setIsLoadingFact] = useState(false)

  const loadFunFact = async () => {
    setIsLoadingFact(true)
    try {
      const response = await getFunFact()
      setFunFact(response.fact)
    } catch (error) {
      console.error('Failed to load fun fact:', error)
      setFunFact("UMD's mascot Testudo is a diamondback terrapin, Maryland's state reptile.")
    } finally {
      setIsLoadingFact(false)
    }
  }

  useEffect(() => {
    loadFunFact()
  }, [])

  return (
    <div className="w-80 glass border-l border-white/20 p-6 overflow-y-auto custom-scrollbar">
      {/* Fun Fact Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Lightbulb className="w-5 h-5 text-umd-gold" />
          <h3 className="font-semibold text-gray-900">Fun Fact</h3>
          <button
            onClick={loadFunFact}
            disabled={isLoadingFact}
            className="ml-auto p-1 hover:bg-gray-200 rounded transition-colors"
          >
            <RefreshCw className={isLoadingFact ? "w-4 h-4 animate-spin" : "w-4 h-4"} />
          </button>
        </div>
        <div className="glass rounded-2xl p-4 shadow-lg">
          <p className="text-sm text-black italic leading-relaxed">"{funFact}"</p>
        </div>
      </div>

      {/* How to Use Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-5 h-5 text-umd-red" />
          <h3 className="font-semibold text-gray-900">How to Use</h3>
        </div>
        <div className="space-y-3 text-sm text-black">
          <div>
            <p className="font-medium text-gray-900">🔍 Ask about courses:</p>
            <ul className="ml-4 mt-1 space-y-1">
              <li>• Search by course ID (e.g., "Tell me about CMSC131")</li>
              <li>• Get professor ratings for specific courses</li>
              <li>• Find prerequisites and course descriptions</li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-gray-900">👨‍🏫 Learn about professors:</p>
            <ul className="ml-4 mt-1 space-y-1">
              <li>• Ask about teaching styles and ratings</li>
              <li>• Compare professors for the same course</li>
              <li>• Find what courses a professor teaches</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <ExternalLink className="w-5 h-5 text-umd-red" />
          <h3 className="font-semibold text-gray-900">Quick UMD Links</h3>
        </div>
        <div className="space-y-2">
          <a
            href="https://elms.umd.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-2 hover:bg-white rounded transition-colors text-sm text-gray-700 hover:text-umd-red"
          >
            📝 ELMS
          </a>
          <a
            href="https://testudo.umd.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-2 hover:bg-white rounded transition-colors text-sm text-gray-700 hover:text-umd-red"
          >
            📅 Testudo
          </a>
          <a
            href="https://app.testudo.umd.edu/soc/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-2 hover:bg-white rounded transition-colors text-sm text-gray-700 hover:text-umd-red"
          >
            📚 Classes (SOC)
          </a>
          <a
            href="https://dining.umd.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-2 hover:bg-white rounded transition-colors text-sm text-gray-700 hover:text-umd-red"
          >
            🍽️ Dining
          </a>
        </div>
      </div>

      {/* Important Dates Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-5 h-5 text-umd-red" />
          <h3 className="font-semibold text-gray-900">Important Dates</h3>
        </div>
        <div className="space-y-2 text-sm text-black">
          <div className="flex items-center gap-2">
            <span>🏝️</span>
            <span>Spring Break: March 16-23</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🗓️</span>
            <span>Registration: April 1-15, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📚</span>
            <span>Finals Exams: May 15-21, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🎓</span>
            <span>Commencement: May 21, 2025</span>
          </div>
        </div>
      </div>

      {/* Version Info */}
      <div className="text-xs text-gray-500 text-center">
        v1.0.0 | Updated March 2025
      </div>
    </div>
  )
} 