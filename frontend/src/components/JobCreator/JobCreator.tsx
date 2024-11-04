import { Button, Box } from "@mui/material";
import { createJob } from "../../utils/api";

const JobCreator = ({ onJobCreated }: { onJobCreated: () => void }) => {
  const handleCreateJob = async () => {
    try {
      const job = await createJob();
      onJobCreated(); // Refresh the job list
      alert(`Job created with ID: ${job.id}`);
    } catch (error) {
      alert("Failed to create job");
    }
  };

  return (
    <Box display="flex" justifyContent="center" my={8}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleCreateJob}
        size="large"
      >
        Create New Job
      </Button>
    </Box>
  );
};

export default JobCreator;
