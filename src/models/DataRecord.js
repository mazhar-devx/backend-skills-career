import mongoose from "mongoose";

const dataRecordSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    payload: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    createdBy: {
      type: String,
      trim: true,
      default: "system",
    },
  },
  {
    timestamps: true,
  },
);

const DataRecord = mongoose.model("DataRecord", dataRecordSchema);

export default DataRecord;
