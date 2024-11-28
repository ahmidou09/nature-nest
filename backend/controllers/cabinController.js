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
    const { name, maxCapacity, regularPrice, discount, description, image } =
      req.body;

    if (!req.file && !image) {
      return res.status(400).json({ message: "Image is required." });
    }

    const cabin = await Cabin.create({
      name,
      maxCapacity,
      regularPrice,
      discount,
      description,
      image: req.file ? req.file.path : image,
    });

    res.status(201).json(cabin);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update a cabin
export const updateCabin = async (req, res) => {
  try {
    const { name, maxCapacity, regularPrice, discount, description } = req.body;

    const updateData = {
      name,
      maxCapacity,
      regularPrice,
      discount,
      description,
    };

    // If a new image is uploaded, update the image path
    if (req.file) {
      updateData.image = req.file.path;
    }

    const cabin = await Cabin.findByIdAndUpdate(req.params.id, updateData, {
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
