import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchSettings = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/settings`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateSettings = async (settings) => {
  try {
    const { data } = await axios.put(`${API_URL}/settings`, settings);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
