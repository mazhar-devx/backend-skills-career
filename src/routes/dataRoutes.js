import express from "express";
import DataRecord from "../models/DataRecord.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const records = await DataRecord.find().sort({ createdAt: -1 });
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch records", error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const record = await DataRecord.findById(req.params.id);
    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }
    return res.json(record);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch record", error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const record = await DataRecord.create(req.body);
    res.status(201).json(record);
  } catch (error) {
    res.status(400).json({ message: "Failed to create record", error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const record = await DataRecord.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }
    return res.json(record);
  } catch (error) {
    return res.status(400).json({ message: "Failed to update record", error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const record = await DataRecord.findByIdAndDelete(req.params.id);
    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }
    return res.json({ message: "Record deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Failed to delete record", error: error.message });
  }
});

export default router;
