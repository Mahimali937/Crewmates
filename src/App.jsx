import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Details from './components/Details';
import './App.css';
import AddCrewmateForm from './components/AddCrewmateForm';
import CrewmatesList from './components/CrewmatesList';

const supabaseUrl = 'https://tqqxohzevuxavnkijrpu.supabase.co';
const supabaseKey =
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxcXhvaHpldnV4YXZua2lqcnB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4MTk3NTUsImV4cCI6MjAyNzM5NTc1NX0.SOgBBB1_qaHJ0elASWK3prOkdpIjoZtwM60c5zQAHJA'
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [crewmates, setCrewmates] = useState([]);

  async function deleteCrewmate(id) {
    await supabase.from('crewmates').delete().eq('id', id);
  }

  useEffect(() => {
    fetchCrewmates();
  }, []);

  async function fetchCrewmates() {
    const { data: crewmates } = await supabase.from('crewmates').select('*');
    setCrewmates(crewmates);
  }

  return (
    <Router>
      <div className='App'>
        <div className='top'>
          <h1>
            <Link to='/'>Crewmates</Link>
          </h1>
        </div>
        <Routes>
          <Route
            path='/'
            element={<CrewmatesList crewmates={crewmates} />}
            index
          />
          <Route
            path='/add'
            element={<AddCrewmateForm supabase={supabase} />}
          />
          <Route
            path='/crewmate/:id'
            element={
              <Details
                supabase={supabase}
                deleteCrewmate={deleteCrewmate}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;