import { useState, KeyboardEvent } from 'react'
import { Send, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ChatInputProps {
  onSendMessage: (message: string) => void
  isLoading: boolean
  disabled?: boolean
}

export default function ChatInput({ onSendMessage, isLoading, disabled }: ChatInputProps) {
  const [message, setMessage] = useState('')

  const handleSend = () => {
    if (message.trim() && !isLoading && !disabled) {
      onSendMessage(message.trim())
      setMessage('')
    }
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="glass border-t border-white/20 p-6">
      <div className="flex gap-3">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask me anything about UMD..."
          className="flex-1 resize-none rounded-2xl border-0 px-6 py-4 focus:outline-none focus:ring-2 focus:ring-umd-red/20 text-black bg-white/80 backdrop-blur-sm shadow-lg"
          rows={1}
          disabled={isLoading || disabled}
          style={{ minHeight: '56px', maxHeight: '120px' }}
        />
        <button
          onClick={handleSend}
          disabled={!message.trim() || isLoading || disabled}
          className={cn(
            "flex-shrink-0 rounded-2xl px-6 py-4 transition-all duration-200 shadow-lg",
            message.trim() && !isLoading && !disabled
              ? "bg-umd-red text-white hover:bg-red-700 hover:scale-105 active:scale-95"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          )}
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Send className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  )
} 