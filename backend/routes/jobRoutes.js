const express = require('express');

const router = express.Router();

const {
  createdJob,
  getAllJobs,
  getSingleJob,
  updateJob,
  deleteJob,
} = require('../controllers/jobController')

router.post("/", createdJob);

router.get("/", getAllJobs);

router.get("/:id", getSingleJob);

router.put("/:id", updateJob);

router.delete("/:id", deleteJob);

module.exports = router