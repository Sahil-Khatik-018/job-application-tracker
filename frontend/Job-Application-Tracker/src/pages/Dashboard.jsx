import { useEffect, useState, useMemo } from "react";
import { getAllJobs } from "../api/jobApi";

import Stats from "../components/Stats";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCard";

export default function Dashboard({
  setEditingJob,
  setDeleteJobId,
}) {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  async function fetchJobs() {
    try {
      setLoading(true);

      const res = await getAllJobs();

      if (res.success) {
        setJobs(res.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  fetchJobs();
}, []);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.companyName
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        job.role
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "all" ||
        job.status.toLowerCase() === statusFilter;


      return matchesSearch && matchesStatus;
    });
  }, [jobs, search, statusFilter]);

  if (loading) {
    return (
        <div className="loading-container">
            <div className="loader"></div>
            <p>Loading Jobs...</p>
        </div>
    );
  }

  return (
    <div className="dashboard">
      <h2>Job Tracker Admin</h2>
      <h3>Manage and monitor all your job applications.</h3>
      <br />
      <Stats
        jobs={jobs}
        setStatusFilter={setStatusFilter}
      />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="job-list">
        {filteredJobs.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📂</div>

            <h2>No Jobs Found</h2>

            <p>
              Try another search or add your first job application.
            </p>
          </div>
        ) : (
          filteredJobs.map((job) => (
            <JobCard
              key={job._id}
              job={job}
              setJobs={setJobs}
              setEditingJob={setEditingJob}
              setDeleteJobId={setDeleteJobId}
            />
          ))
        )}
      </div>
    </div>
  );
}