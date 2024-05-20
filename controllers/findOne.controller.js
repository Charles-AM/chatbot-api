import express from "express";
import diseaseModel from "../model/disease.model.js";

const FindOneDisease = async (req, res) => {
  try {
    const { id } = req.params;
    const disease = await diseaseModel.findById({ _id: id });
    if (!disease) {
      return res.status(404).json({ message: "Could not find the requested disease" });
    }

    return res.status(200).json({ data: disease });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

export default FindOneDisease;