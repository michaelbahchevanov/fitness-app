import React from 'react';

const Home = ({ history }) => {
  return (
    <div>
      <h1>This is the home page</h1>
      <br />
      <button onClick={() => history.push('/description')}>
        A fitness programe
      </button>
    </div>
  );
};

export default Home;
