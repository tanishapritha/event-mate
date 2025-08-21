from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_events():
    return {"message": "List of events will be here"}
