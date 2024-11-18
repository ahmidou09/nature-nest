import Cabin from "../models/cabinModel.js";

// Get all cabins
export const getCabins = async (req, res) => {
  try {
    const cabins = await Cabin.find();
    res.status(200).json(cabins);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cabins", error });
  }
};

// Create a new cabin
export const createCabin = async (req, res) => {
  try {
    const cabin = await Cabin.create(req.body);
    res.status(201).json(cabin);
  } catch (error) {
    res.status(500).json({ message: "Error creating cabin", error });
  }
};

// Update a cabin
export const updateCabin = async (req, res) => {
  try {
    const cabin = await Cabin.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(cabin);
  } catch (error) {
    res.status(500).json({ message: "Error updating cabin", error });
  }
};

// Delete a cabin
export const deleteCabin = async (req, res) => {
  try {
    await Cabin.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: "Error deleting cabin", error });
  }
};
