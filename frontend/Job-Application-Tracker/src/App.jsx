import AddJob from './pages/AddJob';
import JobList from './pages/JobList';
import { useState } from 'react';
import './App.css'

function App() {

  const [editingJob, setEditingJob] = useState(null);

  return (
    <>
      <AddJob editingJob={editingJob}/>
      <JobList setEditingJob={setEditingJob}/>
    </>
  )
}

export default App
