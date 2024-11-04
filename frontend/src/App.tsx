import { useState } from "react";
import JobCreator from "./components/JobCreator";
import JobList from "./components/JobList";
import { Container, Typography, Box } from "@mui/material";

function App() {
  const [refresh, setRefresh] = useState<any>(false);

  const handleJobCreated = () => {
    setRefresh((prev: any) => !prev);
  };

  return (
    <Box
      sx={{
        background: "black",
        color: "white",
        minHeight: "100vh",
        padding: "5%",
      }}
    >
      <Container maxWidth="sm">
        <Box textAlign="center" mb={8}>
          <Typography variant="h4" component="h1" gutterBottom>
            Job Management System
          </Typography>
          <JobCreator onJobCreated={handleJobCreated} />
          <JobList key={refresh} />
        </Box>
      </Container>
    </Box>
  );
}

export default App;
