import React, { useState } from "react";
import "./login.css"
import { Link, useNavigate } from "react-router-dom";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { auth } from "./Firebase";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signIn = e => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        navigate('/'); // Navigate to the homepage after successful sign-in
      })
      .catch(error => alert(error.message));
  }

  const register = e => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigate('/'); // Navigate to the homepage after successful registration
      })
      .catch(error => alert(error.message));
  }

  return (
    <div className="login">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="loginLogo">
          <LocalMallOutlinedIcon className="loginImage" fontSize="large" />
          <h2 className="loginImageTitle">CAMPUS MALL</h2>
        </div>
      </Link>

      <div className="loginContainer">
        <h1>SIGN IN</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

          <button type="submit" className="loginSignInButton" onClick={signIn}>SIGN IN</button>
        </form>

        <p>
          By signing in, it means you have read and agreed to the conditions and use of this 
          website. Please see our private notice, our cookies notice, and our interest-based adds 
          Notice.
        </p>

        <button className="loginRegisterButton" onClick={register}>Create your Campus Mall account</button>
      </div>
    </div>
  );
}

export default Login;
