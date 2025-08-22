import { ChatMessage as ChatMessageType } from '@/lib/utils'
import { cn } from '@/lib/utils'
import { User, Bot } from 'lucide-react'

interface ChatMessageProps {
  message: ChatMessageType
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user'

  return (
    <div className={cn(
      "flex gap-3 p-4 animate-fade-in",
      isUser ? "justify-end" : "justify-start"
    )}>
      {!isUser && (
        <div className="flex-shrink-0">
          <div className="w-10 h-10 glass rounded-full flex items-center justify-center shadow-lg">
            <div className="w-6 h-6 bg-umd-red rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">UMD</span>
            </div>
          </div>
        </div>
      )}

      <div className={cn(
        "max-w-[80%] px-6 py-4 transition-all duration-300",
        isUser
          ? "glass-dark text-white rounded-3xl rounded-br-lg shadow-xl"
          : "glass text-black rounded-3xl rounded-bl-lg shadow-xl"
      )}>
        <p className="whitespace-pre-wrap leading-relaxed text-base">{message.content}</p>
        {message.timestamp && (
          <p className={cn(
            "text-xs mt-3 opacity-60 font-medium",
            isUser ? "text-gray-300" : "text-gray-500"
          )}>
            {message.timestamp.toLocaleTimeString()}
          </p>
        )}
      </div>

      {isUser && (
        <div className="flex-shrink-0">
          <div className="w-10 h-10 glass rounded-full flex items-center justify-center shadow-lg">
            <User className="w-5 h-5 text-gray-700" />
          </div>
        </div>
      )}
    </div>
  )
} 