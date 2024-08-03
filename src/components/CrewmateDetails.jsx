import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useParams, Link } from 'react-router-dom';
import './details.css';
import img from '../assets/default.png';
import Form from './form.jsx';

const supabaseUrl = 'https://tqqxohzevuxavnkijrpu.supabase.co';
const supabaseKey =
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxcXhvaHpldnV4YXZua2lqcnB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4MTk3NTUsImV4cCI6MjAyNzM5NTc1NX0.SOgBBB1_qaHJ0elASWK3prOkdpIjoZtwM60c5zQAHJA';

const supabase = createClient(supabaseUrl, supabaseKey);

function CrewmateDetails({ deleteCrewmate, updateCrewmate }) {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formName, setFormName] = useState('');
  const [formFavorite, setFormFavorite] = useState('');

  useEffect(() => {
    fetchCrewmate(id);
  }, [id]);

  async function fetchCrewmate(id) {
    const { data } = await supabase
      .from('crewmates')
      .select('*')
      .eq('id', id)
      .single();
    setCrewmate(data);
    setFormName(data?.name || '');
    setFormFavorite(data?.favorite || '');
  }

  async function handleUpdateCrewmate() {
    if (formName && formFavorite) {
      await updateCrewmate(id, formName, formFavorite);
      fetchCrewmate(id);
      setEditing(false);
    }
  }

  function handleEditClick() {
    setEditing(true);
  }

  return (
    <div className='crewmate-details'>
      <Link to='/'>Crewmates</Link>
      {editing ? (
        <Form />
      ) : (
        <div className='details'>
          {crewmate ? (
            <>
              <img
                src={img}
                alt='Crewmate'
              />
              <p>Name: {crewmate.name}</p>
              <p>Favorite: {crewmate.favorite}</p>
              <button onClick={handleEditClick}>Edit</button>
              <button onClick={() => deleteCrewmate(id)}>Delete</button>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      )}
    </div>
  );
}

export default CrewmateDetails;