import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";

function App() {
  const [selectedJob, setSelectedJob] = useState(null);
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 text-center d-flex justify-content-center navbar-expand-lg navbar-expand-md navbar-dark">
          <Link className="navbar-brand text-light text-center" to="/">
            Job Portal
          </Link>
        </nav>
        <Routes>
          <Route
            path="/"
            exact
            element={<JobList onSelectJob={setSelectedJob} />}
          />
          <Route
            path="/jobs"
            element={<JobList onSelectJob={setSelectedJob} />}
          />
          <Route
            path="/job/:id"
            element={<JobDetails selectedJob={selectedJob} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
