import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";


const Login = () => {
    const { loginWithRedirect, logout } = useAuth0();


    return (
      <div className="App">
        <h1> Auth0 Authentication</h1>
        <ul>
          <li>
            <button className="btn bg-primary" onClick={loginWithRedirect}>
              Log in with Google
            </button>
          </li>
          <li>
            <button className="btn bg-error" onClick={logout}>
              Log Out
            </button>
          </li>
        </ul>
      </div>
    );
}

export default Login
