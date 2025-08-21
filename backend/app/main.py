from fastapi import FastAPI
from app.api import users, events, recommendations
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="EventMate Backend", version="1.0")

# Include routers
app.include_router(users.router, prefix="/users", tags=["Users"])
app.include_router(events.router, prefix="/events", tags=["Events"])
app.include_router(recommendations.router, prefix="/recommendations", tags=["Recommendations"])

@app.get("/")
def root():
    return {"message": "Welcome to EventMate API"}


origins = [
    "https://eventmate-frontend.vercel.app",
    "http://localhost:3000",
    "http://localhost:3001",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
