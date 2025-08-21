import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventCard from "../components/EventCard";
import EventCardSkeleton from "../components/EventCardSkeleton";
import { fetchRecommendations } from "../api/api";
import "../styles/recommendations.scss";

const RecommendationsPage = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userInterests = queryParams.get("user_interests");

  useEffect(() => {
    const getRecommendations = async () => {
      try {
        setLoading(true);
        const data = await fetchRecommendations(userInterests);
        setRecommendations(data.recommendations); // backend should return { recommendations: [...] }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getRecommendations();
  }, [userInterests]);

  return (
    <>
      <Header />
      <div className="container recommendations-page">
        <h2 className="title">Recommended Events for You</h2>
        <p className="subtitle">Your interests: {userInterests}</p>

        {loading ? (
          <div className="events-grid">
            {Array.from({ length: 6 }).map((_, idx) => (
              <EventCardSkeleton key={idx} />
            ))}
          </div>
        ) : (
          <div className="events-grid">
            {recommendations.length === 0 ? (
              <p>No events found.</p>
            ) : (
              recommendations.map((event, index) => (
                <EventCard
                  key={event.id}
                  event={event}
                  style={{ "--order": index }}
                />
              ))
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default RecommendationsPage;
