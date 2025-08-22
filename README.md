# PlanetTerp Chatbot

A modern chatbot for UMD students to get information about courses, professors, and campus resources. Built with Next.js frontend and FastAPI backend.

## Features

- 🤖 AI-powered chatbot using Google Gemini
- 📚 Course information and search
- 👨‍🏫 Professor ratings and reviews
- 🎯 Semantic search for courses
- 💬 Real-time chat interface
- 📱 Modern, responsive UI with Tailwind CSS
- 🔄 Fun facts about UMD
- 🔗 Quick links to UMD resources

## Tech Stack

### Frontend
- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

### Backend
- **FastAPI** - Python web framework
- **Google Gemini** - AI model
- **Sentence Transformers** - Semantic search
- **FAISS** - Vector similarity search
- **PlanetTerp API** - Course and professor data

## Prerequisites

- Node.js 18+ and npm
- Python 3.8+
- Google Gemini API key

## Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd planetterp-chatbot
   ```

2. **Install dependencies**
   ```bash
   # Install all dependencies (both backend and frontend)
   npm run install:all
   ```

3. **Environment Variables**
   
   Create a `.env` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start the development servers**
   ```bash
   # Start both backend and frontend
   npm run dev
   ```

   Or start them separately:
   ```bash
   # Backend only (runs on http://localhost:8000)
   npm run dev:backend
   
   # Frontend only (runs on http://localhost:3000)
   npm run dev:frontend
   ```

## Usage

1. Open your browser and go to `http://localhost:3000`
2. Start chatting with the bot about UMD courses and professors
3. Try asking questions like:
   - "Tell me about CMSC131"
   - "Who teaches MATH140?"
   - "What are the best professors for computer science courses?"
   - "Show me course prerequisites for CMSC330"

## API Endpoints

### Backend (FastAPI)

- `GET /` - Health check
- `GET /health` - Detailed health status
- `GET /greeting` - Get time-based greeting
- `GET /fun-fact` - Get random UMD fun fact
- `POST /chat` - Send chat message

### Frontend (Next.js)

- `/` - Main chat interface

## Project Structure

```
planetterp-chatbot/
├── backend/
│   ├── main.py              # FastAPI application
│   ├── run.py               # Development server script
│   └── requirements.txt     # Python dependencies
├── frontend/
│   ├── app/                 # Next.js app directory
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Main page
│   ├── components/          # React components
│   │   ├── ChatInput.tsx    # Chat input component
│   │   ├── ChatMessage.tsx  # Message display component
│   │   └── Sidebar.tsx      # Sidebar component
│   ├── lib/                 # Utilities and API
│   │   ├── api.ts           # API client functions
│   │   └── utils.ts         # Utility functions
│   └── package.json         # Frontend dependencies
├── planetterp_core.py       # Core chatbot logic
├── package.json             # Root package.json with scripts
└── README.md               # This file
```

## Development

### Backend Development

The backend uses FastAPI and provides a REST API for the chatbot functionality. Key features:

- Automatic API documentation at `http://localhost:8000/docs`
- CORS enabled for frontend communication
- Health check endpoints
- Error handling and logging

### Frontend Development

The frontend is built with Next.js 14 using the app directory structure:

- TypeScript for type safety
- Tailwind CSS for styling
- Responsive design
- Real-time chat interface
- Error handling and loading states

## Deployment

### Backend Deployment

1. Install production dependencies:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

2. Set environment variables in production

3. Run with a production ASGI server like Gunicorn:
   ```bash
   gunicorn main:app -w 4 -k uvicorn.workers.UvicornWorker
   ```

### Frontend Deployment

1. Build the application:
   ```bash
   cd frontend
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For issues and questions, please open an issue on GitHub.