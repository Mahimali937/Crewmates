import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tqqxohzevuxavnkijrpu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxcXhvaHpldnV4YXZua2lqcnB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4MTk3NTUsImV4cCI6MjAyNzM5NTc1NX0.SOgBBB1_qaHJ0elASWK3prOkdpIjoZtwM60c5zQAHJA';
const supabase = createClient(supabaseUrl, supabaseKey);

function CrewmatesList() {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    fetchCrewmates();
  }, []);

  async function fetchCrewmates() {
    try {
      const { data, error } = await supabase.from('crewmates').select('*');
      if (error) {
        throw error;
      }
      setCrewmates(data || []);
    } catch (error) {
      console.error('Error fetching crewmates:', error.message);
    }
  }

  return (
    <div>
      <Link to='/add'>Add Crewmate</Link>
      <ul>
        {crewmates.map((crewmate) => (
          <li key={crewmate.id}>
            <Link to={`/crewmate/${crewmate.id}`}>
              <img
                src='./src/assets/default.png'
                alt='Crewmate'
              />
            </Link>
            <span>{crewmate.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CrewmatesList;
