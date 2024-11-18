import Guest from "../models/guestModel.js";

export const getGuests = async (req, res) => {
  try {
    const guests = await Guest.find();
    res.status(200).json(guests);
  } catch (error) {
    res.status(500).json({ message: "Error fetching guests", error });
  }
};

export const createGuest = async (req, res) => {
  try {
    const guest = await Guest.create(req.body);
    res.status(201).json(guest);
  } catch (error) {
    res.status(500).json({ message: "Error creating guest", error });
  }
};

export const updateGuest = async (req, res) => {
  try {
    const guest = await Guest.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(guest);
  } catch (error) {
    res.status(500).json({ message: "Error updating guest", error });
  }
};

export const deleteGuest = async (req, res) => {
  try {
    await Guest.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: "Error deleting guest", error });
  }
};
