import axios from "axios";

export const api = axios.create({
  baseURL: "https://crack-edge-education-app.onrender.com/api",
});

export const auth = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
