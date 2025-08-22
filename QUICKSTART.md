# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Set up your API key
Create a `.env` file in the root directory:
```bash
echo "GEMINI_API_KEY=your_actual_api_key_here" > .env
```

Get your API key from: https://makersuite.google.com/app/apikey

### 2. Install dependencies
```bash
# Install everything at once
npm run install:all
```

### 3. Start the application
```bash
# Start both backend and frontend
npm run dev
```

Or use the convenience script:
```bash
./start.sh
```

## 🌐 Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs

## 🧪 Test the Chatbot

Try these example questions:
- "Tell me about CMSC131"
- "Who teaches MATH140?"
- "What are the best professors for computer science?"
- "Show me prerequisites for CMSC330"

## 🐛 Troubleshooting

### Backend Issues
- Check if `.env` file exists with `GEMINI_API_KEY`
- Ensure Python 3.8+ is installed
- Check backend logs at http://localhost:8000/health

### Frontend Issues
- Ensure Node.js 18+ is installed
- Clear browser cache if UI doesn't update
- Check browser console for errors

### Port Conflicts
If ports 3000 or 8000 are in use:
- Backend: Change port in `backend/run.py`
- Frontend: Change port in `frontend/package.json`

## 📁 Project Structure
```
planetterp-chatbot/
├── backend/          # FastAPI server
├── frontend/         # Next.js app
├── planetterp_core.py # Core chatbot logic
├── start.sh          # Quick start script
└── README.md         # Full documentation
```

## 🎯 Next Steps

1. Customize the UI in `frontend/components/`
2. Add new features to `backend/main.py`
3. Extend chatbot logic in `planetterp_core.py`
4. Deploy using Docker: `docker-compose up`

Happy coding! 🐢 