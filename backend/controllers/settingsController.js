import Settings from "../models/settingsModel.js";

export const getSettings = async (req, res) => {
  try {
    const settings = await Settings.findOne();
    res.status(200).json(settings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching settings", error });
  }
};

export const updateSettings = async (req, res) => {
  try {
    const settings = await Settings.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true,
    });
    res.status(200).json(settings);
  } catch (error) {
    res.status(500).json({ message: "Error updating settings", error });
  }
};
