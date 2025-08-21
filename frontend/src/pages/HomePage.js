import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import "../styles/global.scss";

const HomePage = () => {
  const [interests, setInterests] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/recommendations?user_interests=${interests}`);
  };

  return (
    <>
      <Header />
      <div className="container home-page">
        <h2 className="title">Discover Events Tailored for You</h2>
        <p className="subtitle">
          Explore events based on your interests and passions.
        </p>
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            placeholder="e.g., music, food, tech"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            required
          />
          <Button type="submit">Find Events</Button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
