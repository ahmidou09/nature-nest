import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchCabins = async () => {
  const { data } = await axios.get(`${API_URL}/cabins`);
  return data;
};

/* export const fetchGuests = async () => {
  const { data } = await axios.get(`${API_URL}/guests`);
  return data;
};

export const fetchSettings = async () => {
  const { data } = await axios.get(`${API_URL}/settings`);
  return data;
};

export const fetchBookings = async () => {
  const { data } = await axios.get(`${API_URL}/bookings`);
  return data;
}; */
