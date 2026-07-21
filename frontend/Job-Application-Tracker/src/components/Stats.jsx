export default function Stats({ jobs }) {

  const applied =
    jobs.filter(job=>job.status==="applied").length;

  const interview =
    jobs.filter(job=>job.status==="interview").length;

  const offer =
    jobs.filter(job=>job.status==="offer").length;

  const rejected =
    jobs.filter(job=>job.status==="rejected").length;

  return (

    <div className="stats">

      <div className="stat-card">
        <h3>{jobs.length}</h3>
        <p>Total</p>
      </div>

      <div className="stat-card">
        <h3>{applied}</h3>
        <p>Applied</p>
      </div>

      <div className="stat-card">
        <h3>{interview}</h3>
        <p>Interview</p>
      </div>

      <div className="stat-card">
        <h3>{offer}</h3>
        <p>Offer</p>
      </div>

      <div className="stat-card">
        <h3>{rejected}</h3>
        <p>Rejected</p>
      </div>

    </div>

  );

}