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

function App() {
  const [editingJob, setEditingJob] = useState(null);
  const [deleteJobId, setDeleteJobId] = useState(null);

  return (
    <>
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
