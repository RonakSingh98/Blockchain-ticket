import React, { useEffect, useState } from 'react';
import './login.css';
import { Navigate, useNavigate } from 'react-router-dom';

export const SignUp = ({ user,setUser,setShowLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://blockchainticketing-production.up.railway.app/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name, phone }),
      });
      const data = await response.json();
      if(response.ok){
        localStorage.setItem("jwt",response.headers.get("Authorization"));
        setUser(data.data);
      }
      console.log('Signup successful:', data);
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <>
    {user && <Navigate to={"/"}></Navigate>}
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Contact No.:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <span onClick={() => setShowLogin(true)}>Log In</span></p>
    </div>
    </>
  );
};

export const Login = ({ user,setUser,setShowLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://blockchainticketing-production.up.railway.app/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("jwt",response.headers.get("Authorization"));
        setUser(data.data);
      } else {
        console.error('Login failed:', data.error);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };   
  return (
    <>
    {user && <Navigate to={"/"}></Navigate>}
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <span onClick={() => setShowLogin(false)}>Sign Up</span></p>
    </div>
    </>
  );
};

const App1 = ({user,setUser}) => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="App1">
      {showLogin ? <Login user={user} setShowLogin={setShowLogin} setUser={setUser} /> : <SignUp user={user} setShowLogin={setShowLogin} setUser={setUser} />}
    </div>
  );
};


export default App1;
