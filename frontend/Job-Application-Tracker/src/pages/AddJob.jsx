import { useState } from "react";

export default function AddJob() {
  const [formData, setFormData] = useState({
    companyName: "",
    role: "",
    status: "",
    appliedDate: "",
    followUpDate: "",
    location: "",
    applicationMode: "",
    hrName: "",
    hrEmail: "",
    resumeVersion: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveJob = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>

      <form onSubmit={handleSaveJob} className="job-form">

      <h1>Add New Job</h1>

        <div className="form-row">
          <div className="form-group">
            <label>Company Name:</label>
            <input
              type="text"
              placeholder="Enter Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Role:</label>
            <input
              type="text"
              placeholder="Enter Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="status">
              Status:
            </label>
            <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="applied">Applied</option>
                <option value="interview">Interview</option>
                <option value="rejected">Rejected</option>
                <option value="offer">Offer</option>
              </select>
            
          </div>

          <div className="form-group">
            <label htmlFor="applicationMode">
              Applied Via:
            </label>
              <select
              id="applicationMode"
                name="applicationMode"
                value={formData.applicationMode}
                onChange={handleChange}
              >
                <option value="site">Company Website</option>
                <option value="linkedin">LinkedIn</option>
                <option value="indeed">Indeed</option>
                <option value="naukri">Naukri</option>
                <option value="referral">Referral</option>
                <option value="email">Email</option>
                <option value="walk-in">Walk-in</option>
                <option value="dm">Direct Message</option>
                <option value="other">Other</option>
              </select>
            
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>
              Applied Date:
              <input
                type="date"
                name="appliedDate"
                value={formData.appliedDate}
                onChange={handleChange}
                required
              />
            </label>{" "}
          </div>

          <div className="form-group">
            <label>
              Follow-up Date:
              <input
                type="date"
                name="followUpDate"
                value={formData.followUpDate}
                onChange={handleChange}
                required
              />
            </label>{" "}
          </div>
        </div>

        <label>
          Location:
          <input
            type="text"
            placeholder="Enter Location(Address)"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </label>

        <div className="form-row">
          <div className="form-group">
            <label>
              HR Name:
              <input
                type="text"
                placeholder="Enter HR Name"
                name="hrName"
                value={formData.hrName}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              HR Email:
              <input
                type="email"
                placeholder="Enter HR Email"
                name="hrEmail"
                value={formData.hrEmail}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <label>
          Resume Version:
          <input
            type="text"
            placeholder="Resume v3"
            name="resumeVersion"
            value={formData.resumeVersion}
            onChange={handleChange}
          />
        </label>

        <label>
          Notes:
          <textarea
            rows="5"
            placeholder="Notes..."
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          ></textarea>
        </label>
        <button type="submit">Save Job</button>
      </form>
    </>
  );
}
