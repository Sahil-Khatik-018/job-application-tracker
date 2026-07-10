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
            count: jobs.length,
            data: jobs
        });
    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

// Update Jobs
const updateJob = async (req, res) => {
    try {
        const job = await Job.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        res.status(200).json({
            success: true,
            message: "Job updated successfully",
            data: job,
        });
    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

// Delete Job
const deleteJob = async (req, res) => {
    try {
        await Job.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: "Job deleted successfully",
        })
    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

module.exports = { createdJob, updateJob, deleteJob, getAllJobs }