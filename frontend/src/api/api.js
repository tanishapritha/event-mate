import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:8000";

export const fetchUsers = async () => {
  const res = await axios.get(`${BASE_URL}/users/`);
  return res.data;
};

export const fetchEvents = async () => {
  const res = await axios.get(`${BASE_URL}/events/`);
  return res.data;
};

export const fetchRecommendations = async (userInterests) => {
  const res = await axios.get(`${BASE_URL}/recommendations/`, {
    params: { user_interests: userInterests },
  });
  return res.data;
};
