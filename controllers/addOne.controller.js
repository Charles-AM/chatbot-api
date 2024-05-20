import express from "express";
import diseaseModel from "../model/disease.model.js";

const AddOneDisease = async (req, res) => {
  try {
    const data = req.body;

    const disease = new diseaseModel(data);
    await disease.save();
    return res.status(201).json({ message: "New record added", data: disease });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

export default AddOneDisease;