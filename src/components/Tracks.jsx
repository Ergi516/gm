import React from "react";
import { Track } from './Track';

const Tracks = ({ tracks }) => {
  console.log(tracks);

  return (
    <>
      {tracks && (
        <div className="tracks">
          {tracks.length ? (
            <>
              {
                tracks.map((track) => <Track data={track}/>)
              }
            </>
          ) : (
            <p>No tracks found for this artist</p>
          )}
        </div>
      )}
    </>
  );
};

export default Tracks;
