const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["Applied", "Interview", "Rejected", "Offer"],
      default: "Applied",
    },
    appliedDate: {
      type: Date,
      required: true,
    },
    followUpDate: {
      type: Date,
    },
    location: {
      type: String,
      trim: true,
    },
    applicationMode: {
      type: [String],
      default: [],
    },
    hrName: {
      type: String,
    },
    hrEmail: {
      type: String,
    },
    resumeVersion: {
      type: String,
    },
    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Job", jobSchema);
