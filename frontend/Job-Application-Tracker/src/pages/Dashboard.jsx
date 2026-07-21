import { useEffect, useState, useMemo } from "react";
import { getAllJobs } from "../api/jobApi";

import Stats from "../components/Stats";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCard";

export default function Dashboard({ setEditingJob }) {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchJobs() {
      const res = await getAllJobs();

      if (res.success) {
        setJobs(res.data);
      }
    }

    fetchJobs();
  }, []);

  const filteredJobs = useMemo(() => {
    return jobs.filter(
      (job) =>
        job.companyName.toLowerCase().includes(search.toLowerCase()) ||
        job.role.toLowerCase().includes(search.toLowerCase()),
    );
  }, [jobs, search]);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>

      <Stats jobs={jobs} />

      <SearchBar search={search} setSearch={setSearch} />

      <div className="job-list">
        {filteredJobs.map((job) => (
          <JobCard
            key={job._id}
            job={job}
            setJobs={setJobs}
            setEditingJob={setEditingJob}
          />
        ))}
      </div>
    </div>
  );
}
