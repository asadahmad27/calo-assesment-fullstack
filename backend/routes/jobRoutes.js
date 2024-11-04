const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobController");

router.post("/jobs", jobController.createJob);

router.get("/jobs", jobController.getAllJobs);

router.get("/jobs/:jobId", jobController.getJobById);

module.exports = router;
