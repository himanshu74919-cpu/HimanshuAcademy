import axios from "axios";

const API = "http://localhost:5000/api";

// REGISTER
export const registerUser = (data) => {
  return axios.post(`${API}/register`, data);
};

// LOGIN
export const loginUser = (data) => {
  return axios.post(`${API}/login`, data);
};

// DASHBOARD
export const getDashboard = (token) => {
  return axios.get(`${API}/dashboard`, {
    headers: {
      Authorization: token,
    },
  });
};
