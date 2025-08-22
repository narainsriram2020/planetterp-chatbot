import { ChatMessage, ChatResponse, FunFactResponse, GreetingResponse } from './utils'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export async function sendChatMessage(message: string, chatHistory: ChatMessage[]): Promise<ChatResponse> {
  const response = await fetch(`${API_BASE_URL}/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message,
      chat_history: chatHistory.map(msg => ({
        role: msg.role,
        content: msg.content
      }))
    }),
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  return response.json()
}

export async function getFunFact(): Promise<FunFactResponse> {
  const response = await fetch(`${API_BASE_URL}/fun-fact`)
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  return response.json()
}

export async function getGreeting(): Promise<GreetingResponse> {
  const response = await fetch(`${API_BASE_URL}/greeting`)
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  return response.json()
}

export async function checkHealth(): Promise<{ status: string; model_loaded: boolean; index_loaded: boolean }> {
  const response = await fetch(`${API_BASE_URL}/health`)
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  return response.json()
} 