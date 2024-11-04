import axios from "axios";

const API_URL = "http://localhost:5000/api";

// Create a new job
export const createJob = async () => {
  try {
    const response = await axios.post(`${API_URL}/jobs`);
    return response.data; // Returns the job ID
  } catch (error) {
    console.error("Error creating job:", error);
    throw error;
  }
};

// Get list of all jobs
export const getJobs = async () => {
  try {
    const response = await axios.get(`${API_URL}/jobs`);
    return response.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
};

// Get a specific job by ID
export const getJobById = async (jobId: number | string) => {
  try {
    const response = await axios.get(`${API_URL}/jobs/${jobId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching job:", error);
    throw error;
  }
};
