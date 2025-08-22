import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
  timestamp?: Date
}

export interface ChatResponse {
  response: string
  chat_name?: string
}

export interface FunFactResponse {
  fact: string
}

export interface GreetingResponse {
  greeting: string
} 