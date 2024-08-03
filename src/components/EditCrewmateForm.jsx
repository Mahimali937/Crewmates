import React from 'react';

function EditCrewmateForm({ crewmate, onSubmit }) {
  const [name, setName] = React.useState(crewmate.name);
  const [favorite, setFavorite] = React.useState(crewmate.favorite);
  function handleSubmit() {
    onSubmit(name, favorite);
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
        onClick={handleSubmit}>
        Update Crewmate
      </button>
    </form>
  );
}

export default EditCrewmateForm;