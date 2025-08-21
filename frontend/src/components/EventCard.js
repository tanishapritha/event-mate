import React from "react";
import "../styles/eventCard.scss";

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <img src={event.image || "/default-event.jpg"} alt={event.name} />
      <h3>{event.name}</h3>
      <p>{event.tags}</p>
      <button className="details-btn">View Details</button>
    </div>
  );
};

export default EventCard;
