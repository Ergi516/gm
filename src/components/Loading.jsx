import React from 'react';
import img from '../loading_spinner.gif'

export const Loading = ({ loading }) => (
  <>
    {
      loading 
      && (
        <div style={{ textAlign: 'center' }}>
          <img src={img} alt='loading' />
          <h1>LOADING</h1>
        </div>
      )
    }
  </>
);


