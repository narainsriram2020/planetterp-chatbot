#!/bin/bash

echo "🚀 Starting PlanetTerp Chatbot..."

# Check if .env file exists
if [ ! -f .env ]; then
    echo "⚠️  Warning: .env file not found!"
    echo "Please create a .env file with your GEMINI_API_KEY"
    echo "Example:"
    echo "GEMINI_API_KEY=your_api_key_here"
    echo ""
fi

# Check if dependencies are installed
if [ ! -d "frontend/node_modules" ]; then
    echo "📦 Installing frontend dependencies..."
    cd frontend && npm install && cd ..
fi

if [ ! -d "backend/__pycache__" ] && [ ! -f "backend/.venv" ]; then
    echo "🐍 Installing backend dependencies..."
    cd backend && pip install -r requirements.txt && cd ..
fi

# Start both servers
echo "🌟 Starting development servers..."
echo "Backend will run on: http://localhost:8000"
echo "Frontend will run on: http://localhost:3000"
echo ""

# Use concurrently if available, otherwise start them in separate terminals
if command -v concurrently &> /dev/null; then
    npm run dev
else
    echo "Installing concurrently..."
    npm install concurrently
    npm run dev
fi 