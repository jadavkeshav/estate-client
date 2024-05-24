import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
  const history = useHistory();

  const goHome = () => {
    history.push('/');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="text-center">
        <h1 style={{ fontSize: '10rem', color: '#343a40' }}>404</h1>
        <p style={{ fontSize: '2rem', color: '#6c757d' }}>Page Not Found</p>
        <button onClick={goHome} className="btn btn-primary mt-3" style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}>Go Home</button>
      </div>
    </div>
  );
};

export default NotFound;
