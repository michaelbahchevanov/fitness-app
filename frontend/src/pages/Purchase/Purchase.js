import React from 'react';

const Purchase = ({ history }) => {
  return (
    <div>
      <h1>This is the purchase a program page</h1>
      <button onClick={() => history.push('/checkout')}>Register first</button>
    </div>
  );
};

export default Purchase;
