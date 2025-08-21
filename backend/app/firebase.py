import firebase_admin
from firebase_admin import credentials, firestore
from dotenv import load_dotenv
import os, json

# Load from .env
load_dotenv()

# Read JSON string from environment
firebase_creds_json = os.getenv("FIREBASE_CREDENTIALS_JSON")
cred_dict = json.loads(firebase_creds_json)

# Initialize Firebase
cred = credentials.Certificate(cred_dict)
firebase_admin.initialize_app(cred)

db = firestore.client()
