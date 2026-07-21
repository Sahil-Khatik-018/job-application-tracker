import { useEffect, useState } from "react";
import { getAllJobs, deleteJob } from "../api/jobApi";
import toast from 'react-hot-toast'

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

  const handleDelete = async (id) => {
  try {
    const res = await deleteJob(id);

    if (res.success) {
      toast.success("Job Deleted Successfully!");

      setJobs(jobs.filter((job) => job._id !== id));

    } else {
      toast.error(res.message);
    }
  } catch (err) {
    console.log(err);
    toast.error("Something went wrong");
  }
};

  return (
    <>
      <h1>All Jobs</h1>

      {jobs.map((job) => (
        <div className="job-card" key={job._id}>
          <h3>{job.companyName}</h3>
          <p><strong>Role:</strong> {job.role}</p>

          <span className={`status ${job.status.toLowerCase()}`}>
            {job.status}
          </span>
          
          <div className="btn-group">
            <button
              className="edit-btn"
              onClick={() => setEditingJob(job)}
            >
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() => handleDelete(job._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}