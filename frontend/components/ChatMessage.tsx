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
      "flex gap-3 p-4",
      isUser ? "justify-end" : "justify-start"
    )}>
      {!isUser && (
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-umd-red rounded-full flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
        </div>
      )}
      
      <div className={cn(
        "max-w-[80%] rounded-lg px-4 py-3",
        isUser 
          ? "bg-umd-red text-white" 
          : "bg-gray-100 text-gray-900"
      )}>
        <p className="whitespace-pre-wrap">{message.content}</p>
        {message.timestamp && (
          <p className={cn(
            "text-xs mt-2",
            isUser ? "text-red-100" : "text-gray-500"
          )}>
            {message.timestamp.toLocaleTimeString()}
          </p>
        )}
      </div>
      
      {isUser && (
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-gray-600" />
          </div>
        </div>
      )}
    </div>
  )
} 