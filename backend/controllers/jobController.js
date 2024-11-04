const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const axios = require("axios");

// Path to JSON file
const dataPath = path.join(__dirname, "../data/jobs.json");

// Helper to read and write data to jobs.json
const readJobs = () => {
  try {
    const data = fs.readFileSync(dataPath, "utf-8");
    return JSON.parse(data || "[]");
  } catch (error) {
    console.error("Error reading jobs file:", error);
    throw new Error("Failed to read jobs data");
  }
};

const writeJobs = (jobs) => {
  try {
    fs.writeFileSync(dataPath, JSON.stringify(jobs, null, 2));
  } catch (error) {
    console.error("Error writing to jobs file:", error);
    throw new Error("Failed to write jobs data");
  }
};

// Create a new job
exports.createJob = async (req, res) => {
  try {
    const newJob = { id: uuidv4(), status: "pending", result: null };
    const delay = Math.floor((Math.random() * 60) / 5) * 5000; // Random delay between 5 seconds to 5 minutes
    // const delay = 5000; // Random delay between 5 seconds to 5 minutes
    newJob.delay = delay;

    const jobs = readJobs();
    jobs.push(newJob);
    writeJobs(jobs);

    res.status(201).json({ id: newJob.id });
    console.log(delay);

    // Simulate delay with setTimeout
    setTimeout(async () => {
      try {
        newJob.status = "resolved";
        // newJob.result = `https://source.unsplash.com/random/food?sig=${Math.random()}`;
        // newJob.result = `https://api.unsplash.com/photos/random?count=1`;
        const response = await axios.get(
          "https://api.unsplash.com/photos/random",
          {
            params: {
              query: "food",
            },
            headers: {
              Authorization: `Client-ID TX3eRnd9aSeULzhtEQXJkrVpqipadqrg3zypIEwbiA4`, // Replace with your Unsplash access key
            },
          }
        );
        newJob.result = response?.data?.urls?.small;

        writeJobs(jobs);
      } catch (error) {
        console.log("Error during job execution:", error);
      }
    }, delay);
  } catch (error) {
    console.error("Error creating a new job:", error);
    res.status(500).json({ error: "Failed to create a new job" });
  }
};

// Get all jobs
exports.getAllJobs = (req, res) => {
  try {
    const jobs = readJobs();
    res.json(jobs);
  } catch (error) {
    console.error("Error fetching all jobs:", error);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
};

// Get a specific job by ID
exports.getJobById = (req, res) => {
  try {
    const jobs = readJobs();
    const job = jobs.find((j) => j.id === req.params.jobId);

    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.json(job);
  } catch (error) {
    console.error("Error fetching job by ID:", error);
    res.status(500).json({ error: "Failed to fetch job" });
  }
};
