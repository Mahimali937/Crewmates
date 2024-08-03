import React, { useState } from 'react';

function AddCrewmateForm({ supabase, onCrewmateAdded }) {
  const [name, setName] = useState('');
  const [favorite, setFavorite] = useState('');

  async function handleAddCrewmate() {
    if (name && favorite) {
      const { data, error } = await supabase
        .from('crewmates')
        .insert([{ name, favorite }]);

      if (error) {
        console.error('Error adding crewmate:', error);
      } else {
        setName('');
        setFavorite('');
        if (onCrewmateAdded) {
          onCrewmateAdded(data[0]);
        }
      }
    }
  }

  return (
    <form>
      <input
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <label>
          <input
            type='radio'
            value='Soccer'
            checked={favorite === 'Soccer'}
            onChange={(e) => setFavorite(e.target.value)}
          />
          Soccer
        </label>
        <label>
          <input
            type='radio'
            value='Basketball'
            checked={favorite === 'Basketball'}
            onChange={(e) => setFavorite(e.target.value)}
          />
          Basketball
        </label>
        <label>
          <input
            type='radio'
            value='Football'
            checked={favorite === 'Football'}
            onChange={(e) => setFavorite(e.target.value)}
          />
          Football
        </label>
        <label>
          <input
            type='radio'
            value='Baseball'
            checked={favorite === 'Baseball'}
            onChange={(e) => setFavorite(e.target.value)}
          />
          Baseball
        </label>
        <label>
          <input
            type='radio'
            value='Tennis'
            checked={favorite === 'Tennis'}
            onChange={(e) => setFavorite(e.target.value)}
          />
          Tennis
        </label>
      </div>
      <button
        type='button'
        onClick={handleAddCrewmate}>
        Add Crewmate
      </button>
    </form>
  );
}

export default AddCrewmateForm;