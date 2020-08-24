import React from 'react';

const Description = ({ history }) => {
  return (
    <div>
      <h1>This is the fitness programe description</h1>
      <button onClick={() => history.push('/purchase')}>Buy me</button>
    </div>
  );
};

export default Description;
