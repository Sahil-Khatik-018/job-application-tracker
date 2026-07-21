import { deleteJob } from "../api/jobApi"

export default function JobCard({ job, setJobs, setEditingJob }) {

    async function handleDelete(id) {
        const confirmDelete = window.confirm("Are you sure you want to delete this job?");

        if(!confirmDelete) return;

        try {
            const res = await deleteJob(id);

            if(res.status) {
                alert("Deleted Successfully!");

                setJobs((prev) => 
                    prev.filter((job) => job._id !== id)
                );
            }
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div className="job-card">

        <div className="job-header">

            <div>
                <h3>{job.companyName}</h3>
                <p>{job.role}</p>
            </div>

            <span className={`status ${job.status}`}>
                {job.status}
            </span>

        </div>

        <div className="job-details">

        <div>

          <strong>📍</strong>

          <span>{job.location}</span>

        </div>

        <div>

          <strong>📅</strong>

          <span>

            {new Date(job.appliedDate).toLocaleDateString()}

          </span>

        </div>

        <div>

          <strong>⏰</strong>

          <span>

            {new Date(job.followUpDate).toLocaleDateString()}

          </span>

        </div>

      </div>

      <div className="job-actions">

        <button

          className="edit-btn"

          onClick={()=>setEditingJob(job)}

        >
          Edit
        </button>

        <button

          className="delete-btn"

          onClick={()=>handleDelete(job._id)}

        >
          Delete
        </button>

      </div>
      </div>
    );

}