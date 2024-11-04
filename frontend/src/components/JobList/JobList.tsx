import { useEffect, useState } from "react";

import {
  List,
  ListItem,
  ListItemText,
  Avatar,
  Typography,
  Box,
} from "@mui/material";
import { getJobs } from "../../utils/api";

const JobList = () => {
  const [jobs, setJobs] = useState<any[]>([]);

  const fetchJobs = async () => {
    try {
      const data = await getJobs();
      setJobs(data);
    } catch (error) {
      //   alert("Failed to load jobs");
    }
  };

  useEffect(() => {
    fetchJobs();

    const interval = setInterval(() => {
      fetchJobs();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box my={4}>
      <Typography variant="h6" gutterBottom>
        Job List
      </Typography>
      <Box my={4} sx={{ maxHeight: "600px", overflow: "scroll" }}>
        <List>
          {jobs.map((job) => (
            <ListItem
              key={job.id}
              divider
              sx={{
                background: "gray",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            >
              <ListItemText
                primary={`Job ID: ${job.id}`}
                secondary={`Status: ${job.status}`}
                sx={{ color: job.status === "resolved" ? "white" : "red" }}
              />
              {job.status === "resolved" && job.result && (
                <Avatar
                  src={job.result}
                  alt="Job result"
                  variant="rounded"
                  sx={{ width: 60, height: 60 }}
                />
              )}
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default JobList;
