import React from 'react';

export const Track = ({ data: {
  artistName, trackName, trackPrice, releaseDate, primaryGenreName,
}}) => (
  <div className="track" key={trackName}>
    <h4>{artistName}</h4>
    <p>
      <strong>Track:</strong> {trackName}
    </p>
    <p>
      <strong>Price:</strong> {trackPrice}
    </p>
    <p>
      <strong>Release Date:</strong> {releaseDate}
    </p>
    <p>
      <strong>Genre</strong> {primaryGenreName}
    </p>
  </div>
);