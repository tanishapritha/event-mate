import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import TfidfVectorizer

# Example: events dataset
events_data = [
    {"id": 1, "name": "Rock Concert", "tags": "music,concert,rock"},
    {"id": 2, "name": "Art Exhibition", "tags": "art,painting,exhibition"},
    {"id": 3, "name": "Tech Meetup", "tags": "technology,networking,conference"},
    {"id": 4, "name": "Food Festival", "tags": "food,cooking,festival"},
]

events_df = pd.DataFrame(events_data)

# TF-IDF Vectorization
tfidf = TfidfVectorizer()
tfidf_matrix = tfidf.fit_transform(events_df["tags"])

def get_recommendations(user_interests: str, top_n=3):
    """
    user_interests: comma-separated string of user interests
    top_n: number of recommended events
    """
    user_vec = tfidf.transform([user_interests])
    cosine_sim = cosine_similarity(user_vec, tfidf_matrix).flatten()
    top_indices = cosine_sim.argsort()[-top_n:][::-1]
    recommendations = events_df.iloc[top_indices].to_dict(orient="records")
    return recommendations
