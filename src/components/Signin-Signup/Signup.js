import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import M from 'materialize-css';
import './Login.css'

export const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [password, setPasword] = useState('');
  const [email, setEmail] = useState('');

  const PostData = () => {
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
      M.toast({ html: 'Invalid email', classes: 'red darken-3' });
      return;
    }
    fetch('/signup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: 'red darken-3' });
        } else {
          M.toast({ html: data.message, classes: 'green darken-1' });
          navigate('/login');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form>
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPasword(e.target.value)}
        />
      </div>
      <div className="d-grid submit-button-container">
        <button type="button" className="btn btn-primary" onClick={() => PostData()}>
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered? <Link to="/login">Sign in</Link>
      </p>
    </form>
  );
};

export default SignUp;
