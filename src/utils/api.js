import React from "react";
import axios from "axios";

// BASE URL
const API_BASE_URL = "https://frontend-take-home-service.fetch.com";

// sent with request
const apiOptions = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export const loginAPI = async (name, email) => {
  try {
    const response = await apiOptions.post("/auth/login", { name, email });
    return response.data;
    // post with the email and name
  } catch (error) {
    console.log("Login at api.js failed: ", error);
    throw error;
  }
};
