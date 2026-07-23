import { useState } from 'react';
import "./styles/layout.css";
import "./styles/form.css";
import "./styles/dashboard.css";
import "./styles/card.css";
import "./styles/responsive.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from './pages/Dashboard';
import AddJob from './pages/AddJob';
import ConfirmDelete from './components/ConfirmDelete';

import { deleteJob } from "./api/jobApi";
import toast from "react-hot-toast";

function App() {
  const [editingJob, setEditingJob] = useState(null);
  const [deleteJobId, setDeleteJobId] = useState(null);

  const handleDelete = async () => {
    try {
      const res = await deleteJob(deleteJobId);

      if (res.success) {
        toast.success("Job Deleted Successfully");
        setDeleteJobId(null);
        window.location.reload();

        // We'll refresh the list in the next step
      } else {
        toast.error(res.message);
      }
    } catch(err) {
      toast.error("Something went wrong")
    }
  }

  return (
    <>
    {
      deleteJobId && (
          <ConfirmDelete
              onCancel={() => setDeleteJobId(null)}
              onConfirm={handleDelete}
          />
      )
  }
      <Navbar />

      <div className="main-container">
        <div className="form-section">
        <AddJob
            editingJob={editingJob}
        />
    </div>

    <div className="dashboard-section">
        <Dashboard
            setEditingJob={setEditingJob}
            setDeleteJobId={setDeleteJobId}
        />
    </div>
      </div>

      <Footer />
    </>
  )
}

export default App
