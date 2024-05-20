import express from "express";
import diseaseModel from "../model/disease.model.js";

const FindAllDiseases = async (req, res) => {
  try {
    const diseases = await diseaseModel.find();

    if (!diseases) {
      return res.status(404).json({ message: "Could not find any records in database" });
    }

    return res.status(200).json({ data: diseases });
  } catch (error) {
    return res.status(400).json({ error })
  }
}

export default FindAllDiseases;