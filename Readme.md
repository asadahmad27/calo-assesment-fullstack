# Calo Job Management System

## Overview

This is a fullstack project built for Calo's coding challenge. The application allows users to create jobs that retrieve random food images from Unsplash after a delayed execution. The backend manages job creation and retrieval, while the frontend provides a simple interface for job management.

## Features

- **Create a Job**: Users can create a new job that processes asynchronously and retrieves an image from Unsplash after a delay.
- **List All Jobs**: Users can view a list of all jobs with their statuses (`pending` or `resolved`) and images if resolved.
- **Job Result Retrieval**: Job results are stored in a JSON file for persistence.

## Tech Stack

- **Frontend**: React (Vite), MUI for styling, Axios for HTTP requests
- **Backend**: Node.js, Express, Axios for API calls, `fs` module for file handling
- **Data Storage**: JSON file (`jobs.json`)

## Setup Instructions

### Prerequisites

- Node.js (v14 or above)
- npm or yarn

### Backend Setup

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file (if required) and add your Unsplash API key:

   ```plaintext
   UNSPLASH_ACCESS_KEY=YOUR_ACCESS_KEY
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## Project Structure

```
project-root/
├── backend/
│   ├── controllers/
│   │   └── jobController.js
│   ├── routes/
│   │   └── jobRoutes.js
│   ├── data/
│   │   └── jobs.json
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── JobCreator.js
│   │   │   └── JobList.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   └── main.js
│   └── package.json
└── README.md
```

## API Endpoints

### POST `/api/jobs`

- **Description**: Creates a new job.
- **Response**: `{ "id": "job_id" }`

### GET `/api/jobs`

- **Description**: Returns a list of all jobs, showing their status and result if available.
- **Response**:
  ```json
  [
    {
      "id": "job_id",
      "status": "resolved",
      "result": "image_url"
    }
  ]
  ```

### GET `/api/jobs/{jobId}`

- **Description**: Returns the status or result of a specific job.
- **Response**:
  ```json
  {
    "id": "job_id",
    "status": "pending" // or "resolved"
  }
  ```

## Time Report

- **Backend Setup**: 2 hours
- **API Endpoints Development**: 3 hours
- **Frontend Development**: 3 hours
- **Integration & Testing**: 2 hours
- **Documentation**: 1 hour

## Future Improvements

- Implement a queue library like `Bull` for better job handling.
- Add authentication for secure access.
- Deploy the application on a cloud platform for production use.

## License

This project is for educational purposes and is licensed under MIT.
