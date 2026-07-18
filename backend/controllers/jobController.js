const Job = require("../models/Job");

// Create Job
const createdJob = async (req, res) => {
    try {
        const job = await Job.create(req.body);
        console.log(req.body)
        res.status(201).json({success: true, message: "Job created successfully", data: job});
    } catch(err) {
        res.status(500).json({success: false, message: err.message});
    }
}

// Get All Jobs
const getAllJobs = async (req, res) => {
    try {
        const job = await Job.find().sort({createdAt: -1});

        res.status(201).json({
            success: true,
            count: job.length,
            data: job
        });
    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

const getSingleJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.status(200).json({
      success: true,
      data: job,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Jobs
const updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Job updated successfully",
      data: job,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Job
const deleteJob = async (req, res) => {
  try {
    const deletedJob = await Job.findByIdAndDelete(req.params.id);

    if (!deletedJob) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { createdJob, updateJob, deleteJob, getSingleJob, getAllJobs }