import { useState, useEffect } from 'react'
import { BookOpen, Users, Star, MapPin, Calendar, GraduationCap } from 'lucide-react'

interface QuickRepliesProps {
  onSendMessage: (message: string) => void
}

const quickReplies = [
  {
    text: "Course Reviews",
    icon: BookOpen,
    message: "Show me some popular computer science courses"
  },
  {
    text: "Professor Info",
    icon: Users,
    message: "Who are the best professors for CMSC131?"
  },
  {
    text: "Dining Halls",
    icon: MapPin,
    message: "What are the best dining halls on campus?"
  },
  {
    text: "Course Schedule",
    icon: Calendar,
    message: "When does registration open for next semester?"
  },
  {
    text: "Study Tips",
    icon: GraduationCap,
    message: "Give me some study tips for finals week"
  },
  {
    text: "Campus Life",
    icon: Star,
    message: "What are some fun things to do on campus?"
  }
]

export default function QuickReplies({ onSendMessage }: QuickRepliesProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % quickReplies.length)
    }, 5000) // Rotate every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const currentReplies = [
    quickReplies[currentIndex],
    quickReplies[(currentIndex + 1) % quickReplies.length]
  ]

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-600 font-semibold tracking-wide uppercase">Quick Start</p>
      <div className="grid grid-cols-2 gap-3">
        {currentReplies.map((reply, index) => {
          const Icon = reply.icon
          return (
            <button
              key={`${currentIndex}-${index}`}
              onClick={() => onSendMessage(reply.message)}
              className="flex items-center gap-3 p-4 glass hover:bg-umd-red hover:text-white rounded-2xl transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 animate-fade-in text-black group"
            >
              <div className="p-2 bg-white/50 rounded-lg group-hover:bg-white/20 transition-colors">
                <Icon className="w-4 h-4" />
              </div>
              <span className="font-semibold">{reply.text}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
} 