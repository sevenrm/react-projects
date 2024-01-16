import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const jobs = [
  { id: 1, title: "Frontend Developer", company: "TechCo" },
  { id: 2, title: "UX Designer", company: "DesignHub" },
];

const JobList = ({ onSelectJob }) => {
  const navigate = useNavigate();
  const handleJobClick = useCallback(
    (jobId) => {
      const selectedJob = jobs.find((job) => job.id === jobId);
      onSelectJob(selectedJob);
      navigate(`/job/${jobId}`);
    },
    [onSelectJob]
  );

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Job Listing</h2>
      <ul className="list-group">
        {jobs.map((job) => (
          <li
            key={job.id}
            onClick={() => handleJobClick(job.id)}
            className="list-group-item list-group-item-action"
          >
            {job.title} at {job.company}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
