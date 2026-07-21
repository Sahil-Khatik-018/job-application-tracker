import { useState } from 'react';
import './App.css'

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from './pages/Dashboard';
import AddJob from './pages/AddJob';

function App() {
  const [editingJob, setEditingJob] = useState(null);

  return (
    <>
      <Navbar />

      <main className="main-container">
        <div className="dashboard-section">
          <Dashboard setEditingJob={setEditingJob} />
        </div>

        <div className="form-section">
          <AddJob editingJob={editingJob} />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
