import { useEffect, useState } from "react";
import { getAllJobs } from "../api/jobApi";

export default function JobList({ setEditingJob }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await getAllJobs();

        console.log(res);

        if(res.success) {
          setJobs(res.data)
        }
      } catch(err) {
        console.log(err)
      }
    }

    fetchJobs()
  }, []);

  return (
    <>
      <h1>All Jobs</h1>

      {jobs.map((job) => (
        <div key={job._id}>
          <h3>{job.companyName}</h3>
          <p>{job.role}</p>
          <p>{job.status}</p>
          <button onClick={() => setEditingJob(job)}>
            Edit
          </button>
          <hr />
        </div>
      ))}
    </>
  );
}