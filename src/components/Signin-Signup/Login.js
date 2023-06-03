import React, { useState, useContext} from 'react'
import M from 'materialize-css'
import {UserContext} from '../../App'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
    const {state,dispatch} = useContext(UserContext)
    const navigate = useNavigate();
    const [username, setUserName] = useState('');
    const [password, setPasword] = useState('');
  
    const PostData = () => {
      fetch('/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data.error) {
            M.toast({ html: data.error, classes: 'red darken-3' });
          } else {
            localStorage.setItem("jwt",data.token)
            localStorage.setItem("user",JSON.stringify(data.user))
            dispatch({type:"USER",payload:data.user})
            M.toast({ html: "signedin success", classes: 'green darken-1' });
            navigate('/');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return (
      <form>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="username"
            className="form-control"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
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
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid submit-button-container">
          <button type="button" className="btn btn-primary"  onClick={() => PostData()}> 
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          <Link to="/signup">Don't have an account?</Link>
        </p>
      </form>
    )
  }

export default Login;
