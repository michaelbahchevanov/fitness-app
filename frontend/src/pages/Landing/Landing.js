import React from 'react';

const Landing = ({ history }) => {
  return (
    <div>
      <h1>This is the home page</h1>
      <br />
      <button onClick={() => history.push('/program-description')}>
        A fitness programe
      </button>
    </div>
  );
};

export default Landing;
