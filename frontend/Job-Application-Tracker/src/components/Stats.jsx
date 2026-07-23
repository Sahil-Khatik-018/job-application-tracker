export default function Stats({ jobs, setStatusFilter }) {

  const applied =
    jobs.filter(job => job.status.toLowerCase() === "applied").length;

const interview =
    jobs.filter(job => job.status.toLowerCase() === "interview").length;

const offer =
    jobs.filter(job => job.status.toLowerCase() === "offer").length;

const rejected =
    jobs.filter(job => job.status.toLowerCase() === "rejected").length;

  return (

    <div className="stats">

      <div className="stat-card" onClick={() => setStatusFilter("all")}>
        <h3>{jobs.length}</h3>
        <p>Total</p>
      </div>

      <div className="stat-card" onClick={() => setStatusFilter("applied")}>
        <h3>{applied}</h3>
        <p>Applied</p>
      </div>

      <div className="stat-card" onClick={() => setStatusFilter("interview")}>
        <h3>{interview}</h3>
        <p>Interview</p>
      </div>

      <div className="stat-card" onClick={() => setStatusFilter("offer")}>
        <h3>{offer}</h3>
        <p>Offer</p>
      </div>

      <div className="stat-card" onClick={() => setStatusFilter("rejected")}>
        <h3>{rejected}</h3>
        <p>Rejected</p>
      </div>

    </div>

  );

}