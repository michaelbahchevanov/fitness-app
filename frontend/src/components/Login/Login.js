import React from 'react';
import * as Routes from '../../constants/routes';

const Login = ({ history }) => {
  return (
    <div>
      <h1>This is the login page</h1>
      <button
        onClick={() => {
          history.push(Routes.PASSWORD_RESET);
        }}
      >
        Forgot password
      </button>
    </div>
  );
};

export default Login;
