import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchCabins = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/cabins`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createCabin = async (cabin) => {
  try {
    const { data } = await axios.post(`${API_URL}/cabins`, cabin);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateCabin = async (cabin) => {
  try {
    const { data } = await axios.put(`${API_URL}/cabins/${cabin._id}`, cabin);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteCabin = async (id) => {
  try {
    const { data } = await axios.delete(`${API_URL}/cabins/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
