import { useEffect, useState } from "react";
import { getAllJobs, deleteJob } from "../api/jobApi";

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
      alert("Job Deleted Successfully!");

      setJobs(jobs.filter((job) => job._id !== id));

    } else {
      alert(res.message);
    }
  } catch (err) {
    console.log(err);
    alert("Something went wrong");
  }
};

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
          </button> <br />
          <button onClick={() => handleDelete(job._id)}>
            Delete
          </button>
          <hr />
        </div>
      ))}
    </>
  );
}