const express = require('express');

const router = express.Router();

const {
  createdJob,
  getAllJobs,
  updateJob,
  deleteJob,
} = require('../controllers/jobController')

router.post("/", createdJob);

router.get("/", getAllJobs);

router.put("/:id", updateJob);

router.delete("/:id", deleteJob);

module.exports = router