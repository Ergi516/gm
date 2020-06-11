import React, { useState } from 'react';

const Form = ({ getTracks }) => {
  const [artist, setArtist] = useState('');

  const handleChange = (e) => {
   setArtist(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    getTracks(artist);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="artist"
        aria-label="artist"
        value={artist}
        placeholder="Enter artist name"
        onChange={handleChange}
        required
       />
      <button type="submit">Get Tracks</button>
    </form>
);
};

export default Form;

