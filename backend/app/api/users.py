
from fastapi import APIRouter
from app.firebase import db

router = APIRouter()

@router.get("/")
def get_users():
    users_ref = db.collection("users").get()
    users_list = [user.to_dict() for user in users_ref]
    return {"users": users_list}