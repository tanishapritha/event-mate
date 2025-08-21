from fastapi import APIRouter, Query
from app.services.recommendation_service import get_recommendations

router = APIRouter()

@router.get("/")
def recommend(user_interests: str = Query(..., description="Comma-separated user interests")):
    """
    Example: /recommendations/?user_interests=music,food
    """
    recommended_events = get_recommendations(user_interests)
    return {"recommendations": recommended_events}
