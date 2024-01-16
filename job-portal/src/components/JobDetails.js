import React from "react";

const JobDetails = ({ selectedJob }) => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Job Details</h2>
      {selectedJob ? (
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">{selectedJob.title}</h3>
            <p className="card-text">{selectedJob.company}</p>
          </div>
        </div>
      ) : (
        <p>Selected a job to view details</p>
      )}
    </div>
  );
};

export default JobDetails;
