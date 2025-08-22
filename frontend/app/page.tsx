'use client'

import { useState, useEffect, useRef } from 'react'
import { ChatMessage as ChatMessageType } from '@/lib/utils'
import { sendChatMessage, getGreeting, checkHealth } from '@/lib/api'
import ChatMessage from '@/components/ChatMessage'
import ChatInput from '@/components/ChatInput'
import Sidebar from '@/components/Sidebar'
import QuickReplies from '@/components/QuickReplies'
import { Bot, AlertCircle } from 'lucide-react'

export default function Home() {
  const [messages, setMessages] = useState<ChatMessageType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [greeting, setGreeting] = useState('')
  const [isBackendHealthy, setIsBackendHealthy] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Check backend health
        const health = await checkHealth()
        setIsBackendHealthy(health.status === 'healthy')

        // Get greeting
        const greetingResponse = await getGreeting()
        setGreeting(greetingResponse.greeting)
      } catch (error) {
        console.error('Failed to initialize app:', error)
        setIsBackendHealthy(false)
        setGreeting('Good day')
      }
    }

    initializeApp()
  }, [])

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return

    const userMessage: ChatMessageType = {
      role: 'user',
      content: message,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)

    try {
      const response = await sendChatMessage(message, messages)

      const assistantMessage: ChatMessageType = {
        role: 'assistant',
        content: response.response,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Failed to send message:', error)

      const errorMessage: ChatMessageType = {
        role: 'assistant',
        content: 'Sorry, I encountered an error while processing your request. Please try again.',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex h-screen bg-gray-50 chat-background">
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="glass border-b border-white/20 px-8 py-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 glass rounded-full flex items-center justify-center shadow-lg">
              <div className="w-8 h-8 bg-umd-red rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">UMD</span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">PlanetTerp Assistant</h1>
              <p className="text-gray-600 font-medium">
                {greeting}! I'm here to help with your UMD journey.
              </p>
            </div>
            {!isBackendHealthy && (
              <div className="ml-auto flex items-center gap-2 text-orange-600 bg-orange-50 px-3 py-2 rounded-full">
                <AlertCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Connection issues</span>
              </div>
            )}
          </div>
        </header>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center max-w-md">
                <div className="w-20 h-20 glass rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <div className="w-12 h-12 bg-umd-red rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">UMD</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                  Welcome to PlanetTerp
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Your intelligent assistant for everything UMD. From course selection to campus life, I'm here to help you navigate your academic journey.
                </p>
                <div className="glass rounded-2xl p-4">
                  <p className="text-sm text-gray-500 font-medium">Ready to get started?</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message, index) => (
                <ChatMessage key={index} message={message} />
              ))}
              {isLoading && (
                <div className="flex gap-3 p-4 animate-fade-in">
                  <div className="w-10 h-10 glass rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-6 h-6 bg-umd-red rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">UMD</span>
                    </div>
                  </div>
                  <div className="glass rounded-3xl rounded-bl-lg px-6 py-4 shadow-xl">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-umd-red rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-umd-red rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-umd-red rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Reply Buttons */}
        {messages.length === 0 && (
          <div className="border-t bg-white p-4">
            <QuickReplies onSendMessage={handleSendMessage} />
          </div>
        )}

        {/* Chat Input */}
        <ChatInput
          onSendMessage={handleSendMessage}
          isLoading={isLoading}
          disabled={!isBackendHealthy}
        />
      </div>

      {/* Sidebar */}
      <Sidebar />
    </div>
  )
} 