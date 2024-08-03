import React, { useState } from 'react';

function Form({ onSubmit, initialName, initialFavorite }) {
  const [name, setName] = useState(initialName || '');
  const [favorite, setFavorite] = useState(initialFavorite || '');

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(name, favorite);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <label>
          <input
            type='radio'
            value='chocolate'
            checked={favorite === 'chocolate'}
            onChange={(e) => setFavorite(e.target.value)}
          />
          Chocolate
        </label>
        <label>
          <input
            type='radio'
            value='ice cream'
            checked={favorite === 'ice cream'}
            onChange={(e) => setFavorite(e.target.value)}
          />
          Ice Cream
        </label>
        <label>
          <input
            type='radio'
            value='apple'
            checked={favorite === 'apple'}
            onChange={(e) => setFavorite(e.target.value)}
          />
          Apple
        </label>
        <label>
          <input
            type='radio'
            value='burger'
            checked={favorite === 'burger'}
            onChange={(e) => setFavorite(e.target.value)}
          />
          Burger
        </label>
        <label>
          <input
            type='radio'
            value='fries'
            checked={favorite === 'fries'}
            onChange={(e) => setFavorite(e.target.value)}
          />
          Fries
        </label>
      </div>
      <button type='submit'>Save</button>
    </form>
  );
}

export default Form;
