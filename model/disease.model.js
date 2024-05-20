import { Schema, model } from "mongoose";

const diseaseSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  causes: {
    type: [String],
    minLength: 1,
    required: true
  },
  symptoms: {
    type: [String],
    minLength: 1,
    required: true
  },
  prevention: {
    type: [String],
    minLength: 1,
    required: true
  }
},
{
  timestamps: true
});

const diseaseModel = model("disease", diseaseSchema);

export default diseaseModel;